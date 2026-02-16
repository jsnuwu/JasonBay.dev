import '../styles/ProjectCard.css';

interface ProjectCardProps {
  name: string;
  description: string;
  tech: string;
  link: string;
}

export default function ProjectCard({ name, description, tech, link }: ProjectCardProps) {
  return (
    <div className="project-card">
      <h3>{name}</h3>
      <p>{description}</p>
      <small>{tech}</small>
      <br />
      <a href={link} target="_blank" rel="noopener noreferrer">
        Live ansehen
      </a>
    </div>
  );
}
