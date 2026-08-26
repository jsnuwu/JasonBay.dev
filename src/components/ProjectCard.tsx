import "../styles/ProjectCard.css";
import LiveButton from "./LiveButton";

interface ProjectCardProps {
  name: string;
  description: string;
  tech: string;
  link: string;
}

export default function ProjectCard({
  name,
  description,
  tech,
  link,
}: ProjectCardProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (
      e.button === 1 ||
      (e.ctrlKey && e.button === 0) ||
      (e.metaKey && e.button === 0)
    ) {
      e.preventDefault();
      window.open(link, "_blank");
    }
  };

  return (
    <div className="project-card">
      <h3>{name}</h3>
      <p>{description}</p>
      Skills:
      <small>{tech}</small>
      <br />
      <LiveButton href={link} onClick={handleClick} />
    </div>
  );
}
