import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useGesture } from "@use-gesture/react";
import { useLanguage } from "../i18n/useLanguage";
import ConstellationCanvas, { type Anchor, type SceneId } from "./ConstellationCanvas";
import Reticle from "./Reticle";
import SectionPage from "./SectionPage";
import { getIdentity, getRadialKeywords, getSectionNodes } from "./content";
import "../styles/Constellation.css";

const ORDER: SceneId[] = ["main", "about"];

export default function Experience() {
  const { lang, setLang } = useLanguage();
  const [scene, setScene] = useState<SceneId>("main");
  const [page, setPage] = useState<string | null>(null);
  const [sound, setSound] = useState(false);
  const [warping, setWarping] = useState(false);

  const pointerRef = useRef({ x: 0, y: 0 });
  const dragRef = useRef({ x: 0, y: 0 });
  const orbitBase = useRef({ x: 0, y: 0 });
  const zoomRef = useRef(1);
  const hoverRef = useRef<string | null>(null);
  const labelEls = useRef<Map<string, HTMLElement | null>>(new Map());
  const wheelLock = useRef(0);
  const warpTimer = useRef(0);

  const keywords = useMemo(() => getRadialKeywords(lang), [lang]);
  const sections = useMemo(() => getSectionNodes(lang), [lang]);
  const identity = useMemo(() => getIdentity(lang), [lang]);

  const anchors: Anchor[] = useMemo(() => {
    if (scene === "main") {
      return keywords.map((k, i) => ({
        id: `kw-${i}`,
        strong: k.strong,
        position: [
          Math.cos(k.angle) * k.radius,
          Math.sin(k.angle) * k.radius * 0.78,
          k.depth,
        ] as [number, number, number],
      }));
    }
    if (scene === "about") {
      return sections.map((s) => ({ id: s.id, position: s.position }));
    }
    return [];
  }, [scene, keywords, sections]);

  const triggerWarp = useCallback(() => {
    setWarping(true);
    window.clearTimeout(warpTimer.current);
    warpTimer.current = window.setTimeout(() => setWarping(false), 460);
  }, []);

  const goScene = useCallback(
    (next: SceneId) => {
      setScene((cur) => {
        if (cur !== next) triggerWarp();
        return next;
      });
      setPage(null);
    },
    [triggerWarp],
  );

  const step = useCallback(
    (dir: 1 | -1) => {
      setScene((cur) => {
        const idx = ORDER.indexOf(cur);
        const next = ORDER[Math.min(ORDER.length - 1, Math.max(0, idx + dir))];
        if (next !== cur) triggerWarp();
        return next;
      });
    },
    [triggerWarp],
  );

  useEffect(() => {
    if (scene !== "about") {
      dragRef.current = { x: 0, y: 0 };
      orbitBase.current = { x: 0, y: 0 };
      zoomRef.current = 1;
    }
  }, [scene]);

  useEffect(() => () => window.clearTimeout(warpTimer.current), []);

  const playBlip = useCallback(() => {
    if (!sound) return;
    try {
      const Ctx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;
      const ctx = new Ctx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.value = 520;
      gain.gain.value = 0.04;
      osc.connect(gain).connect(ctx.destination);
      osc.start();
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.14);
      osc.stop(ctx.currentTime + 0.16);
      osc.onended = () => ctx.close();
    } catch {
      void 0;
    }
  }, [sound]);

  const openPage = useCallback(
    (id: string) => {
      playBlip();
      setPage(id);
    },
    [playBlip],
  );

  useEffect(() => {
    const onPointer = (e: PointerEvent) => {
      pointerRef.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      };
    };
    window.addEventListener("pointermove", onPointer);
    return () => window.removeEventListener("pointermove", onPointer);
  }, []);

  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (page) return;

      if (scene === "about") {
        const dir = e.deltaY > 0 ? 1 : -1;
        const next = zoomRef.current + dir * 0.09;
        if (next > 1.8) {
          const now = performance.now();
          if (now - wheelLock.current > 800) {
            wheelLock.current = now;
            zoomRef.current = 1;
            step(-1);
          }
          return;
        }
        zoomRef.current = clamp(next, 0.5, 1.8);
        return;
      }

      const now = performance.now();
      if (now - wheelLock.current < 900) return;
      if (Math.abs(e.deltaY) < 24) return;
      wheelLock.current = now;
      step(e.deltaY > 0 ? 1 : -1);
    };
    window.addEventListener("wheel", onWheel, { passive: true });
    return () => window.removeEventListener("wheel", onWheel);
  }, [page, scene, step]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && page) setPage(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [page]);

  const bindGesture = useGesture(
    {
      onDrag: ({ movement: [mx, my], first, last, pinching }) => {
        if (page || pinching) return;
        if (first) orbitBase.current = { ...dragRef.current };

        const freeOrbit = scene === "about";
        let x = orbitBase.current.x + mx * (freeOrbit ? 0.008 : 0.005);
        const y = clamp(orbitBase.current.y - my * 0.004, -0.85, 0.85);
        if (!freeOrbit) x = clamp(x, -0.7, 0.7);
        dragRef.current = { x, y };

        if (last && !freeOrbit) dragRef.current = { x: 0, y: 0 };
      },
      onPinch: ({ offset: [s] }) => {
        if (page || scene !== "about") return;
        zoomRef.current = clamp(1 / s, 0.5, 1.8);
      },
    },
    { drag: { filterTaps: true }, pinch: { scaleBounds: { min: 0.55, max: 2 } } },
  );

  const de = lang === "de";
  const surface = page || scene === "main" ? "light" : "dark";
  const roleLine = "Frontend Developer · Vaihingen an der Enz";
  const hint =
    scene === "main"
      ? de
        ? "SCROLLEN ZU ÜBER MICH ↓"
        : "SCROLL TO ABOUT ↓"
      : de
        ? "SCROLLEN ODER ZIEHEN · KNOTEN ANKLICKEN"
        : "SCROLL OR DRAG · CLICK A NODE";

  return (
    <div className="experience-root" data-scene={scene} data-surface={surface}>
      <Reticle />

      <div
        className={`experience scene-${scene} ${page ? "is-dived" : ""} ${
          warping ? "is-warping" : ""
        }`}
        {...bindGesture()}
      >
        <ConstellationCanvas
          scene={scene}
          anchors={anchors}
          pointerRef={pointerRef}
          dragRef={dragRef}
          zoomRef={zoomRef}
          hoverRef={hoverRef}
          labelEls={labelEls}
        />

        {scene === "main" && (
          <button
            className="identity"
            data-hover
            onClick={() => {
              playBlip();
              goScene("about");
            }}
            aria-label={de ? "Weiter zu Über mich" : "Continue to About"}
          >
            <span className="identity-name">{identity.name}</span>
            <span className="identity-node" aria-hidden="true" />
          </button>
        )}

        <div className="label-layer">
          {scene === "main" &&
            keywords.map((k, i) => (
              <span
                key={`kw-${i}`}
                ref={(el) => {
                  labelEls.current.set(`kw-${i}`, el);
                }}
                className={`kw-label ${k.strong ? "strong" : "faint"}`}
                onMouseEnter={() => {
                  hoverRef.current = `kw-${i}`;
                }}
                onMouseLeave={() => {
                  hoverRef.current = null;
                }}
              >
                <span className="glow-text">{k.label}</span>
              </span>
            ))}

          {scene === "about" &&
            sections.map((s) => (
              <button
                key={s.id}
                ref={(el) => {
                  labelEls.current.set(s.id, el);
                }}
                className="section-label"
                style={{ fontSize: `${0.72 + s.scale * 0.5}rem` }}
                onClick={() => openPage(s.id)}
                onMouseEnter={() => {
                  hoverRef.current = s.id;
                }}
                onMouseLeave={() => {
                  hoverRef.current = null;
                }}
              >
                <span className="glow-text">{s.label}</span>
              </button>
            ))}
        </div>

        <header className="chrome-top">
          <button className="wordmark" onClick={() => goScene("main")}>
            <span className="glow-text">JASON BAY</span>
          </button>
          <nav className="chrome-nav">
            <button
              className={scene === "about" && !page ? "active" : ""}
              onClick={() => {
                playBlip();
                goScene("about");
              }}
            >
              <span className="glow-text">{de ? "ÜBER MICH" : "ABOUT ME"}</span>
            </button>
            <button
              className={page === "work" ? "active" : ""}
              onClick={() => openPage("work")}
            >
              <span className="glow-text">PORTFOLIO</span>
            </button>
          </nav>
        </header>

        <div className="chrome-bottom">
          <span className="role-line">{roleLine}</span>
          <span className="hint-line">{hint}</span>
          <span className="scene-index">
            {String(ORDER.indexOf(scene) + 1).padStart(2, "0")} / 0{ORDER.length}
          </span>
        </div>
      </div>

      <div className="global-meta">
        <button
          className={page === "contact" ? "active" : ""}
          onClick={() => openPage("contact")}
        >
          <span className="glow-text">{de ? "KONTAKT" : "CONTACT"}</span>
        </button>
        <span className="lang-switch">
          <button className={de ? "active" : ""} onClick={() => setLang("de")}>
            DE
          </button>
          <span>/</span>
          <button className={!de ? "active" : ""} onClick={() => setLang("en")}>
            EN
          </button>
        </span>
        <button className="sound-toggle" onClick={() => setSound((s) => !s)}>
          SOUND {sound ? "ON" : "OFF"}
        </button>
      </div>

      {page && <SectionPage id={page} onBack={() => setPage(null)} />}
    </div>
  );
}

function clamp(v: number, min: number, max: number) {
  return Math.min(max, Math.max(min, v));
}
