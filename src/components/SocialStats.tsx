import "../styles/SocialStats.css";
import { useReveal } from "../hooks/useReveal";
import { useLanguage } from "../i18n/useLanguage";
import ScrambledText from "./ScrambledText";
import InstagramIcon from "../assets/images/Instagram.png";
import TikTokIcon from "../assets/images/TikTok.png";
import GitHubIcon from "../assets/images/GitHub.png";
import LinkedInIcon from "../assets/images/LinkedIn.png";

interface SocialStat {
  name: string;
  handle: string;
  href: string;
  icon: string;
  stats: { label: string; value: string }[];
  bio?: string;
  cta?: string;
  accent: string;
  latestPost?: { image?: string; caption: string };
}

export default function SocialStats() {
  const sectionRef = useReveal<HTMLElement>();
  const { t } = useLanguage();

  const socials: SocialStat[] = [
    {
      name: "GitHub",
      handle: "@jsnuwu",
      href: "https://github.com/jsnuwu",
      icon: GitHubIcon,
      stats: [
        { label: "Repos", value: "12" },
        { label: "Contributions", value: "143" },
      ],
      accent: "#0969da",
    },
    {
      name: "TikTok",
      handle: "@jsnuwu",
      href: "https://www.tiktok.com/@jsnuwu",
      icon: TikTokIcon,
      stats: [
        { label: "Follower", value: "20.8K" },
        { label: "Likes", value: "3.5M" },
      ],
      bio: "Random edits by some guy",
      accent: "#ee1d52",
      latestPost: { caption: t.socialStats.tiktokPreviewCaption },
    },
    {
      name: "Instagram",
      handle: "@jsnuwu",
      href: "https://www.instagram.com/jsnuwu/",
      icon: InstagramIcon,
      stats: [{ label: "Follower", value: "196" }],
      accent: "#d62976",
      latestPost: { caption: t.socialStats.instagramPreviewCaption },
    },
    {
      name: "LinkedIn",
      handle: "Jason Bay",
      href: "https://www.linkedin.com/in/jason-bay-275499398/",
      icon: LinkedInIcon,
      stats: [],
      cta: t.socialStats.linkedinCta,
      accent: "#0a66c2",
    },
  ];

  return (
    <section className="social-stats reveal" ref={sectionRef}>
      <ScrambledText
        as="h2"
        className="social-stats-title"
        text={t.socialStats.title}
      />
      <p className="social-stats-subtitle">
        <ScrambledText text={t.socialStats.subtitle} />
      </p>

      <div className="social-stats-grid">
        {socials.map((social) => (
          <div className="social-stat-cell" key={social.name}>
            {social.latestPost && (
              <div className="social-stat-preview">
                <span className="social-stat-preview-label">
                  {t.socialStats.latestPost}
                </span>
                {social.latestPost.image ? (
                  <img src={social.latestPost.image} alt="" />
                ) : (
                  <div className="social-stat-preview-placeholder">
                    <img
                      src={social.icon}
                      alt=""
                      className="social-stat-preview-icon"
                    />
                  </div>
                )}
                <span className="social-stat-preview-caption">
                  {social.latestPost.caption}
                </span>
                <span className="social-stat-preview-tail" />
              </div>
            )}

            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-stat-card"
              style={
                { "--stat-accent": social.accent } as React.CSSProperties
              }
            >
              <div className="social-stat-header">
                <img src={social.icon} alt="" className="social-stat-icon" />
                <div>
                  <ScrambledText as="h3" text={social.name} />
                  <span className="social-stat-handle">{social.handle}</span>
                </div>
              </div>

              {social.bio && (
                <p className="social-stat-bio">
                  <ScrambledText text={social.bio} />
                </p>
              )}

              {social.stats.length > 0 ? (
                <div className="social-stat-numbers">
                  {social.stats.map((stat) => (
                    <div key={stat.label} className="social-stat-number">
                      <strong>{stat.value}</strong>
                      <span>{stat.label}</span>
                    </div>
                  ))}
                </div>
              ) : (
                social.cta && (
                  <span className="social-stat-cta">{social.cta}</span>
                )
              )}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
