import "../styles/ProjectCard.css";
import LiveButton from "./LiveButton";
import { useLanguage } from "../i18n/useLanguage";
import ScrambledText from "./ScrambledText";

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
      <ScrambledText as="h3" text={name} />
      <p>
        <ScrambledText text={lang === "en" ? descriptionEn : description} />
      </p>
      <ScrambledText text={t.projects.skillsLabel} />
      <small>
        <ScrambledText text={tech} />
      </small>
      <br />
      <LiveButton href={link} onClick={handleClick} />
    </div>
  );
}
