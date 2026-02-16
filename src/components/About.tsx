import '../styles/About.css';
import Projects from './Projects';
import Skills from './Skills';

export default function About() {
  return (
    <>
      <section className="about-section">
        <h2>Über mich</h2>
        <p>
          Ich bin angehender Fachinformatiker für Anwendungsentwicklung.
          <br /><br />
          Mein Fokus liegt auf modernen Webtechnologien wie React, Angular 
          und Java. Ich entwickle performante Frontends und saubere Backends 
          mit strukturierten Architekturen und Best Practices.
        </p>
      </section>

      <Projects />
      <Skills />
    </>
  );
}
