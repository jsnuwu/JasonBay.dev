import { useEffect, useRef, useState } from "react";
import "../../styles/ProjectsPreview.css";
import { projects } from "../../data/projects";
import { useReveal } from "../../hooks/useReveal";
import { useLanguage } from "../../i18n/useLanguage";
import LiveButton from "../LiveButton";

function formatUrl(url: string) {
  try {
    const parsed = new URL(url);
    return `${parsed.hostname}${parsed.pathname.replace(/\/$/, "")}`;
  } catch {
    return url;
  }
}

export default function ProjectsPreview() {
  const sectionRef = useReveal<HTMLElement>();
  const trackRef = useRef<HTMLDivElement | null>(null);
  const { lang, t } = useLanguage();
  const activeRef = useRef(0);
  const userInteractedRef = useRef(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const markInteracted = () => {
      userInteractedRef.current = true;
    };
    track.addEventListener("wheel", markInteracted, { passive: true });
    track.addEventListener("touchstart", markInteracted, { passive: true });
    track.addEventListener("pointerdown", markInteracted, { passive: true });

    const guardUntil = Date.now() + 8000;
    const interval = window.setInterval(() => {
      if (Date.now() > guardUntil) {
        window.clearInterval(interval);
        return;
      }
      if (userInteractedRef.current || !track.offsetWidth) return;
      const expected = activeRef.current * track.offsetWidth;
      if (Math.abs(track.scrollLeft - expected) > 4) {
        track.scrollLeft = expected;
      }
    }, 120);

    return () => {
      track.removeEventListener("wheel", markInteracted);
      track.removeEventListener("touchstart", markInteracted);
      track.removeEventListener("pointerdown", markInteracted);
      window.clearInterval(interval);
    };
  }, []);

  const scrollToIndex = (index: number) => {
    const track = trackRef.current;
    if (!track) return;

    userInteractedRef.current = true;
    const clamped = (index + projects.length) % projects.length;
    track.scrollTo({
      left: clamped * track.offsetWidth,
      behavior: "smooth",
    });
    setActive(clamped);
  };

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track || track.offsetWidth === 0) return;

    const index = Math.round(track.scrollLeft / track.offsetWidth);
    setActive(index);
  };

  return (
    <section className="projects-preview reveal" ref={sectionRef}>
      <span className="projects-preview-kicker">{t.projectsPreview.kicker}</span>
      <h2 className="projects-preview-title">{t.projectsPreview.title}</h2>
      <p className="projects-preview-subtitle">{t.projectsPreview.subtitle}</p>

      <div className="preview-carousel-wrapper">
        <button
          type="button"
          className="preview-arrow left"
          onClick={() => scrollToIndex(active - 1)}
          aria-label={t.projectsPreview.previousProject}
        >
          ‹
        </button>

        <div className="preview-track" ref={trackRef} onScroll={handleScroll}>
          {projects.map((project, index) => (
            <div className="preview-card" key={project.name}>
              <div className="preview-browserbar">
                <span className="browser-dot red" />
                <span className="browser-dot yellow" />
                <span className="browser-dot green" />
                <span className="preview-url">{formatUrl(project.link)}</span>
              </div>

              <a
                className="preview-frame-wrapper"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.projectsPreview.openLiveAria(project.name)}
              >
                {Math.abs(index - active) <= 1 && (
                  <iframe
                    src={project.link}
                    title={project.name}
                    loading={index === 0 ? "eager" : "lazy"}
                    tabIndex={-1}
                  />
                )}
                <span className="preview-frame-hint">
                  {t.projectsPreview.openLive}
                </span>
              </a>

              <div className="preview-card-body">
                <h3>{project.name}</h3>
                <p>
                  {lang === "en" ? project.descriptionEn : project.description}
                </p>
                <small className="preview-tech">{project.tech}</small>

                <LiveButton href={project.link} />
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          className="preview-arrow right"
          onClick={() => scrollToIndex(active + 1)}
          aria-label={t.projectsPreview.nextProject}
        >
          ›
        </button>
      </div>

      <div className="preview-dots">
        {projects.map((project, index) => (
          <button
            type="button"
            key={project.name}
            className={`preview-dot ${index === active ? "active" : ""}`}
            onClick={() => scrollToIndex(index)}
            aria-label={t.projectsPreview.jumpTo(project.name)}
          />
        ))}
      </div>
    </section>
  );
}
