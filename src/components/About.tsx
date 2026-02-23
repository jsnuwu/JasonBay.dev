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
            Ich bin Fachinformatiker für Anwendungsentwicklung.
            <br /><br />
            Ich habe meine Ausbildung zum Fachinformatiker bei der adesso SE abgeschlossen und dabei vor allem mit TypeScript/Angular sowie Java/Spring Boot gearbeitet. Zu meinen Schwerpunkten zählten Softwareanalyse, Entwicklung, Testing und Debugging sowie UI-Gestaltung, Backend-Anbindung und agile Projektarbeit nach SCRUM. Zusätzlich konnte ich Erfahrungen in der 3D-Modellierung mit Three.js sammeln.
            Während meiner Ausbildung habe ich mir neue Technologien sehr schnell angeeignet und zuverlässig, analytisch sowie verantwortungsbewusst gearbeitet. Auch für komplexe Problemstellungen habe ich passende Lösungen gefunden. Durch meine offene und kooperative Art wurde ich von Kolleginnen, Kollegen und Vorgesetzten gleichermaßen geschätzt.
          </p>
      </section>

      <Projects />
      
      <Skills />
    </>
  );
}
