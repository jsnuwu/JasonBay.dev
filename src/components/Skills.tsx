import "../styles/Skills.css";

const skills = [
  // Core
  "Angular",
  "React",
  "TypeScript",
  "JavaScript",
  "Java",

  // Frontend
  "Three.js",
  "Vue.js",
  "HTML/CSS",
  "Tailwind CSS",
  "SCSS",
  "Vite",
  "JavaFX",

  // Backend
  "Spring Boot",
  "Node.js",
  "C#",
  "REST APIs",
  "Hibernate",

  // Datenbanken
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "SQL",

  // Testing & Qualität
  "Unit Testing",
  "SonarQube",
  "Debugging",

  // DevOps & Tools
  "Docker",
  "Git",
  "Maven",
  "Jenkins",
  "JIRA",
  "Confluence",

  // Methoden & Design
  "Agile Entwicklung",
  "Scrum",
  "Figma",
  "UI/UX Design",
];

export default function Skills() {
  return (
    <section className="skills-section">
      <h2>Skills</h2>

      <div className="skills-cloud">
        {skills.map((skill, index) => (
          <span key={index} className="skill-item">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}