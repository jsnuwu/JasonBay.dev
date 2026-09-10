import ProjectCard from "./ProjectCard";
import "../styles/Projects.css";
import { projects } from "../data/projects";
import { useReveal } from "../hooks/useReveal";
import { useLanguage } from "../i18n/useLanguage";

export default function Projects() {
  const ref = useReveal<HTMLElement>();
  const { t } = useLanguage();

  return (
    <section className="projects-section reveal" ref={ref}>
      <h2>{t.projects.heading}</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </section>
  );
}
