import "../styles/About.css";
import Projects from "./Projects";
import Skills from "./Skills";
import TechStack from "./TechStack";
import Experience from "./Experience";
import { useReveal } from "../hooks/useReveal";
import { useLanguage } from "../i18n/useLanguage";
import ScrambledText from "./ScrambledText";

export default function About() {
  const ref = useReveal<HTMLElement>();
  const spotlightRef = useReveal<HTMLElement>();
  const { t } = useLanguage();

  const [headingBefore, headingAfter] =
    t.about.spotlight.heading.split("@jsnuwu");

  return (
    <>
      <section className="about-section reveal" ref={ref}>
        <ScrambledText as="h2" text={t.about.heading} />
        <p className="about-lead">
          <ScrambledText text={t.about.lead} />
        </p>
        <p>
          <ScrambledText text={t.about.body} />
        </p>
      </section>

      <section className="video-spotlight reveal" ref={spotlightRef}>
        <span className="video-spotlight-kicker">
          <ScrambledText text={t.about.spotlight.kicker} />
        </span>
        <h3>
          <ScrambledText text={headingBefore} />
          <a
            href="https://www.tiktok.com/@jsnuwu"
            target="_blank"
            rel="noopener noreferrer"
            className="video-spotlight-handle"
          >
            <ScrambledText text="@jsnuwu" />
          </a>
          <ScrambledText text={headingAfter} />
        </h3>
        <p className="video-spotlight-sub">
          <ScrambledText text={t.about.spotlight.subtitle} />
        </p>

        <div className="video-spotlight-stats">
          <div className="video-spotlight-stat">
            <strong>
              <ScrambledText text={t.about.spotlight.statFollowerValue} />
            </strong>
            <span>
              <ScrambledText text={t.about.spotlight.statFollowerLabel} />
            </span>
          </div>
          <div className="video-spotlight-stat">
            <strong>
              <ScrambledText text={t.about.spotlight.statLikesValue} />
            </strong>
            <span>
              <ScrambledText text={t.about.spotlight.statLikesLabel} />
            </span>
          </div>
          <div className="video-spotlight-stat">
            <strong>
              <ScrambledText text={t.about.spotlight.statExperienceValue} />
            </strong>
            <span>
              <ScrambledText text={t.about.spotlight.statExperienceLabel} />
            </span>
          </div>
        </div>

        <ul className="video-spotlight-list">
          {t.about.spotlight.list.map((item) => (
            <li key={item}>
              <ScrambledText text={item} />
            </li>
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
