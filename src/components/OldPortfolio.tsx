import { useEffect } from "react";
import "../styles/Hero.css";
import ProfileCard from "./ProfileCard";
import avatar from "../assets/avatar/BayJason.jpg";
import SocialStats from "./SocialStats";
import ProjectsPreview from "./previewPages/ProjectsPreview";
import { useLanguage } from "../i18n/useLanguage";
import ScrambledText from "./ScrambledText";
import TikTokShowcase from "./TikTokShowcase";

export default function OldPortfolio() {
  const { t } = useLanguage();

  useEffect(() => {
    const hadDark = document.body.classList.contains("dark");
    document.body.classList.add("dark");
    return () => {
      if (!hadDark) document.body.classList.remove("dark");
    };
  }, []);

  return (
    <div className="old-portfolio">
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
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
                  {tag.label}
                </a>
              ))}
            </div>

            <p className="hero-subtitle">
              <ScrambledText text={t.hero.subtitle} />
            </p>
          </div>

          <div className="hero-visual">
            <ProfileCard avatarUrl={avatar} />
          </div>
        </div>
      </section>

      <ProjectsPreview />

      <SocialStats />

      <TikTokShowcase />
    </div>
  );
}
