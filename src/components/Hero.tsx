import { Link } from 'react-router-dom';
import '../styles/Hero.css';
import ProfileCard from './ProfileCard';
import avatar from '../assets/avatar/BayJason.jpg';

export default function Hero() {
  return (
    <section className="hero-wrapper">
      <div className="hero-left">
        <h1>Hi, ich bin Jason</h1>
        <p>Fachinformatiker für Anwendungsentwicklung.</p>

        <div className="hero-buttons">
          <Link to="/about" className="btn">
            Über mich
          </Link>

          <Link to="/contact" className="btn btn-reverse">
            Kontakt
          </Link>
        </div>
      </div>

      <div className="hero-right">
        <ProfileCard
           avatarUrl={avatar}
        />   
      </div>
    </section>
  );
}
