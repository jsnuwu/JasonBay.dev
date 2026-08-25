import "../styles/Skills.css";
import { useReveal } from "../hooks/useReveal";
import {
  FaFilm,
  FaCut,
  FaPalette,
  FaImage,
  FaHashtag,
  FaLaptopCode,
  FaCode,
  FaTasks,
  FaLanguage,
} from "react-icons/fa";

interface SkillGroup {
  icon: React.ReactNode;
  title: string;
  items: string;
}

const skillGroups: SkillGroup[] = [
  {
    icon: <FaFilm />,
    title: "Video & Motion",
    items: "Premiere Pro, After Effects, DaVinci Resolve, CapCut",
  },
  {
    icon: <FaCut />,
    title: "Schnitt & Post",
    items: "Color Grading, Sounddesign, Untertitel, Kurzformat",
  },
  {
    icon: <FaPalette />,
    title: "Grafikdesign",
    items: "Photoshop, Illustrator, InDesign, Canva",
  },
  {
    icon: <FaImage />,
    title: "Bildbearbeitung",
    items: "Retusche, Freistellen, Composing",
  },
  {
    icon: <FaHashtag />,
    title: "Social Media",
    items: "Thumbnails, Cover, Posts, Kanal-Branding",
  },
  {
    icon: <FaLaptopCode />,
    title: "Interface & Web",
    items: "Figma, Design-Systeme, WordPress, Elementor",
  },
  {
    icon: <FaCode />,
    title: "Entwicklung",
    items: "HTML5, CSS3, Tailwind, Angular, React, TypeScript",
  },
  {
    icon: <FaTasks />,
    title: "Arbeitsweise",
    items: "Scrum, JIRA, Confluence, Git, KI-gestützte Workflows",
  },
];

const languages = [
  { name: "Deutsch", level: "Muttersprache" },
  { name: "Englisch", level: "C1" },
];

export default function Skills() {
  const ref = useReveal<HTMLElement>();

  return (
    <section className="skills-section reveal" ref={ref}>
      <h2>Skills</h2>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div className="skill-group" key={group.title}>
            <div className="skill-group-icon">{group.icon}</div>
            <h3>{group.title}</h3>
            <p>{group.items}</p>
          </div>
        ))}
      </div>

      <div className="skills-languages">
        <FaLanguage className="skills-languages-icon" />
        {languages.map((lang) => (
          <span key={lang.name}>
            <strong>{lang.name}</strong> · {lang.level}
          </span>
        ))}
      </div>
    </section>
  );
}
