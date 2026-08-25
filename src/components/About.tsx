import "../styles/About.css";
import Projects from "./Projects";
import Skills from "./Skills";
import Experience from "./Experience";
import { useReveal } from "../hooks/useReveal";

export default function About() {
  const ref = useReveal<HTMLElement>();
  const spotlightRef = useReveal<HTMLElement>();

  return (
    <>
      <section className="about-section reveal" ref={ref}>
        <h2>Über mich</h2>
        <p className="about-lead">Gestalter mit technischem Hintergrund.</p>
        <p>
          Seit 2020 schneide ich Videos für Social Media – auf meinem eigenen
          TikTok-Kanal mit über 20.000 Followern und 3,5 Mio. Likes. Dazu
          kommen Thumbnails, Social-Media-Grafiken und Bildbearbeitung mit der
          Adobe-Suite. Beruflich gestalte ich seit drei Jahren digitale
          Oberflächen – von Layout, Typografie und Bildsprache bis zum
          fertigen Livegang. Was ich mitbringe: ein Auge für Timing und
          Komposition, saubere Dateien und ein Kopf, der auch die technische
          Seite versteht.
        </p>
      </section>

      <section className="video-spotlight reveal" ref={spotlightRef}>
        <span className="video-spotlight-kicker">Video & Grafikdesign</span>
        <h3>TikTok @jsnuwu – eigener Kanal seit 2020</h3>
        <p className="video-spotlight-sub">
          Konzeption, Schnitt und Gestaltung in Eigenregie
        </p>

        <div className="video-spotlight-stats">
          <div className="video-spotlight-stat">
            <strong>20.800</strong>
            <span>Follower</span>
          </div>
          <div className="video-spotlight-stat">
            <strong>3,5 Mio.</strong>
            <span>Likes</span>
          </div>
          <div className="video-spotlight-stat">
            <strong>5 Jahre</strong>
            <span>Schnitt-Praxis</span>
          </div>
        </div>

        <ul className="video-spotlight-list">
          <li>
            Schnitt, Color Grading und Sounddesign von Kurzvideos mit Premiere
            Pro, After Effects und DaVinci Resolve
          </li>
          <li>
            Gestaltung von Thumbnails, Cover-Grafiken und Kanal-Branding mit
            Photoshop und Illustrator
          </li>
          <li>
            Bildbearbeitung und Retusche – Freistellen, Composings, Farblooks
          </li>
          <li>
            Kontinuierlicher Reichweitenaufbau: Auswertung von Hook,
            Schnittrhythmus und Formatlänge
          </li>
        </ul>
      </section>

      <Experience />

      <Skills />

      <Projects />
    </>
  );
}
