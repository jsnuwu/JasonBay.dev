import "../styles/ProjectCard.css";
import LiveButton from "./LiveButton";
import { useLanguage } from "../i18n/useLanguage";

interface ProjectCardProps {
  name: string;
  description: string;
  descriptionEn: string;
  tech: string;
  link: string;
}

export default function ProjectCard({
  name,
  description,
  descriptionEn,
  tech,
  link,
}: ProjectCardProps) {
  const { lang, t } = useLanguage();

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
      <p>{lang === "en" ? descriptionEn : description}</p>
      {t.projects.skillsLabel}
      <small>{tech}</small>
      <br />
      <LiveButton href={link} onClick={handleClick} />
    </div>
  );
}
