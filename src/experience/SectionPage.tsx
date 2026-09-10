import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../i18n/useLanguage";
import { EMAIL, getSocials } from "./content";
import GallerySection from "./sections/GallerySection";
import TikTokSection from "./sections/TikTokSection";
import OldPortfolio from "../components/OldPortfolio";
import portrait from "../assets/avatar/BayJason.jpg";
import tiktokLogo from "../assets/images/TikTok.png";
import youtubeLogo from "../assets/images/Youtube.png";
import instagramLogo from "../assets/images/Instagram.png";
import adessoLogo from "../assets/images/adessologo2.png";
import telutionLogo from "../assets/images/telution-logo.webp";
import lebenshilfeLogo from "../assets/images/lebenshilfe.de-removebg-preview.png";

const SOCIAL_LOGOS: Record<string, string> = {
  tiktok: tiktokLogo,
  youtube: youtubeLogo,
  instagram: instagramLogo,
};

function socialKey(name: string) {
  return name.trim().toLowerCase();
}

const ORG_LOGOS: [string, string][] = [
  ["telution", telutionLogo],
  ["adesso", adessoLogo],
  ["lebenshilfe", lebenshilfeLogo],
];

function orgLogo(org: string) {
  const key = org.toLowerCase();
  for (const [match, logo] of ORG_LOGOS)
    if (key.includes(match)) return { logo, slug: match };
  return null;
}

interface Props {
  id: string;
  onBack: () => void;
}

const SKILL_ICONS: [RegExp, string][] = [
  [/html/i, "devicon-html5-plain colored"],
  [/css/i, "devicon-css3-plain colored"],
  [/typescript/i, "devicon-typescript-plain colored"],
  [/javascript/i, "devicon-javascript-plain colored"],
  [/angular/i, "devicon-angularjs-plain colored"],
  [/tailwind/i, "devicon-tailwindcss-plain colored"],
  [/react/i, "devicon-react-original colored"],
  [/vue/i, "devicon-vuejs-plain colored"],
  [/figma/i, "devicon-figma-plain colored"],
  [/wordpress/i, "devicon-wordpress-plain colored"],
  [/spring/i, "devicon-spring-plain colored"],
  [/php/i, "devicon-php-plain colored"],
  [/java\b/i, "devicon-java-plain colored"],
  [/postgres/i, "devicon-postgresql-plain colored"],
  [/mysql/i, "devicon-mysql-plain colored"],
  [/mongo/i, "devicon-mongodb-plain colored"],
  [/docker/i, "devicon-docker-plain colored"],
  [/\bgit\b/i, "devicon-git-plain colored"],
  [/jira/i, "devicon-jira-plain colored"],
  [/confluence/i, "devicon-confluence-plain colored"],
];

function skillIcon(name: string) {
  for (const [re, cls] of SKILL_ICONS) if (re.test(name)) return cls;
  return null;
}

const LEVEL_PCT: Record<string, number> = {
  muttersprache: 100,
  native: 100,
  "c2": 94,
  "c1": 82,
  "b2": 66,
  "b1": 50,
  "a2": 34,
  "a1": 20,
};

function levelPct(level: string) {
  return LEVEL_PCT[level.trim().toLowerCase()] ?? 60;
}

function flagFor(name: string) {
  const n = name.toLowerCase();
  if (n.startsWith("deutsch") || n.startsWith("german")) return "🇩🇪";
  if (n.startsWith("englisch") || n.startsWith("english")) return "🇬🇧";
  if (n.startsWith("franz") || n.startsWith("french")) return "🇫🇷";
  if (n.startsWith("spanisch") || n.startsWith("spanish")) return "🇪🇸";
  return "🌐";
}

const TITLES: Record<string, { de: string; en: string }> = {
  about: { de: "Über mich", en: "About" },
  work: { de: "Portfolio", en: "Portfolio" },
  skills: { de: "Skills", en: "Skills" },
  experience: { de: "Werdegang", en: "Experience" },
  gallery: { de: "Galerie", en: "Gallery" },
  social: { de: "Social Media", en: "Social Media" },
  languages: { de: "Sprachen", en: "Languages" },
  contact: { de: "Kontakt", en: "Contact" },
};

