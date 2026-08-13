import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/Hero.css";
import ProfileCard from "./ProfileCard";
import avatar from "../assets/avatar/BayJason.jpg";
import AboutSlider from "./AboutSlider";
import ProjectsPreview from "./previewPages/ProjectsPreview";
import { useScrollHijackGuard } from "../hooks/useScrollHijackGuard";

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);

  useScrollHijackGuard();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section className="hero">
        <div className="hero-bg-decor" aria-hidden="true">
          <div className="hero-blob blob-1" />
          <div className="hero-blob blob-2" />
          <div className="hero-grid" />
        </div>

        <div className="hero-content">
          <div className="hero-text">
            <span className="hero-kicker">Portfolio</span>

            <h1 className="hero-title">
              Hi, ich bin <span>Jason</span>
            </h1>

            <div className="hero-tags">
              <span>💻 Fullstack</span>
              <span>🐶 Tiere</span>
              <span>🌿 Natur</span>
              <span>🏍️ Motorrad</span>
              <span>🎬 Editing</span>
            </div>

            <p className="hero-subtitle">
              Fachinformatiker für Anwendungsentwicklung mit Vorliebe für
              moderne Web- und Fullstack-Entwicklung.
            </p>

            <div className="hero-actions">
              <Link to="/about" className="hero-btn primary">
                Was ich mache
              </Link>
              <Link to="/contact" className="hero-btn">
                Kontakt
              </Link>
            </div>
          </div>

          <div className="hero-visual">
            <ProfileCard avatarUrl={avatar} />
          </div>
        </div>

        <div
          className={`scroll-indicator ${scrolled ? "hide" : ""}`}
          onClick={() =>
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
          }
        >
          <div className="mouse" />
          <span>Scroll</span>
        </div>
      </section>

      <AboutSlider />

      <ProjectsPreview />
    </>
  );
}
