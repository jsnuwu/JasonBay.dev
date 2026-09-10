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
  zoomRef: React.MutableRefObject<number>;
  hoverRef: React.MutableRefObject<string | null>;
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
  zoomRef,
  hoverRef,
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
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
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

    const radialGroup = new THREE.Group();
    world.add(radialGroup);

    const spokeMat = new THREE.LineBasicMaterial({
      color: 0x1a1a1a,
      transparent: true,
      opacity: 0.35,
    });

    let spokeSeg: THREE.LineSegments | null = null;

    const rebuildSpokes = () => {
      for (let i = radialGroup.children.length - 1; i >= 0; i--) {
        const c = radialGroup.children[i];
        radialGroup.remove(c);
        if (c instanceof THREE.Line) c.geometry.dispose();
      }
      const pts: number[] = [];
      anchorsRef.current.forEach((a) => {
        pts.push(0, 0, 0, a.position[0], a.position[1], a.position[2]);
      });
      const g = new THREE.BufferGeometry();
      g.setAttribute("position", new THREE.Float32BufferAttribute(pts, 3));
      spokeSeg = new THREE.LineSegments(g, spokeMat);
      radialGroup.add(spokeSeg);
    };
    rebuildSpokes();
    let lastAnchorRef = anchorsRef.current;

    const raycaster = new THREE.Raycaster();
    raycaster.params.Line = { threshold: 0.4 };
    const ndc = new THREE.Vector2();
    let lineHoverId: string | null = null;
    let pointerSeen = false;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const markPointer = (e: PointerEvent) => {
      if (e.pointerType === "mouse") pointerSeen = true;
    };
    window.addEventListener("pointermove", markPointer, { passive: true });

    const HOVER_SEGS = 4;
    const hoverWebArr = new Float32Array(HOVER_SEGS * 2 * 3);
    const hoverWebGeo = new THREE.BufferGeometry();
    hoverWebGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(hoverWebArr, 3),
    );
    const hoverWebMat = new THREE.LineBasicMaterial({
      color: new THREE.Color("#ffffff"),
      transparent: true,
      opacity: 0,
      depthWrite: false,
    });
    const hoverWeb = new THREE.LineSegments(hoverWebGeo, hoverWebMat);
    hoverWeb.frustumCulled = false;
    hoverWeb.renderOrder = 8;
    world.add(hoverWeb);
    let hoverWebId: string | null = null;

    const buildHoverWeb = (id: string | null) => {
      const list = anchorsRef.current;
      const target = id ? list.find((a) => a.id === id) : undefined;
      if (!target) return;
      const [tx, ty, tz] = target.position;
      const sibs = list
        .filter((a) => a.id !== id)
        .map((a) => {
          const dx = a.position[0] - tx;
          const dy = a.position[1] - ty;
          const dz = a.position[2] - tz;
          return { a, d: dx * dx + dy * dy + dz * dz };
        })
        .sort((p, q) => p.d - q.d)
        .slice(0, HOVER_SEGS - 1)
        .map((p) => p.a);

      hoverWebArr.fill(0);
      hoverWebArr[3] = tx;
      hoverWebArr[4] = ty;
      hoverWebArr[5] = tz;
      sibs.forEach((s, i) => {
        const o = (i + 1) * 6;
        hoverWebArr[o] = tx;
        hoverWebArr[o + 1] = ty;
        hoverWebArr[o + 2] = tz;
        hoverWebArr[o + 3] = s.position[0];
        hoverWebArr[o + 4] = s.position[1];
        hoverWebArr[o + 5] = s.position[2];
      });
      hoverWebGeo.attributes.position.needsUpdate = true;
      hoverWebGeo.setDrawRange(0, (sibs.length + 1) * 2);
    };

    const clock = new THREE.Clock();
    let frame = 0;
    const dragCurrent = { x: 0, y: 0 };
    const tmp = new THREE.Vector3();

    const targetColor = new THREE.Color();
    let blendZ = CAM_Z.main;
    let zoomCur = 1;

    const render = () => {
      frame = requestAnimationFrame(render);
      const t = clock.getElapsedTime();
      const id = sceneIdRef.current;

      if (anchorsRef.current !== lastAnchorRef) {
        rebuildSpokes();
        lastAnchorRef = anchorsRef.current;
      }

      targetColor.set(BG[id]);
      bgColor.lerp(targetColor, 0.04);
      if (scene3.fog instanceof THREE.FogExp2) {
        scene3.fog.color.copy(bgColor);
        scene3.fog.density = lerp(
          scene3.fog.density,
          id === "main" ? 0.008 : 0.026,
          0.04,
        );
      }
      blendZ = lerp(blendZ, CAM_Z[id], 0.04);

      const starTarget = id === "main" ? 0.0 : 0.9;
      starMat.opacity = lerp(starMat.opacity, starTarget, 0.045);
      netNodeMat.opacity = lerp(netNodeMat.opacity, starTarget * 0.7, 0.045);
      netMat.opacity = lerp(
        netMat.opacity,
        id === "about" ? 0.12 : id === "portfolio" ? 0.04 : 0,
        0.045,
      );
      spokeMat.opacity = lerp(spokeMat.opacity, id === "main" ? 0.35 : 0, 0.06);

      const p = pointerRef.current;

      lineHoverId = null;
      if (id === "main" && spokeSeg && pointerSeen && finePointer && !hoverRef.current) {
        ndc.set(p.x, -p.y);
        raycaster.setFromCamera(ndc, camera);
        const hits = raycaster.intersectObject(spokeSeg, false);
        if (hits.length && hits[0].index != null) {
          const seg = Math.floor(hits[0].index / 2);
          lineHoverId = anchorsRef.current[seg]?.id ?? null;
        }
      }
      const active = hoverRef.current ?? lineHoverId;

      if (active !== hoverWebId) {
        hoverWebId = active;
        if (active) buildHoverWeb(active);
      }
      hoverWebMat.color.set(id === "main" ? "#141414" : "#ffffff");
      hoverWebMat.opacity = lerp(hoverWebMat.opacity, active ? 0.9 : 0, 0.16);
      hoverWeb.visible = hoverWebMat.opacity > 0.02;
      radialGroup.visible = spokeMat.opacity > 0.02;

      const d = dragRef.current;
      const pYaw = id === "about" ? 0.05 : 0.25;
      const pPitch = id === "about" ? 0.04 : 0.18;
      dragCurrent.x = lerp(dragCurrent.x, d.x, 0.09);
      dragCurrent.y = lerp(dragCurrent.y, d.y, 0.09);
      const targetRotY = p.x * pYaw + dragCurrent.x;
      const targetRotX = -p.y * pPitch + dragCurrent.y;
      world.rotation.y = lerp(world.rotation.y, targetRotY, 0.08);
      world.rotation.x = lerp(world.rotation.x, targetRotX, 0.08);

      zoomCur = lerp(zoomCur, zoomRef.current, 0.1);
      const fit = THREE.MathUtils.clamp(1.05 / camera.aspect, 1, 1.35);
      camera.position.z = blendZ * zoomCur * fit;
      camera.position.x = lerp(camera.position.x, p.x * 0.6, 0.05);

      const targetWorldScale = THREE.MathUtils.clamp(
        0.4 + camera.aspect * 0.42,
        0.56,
        1,
      );
      world.scale.setScalar(lerp(world.scale.x, targetWorldScale, 0.1));
      camera.position.y = lerp(camera.position.y, -p.y * 0.4, 0.05);
      camera.lookAt(0, 0, 0);

      stars.rotation.y = t * 0.01;
      network.rotation.y = t * 0.014;
      netNodes.rotation.y = t * 0.014;

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
        const rawX = (tmp.x * 0.5 + 0.5) * w;
        const rawY = (-tmp.y * 0.5 + 0.5) * h;
        const x = THREE.MathUtils.clamp(rawX, 12, w - 12);
        const y = THREE.MathUtils.clamp(rawY, 56, h - 56);
        const ax = x < w * 0.36 ? "0%" : x > w * 0.64 ? "-100%" : "-50%";
        el.style.transform = `translate(${ax}, -50%) translate(${x}px, ${y}px)`;
        const fade = THREE.MathUtils.clamp(1 - (dist - 6) / 22, 0.12, 1);
        el.style.opacity = behind ? "0" : String(fade);
        el.style.pointerEvents = behind || fade < 0.3 ? "none" : "auto";
        el.classList.toggle("is-lit", !behind && a.id === active);
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
      window.removeEventListener("pointermove", markPointer);
      renderer.dispose();
      starGeo.dispose();
      starMat.dispose();
      netGeo.dispose();
      netMat.dispose();
      netNodeGeo.dispose();
      netNodeMat.dispose();
      hoverWebGeo.dispose();
      hoverWebMat.dispose();
      spokeMat.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, [pointerRef, dragRef, zoomRef, hoverRef, labelEls]);

  return <div className="constellation-canvas" ref={mountRef} aria-hidden="true" />;
}
