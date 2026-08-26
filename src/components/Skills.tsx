import "../styles/Skills.css";
import { useReveal } from "../hooks/useReveal";
import { useLanguage } from "../i18n/useLanguage";
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

const groupIcons: React.ReactNode[] = [
  <FaFilm />,
  <FaCut />,
  <FaPalette />,
  <FaImage />,
  <FaHashtag />,
  <FaLaptopCode />,
  <FaCode />,
  <FaTasks />,
];

export default function Skills() {
  const ref = useReveal<HTMLElement>();
  const { t } = useLanguage();

  return (
    <section className="skills-section reveal" ref={ref}>
      <h2>{t.skills.heading}</h2>

      <div className="skills-grid">
        {t.skills.groups.map((group, index) => (
          <div className="skill-group" key={group.title}>
            <div className="skill-group-icon">{groupIcons[index]}</div>
            <h3>{group.title}</h3>
            <p>{group.items}</p>
          </div>
        ))}
      </div>

      <div className="skills-languages">
        <FaLanguage className="skills-languages-icon" />
        {t.skills.languages.map((lang) => (
          <span key={lang.name}>
            <strong>{lang.name}</strong> · {lang.level}
          </span>
        ))}
      </div>
    </section>
  );
}
