import '../styles/Skills.css';

const skills = ['React', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Angular', '3D-Entwicklung'];

export default function Skills() {
  return (
    <section className="skills-section">
      <h2>Skills</h2>
      <ul className="skills-list">
        {skills.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    </section>
  );
}
