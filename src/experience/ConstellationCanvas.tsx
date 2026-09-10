import { useEffect, useRef } from "react";
import * as THREE from "three";

export type SceneId = "main" | "about" | "portfolio";

export interface Anchor {
  id: string;
  position: [number, number, number];
  strong?: boolean;
}

interface Props {
  scene: SceneId;
  anchors: Anchor[];
  pointerRef: React.MutableRefObject<{ x: number; y: number }>;
  dragRef: React.MutableRefObject<{ x: number; y: number }>;
  labelEls: React.MutableRefObject<Map<string, HTMLElement | null>>;
}

const BG: Record<SceneId, string> = {
  main: "#e7e5e1",
  about: "#080808",
  portfolio: "#101012",
};

const CAM_Z: Record<SceneId, number> = {
  main: 13,
  about: 11,
  portfolio: 15,
};

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

export default function ConstellationCanvas({
  scene,
  anchors,
  pointerRef,
  dragRef,
  labelEls,
}: Props) {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneIdRef = useRef<SceneId>(scene);
  const anchorsRef = useRef<Anchor[]>(anchors);

  useEffect(() => {
    sceneIdRef.current = scene;
  }, [scene]);
  useEffect(() => {
    anchorsRef.current = anchors;
  }, [anchors]);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const scene3 = new THREE.Scene();
    const bgColor = new THREE.Color(BG.main);
    scene3.background = bgColor;
    scene3.fog = new THREE.FogExp2(BG.about, 0.02);

    const camera = new THREE.PerspectiveCamera(
      52,
      mount.clientWidth / mount.clientHeight,
      0.1,
      200,
    );
    camera.position.set(0, 0, CAM_Z.main);

    const world = new THREE.Group();
    scene3.add(world);

    // ---- starfield ----
    const STAR_COUNT = 1600;
    const starPos = new Float32Array(STAR_COUNT * 3);
    for (let i = 0; i < STAR_COUNT; i++) {
      const r = 12 + Math.random() * 46;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      starPos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      starPos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      starPos[i * 3 + 2] = r * Math.cos(phi);
    }
    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute("position", new THREE.BufferAttribute(starPos, 3));
    const starMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.05,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0,
      depthWrite: false,
    });
    const stars = new THREE.Points(starGeo, starMat);
    world.add(stars);

    // ---- network lines (about scene) ----
    const NET_COUNT = 200;
    const netPoints: THREE.Vector3[] = [];
    for (let i = 0; i < NET_COUNT; i++) {
      netPoints.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 26,
          (Math.random() - 0.5) * 16,
          (Math.random() - 0.5) * 22,
        ),
      );
    }
    const linePositions: number[] = [];
    for (let i = 0; i < NET_COUNT; i++) {
      let linked = 0;
      for (let j = i + 1; j < NET_COUNT && linked < 3; j++) {
        if (netPoints[i].distanceTo(netPoints[j]) < 4.6) {
          linePositions.push(
            netPoints[i].x, netPoints[i].y, netPoints[i].z,
            netPoints[j].x, netPoints[j].y, netPoints[j].z,
          );
          linked++;
        }
      }
    }
    const netGeo = new THREE.BufferGeometry();
    netGeo.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(linePositions, 3),
    );
    const netMat = new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0,
      depthWrite: false,
    });
    const network = new THREE.LineSegments(netGeo, netMat);
    world.add(network);

    const netNodeGeo = new THREE.BufferGeometry();
    netNodeGeo.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(
        netPoints.flatMap((p) => [p.x, p.y, p.z]),
        3,
      ),
    );
    const netNodeMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.08,
      transparent: true,
      opacity: 0,
      depthWrite: false,
    });
    const netNodes = new THREE.Points(netNodeGeo, netNodeMat);
    world.add(netNodes);

    // ---- radial spokes (main scene) ----
    const radialGroup = new THREE.Group();
    world.add(radialGroup);

    const coreGeo = new THREE.BoxGeometry(0.2, 0.2, 0.2);
    const coreMat = new THREE.MeshBasicMaterial({ color: 0x0a0a0a });
    const core = new THREE.Mesh(coreGeo, coreMat);
    radialGroup.add(core);

    const spokeMat = new THREE.LineBasicMaterial({
      color: 0x151515,
      transparent: true,
      opacity: 0.55,
    });

    const rebuildSpokes = () => {
      for (let i = radialGroup.children.length - 1; i >= 0; i--) {
        const c = radialGroup.children[i];
        if (c !== core) {
          radialGroup.remove(c);
          if (c instanceof THREE.Line) c.geometry.dispose();
        }
      }
      const pts: number[] = [];
      anchorsRef.current.forEach((a) => {
        pts.push(0, 0, 0, a.position[0], a.position[1], a.position[2]);
      });
      const g = new THREE.BufferGeometry();
      g.setAttribute("position", new THREE.Float32BufferAttribute(pts, 3));
      const seg = new THREE.LineSegments(g, spokeMat);
      radialGroup.add(seg);
    };
    rebuildSpokes();
    let lastAnchorRef = anchorsRef.current;

    // ---- interaction / animation ----
    const clock = new THREE.Clock();
    let frame = 0;
    const dragCurrent = { x: 0, y: 0 };
    const tmp = new THREE.Vector3();

    const targetColor = new THREE.Color();
    let blendZ = CAM_Z.main;

    const render = () => {
      frame = requestAnimationFrame(render);
      const t = clock.getElapsedTime();
      const id = sceneIdRef.current;

      if (anchorsRef.current !== lastAnchorRef) {
        rebuildSpokes();
        lastAnchorRef = anchorsRef.current;
      }

      // background + camera ease
      targetColor.set(BG[id]);
      bgColor.lerp(targetColor, 0.05);
      if (scene3.fog instanceof THREE.FogExp2) {
        scene3.fog.color.copy(bgColor);
        scene3.fog.density = lerp(
          scene3.fog.density,
          id === "main" ? 0.008 : 0.026,
          0.05,
        );
      }
      blendZ = lerp(blendZ, CAM_Z[id], 0.05);

      // opacities per scene
      const starTarget = id === "main" ? 0.0 : 0.9;
      starMat.opacity = lerp(starMat.opacity, starTarget, 0.06);
      netNodeMat.opacity = lerp(netNodeMat.opacity, starTarget * 0.7, 0.06);
      netMat.opacity = lerp(
        netMat.opacity,
        id === "about" ? 0.12 : id === "portfolio" ? 0.04 : 0,
        0.06,
      );
      radialGroup.visible = spokeMat.opacity > 0.02;
      spokeMat.opacity = lerp(
        spokeMat.opacity,
        id === "main" ? 0.5 : 0,
        0.08,
      );
      (core.material as THREE.MeshBasicMaterial).opacity = spokeMat.opacity;
      (core.material as THREE.MeshBasicMaterial).transparent = true;
      core.visible = radialGroup.visible;

      // pointer + drag rotation
      const p = pointerRef.current;
      const d = dragRef.current;
      dragCurrent.x = lerp(dragCurrent.x, d.x, 0.08);
      dragCurrent.y = lerp(dragCurrent.y, d.y, 0.08);
      const targetRotY = p.x * 0.25 + dragCurrent.x;
      const targetRotX = -p.y * 0.18 + dragCurrent.y;
      world.rotation.y = lerp(world.rotation.y, targetRotY, 0.06);
      world.rotation.x = lerp(world.rotation.x, targetRotX, 0.06);

      camera.position.z = blendZ;
      camera.position.x = lerp(camera.position.x, p.x * 0.6, 0.05);
      camera.position.y = lerp(camera.position.y, -p.y * 0.4, 0.05);
      camera.lookAt(0, 0, 0);

      stars.rotation.y = t * 0.01;
      network.rotation.y = t * 0.014;
      netNodes.rotation.y = t * 0.014;
      core.rotation.y = t * 0.4;
      core.rotation.x = t * 0.25;

      // project label anchors to screen
      const w = renderer.domElement.clientWidth;
      const h = renderer.domElement.clientHeight;
      anchorsRef.current.forEach((a) => {
        const el = labelEls.current.get(a.id);
        if (!el) return;
        tmp.set(a.position[0], a.position[1], a.position[2]);
        tmp.applyMatrix4(world.matrixWorld);
        const dist = camera.position.distanceTo(tmp);
        tmp.project(camera);
        const behind = tmp.z > 1;
        const x = (tmp.x * 0.5 + 0.5) * w;
        const y = (-tmp.y * 0.5 + 0.5) * h;
        el.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
        const fade = THREE.MathUtils.clamp(1 - (dist - 6) / 22, 0.12, 1);
        el.style.opacity = behind ? "0" : String(fade);
        el.style.pointerEvents = behind || fade < 0.3 ? "none" : "auto";
      });

      renderer.render(scene3, camera);
    };
    render();

    const onResize = () => {
      const width = mount.clientWidth;
      const height = mount.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      starGeo.dispose();
      starMat.dispose();
      netGeo.dispose();
      netMat.dispose();
      netNodeGeo.dispose();
      netNodeMat.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      spokeMat.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, [pointerRef, dragRef, labelEls]);

  return <div className="constellation-canvas" ref={mountRef} aria-hidden="true" />;
}
