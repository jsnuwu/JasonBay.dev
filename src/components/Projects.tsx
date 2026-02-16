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
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>Projekte</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            name={project.name}
            description={project.description}
            tech={project.tech}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}
