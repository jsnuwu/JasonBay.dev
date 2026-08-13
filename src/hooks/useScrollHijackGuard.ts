import { useEffect } from "react";

export function useScrollHijackGuard(durationMs = 8000) {
  useEffect(() => {
    let userInteracted = false;
    const markInteracted = () => {
      userInteracted = true;
    };
    window.addEventListener("wheel", markInteracted, { passive: true });
    window.addEventListener("pointerdown", markInteracted, { passive: true });
    window.addEventListener("keydown", markInteracted);

    const anchorX = window.scrollX;
    const anchorY = window.scrollY;
    const guardUntil = Date.now() + durationMs;

    const interval = window.setInterval(() => {
      if (Date.now() > guardUntil) {
        window.clearInterval(interval);
        return;
      }
      if (userInteracted) return;
      if (window.scrollX !== anchorX || window.scrollY !== anchorY) {
        window.scrollTo(anchorX, anchorY);
      }
    }, 120);

    return () => {
      window.removeEventListener("wheel", markInteracted);
      window.removeEventListener("pointerdown", markInteracted);
      window.removeEventListener("keydown", markInteracted);
      window.clearInterval(interval);
    };
  }, [durationMs]);
}
