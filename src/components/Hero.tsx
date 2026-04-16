import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../styles/Hero.css';
import ProfileCard from './ProfileCard';
import avatar from '../assets/avatar/BayJason.jpg';

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

return (
  <>
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Hi, ich bin <span>Jason</span>
          </h1>

          <p className="hero-subtitle">
           Fachinformatiker für Anwendungsentwicklung mit Vorliebe für moderne Web- und Fullstack-Entwicklung.
          </p>

          <div className="hero-actions">
            <Link to="/about" className="hero-btn primary">Was ich mache</Link>
            <Link to="/contact" className="hero-btn">Kontakt</Link>
          </div>
        </div>

        <div className="hero-visual">
          <ProfileCard avatarUrl={avatar} />
        </div>
      </div>

      <div className={`scroll-indicator ${scrolled ? 'hide' : ''}`}>
        <div className="mouse" />
        <span>Scroll (in progress)</span>
      </div>
    </section>

  </>
);

}
