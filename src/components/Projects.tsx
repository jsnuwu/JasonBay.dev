import ProjectCard from './ProjectCard';
import '../styles/Projects.css'; 

interface Project {
  name: string;
  description: string;
  tech: string;
  link: string;
}

const projects: Project[] = [
  {
    name: 'League Of Legends @adesso',
    description:
      'Ein React Playground in Form einer League of Legends Team-Maker Web-App. Die Anwendung ermöglicht es, zwei Teams zu erstellen, Spieler hinzuzufügen und (ehemals) mithilfe einer KI faire Teams basierend auf Spieler-Daten zu generieren. Das Projekt dient sowohl als Lern- & Experimentierumgebung als auch als Funktions-Prototyp.',
    tech: 'React, Vite, JavaScript, Tailwind CSS',
    link: 'https://jsnuwu.github.io/react-playground/',
  },
  {
    name: 'Angular Playground',
    description:
      'Ein Angular Playground – eine Entwicklungs- und Lernumgebung, in der ich mit Angular an kleinen Beispiel-Seiten und Konzepten experimentiert habe. Dieses Repository dient als Sandbox für Angular-Ideen, Komponenten-Tests und erste Implementierungen ohne festen Produkt-Fokus.',
    tech: 'Angular, TypeScript, HTML/CSS',
    link: 'https://jsnuwu.github.io/angular-playground/',
  },
  {
    name: '3D Earth',
    description: 'Dieses Projekt ist ein Three.js Playground, in dem ich mit 3D-Grafiken im Web experimentiert habe. Konkret wurde eine 3D-Erdkugel umgesetzt, um Grundlagen von Three.js, Szenen, Kameras und Animationen zu testen. Das Repository ist als Experiment / Lernprojekt gedacht.',
    tech: 'Three.js, JavaScript, HTML/CSS',
    link: 'https://jsnuwu.github.io/Earth/',
  },
  {
    name: 'About Me Page (old)',
    description: 'Dieses Repository enthält eine kurze „About Me“-Präsentation, die ich im Rahmen einer internen Vorstellung vor meinen Führungskräften gehalten habe. Ziel war es, einen Überblick über meine Person, meine Arbeitsweise und meine Schwerpunkte zu geben – kompakt und auf den Punkt. Das Projekt dient ausschließlich Dokumentations- und Referenzzwecken.',
    tech: 'Angular, TypeScript, HTML/CSS',
    link: 'https://jsnuwu.github.io/AboutMe/',
  },
    {
    name: 'EasterEgg PoC',
    description: 'Ein kleines Proof of Concept (PoC) für ein Easter Egg auf einer Website. Dieses Projekt war ein Mockup, um eine versteckte Funktion auszulösen, wenn der Benutzer eine bestimmte Tastenkombination eingibt.',
    tech: 'Angular, TypeScript, HTML/CSS',
    link: 'https://jsnuwu.github.io/EasterEggPoC/',
  },
];

export default function Projects() {
  return (
    <section className="projects-section">
      <h2>Projekte</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
