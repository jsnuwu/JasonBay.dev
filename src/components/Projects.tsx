import ProjectCard from "./ProjectCard";
import "../styles/Projects.css";
import { projects } from "../data/projects";
import { useReveal } from "../hooks/useReveal";

export default function Projects() {
  const ref = useReveal<HTMLElement>();

  return (
    <section className="projects-section reveal" ref={ref}>
      <h2>Projekte</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </section>
  );
}
