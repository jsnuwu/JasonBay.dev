import "../styles/Skills.css";
import { useReveal } from "../hooks/useReveal";
import { useLanguage } from "../i18n/useLanguage";
import ScrambledText from "./ScrambledText";
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
  <FaCode />,
  <FaLaptopCode />,
  <FaTasks />,
  <FaFilm />,
  <FaPalette />,
  <FaCut />,
  <FaImage />,
  <FaHashtag />,
];

export default function Skills() {
  const ref = useReveal<HTMLElement>();
  const { t } = useLanguage();

  return (
    <section className="skills-section reveal" ref={ref}>
      <ScrambledText as="h2" text={t.skills.heading} />

      <div className="skills-grid">
        {t.skills.groups.map((group, index) => (
          <div className="skill-group" key={group.title}>
            <div className="skill-group-icon">{groupIcons[index]}</div>
            <ScrambledText as="h3" text={group.title} />
            <p>
              <ScrambledText text={group.items} />
            </p>
          </div>
        ))}
      </div>

      <div className="skills-languages">
        <FaLanguage className="skills-languages-icon" />
        {t.skills.languages.map((lang) => (
          <span key={lang.name}>
            <strong>
              <ScrambledText text={lang.name} />
            </strong>{" "}
            · <ScrambledText text={lang.level} />
          </span>
        ))}
      </div>
    </section>
  );
}
