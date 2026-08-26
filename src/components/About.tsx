import "../styles/About.css";
import Projects from "./Projects";
import Skills from "./Skills";
import TechStack from "./TechStack";
import Experience from "./Experience";
import { useReveal } from "../hooks/useReveal";
import { useLanguage } from "../i18n/useLanguage";

export default function About() {
  const ref = useReveal<HTMLElement>();
  const spotlightRef = useReveal<HTMLElement>();
  const { t } = useLanguage();

  return (
    <>
      <section className="about-section reveal" ref={ref}>
        <h2>{t.about.heading}</h2>
        <p className="about-lead">{t.about.lead}</p>
        <p>{t.about.body}</p>
      </section>

      <section className="video-spotlight reveal" ref={spotlightRef}>
        <span className="video-spotlight-kicker">
          {t.about.spotlight.kicker}
        </span>
        <h3>{t.about.spotlight.heading}</h3>
        <p className="video-spotlight-sub">{t.about.spotlight.subtitle}</p>

        <div className="video-spotlight-stats">
          <div className="video-spotlight-stat">
            <strong>{t.about.spotlight.statFollowerValue}</strong>
            <span>{t.about.spotlight.statFollowerLabel}</span>
          </div>
          <div className="video-spotlight-stat">
            <strong>{t.about.spotlight.statLikesValue}</strong>
            <span>{t.about.spotlight.statLikesLabel}</span>
          </div>
          <div className="video-spotlight-stat">
            <strong>{t.about.spotlight.statExperienceValue}</strong>
            <span>{t.about.spotlight.statExperienceLabel}</span>
          </div>
        </div>

        <ul className="video-spotlight-list">
          {t.about.spotlight.list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <Experience />

      <Skills />

      <TechStack />

      <Projects />
    </>
  );
}
