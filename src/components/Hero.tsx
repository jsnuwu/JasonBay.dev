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
import WelcomeHeroAnimation from "./WelcomeHeroAnimation";
import ScrambledText from "./ScrambledText";
import TikTokShowcase from "./TikTokShowcase";

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
      <WelcomeHeroAnimation />

      <section className="hero">
        <div className="hero-bg-decor" aria-hidden="true">
          <div className="hero-blob blob-1" />
          <div className="hero-blob blob-2" />
          <div className="hero-grid" />
        </div>

        <div className="hero-content">
          <div className="hero-text">
            <span className="hero-kicker">
              <ScrambledText text={t.hero.kicker} />
            </span>

            <h1 className="hero-title">
              <ScrambledText text={t.hero.titlePrefix} />{" "}
              <span className="hero-title-highlight">
                <ScrambledText text="Jason" />
              </span>
            </h1>

            <div className="hero-tags">
              {t.hero.tags.map((tag) => (
                <a
                  key={tag.target}
                  href={`#${tag.target}`}
                  className="hero-tag"
                  onClick={(event) => {
                    event.preventDefault();
                    document
                      .getElementById(tag.target)
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <ScrambledText text={tag.label} />
                </a>
              ))}
            </div>

            <p className="hero-subtitle">
              <ScrambledText text={t.hero.subtitle} />
            </p>

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
          <span>
            <ScrambledText text={t.hero.scroll} />
          </span>
        </div>
      </section>

      <ProjectsPreview />

      <AboutSlider />

      <SocialStats />

      <TikTokShowcase />
    </>
  );
}
