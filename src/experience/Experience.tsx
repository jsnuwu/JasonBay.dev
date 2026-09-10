import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useDrag } from "@use-gesture/react";
import { useLanguage } from "../i18n/useLanguage";
import ConstellationCanvas, { type Anchor, type SceneId } from "./ConstellationCanvas";
import Reticle from "./Reticle";
import {
  EMAIL,
  getProjects,
  getRadialKeywords,
  getSectionNodes,
  getSocials,
} from "./content";
import "../styles/Constellation.css";

const ORDER: SceneId[] = ["main", "about", "portfolio"];

export default function Experience() {
  const { lang, setLang, t } = useLanguage();
  const [scene, setScene] = useState<SceneId>("main");
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [sound, setSound] = useState(false);

  const pointerRef = useRef({ x: 0, y: 0 });
  const dragRef = useRef({ x: 0, y: 0 });
  const labelEls = useRef<Map<string, HTMLElement | null>>(new Map());
  const wheelLock = useRef(0);

  const keywords = useMemo(() => getRadialKeywords(lang), [lang]);
  const sections = useMemo(() => getSectionNodes(lang), [lang]);
  const projects = useMemo(() => getProjects(), []);
  const socials = useMemo(() => getSocials(), []);

  const anchors: Anchor[] = useMemo(() => {
    if (scene === "main") {
      return keywords.map((k, i) => ({
        id: `kw-${i}`,
        strong: k.strong,
        position: [
          Math.cos(k.angle) * k.radius,
          Math.sin(k.angle) * k.radius * 0.62,
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
    setOpenSection(null);
  }, []);

  const step = useCallback(
    (dir: 1 | -1) => {
      setScene((cur) => {
        const idx = ORDER.indexOf(cur);
        const next = Math.min(ORDER.length - 1, Math.max(0, idx + dir));
        if (next !== idx) setOpenSection(null);
        return ORDER[next];
      });
    },
    [],
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
      if (openSection) return;
      const now = performance.now();
      if (now - wheelLock.current < 900) return;
      if (Math.abs(e.deltaY) < 24) return;
      wheelLock.current = now;
      step(e.deltaY > 0 ? 1 : -1);
    };
    window.addEventListener("wheel", onWheel, { passive: true });
    return () => window.removeEventListener("wheel", onWheel);
  }, [openSection, step]);

  const bindDrag = useDrag(({ movement: [mx, my], down, last }) => {
    if (down) {
      dragRef.current = {
        x: THREEclamp(mx * 0.0016, -0.7, 0.7),
        y: THREEclamp(-my * 0.0016, -0.5, 0.5),
      };
    }
    if (last) dragRef.current = { x: 0, y: 0 };
  });

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

  const de = lang === "de";
  const roleLine = de
    ? "Software Engineer — Deutschland"
    : "Software Engineer — Germany";

  const hint =
    scene === "main"
      ? de
        ? "SCROLLEN ZU ÜBER MICH ↓"
        : "SCROLL TO ABOUT ↓"
      : de
        ? "SCROLLEN ODER ZIEHEN ZUM ERKUNDEN"
        : "SCROLL OR DRAG TO EXPLORE";

  return (
    <div className="experience" {...bindDrag()}>
      <Reticle />
      <ConstellationCanvas
        scene={scene}
        anchors={anchors}
        pointerRef={pointerRef}
        dragRef={dragRef}
        labelEls={labelEls}
      />

      {/* ---- projected labels ---- */}
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
              onClick={() => {
                playBlip();
                setOpenSection(s.id);
              }}
            >
              {s.label}
            </button>
          ))}
      </div>

      {/* ---- chrome ---- */}
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
            <button
              className={de ? "active" : ""}
              onClick={() => setLang("de")}
            >
              DE
            </button>
            <span>—</span>
            <button
              className={!de ? "active" : ""}
              onClick={() => setLang("en")}
            >
              EN
            </button>
          </span>
          <button
            className="sound-toggle"
            onClick={() => setSound((s) => !s)}
          >
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

      {/* ---- portfolio panel ---- */}
      {scene === "portfolio" && (
        <section className="panel portfolio-panel">
          <div className="panel-head">
            <span>{de ? "AUSGEWÄHLTE ARBEITEN" : "SELECTED WORK"}</span>
            <span>
              {projects.length} {de ? "PROJEKTE" : "PROJECTS"}
            </span>
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

      {/* ---- section detail overlay (about scene) ---- */}
      {openSection && (
        <section className="panel section-panel">
          <button
            className="panel-close"
            onClick={() => setOpenSection(null)}
          >
            {de ? "‹ ZURÜCK" : "‹ BACK"}
          </button>
          <SectionDetail id={openSection} lang={lang} t={t} socials={socials} />
        </section>
      )}
    </div>
  );
}

function THREEclamp(v: number, min: number, max: number) {
  return Math.min(max, Math.max(min, v));
}

interface DetailProps {
  id: string;
  lang: "de" | "en";
  t: ReturnType<typeof useLanguage>["t"];
  socials: ReturnType<typeof getSocials>;
}

function SectionDetail({ id, lang, t, socials }: DetailProps) {
  const de = lang === "de";

  if (id === "about") {
    return (
      <div className="detail">
        <h2>{t.about.heading}</h2>
        <p className="detail-lead">{t.about.lead}</p>
        <p>{t.about.body}</p>
      </div>
    );
  }

  if (id === "experience") {
    return (
      <div className="detail">
        <h2>{t.experience.heading}</h2>
        <ul className="detail-timeline">
          {t.experience.entries.map((e) => (
            <li key={e.org}>
              <span className="dt-period">{e.period}</span>
              <span className="dt-org">{e.org}</span>
              <span className="dt-role">{e.role}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (id === "skills") {
    return (
      <div className="detail">
        <h2>{t.skills.heading}</h2>
        <ul className="detail-grid">
          {t.skills.groups.map((g) => (
            <li key={g.title}>
              <span className="dg-title">{g.title}</span>
              <span className="dg-items">{g.items}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (id === "languages") {
    return (
      <div className="detail">
        <h2>{de ? "Sprachen" : "Languages"}</h2>
        <ul className="detail-plain">
          {t.skills.languages.map((l) => (
            <li key={l.name}>
              {l.name} — {l.level}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (id === "tiktok") {
    return (
      <div className="detail">
        <h2>{t.about.spotlight.heading}</h2>
        <p>{t.about.spotlight.subtitle}</p>
        <ul className="detail-stats">
          <li>
            <strong>{t.about.spotlight.statFollowerValue}</strong>
            <span>{t.about.spotlight.statFollowerLabel}</span>
          </li>
          <li>
            <strong>{t.about.spotlight.statLikesValue}</strong>
            <span>{t.about.spotlight.statLikesLabel}</span>
          </li>
          <li>
            <strong>{t.about.spotlight.statExperienceValue}</strong>
            <span>{t.about.spotlight.statExperienceLabel}</span>
          </li>
        </ul>
        <ul className="detail-plain">
          {t.about.spotlight.list.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </div>
    );
  }

  if (id === "gallery") {
    return (
      <div className="detail">
        <h2>{de ? "Galerie" : "Gallery"}</h2>
        <p>
          {de
            ? "Fotografie abseits vom Code — Motorrad, Wandern, Tiere. Läuft in der klassischen Ansicht."
            : "Photography beyond the code — motorcycles, hiking, pets. Lives in the classic view."}
        </p>
      </div>
    );
  }

  if (id === "background") {
    return (
      <div className="detail">
        <h2>{de ? "Hintergrund" : "Background"}</h2>
        <p>
          {de
            ? "Seit 2020 Video-Editing und Grafikdesign, seit 2023 in der Softwareentwicklung — vom FSJ über die Ausbildung bei adesso bis zur aktuellen Rolle als Junior Software Engineer."
            : "Video editing and graphic design since 2020, software development since 2023 — from a social year through an apprenticeship at adesso to the current role as a Junior Software Engineer."}
        </p>
      </div>
    );
  }

  if (id === "work") {
    return (
      <div className="detail">
        <h2>{de ? "Arbeiten" : "Work"}</h2>
        <p>
          {de
            ? "Öffne PORTFOLIO oben für die vollständige Projektliste."
            : "Open PORTFOLIO above for the full project list."}
        </p>
      </div>
    );
  }

  // contact
  return (
    <div className="detail">
      <h2>{t.contact.heading}</h2>
      <p>{t.contact.intro}</p>
      <a className="detail-email" href={`mailto:${EMAIL}`}>
        {EMAIL}
      </a>
      <ul className="detail-plain">
        {socials.map((s) => (
          <li key={s.label}>
            <a href={s.href} target="_blank" rel="noopener noreferrer">
              {s.label} — {s.handle} ↗
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
