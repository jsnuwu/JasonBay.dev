import "../styles/TechStack.css";
import { useReveal } from "../hooks/useReveal";
import {
  FaReact,
  FaAngular,
  FaJava,
  FaDocker,
  FaGitAlt,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiTypescript,
  SiSpringboot,
  SiPostgresql,
  SiMongodb,
  SiJavascript,
  SiMysql,
  SiSharp,
} from "react-icons/si";

const techStack = [
  { icon: <FaReact color="#087EA4" />, name: "React" },
  { icon: <FaAngular color="#DD0031" />, name: "Angular" },
  { icon: <SiTypescript color="#3178C6" />, name: "TypeScript" },
  { icon: <SiJavascript color="#F7DF1E" />, name: "JavaScript" },

  { icon: <FaNodeJs color="#339933" />, name: "Node.js" },
  { icon: <SiSpringboot color="#6DB33F" />, name: "Spring Boot" },
  { icon: <FaJava color="#F89820" />, name: "Java" },
  { icon: <SiSharp color="#239120" />, name: "C#" },

  { icon: <SiPostgresql color="#336791" />, name: "PostgreSQL" },
  { icon: <SiMysql color="#4479A1" />, name: "MySQL" },
  { icon: <SiMongodb color="#47A248" />, name: "MongoDB" },

  { icon: <FaDocker color="#2496ED" />, name: "Docker" },
  { icon: <FaGitAlt />, name: "Git" },

  { icon: <FaHtml5 color="#E34F26" />, name: "HTML" },
  { icon: <FaCss3Alt color="#1572B6" />, name: "CSS" },
];

export default function TechStack() {
  const ref = useReveal<HTMLElement>();

  return (
    <section className="techstack-section reveal" ref={ref}>
      <h2>Tech Stack</h2>

      <div className="marquee">
        <div className="marquee-content">
          {[...techStack, ...techStack].map((tech, index) => (
            <div key={index} className="skill-item">
              {tech.icon}
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
