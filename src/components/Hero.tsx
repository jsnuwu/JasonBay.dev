import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/Hero.css";
import ProfileCard from "./ProfileCard";
import avatar from "../assets/avatar/BayJason.jpg";
import AboutSlider from "./AboutSlider";
import SocialStats from "./SocialStats";
import ProjectsPreview from "./previewPages/ProjectsPreview";
import { useScrollHijackGuard } from "../hooks/useScrollHijackGuard";
import { useLanguage } from "../i18n/useLanguage";

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

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
            <span className="hero-kicker">{t.hero.kicker}</span>

            <h1 className="hero-title">
              {t.hero.titlePrefix} <span>Jason</span>
            </h1>

            <div className="hero-tags">
              {t.hero.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            <p className="hero-subtitle">{t.hero.subtitle}</p>

            <div className="hero-actions">
              <Link to="/about" className="hero-btn primary">
                {t.hero.ctaPrimary}
              </Link>
              <Link to="/contact" className="hero-btn">
                {t.hero.ctaSecondary}
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
          <span>{t.hero.scroll}</span>
        </div>
      </section>

      <AboutSlider />

      <SocialStats />

      <ProjectsPreview />
    </>
  );
}
