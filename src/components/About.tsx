import '../styles/About.css';
import Projects from './Projects';
import Skills from './Skills';

export default function About() {
  return (
    <>
      <section className="about-section">
        
        <h2>Über mich</h2>
        <br /><br />
<p>
  Ich bin Fachinformatiker für Anwendungsentwicklung.<br /><br />
  Während meiner Ausbildung bei adesso SE habe ich Grundlagen in der Fullstack-Entwicklung gesammelt, mit Fokus auf moderne Webtechnologien wie React, Angular und Vue.js im Frontend sowie Java (Spring Boot) im Backend. Ergänzend habe ich Erfahrungen in Testing, Datenbanken und agiler Entwicklung nach Scrum gesammelt. Ich arbeite strukturiert, lerne mich schnell in neue Technologien ein und habe eine ausgeprägte lösungsorientierte Arbeitsweise.
</p>
      </section>
      <Projects />
      
      <Skills />
    </>
  );
}
