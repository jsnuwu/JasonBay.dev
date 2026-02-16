import '../styles/SocialCard.css';
import InstagramIcon from '../assets/images/instagram.png';
import TikTokIcon from '../assets/images/TikTok.png';
import GitHubIcon from '../assets/images/GitHub.png';
import LinkedInIcon from '../assets/images/linkedin.png';
import YoutubeIcon from '../assets/images/Youtube.png';

export default function SocialCard() {
  const socials = [
    { href: 'https://www.linkedin.com/in/jason-bay-275499398/', img: LinkedInIcon, color: '#0072b1' },
    { href: 'https://github.com/jsnuwu', img: GitHubIcon, color: '#181717' },
    { href: 'https://www.instagram.com/jsnuwu/', img: InstagramIcon, gradient: 'linear-gradient(45deg, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5)' },
    { href: 'https://www.tiktok.com/@jsnuwu?is_from_webapp=1&sender_device=pc', img: TikTokIcon, gradient: 'linear-gradient(45deg, #69C9D0, #EE1D52)'},
    { href: 'https://www.youtube.com/@jsnuwu', img: YoutubeIcon, color: '#d13131' },
  ];

  return (
    <div className="card">
      {socials.map((s, i) => (
        <a
          key={i}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          style={{ '--hover-color': s.gradient || s.color } as React.CSSProperties}
        >
          <img src={s.img} alt="social icon" className="socialImg" />
        </a>
      ))}
    </div>
  );
}