const INTRO: Record<string, { de: string; en: string }> = {
  about: {
    de: "Wer ich bin und wie ich arbeite.",
    en: "Who I am and how I work.",
  },
  work: {
    de: "Meine erste Portfolio-Seite.",
    en: "My first portfolio site.",
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
    de: "Fotografie abseits vom Code · Wandern, Motorrad, Tiere.",
    en: "Photography beyond the code · hiking, motorcycles, pets.",
  },
  social: {
    de: "Instagram, TikTok und YouTube · Konzeption, Schnitt und Gestaltung seit 2020.",
    en: "Instagram, TikTok and YouTube · concept, editing and design since 2020.",
  },
  languages: { de: "", en: "" },
  contact: {
    de: "Schreib mir, ich melde mich zurück.",
    en: "Drop me a line, I'll get back to you.",
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
  const total = Object.keys(TITLES).length;
  const num =
    String(Object.keys(TITLES).indexOf(id) + 1).padStart(2, "0") +
    " / " +
    String(total).padStart(2, "0");

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
          <span className="glow-text">
            {de ? "↑ ZURÜCK ZUM RAUM" : "↑ BACK TO SPACE"}
          </span>
        </button>
        <span className="sp-num">{num}</span>
      </div>

      <header className="sp-header">
        <h1>{title}</h1>
        {intro && <p className="sp-intro">{intro}</p>}
      </header>

      <div className={`sp-body ${id === "work" ? "sp-body-wide" : ""}`}>
        {id === "gallery" && <GallerySection />}
        {id === "social" && (
          <div className="sp-social">
            <TikTokSection />
            <ul className="sp-social-links">
              {getSocials()
                .filter((s) =>
                  ["Instagram", "TikTok", "YouTube"].includes(s.label),
                )
                .map((s) => (
                  <li key={s.label}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer">
                      <img
                        className="sp-social-logo"
                        src={SOCIAL_LOGOS[socialKey(s.label)]}
                        alt=""
                        aria-hidden="true"
                        loading="lazy"
                      />
                      <span className="sp-social-name">{s.label}</span>
                      <span className="sp-social-handle">{s.handle} ↗</span>
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        )}
        {id === "work" && <OldPortfolio />}
        {id === "experience" && (
          <ol className="sp-timeline">
            {t.experience.entries.map((e) => {
              const logo = orgLogo(e.org);
              return (
              <li key={e.org}>
                <span
                  className={`spt-badge${logo ? " has-logo" : ""}`}
                  data-org={logo?.slug}
                  aria-hidden="true"
                >
                  {logo ? (
                    <img src={logo.logo} alt="" loading="lazy" />
                  ) : (
                    e.org.replace(/[^A-Za-zÄÖÜ]/g, "").slice(0, 2).toUpperCase()
                  )}
                </span>
                <div className="spt-body">
                  <span className="spt-period">{e.period}</span>
                  <span className="spt-org">{e.org}</span>
                  <span className="spt-role">{e.role}</span>
                  <ul>
                    {e.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              </li>
              );
            })}
          </ol>
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
                  {g.items.split(",").map((raw) => {
                    const it = raw.trim();
                    const logo = SOCIAL_LOGOS[socialKey(it)];
                    const icon = skillIcon(it);
                    return (
                      <li key={it}>
                        {logo ? (
                          <img
                            className="skrow-logo"
                            src={logo}
                            alt=""
                            aria-hidden="true"
                            loading="lazy"
                          />
                        ) : icon ? (
                          <i className={icon} aria-hidden="true" />
                        ) : (
                          <span className="skrow-mono" aria-hidden="true">
                            {it.slice(0, 1)}
                          </span>
                        )}
                        {it}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        )}
        {id === "languages" && (
          <ul className="sp-langs">
            {t.skills.languages.map((l) => (
              <li key={l.name}>
                <span className="sp-lang-flag" aria-hidden="true">
                  {flagFor(l.name)}
                </span>
                <span className="sp-lang-name">{l.name}</span>
                <span className="sp-lang-level">{l.level}</span>
                <span className="sp-lang-bar">
                  <span style={{ width: `${levelPct(l.level)}%` }} />
                </span>
              </li>
            ))}
          </ul>
        )}
        {id === "about" && (
          <div className="sp-about">
            <div className="sp-prose">
              <p className="sp-lead">{t.about.lead}</p>
              <p>{t.about.body}</p>
              <p>
                {de
                  ? "Vor der Ausbildung ein Freiwilliges Soziales Jahr bei der Lebenshilfe Vaihingen-Mühlacker. Danach die Ausbildung zum Fachinformatiker für Anwendungsentwicklung bei adesso, abgeschlossen im Januar 2026 (IHK). Seither Junior Software Engineer bei Telution."
                  : "Before the apprenticeship, a voluntary social year at Lebenshilfe Vaihingen-Mühlacker. Then an apprenticeship as an IT specialist for application development at adesso, completed in January 2026 (IHK). Since then a Junior Software Engineer at Telution."}
              </p>
            </div>
            <figure className="sp-portrait">
              <img src={portrait} alt="Jason Bay" />
              <figcaption>Jason Bay · Vaihingen an der Enz</figcaption>
            </figure>
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
                      <span>{s.label}</span>
                      <span>{s.handle} ↗</span>
                    </a>
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
