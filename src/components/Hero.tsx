import { Link } from 'react-router-dom';
import '../styles/Hero.css';

export default function Hero() {
  return (
    <section className="hero-section">
      <h1>Hi, ich bin Jason </h1>
      <p>Fachinformatiker für Anwendungsentwicklung.</p>

      <div className="hero-buttons">
        {/* Über mich */}
        <Link to="/about" className="btn">
          Über mich
        </Link>

        {/* Kontakt */}
        <Link to="/contact" className="btn btn-reverse">
          Kontakt
        </Link>
      </div>
    </section>
  );
}
