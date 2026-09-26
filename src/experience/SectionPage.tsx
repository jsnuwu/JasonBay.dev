import {
  Fragment,
  lazy,
  Suspense,
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type FormEvent,
} from "react";
import { useLanguage } from "../i18n/useLanguage";
import { EMAIL, getSocials } from "./content";
import portrait from "../assets/avatar/BayJason.jpg";
import tiktokLogo from "../assets/images/TikTok.png";
import youtubeLogo from "../assets/images/Youtube.png";
import instagramLogo from "../assets/images/Instagram.png";
import microsoftLogo from "../assets/images/microsoft.svg";
import adessoLogo from "../assets/images/adessologo2.png";
import telutionLogo from "../assets/images/telution-logo.webp";
import lebenshilfeLogo from "../assets/images/lebenshilfe.de-removebg-preview.png";

const GallerySection = lazy(() => import("./sections/GallerySection"));
const TikTokSection = lazy(() => import("./sections/TikTokSection"));
const OldPortfolio = lazy(() => import("../components/OldPortfolio"));

function SectionLoading() {
  return <div className="sp-loading" aria-hidden="true" />;
}

const SOCIAL_LOGOS: Record<string, string> = {
  tiktok: tiktokLogo,
  youtube: youtubeLogo,
  instagram: instagramLogo,
};

const SKILL_LOGOS: Record<string, string> = {
  ...SOCIAL_LOGOS,
  "microsoft 365": microsoftLogo,
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
  origin: { x: number; y: number };
  onBack: () => void;
  onOpen: (id: string) => void;
}

function SplitTitle({ text }: { text: string }) {
  return (
    <h1 aria-label={text}>
      {text.split(" ").map((word, wi) => (
        <Fragment key={wi}>
          {wi > 0 && " "}
          <span className="sp-word" aria-hidden="true">
            {Array.from(word).map((ch, ci) => (
              <span
                className="sp-char"
                key={ci}
                style={{ "--ci": wi * 3 + ci } as CSSProperties}
              >
                {ch}
              </span>
            ))}
          </span>
        </Fragment>
      ))}
    </h1>
  );
}

type FormState = "idle" | "sending" | "sent" | "error";

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
  [/canva/i, "devicon-canva-original colored"],
  [/photoshop/i, "devicon-photoshop-plain colored"],
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
  if (n.startsWith("englisch") || n.startsWith("english")) return "EN";
  if (n.startsWith("franz") || n.startsWith("french")) return "🇫🇷";
  if (n.startsWith("spanisch") || n.startsWith("spanish")) return "🇪🇸";
  return "🌐";
}

const TITLES: Record<string, { de: string; en: string }> = {
  about: { de: "Über mich", en: "About" },
  work: { de: "Portfolio", en: "Portfolio" },
  "skills-experience": { de: "Profil", en: "Profile" },
  social: { de: "Social Media", en: "Social Media" },
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
  "skills-experience": {
    de: "Was ich kann, und wie ich dahin gekommen bin.",
    en: "What I can do, and how I got here.",
  },
  social: {
    de: "Instagram, TikTok und YouTube · Konzeption, Schnitt und Gestaltung seit 2020.",
    en: "Instagram, TikTok and YouTube · concept, editing and design since 2020.",
  },
  contact: {
    de: "Schreib mir, ich melde mich zurück.",
    en: "Drop me a line, I'll get back to you.",
  },
};

const SUB_TITLES: Record<string, { de: string; en: string }> = {
  skills: { de: "Skills", en: "Skills" },
  experience: { de: "Werdegang", en: "Experience" },
  gallery: { de: "Galerie", en: "Gallery" },
};

const SUB_INTRO: Record<string, { de: string; en: string }> = {
  skills: {
    de: "Die Tools, mit denen ich täglich arbeite.",
    en: "The tools I use day to day.",
  },
  experience: {
    de: "Von der Ausbildung bis heute.",
    en: "From my apprenticeship to today.",
  },
  gallery: {
    de: "Fotografie abseits vom Code · Wandern, Motorrad, Tiere.",
    en: "Photography beyond the code · hiking, motorcycles, pets.",
  },
};

