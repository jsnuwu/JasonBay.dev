import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../i18n/useLanguage";
import { EMAIL, getSocials } from "./content";
import GallerySection from "./sections/GallerySection";
import TikTokSection from "./sections/TikTokSection";
import ProjectShowcase from "./sections/ProjectShowcase";

interface Props {
  id: string;
  onBack: () => void;
}

const TITLES: Record<string, { de: string; en: string }> = {
  about: { de: "Über mich", en: "About" },
  work: { de: "Portfolio", en: "Portfolio" },
  skills: { de: "Skills", en: "Skills" },
  experience: { de: "Werdegang", en: "Experience" },
  gallery: { de: "Galerie", en: "Gallery" },
  tiktok: { de: "TikTok", en: "TikTok" },
  languages: { de: "Sprachen", en: "Languages" },
  contact: { de: "Kontakt", en: "Contact" },
  background: { de: "Hintergrund", en: "Background" },
};

const INTRO: Record<string, { de: string; en: string }> = {
  about: {
    de: "Wer ich bin und wie ich arbeite.",
    en: "Who I am and how I work.",
  },
  work: {
    de: "Web-Projekte und Video-Arbeiten. Jede Karte öffnet die Live-Version.",
    en: "Web projects and video work. Each card opens the live version.",
  },
  skills: {
    de: "Werkzeuge und Methoden, mit denen ich täglich arbeite.",
    en: "Tools and methods I work with day to day.",
  },
  experience: {
    de: "Stationen von der Ausbildung bis heute.",
    en: "Stations from apprenticeship to today.",
  },
  gallery: {
    de: "Fotografie abseits vom Code — Wandern, Motorrad, Tiere.",
    en: "Photography beyond the code — hiking, motorcycles, pets.",
  },
  tiktok: {
    de: "Eigener Kanal seit 2020 — Konzeption, Schnitt und Gestaltung.",
    en: "My own channel since 2020 — concept, editing and design.",
  },
  languages: { de: "", en: "" },
  contact: {
    de: "Schreib mir — ich melde mich zurück.",
    en: "Drop me a line — I'll get back to you.",
  },
  background: {
    de: "Der längere Weg hierher.",
    en: "The longer road to here.",
  },
};

