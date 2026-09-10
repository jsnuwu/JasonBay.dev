import { useEffect, useState } from "react";

import "../styles/WelcomeHeroAnimation.css";

const NAME = "Jason Bay";
const INTRO_DURATION = 1600;
const SESSION_KEY = "welcome-intro-shown";

export default function WelcomeHeroAnimation() {
  const [alreadyShown] = useState(() => {
    try {
      return sessionStorage.getItem(SESSION_KEY) === "true";
    } catch {
      return false;
    }
  });
  const [introDone, setIntroDone] = useState(false);

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
    const duration = prefersReducedMotion ? 400 : INTRO_DURATION;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const timer = window.setTimeout(() => {
      setIntroDone(true);
      document.body.style.overflow = previousOverflow;
    }, duration);

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = previousOverflow;
    };
  }, [alreadyShown]);

  if (alreadyShown) return null;

  return (
    <div className={`welcome-animation ${introDone ? "intro-done" : ""}`}>
      <span className="welcome-name">{NAME}</span>
    </div>
  );
}