export default function SectionPage({ id, origin, onBack, onOpen }: Props) {
  const { t, lang } = useLanguage();
  const de = lang === "de";
  const scrollRef = useRef<HTMLDivElement>(null);
  const topbarRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);
  const overscrollRef = useRef(0);
  const leavingRef = useRef(false);
  const [pull, setPull] = useState(0);
  const [formState, setFormState] = useState<FormState>("idle");

  const leave = useCallback(() => {
    const node = scrollRef.current;
    if (leavingRef.current) return;
    leavingRef.current = true;
    node?.classList.add("is-leaving");
    window.setTimeout(onBack, 480);
  }, [onBack]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0 });
  }, [id]);

  useEffect(() => {
    const node = scrollRef.current;
    if (!node) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const max = node.scrollHeight - node.clientHeight;
      const ratio = max > 0 ? node.scrollTop / max : 0;
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${ratio})`;
      }
      topbarRef.current?.classList.toggle("is-scrolled", node.scrollTop > 12);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    node.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      node.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [id]);

  useEffect(() => {
    const node = scrollRef.current;
    if (!node) return;
    const seen = new WeakSet<Element>();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.setAttribute("data-shown", "");
            io.unobserve(en.target);
          }
        });
      },
      { root: node, rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );
    const scan = () => {
      node.querySelectorAll("[data-reveal]").forEach((el) => {
        if (seen.has(el)) return;
        seen.add(el);
        io.observe(el);
      });
    };
    scan();
    const mo = new MutationObserver(scan);
    mo.observe(node, { childList: true, subtree: true });
    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, [id]);

  useEffect(() => {
    const node = scrollRef.current;
    if (!node) return;

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
  }, [leave, pull]);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setFormState("sending");
    try {
      const res = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setFormState("sent");
    } catch {
      setFormState("error");
    }
  };

  const order = Object.keys(TITLES);
  const title = TITLES[id] ? (de ? TITLES[id].de : TITLES[id].en) : id;
  const intro = INTRO[id] ? (de ? INTRO[id].de : INTRO[id].en) : "";
  const total = order.length;
  const num =
    String(order.indexOf(id) + 1).padStart(2, "0") +
    " / " +
    String(total).padStart(2, "0");
  const nextId = order[(order.indexOf(id) + 1) % total];
  const nextTitle = de ? TITLES[nextId].de : TITLES[nextId].en;
  const isLast = order.indexOf(id) === total - 1;

  return (
    <div
      className={`section-page ${id === "work" ? "section-page-dark" : ""}`}
      ref={scrollRef}
      style={
        {
          "--ox": `${(origin.x * 100).toFixed(1)}%`,
          "--oy": `${(origin.y * 100).toFixed(1)}%`,
          transform: pull ? `translateY(${pull * 40}px)` : undefined,
        } as CSSProperties
      }
    >
      <div
        className="sp-pull"
        style={{ opacity: pull, transform: `scaleX(${0.2 + pull * 0.8})` }}
        aria-hidden="true"
      >
        <span>{de ? "LOSLASSEN FÜR RAUM" : "RELEASE FOR SPACE"}</span>
      </div>

      <div className="sp-topbar" ref={topbarRef}>
        <button className="sp-back" onClick={leave}>
          <span className="sp-back-arrow" aria-hidden="true">
            ↑
          </span>
          <span className="glow-text">
            {de ? "ZURÜCK ZUM RAUM" : "BACK TO SPACE"}
          </span>
        </button>
        <span className="sp-num">{num}</span>
        <span className="sp-progress" aria-hidden="true">
          <span ref={progressRef} />
        </span>
      </div>

      {id !== "work" && (
        <header className="sp-header">
          <SplitTitle text={title} />
          {intro && <p className="sp-intro">{intro}</p>}
          {id === "skills-experience" && (
            <button
              className="sp-cv-download sp-fill-btn"
              onClick={() =>
                import("./generateCv").then(({ downloadCv }) =>
                  downloadCv(lang, t),
                )
              }
            >
              <span className="glow-text">
                {de ? "↓ Lebenslauf (PDF)" : "↓ Résumé (PDF)"}
              </span>
            </button>
          )}
        </header>
      )}

      <div className={`sp-body ${id === "work" ? "sp-body-wide" : ""}`}>
        {id === "social" && (
          <div className="sp-social">
            <Suspense fallback={<SectionLoading />}>
              <TikTokSection />
            </Suspense>
            <ul className="sp-social-links">
              {getSocials()
                .filter((s) =>
                  ["Instagram", "TikTok", "YouTube"].includes(s.label),
                )
                .map((s, si) => (
                  <li
                    key={s.label}
                    data-reveal
                    style={{ "--i": si } as CSSProperties}
                  >
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
        {id === "work" && (
          <Suspense fallback={<SectionLoading />}>
            <OldPortfolio />
          </Suspense>
        )}
        {id === "skills-experience" && (
          <>
            <section className="sp-subsection">
              <div className="sp-sub-head" data-reveal>
                <h2>{de ? SUB_TITLES.experience.de : SUB_TITLES.experience.en}</h2>
                <p className="sp-sub-intro">
                  {de ? SUB_INTRO.experience.de : SUB_INTRO.experience.en}
                </p>
              </div>
              <ol className="sp-timeline">
                {t.experience.entries.map((e) => {
                  const logo = orgLogo(e.org);
                  return (
                    <li key={e.org} data-reveal>
                      <span
                        className={`spt-badge${logo ? " has-logo" : ""}`}
                        data-org={logo?.slug}
                        aria-hidden="true"
                      >
                        {logo ? (
                          <img src={logo.logo} alt="" loading="lazy" />
                        ) : (
                          e.org
                            .replace(/[^A-Za-zÄÖÜ]/g, "")
                            .slice(0, 2)
                            .toUpperCase()
                        )}
                      </span>
                      <div className="spt-body">
                        <span className="spt-period">{e.period}</span>
                        <span className="spt-org">{e.org}</span>
                        <span className="spt-role">{e.role}</span>
                        <ul>
                          {e.bullets.map((b, bi) => (
                            <li
                              key={b}
                              style={{ "--i": bi } as CSSProperties}
                            >
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </section>

            <section className="sp-subsection">
              <div className="sp-sub-head" data-reveal>
                <h2>{de ? SUB_TITLES.skills.de : SUB_TITLES.skills.en}</h2>
                <p className="sp-sub-intro">
                  {de ? SUB_INTRO.skills.de : SUB_INTRO.skills.en}
                </p>
              </div>
              <div className="sp-skills">
                {t.skills.groups.map((g, gi) => (
                  <div className="skrow" key={g.title} data-reveal>
                    <span className="skrow-num">
                      {String(gi + 1).padStart(2, "0")}
                    </span>
                    <h3 className="skrow-title">{g.title}</h3>
                    <ul className="skrow-tags">
                      {g.items.split(",").map((raw, ii) => {
                        const it = raw.trim();
                        const logo = SKILL_LOGOS[socialKey(it)];
                        const icon = skillIcon(it);
                        return (
                          <li
                            key={it}
                            style={{ "--i": ii } as CSSProperties}
                          >
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
                <div className="skrow" data-reveal>
                  <span className="skrow-num">
                    {String(t.skills.groups.length + 1).padStart(2, "0")}
                  </span>
                  <h3 className="skrow-title">
                    {de ? "Sprachen" : "Languages"}
                  </h3>
                  <ul className="sp-langs sp-langs-inline">
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
                </div>
              </div>
            </section>
          </>
        )}
        {id === "about" && (
          <>
            <div className="sp-about">
              <div className="sp-prose" data-reveal>
                <p className="sp-lead">{t.about.lead}</p>
                <ul className="sp-facts">
                  <li style={{ "--i": 0 } as CSSProperties}>
                    <span aria-hidden="true">🎂</span>
                    {de ? "Jahrgang 2005" : "Born 2005"}
                  </li>
                  <li style={{ "--i": 1 } as CSSProperties}>
                    <span aria-hidden="true">📍</span>
                    Vaihingen an der Enz
                  </li>
                  <li style={{ "--i": 2 } as CSSProperties}>
                    <span aria-hidden="true">🚗</span>
                    {de
                      ? "Führerschein Klasse B & A2"
                      : "Driver's license class B & A2"}
                  </li>
                  <li style={{ "--i": 3 } as CSSProperties}>
                    <span aria-hidden="true">🗣️</span>
                    {de ? "Deutsch (Muttersprache)" : "German (native)"}
                  </li>
                  <li style={{ "--i": 4 } as CSSProperties}>
                    <span aria-hidden="true">🏍️</span>
                    {de
                      ? "Hobbys: Motorrad, Wandern, Tiere"
                      : "Hobbies: motorcycles, hiking, animals"}
                  </li>
                </ul>
                <p>{t.about.body}</p>
                <p>
                  {de
                    ? "Vor der Ausbildung habe ich ein Freiwilliges Soziales Jahr bei der Lebenshilfe Vaihingen-Mühlacker gemacht. Danach kam die Ausbildung zum Fachinformatiker für Anwendungsentwicklung bei adesso, die ich im Januar 2026 (IHK) abgeschlossen habe. Seitdem arbeite ich als Junior Software Engineer bei Telution."
                    : "Before the apprenticeship I did a voluntary social year at Lebenshilfe Vaihingen-Mühlacker. Then came the apprenticeship as an IT specialist for application development at adesso, which I completed in January 2026 (IHK). Since then I've been working as a Junior Software Engineer at Telution."}
                </p>
              </div>
              <figure className="sp-portrait" data-reveal>
                <img src={portrait} alt="Jason Bay" />
                <figcaption>Jason Bay · Vaihingen an der Enz</figcaption>
              </figure>
            </div>

            <section className="sp-subsection">
              <div className="sp-sub-head" data-reveal>
                <h2>{de ? SUB_TITLES.gallery.de : SUB_TITLES.gallery.en}</h2>
                <p className="sp-sub-intro">
                  {de ? SUB_INTRO.gallery.de : SUB_INTRO.gallery.en}
                </p>
              </div>
              <Suspense fallback={<SectionLoading />}>
                <GallerySection />
              </Suspense>
            </section>
          </>
        )}
        {id === "contact" && (
          <div className="sp-contact">
            <div className="sp-prose" data-reveal>
              <p>{t.contact.intro}</p>
              <a className="sp-email" href={`mailto:${EMAIL}`}>
                {EMAIL}
              </a>
              <ul className="sp-plain">
                {getSocials().map((s, si) => (
                  <li key={s.label} style={{ "--i": si } as CSSProperties}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer">
                      <span>{s.label}</span>
                      <span className="sp-plain-handle">
                        {s.handle}
                        <span className="sp-arrow" aria-hidden="true">
                          ↗
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <form
              className={`sp-form is-${formState}`}
              action="https://formspree.io/f/mreakbje"
              method="POST"
              onSubmit={onSubmit}
              data-reveal
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
              <button
                type="submit"
                className="sp-fill-btn"
                disabled={formState === "sending"}
              >
                <span className="glow-text">
                  {formState === "sending"
                    ? de
                      ? "Wird gesendet …"
                      : "Sending …"
                    : t.contact.submit}
                </span>
              </button>
              <p className="sp-form-status" role="status" aria-live="polite">
                {formState === "sent" &&
                  (de
                    ? "Danke! Deine Nachricht ist angekommen, ich melde mich bald."
                    : "Thanks! Your message arrived, I'll get back to you soon.")}
                {formState === "error" &&
                  (de
                    ? "Das hat leider nicht geklappt. Schreib mir gern direkt per E-Mail."
                    : "That didn't work, sorry. Feel free to email me directly.")}
              </p>
            </form>
          </div>
        )}

        {id !== "contact" && id !== "work" && (
          <section className="sp-subsection sp-cta">
            <div className="sp-cta-inner" data-reveal>
              <h2>{de ? "Sag Hallo." : "Say hi."}</h2>
              <p>
                {de
                  ? "Ob Projekt, Frage oder einfach nur so, ich antworte gern."
                  : "Whether it's a project, a question, or just to say hi, I'll write back."}
              </p>
              <button
                type="button"
                className="sp-cta-btn sp-fill-btn"
                onClick={() => onOpen("contact")}
              >
                <span className="glow-text">
                  {de ? "Kontakt aufnehmen ↗" : "Get in touch ↗"}
                </span>
              </button>
            </div>
          </section>
        )}

        <button
          type="button"
          className="sp-next"
          onClick={() => onOpen(nextId)}
          data-reveal
        >
          <span className="sp-next-label">
            {isLast
              ? de
                ? "Zurück zum Anfang"
                : "Back to start"
              : de
                ? "Nächste Seite"
                : "Next page"}
          </span>
          <span className="sp-next-title">
            <span className="sp-next-text">{nextTitle}</span>
            <span className="sp-next-arrow" aria-hidden="true">
              →
            </span>
          </span>
        </button>
      </div>
    </div>
  );
}
