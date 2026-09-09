import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";

import "../styles/WelcomeHeroAnimation.css";

const NAME = "JASON BAY";
const INTRO_DURATION = 3400;
const SESSION_KEY = "welcome-intro-shown";
const PARTICLE_COUNT = 22;

function seededRandom(seed: number) {
  const value = Math.sin(seed * 999.7) * 43758.5453;
  return value - Math.floor(value);
}

export default function WelcomeHeroAnimation() {
  const [alreadyShown] = useState(() => {
    try {
      return sessionStorage.getItem(SESSION_KEY) === "true";
    } catch {
      return false;
    }
  });
  const [introDone, setIntroDone] = useState(false);
  const [progress, setProgress] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (alreadyShown) return;

    try {
      sessionStorage.setItem(SESSION_KEY, "true");
    } catch {
      void 0;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const duration = prefersReducedMotion ? 500 : INTRO_DURATION;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const start = performance.now();
    let frame: number;

    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min(
        100,
        Math.round((elapsed / (duration * 0.5)) * 100),
      );
      setProgress(pct);
      if (elapsed < duration) {
        frame = requestAnimationFrame(tick);
      }
    };
    frame = requestAnimationFrame(tick);

    const timer = window.setTimeout(() => {
      setIntroDone(true);
      document.body.style.overflow = previousOverflow;
    }, duration);

    return () => {
      window.clearTimeout(timer);
      cancelAnimationFrame(frame);
      document.body.style.overflow = previousOverflow;
    };
  }, [alreadyShown]);

  useEffect(() => {
    if (alreadyShown || introDone) return;

    const node = rootRef.current;
    if (!node) return;

    const handlePointerMove = (event: PointerEvent) => {
      const x = (event.clientX / window.innerWidth) * 100;
      const y = (event.clientY / window.innerHeight) * 100;
      node.style.setProperty("--mx", `${x}%`);
      node.style.setProperty("--my", `${y}%`);
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [alreadyShown, introDone]);

  if (alreadyShown) return null;

  return (
    <div
      ref={rootRef}
      className={`welcome-animation ${introDone ? "intro-done" : ""}`}
    >
      <section className="intro">
        <div className="intro-glow" aria-hidden="true" />

        <div className="intro-blobs" aria-hidden="true">
          <span className="intro-blob blob-a" />
          <span className="intro-blob blob-b" />
        </div>

        <div className="intro-grid" aria-hidden="true" />

        <div className="light-line" />

        <div className="welcome-progress" aria-hidden="true">
          <span className="welcome-progress-label">LOADING</span>
          <span className="welcome-progress-track">
            <span
              className="welcome-progress-fill"
              style={{ width: `${progress}%` }}
            />
          </span>
          <span className="welcome-progress-value">
            {String(progress).padStart(2, "0")}%
          </span>
        </div>

        <div className="welcome-title">
          {NAME.split("").map((letter, index) => (
            <span
              key={index}
              style={
                {
                  "--letter-index": index,
                } as CSSProperties
              }
            >
              {letter === " " ? " " : letter}
            </span>
          ))}
        </div>

        <div className="particles" aria-hidden="true">
          {Array.from({ length: PARTICLE_COUNT }).map((_, index) => {
            const left = seededRandom(index + 1) * 100;
            const top = seededRandom(index + 42) * 100;
            const delay = seededRandom(index + 7) * 3;
            const duration = 2.6 + seededRandom(index + 13) * 2.2;

            return (
              <span
                key={index}
                style={
                  {
                    left: `${left}%`,
                    top: `${top}%`,
                    animationDelay: `${delay}s`,
                    animationDuration: `${duration}s`,
                  } as CSSProperties
                }
              />
            );
          })}
        </div>
      </section>

      <div
        className="reveal-light"
        aria-hidden="true"
      />
    </div>
  );
}
