import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../styles/Hero.css';
import ProfileCard from './ProfileCard';
import avatar from '../assets/avatar/BayJason.jpg';

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero-wrapper">
      <div className="hero-left">
        <h1>Hi, ich bin Jason</h1>
        <p>Fachinformatiker für Anwendungsentwicklung.</p>

        <div className="hero-buttons">
          <Link to="/about" className="btn">
            Was ich mache
          </Link>

          <Link to="/contact" className="btn btn-reverse">
            Kontakt
          </Link>
        </div>
      </div>

      <div className="hero-right">
        <ProfileCard avatarUrl={avatar} />
      </div>

      {/* Scroll Hint */}
      <div className={`scroll-hint ${scrolled ? 'hide' : ''}`}>
        ↓ Scroll für mehr
      </div>
    </section>
  );
}
