import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useDrag } from "@use-gesture/react";
import { useLanguage } from "../i18n/useLanguage";
import ConstellationCanvas, { type Anchor, type SceneId } from "./ConstellationCanvas";
import Reticle from "./Reticle";
import SectionPage from "./SectionPage";
import {
  EMAIL,
  getIdentity,
  getProjects,
  getRadialKeywords,
  getSectionNodes,
} from "./content";
import "../styles/Constellation.css";

const ORDER: SceneId[] = ["main", "about", "portfolio"];

export default function Experience() {
  const { lang, setLang } = useLanguage();
  const [scene, setScene] = useState<SceneId>("main");
  const [page, setPage] = useState<string | null>(null);
  const [sound, setSound] = useState(false);

  const pointerRef = useRef({ x: 0, y: 0 });
  const dragRef = useRef({ x: 0, y: 0 });
  const labelEls = useRef<Map<string, HTMLElement | null>>(new Map());
  const wheelLock = useRef(0);

  const keywords = useMemo(() => getRadialKeywords(lang), [lang]);
  const sections = useMemo(() => getSectionNodes(lang), [lang]);
  const identity = useMemo(() => getIdentity(lang), [lang]);
  const projects = useMemo(() => getProjects(), []);

  const anchors: Anchor[] = useMemo(() => {
    if (scene === "main") {
      return keywords.map((k, i) => ({
        id: `kw-${i}`,
        strong: k.strong,
        position: [
          Math.cos(k.angle) * k.radius,
          Math.sin(k.angle) * k.radius * 0.7,
          k.depth,
        ] as [number, number, number],
      }));
    }
    if (scene === "about") {
      return sections.map((s) => ({ id: s.id, position: s.position }));
    }
    return [];
  }, [scene, keywords, sections]);

  const goScene = useCallback((next: SceneId) => {
    setScene(next);
    setPage(null);
  }, []);

  const step = useCallback((dir: 1 | -1) => {
    setScene((cur) => {
      const idx = ORDER.indexOf(cur);
      const next = Math.min(ORDER.length - 1, Math.max(0, idx + dir));
      return ORDER[next];
    });
  }, []);

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
      const now = performance.now();
      if (now - wheelLock.current < 900) return;
      if (Math.abs(e.deltaY) < 24) return;
      wheelLock.current = now;
      step(e.deltaY > 0 ? 1 : -1);
    };
    window.addEventListener("wheel", onWheel, { passive: true });
    return () => window.removeEventListener("wheel", onWheel);
  }, [page, step]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && page) setPage(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [page]);

  const bindDrag = useDrag(({ movement: [mx, my], down, last }) => {
    if (page) return;
    if (down) {
      dragRef.current = {
        x: clamp(mx * 0.0016, -0.7, 0.7),
        y: clamp(-my * 0.0016, -0.5, 0.5),
      };
    }
    if (last) dragRef.current = { x: 0, y: 0 };
  });

  const de = lang === "de";
  const roleLine = de
    ? "Software Engineer & Video Editor — Deutschland"
    : "Software Engineer & Video Editor — Germany";
  const hint =
    scene === "main"
      ? de
        ? "SCROLLEN ZU ÜBER MICH ↓"
        : "SCROLL TO ABOUT ↓"
      : de
        ? "SCROLLEN ODER ZIEHEN — KNOTEN ANKLICKEN"
        : "SCROLL OR DRAG — CLICK A NODE";

  return (
    <div className="experience-root">
      <Reticle />

      <div
        className={`experience ${page ? "is-dived" : ""}`}
        {...bindDrag()}
      >
        <ConstellationCanvas
          scene={scene}
          anchors={anchors}
          pointerRef={pointerRef}
          dragRef={dragRef}
          labelEls={labelEls}
        />

        {scene === "main" && (
          <div className="identity">
            <span className="identity-name">{identity.name}</span>
            <span className="identity-rule" />
            <span className="identity-tag">{identity.tagline}</span>
          </div>
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
              >
                {k.label}
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
              >
                {s.label}
              </button>
            ))}
        </div>

        <header className="chrome-top">
          <button className="wordmark" onClick={() => goScene("main")}>
            JASON BAY
          </button>
          <nav className="chrome-nav">
            <button
              className={scene === "about" ? "active" : ""}
              onClick={() => {
                playBlip();
                goScene("about");
              }}
            >
              {de ? "ÜBER MICH" : "ABOUT ME"}
            </button>
            <button
              className={scene === "portfolio" ? "active" : ""}
              onClick={() => {
                playBlip();
                goScene("portfolio");
              }}
            >
              PORTFOLIO
            </button>
          </nav>
          <div className="chrome-meta">
            <a href={`mailto:${EMAIL}`}>{de ? "KONTAKT" : "CONTACT"}</a>
            <span className="lang-switch">
              <button className={de ? "active" : ""} onClick={() => setLang("de")}>
                DE
              </button>
              <span>—</span>
              <button className={!de ? "active" : ""} onClick={() => setLang("en")}>
                EN
              </button>
            </span>
            <button className="sound-toggle" onClick={() => setSound((s) => !s)}>
              SOUND — {sound ? "ON" : "OFF"}
            </button>
          </div>
        </header>

        <div className="chrome-bottom">
          <span className="role-line">{roleLine}</span>
          <span className="hint-line">{hint}</span>
          <span className="scene-index">
            {String(ORDER.indexOf(scene) + 1).padStart(2, "0")} / 0{ORDER.length}
          </span>
        </div>

        {scene === "portfolio" && (
          <section className="panel portfolio-panel">
            <div className="panel-head">
              <span>{de ? "AUSGEWÄHLTE ARBEITEN" : "SELECTED WORK"}</span>
              <button className="panel-more" onClick={() => openPage("work")}>
                {de ? "ALLE ANSEHEN ↓" : "VIEW ALL ↓"}
              </button>
            </div>
            <ul className="project-list">
              {projects.map((p) => (
                <li key={p.name}>
                  <a href={p.link} target="_blank" rel="noopener noreferrer">
                    <span className="p-index">{p.index}</span>
                    <span className="p-name">{p.name}</span>
                    <span className="p-tech">{p.tech}</span>
                    <span className="p-open">{de ? "ÖFFNEN ↗" : "OPEN ↗"}</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>

      {page && <SectionPage id={page} onBack={() => setPage(null)} />}
    </div>
  );
}

function clamp(v: number, min: number, max: number) {
  return Math.min(max, Math.max(min, v));
}
