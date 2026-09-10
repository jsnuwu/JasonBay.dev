import { useEffect, useRef } from "react";
import { useLanguage } from "../i18n/useLanguage";
import { EMAIL, getProjects, getSocials } from "./content";
import GallerySection from "./sections/GallerySection";
import TikTokSection from "./sections/TikTokSection";

interface Props {
  id: string;
  onBack: () => void;
}

const TITLES: Record<string, { de: string; en: string }> = {
  about: { de: "Über mich", en: "About" },
  work: { de: "Arbeiten", en: "Work" },
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
    de: "Ausgewählte Projekte — anklicken öffnet die Live-Version.",
    en: "Selected projects — click to open the live version.",
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

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0 });
  }, [id]);

  const title = TITLES[id] ? (de ? TITLES[id].de : TITLES[id].en) : id;
  const intro = INTRO[id] ? (de ? INTRO[id].de : INTRO[id].en) : "";
  const num =
    String(Object.keys(TITLES).indexOf(id) + 1).padStart(2, "0") + " / 09";

  return (
    <div className="section-page" ref={scrollRef}>
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
        {id === "work" && <WorkBody de={de} />}
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
          <ul className="sp-grid">
            {t.skills.groups.map((g) => (
              <li key={g.title}>
                <span className="spg-title">{g.title}</span>
                <span className="spg-items">{g.items}</span>
              </li>
            ))}
          </ul>
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
                ? "Seit 2020 Video-Editing und Grafikdesign, seit 2023 in der Softwareentwicklung — vom Freiwilligen Sozialen Jahr über die Ausbildung zum Fachinformatiker bei adesso bis zur aktuellen Rolle als Junior Software Engineer bei TELUTION."
                : "Video editing and graphic design since 2020, software development since 2023 — from a voluntary social year, through an apprenticeship as an IT specialist at adesso, to the current role as a Junior Software Engineer at TELUTION."}
            </p>
          </div>
        )}
        {id === "contact" && (
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
        )}
      </div>
    </div>
  );
}

function WorkBody({ de }: { de: boolean }) {
  const projects = getProjects();
  return (
    <ol className="sp-work">
      {projects.map((p) => (
        <li key={p.name}>
          <a href={p.link} target="_blank" rel="noopener noreferrer">
            <span className="spw-preview" aria-hidden="true">
              <iframe
                src={p.link}
                title={p.name}
                loading="lazy"
                tabIndex={-1}
                scrolling="no"
              />
              <span className="spw-preview-veil" />
            </span>
            <span className="spw-index">{p.index}</span>
            <span className="spw-name">{p.name}</span>
            <span className="spw-desc">
              {de ? p.description : p.descriptionEn}
            </span>
            <span className="spw-tech">{p.tech}</span>
            <span className="spw-open">{de ? "LIVE ÖFFNEN ↗" : "OPEN LIVE ↗"}</span>
          </a>
        </li>
      ))}
    </ol>
  );
}
