import "../styles/SocialStats.css";
import { useReveal } from "../hooks/useReveal";
import InstagramIcon from "../assets/images/instagram.png";
import TikTokIcon from "../assets/images/TikTok.png";
import GitHubIcon from "../assets/images/GitHub.png";
import LinkedInIcon from "../assets/images/linkedin.png";

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
    accent: "linear-gradient(45deg, #8250df, #a371f7)",
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
    bio: "Random edits by some guy 🫡",
    accent: "linear-gradient(45deg, #69C9D0, #EE1D52)",
    latestPost: { caption: "Neuester Post auf TikTok ansehen →" },
  },
  {
    name: "Instagram",
    handle: "@jsnuwu",
    href: "https://www.instagram.com/jsnuwu/",
    icon: InstagramIcon,
    stats: [{ label: "Follower", value: "196" }],
    accent:
      "linear-gradient(45deg, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5)",
    latestPost: { caption: "Neuester Post auf Instagram ansehen →" },
  },
  {
    name: "LinkedIn",
    handle: "Jason Bay",
    href: "https://www.linkedin.com/in/jason-bay-275499398/",
    icon: LinkedInIcon,
    stats: [],
    cta: "Lass uns vernetzen →",
    accent: "linear-gradient(45deg, #0072b1, #00a0dc)",
  },
];

export default function SocialStats() {
  const sectionRef = useReveal<HTMLElement>();

  return (
    <section className="social-stats reveal" ref={sectionRef}>
      <span className="social-stats-kicker">Abseits vom Code</span>
      <h2 className="social-stats-title">Auch online unterwegs</h2>
      <p className="social-stats-subtitle">
        Ein paar Zahlen von den Kanälen, auf denen ich sonst noch unterwegs
        bin.
      </p>

      <div className="social-stats-grid">
        {socials.map((social) => (
          <div className="social-stat-cell" key={social.name}>
            {social.latestPost && (
              <div className="social-stat-preview">
                <span className="social-stat-preview-label">
                  Neuester Beitrag
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
                  <h3>{social.name}</h3>
                  <span>{social.handle}</span>
                </div>
              </div>

              {social.bio && <p className="social-stat-bio">{social.bio}</p>}

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
