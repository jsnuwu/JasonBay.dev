import "../styles/About.css";
import Projects from "./Projects";
import Skills from "./Skills";
import { useReveal } from "../hooks/useReveal";

export default function About() {
  const ref = useReveal<HTMLElement>();

  return (
    <>
      <section className="about-section reveal" ref={ref}>
        <h2>Über mich</h2>
        <p className="about-lead">
          Ich bin Fachinformatiker für Anwendungsentwicklung.
        </p>
        <p>
          Während meiner Ausbildung bei adesso SE habe ich Grundlagen in der
          Fullstack-Entwicklung gesammelt, mit Fokus auf moderne
          Webtechnologien wie React, Angular und Vue.js im Frontend sowie Java
          (Spring Boot) im Backend. Ergänzend habe ich Erfahrungen in Testing,
          Datenbanken und agiler Entwicklung nach Scrum gesammelt. Ich arbeite
          strukturiert, lerne mich schnell in neue Technologien ein und habe
          eine ausgeprägte lösungsorientierte Arbeitsweise.
        </p>
      </section>
      <Projects />

      <Skills />
    </>
  );
}
