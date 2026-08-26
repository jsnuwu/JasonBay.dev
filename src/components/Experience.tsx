import "../styles/Experience.css";
import { useReveal } from "../hooks/useReveal";
import { useLanguage } from "../i18n/useLanguage";

export default function Experience() {
  const ref = useReveal<HTMLElement>();
  const { t } = useLanguage();

  return (
    <section className="experience-section reveal" ref={ref}>
      <h2>{t.experience.heading}</h2>

      <div className="experience-timeline">
        {t.experience.entries.map((entry) => (
          <div className="experience-entry" key={entry.org}>
            <div className="experience-marker">
              <span className="experience-dot" />
              <span className="experience-line" />
            </div>
            <div className="experience-content">
              <div className="experience-header">
                <div>
                  <h3>{entry.org}</h3>
                  <span className="experience-role">{entry.role}</span>
                </div>
                <span className="experience-period">{entry.period}</span>
              </div>
              <ul>
                {entry.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