export default function SectionPage({ id, onBack }: Props) {
  const { t, lang } = useLanguage();
  const de = lang === "de";
  const scrollRef = useRef<HTMLDivElement>(null);
  const overscrollRef = useRef(0);
  const leavingRef = useRef(false);
  const [pull, setPull] = useState(0);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0 });
  }, [id]);

  useEffect(() => {
    const node = scrollRef.current;
    if (!node) return;

    const leave = () => {
      if (leavingRef.current) return;
      leavingRef.current = true;
      node.classList.add("is-leaving");
      window.setTimeout(onBack, 420);
    };

    const onWheel = (e: WheelEvent) => {
      if (leavingRef.current) return;
      if (node.scrollTop > 0) {
        overscrollRef.current = 0;
        if (pull !== 0) setPull(0);
        return;
      }
      if (e.deltaY < 0) {
        overscrollRef.current += -e.deltaY;
        const p = Math.min(1, overscrollRef.current / 320);
        setPull(p);
        if (overscrollRef.current > 320) leave();
      } else {
        overscrollRef.current = 0;
        if (pull !== 0) setPull(0);
      }
    };

    let touchY = 0;
    const onTouchStart = (e: TouchEvent) => {
      touchY = e.touches[0].clientY;
    };
    const onTouchMove = (e: TouchEvent) => {
      if (leavingRef.current || node.scrollTop > 0) return;
      const dy = e.touches[0].clientY - touchY;
      if (dy > 0) {
        overscrollRef.current = dy;
        setPull(Math.min(1, dy / 200));
        if (dy > 200) leave();
      }
    };
    const onTouchEnd = () => {
      overscrollRef.current = 0;
      setPull(0);
    };

    node.addEventListener("wheel", onWheel, { passive: true });
    node.addEventListener("touchstart", onTouchStart, { passive: true });
    node.addEventListener("touchmove", onTouchMove, { passive: true });
    node.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      node.removeEventListener("wheel", onWheel);
      node.removeEventListener("touchstart", onTouchStart);
      node.removeEventListener("touchmove", onTouchMove);
      node.removeEventListener("touchend", onTouchEnd);
    };
  }, [onBack, pull]);

  const title = TITLES[id] ? (de ? TITLES[id].de : TITLES[id].en) : id;
  const intro = INTRO[id] ? (de ? INTRO[id].de : INTRO[id].en) : "";
  const num =
    String(Object.keys(TITLES).indexOf(id) + 1).padStart(2, "0") + " / 09";

  return (
    <div
      className="section-page"
      ref={scrollRef}
      style={{ transform: pull ? `translateY(${pull * 40}px)` : undefined }}
    >
      <div
        className="sp-pull"
        style={{ opacity: pull, transform: `scaleX(${0.2 + pull * 0.8})` }}
        aria-hidden="true"
      >
        <span>{de ? "LOSLASSEN FÜR RAUM" : "RELEASE FOR SPACE"}</span>
      </div>

      <div className="sp-topbar">
        <button className="sp-back" onClick={onBack}>
          {de ? "↑ ZURÜCK ZUM RAUM" : "↑ BACK TO SPACE"}
        </button>
        <span className="sp-num">{num}</span>
      </div>

      <header className="sp-header">
        <h1>{title}</h1>
        {intro && <p className="sp-intro">{intro}</p>}
      </header>

      <div className="sp-body">
        {id === "gallery" && <GallerySection />}
        {id === "tiktok" && <TikTokSection />}
        {id === "work" && <ProjectShowcase />}
        {id === "experience" && (
          <ul className="sp-timeline">
            {t.experience.entries.map((e) => (
              <li key={e.org}>
                <span className="spt-period">{e.period}</span>
                <div>
                  <span className="spt-org">{e.org}</span>
                  <span className="spt-role">{e.role}</span>
                  <ul>
                    {e.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        )}
        {id === "skills" && (
          <div className="sp-skills">
            {t.skills.groups.map((g, gi) => (
              <div className="skrow" key={g.title}>
                <span className="skrow-num">
                  {String(gi + 1).padStart(2, "0")}
                </span>
                <h3 className="skrow-title">{g.title}</h3>
                <ul className="skrow-tags">
                  {g.items.split(",").map((it) => (
                    <li key={it.trim()}>{it.trim()}</li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="skrow skrow-langs">
              <span className="skrow-num">
                {String(t.skills.groups.length + 1).padStart(2, "0")}
              </span>
              <h3 className="skrow-title">
                {de ? "Sprachen" : "Languages"}
              </h3>
              <ul className="skrow-tags">
                {t.skills.languages.map((l) => (
                  <li key={l.name}>
                    {l.name} · {l.level}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
        {id === "languages" && (
          <ul className="sp-plain">
            {t.skills.languages.map((l) => (
              <li key={l.name}>
                <span>{l.name}</span>
                <span>{l.level}</span>
              </li>
            ))}
          </ul>
        )}
        {id === "about" && (
          <div className="sp-prose">
            <p className="sp-lead">{t.about.lead}</p>
            <p>{t.about.body}</p>
          </div>
        )}
        {id === "background" && (
          <div className="sp-prose">
            <p>
              {de
                ? "Vor der Ausbildung ein Freiwilliges Soziales Jahr bei der Lebenshilfe Vaihingen-Mühlacker (09/2022 – 08/2023). Danach die Ausbildung zum Fachinformatiker für Anwendungsentwicklung bei der adesso SE, abgeschlossen im Januar 2026 (IHK). Seither Junior Software Engineer bei Telution mit Schwerpunkt Frontend — Angular, TypeScript und WordPress. Parallel dazu seit Jahren eigener Video-Schnitt und Social-Media-Content."
                : "Before the apprenticeship, a voluntary social year at Lebenshilfe Vaihingen-Mühlacker (09/2022 – 08/2023). Then an apprenticeship as an IT specialist for application development at adesso SE, completed in January 2026 (IHK). Since then a Junior Software Engineer at Telution with a frontend focus — Angular, TypeScript and WordPress. Alongside that, years of self-made video editing and social media content."}
            </p>
          </div>
        )}
        {id === "contact" && (
          <div className="sp-contact">
            <div className="sp-prose">
              <p>{t.contact.intro}</p>
              <a className="sp-email" href={`mailto:${EMAIL}`}>
                {EMAIL}
              </a>
              <ul className="sp-plain">
                {getSocials().map((s) => (
                  <li key={s.label}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer">
                      {s.label}
                    </a>
                    <span>{s.handle} ↗</span>
                  </li>
                ))}
              </ul>
            </div>

            <form
              className="sp-form"
              action="https://formspree.io/f/mreakbje"
              method="POST"
            >
              <label>
                <span>{de ? "Name" : "Name"}</span>
                <input
                  name="name"
                  type="text"
                  placeholder={t.contact.namePlaceholder}
                  required
                />
              </label>
              <label>
                <span>{de ? "E-Mail" : "Email"}</span>
                <input
                  name="email"
                  type="email"
                  placeholder={t.contact.emailPlaceholder}
                  required
                />
              </label>
              <label>
                <span>{de ? "Nachricht" : "Message"}</span>
                <textarea
                  name="message"
                  rows={5}
                  placeholder={t.contact.messagePlaceholder}
                  required
                />
              </label>
              <button type="submit">{t.contact.submit}</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
