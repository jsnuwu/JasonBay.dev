import "../styles/Experience.css";
import { useReveal } from "../hooks/useReveal";

interface ExperienceEntry {
  org: string;
  role: string;
  period: string;
  bullets: string[];
}

const experience: ExperienceEntry[] = [
  {
    org: "TELUTION",
    role: "Junior Software Engineer – Frontend",
    period: "06/2026 – heute",
    bullets: [
      "Visuelle Umsetzung von Web-Oberflächen für 4 Kundenprojekte – Layout, Typografie, Bildsprache und responsives Verhalten",
      "Gestaltung und Pflege von Websites mit WordPress und Elementor inkl. individueller Layout-Anpassungen",
      "Aufbau wiederverwendbarer Frontend-Komponenten mit Angular, Backend-Anpassungen mit PHP",
    ],
  },
  {
    org: "adesso SE",
    role: "Fachinformatiker für Anwendungsentwicklung – Ausbildung",
    period: "09/2023 – 01/2026",
    bullets: [
      "Umsetzung von Frontend-Komponenten nach Design-Vorgaben mit Angular, Backend-Services mit Java und Spring Boot",
      "Arbeit im Scrum-Team mit JIRA und Confluence",
    ],
  },
  {
    org: "Lebenshilfe Vaihingen-Mühlacker",
    role: "FSJ – Freiwilliges Soziales Jahr, Wohlfahrtswerk für Baden-Württemberg",
    period: "09/2022 – 08/2023",
    bullets: [
      "Begleitung von Menschen mit Behinderungen im Alltag, Freizeitgestaltung und Ausflüge",
    ],
  },
];

export default function Experience() {
  const ref = useReveal<HTMLElement>();

  return (
    <section className="experience-section reveal" ref={ref}>
      <h2>Werdegang</h2>

      <div className="experience-timeline">
        {experience.map((entry) => (
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
