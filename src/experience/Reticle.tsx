import { useEffect, useRef } from "react";

export default function Reticle() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isFine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!isFine) return;
    const el = ref.current;
    if (!el) return;

    document.body.classList.add("reticle-active");
    let visible = false;
    let lastTarget: EventTarget | null = null;

    const move = (e: MouseEvent) => {
      el.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;

      if (!visible) {
        visible = true;
        el.classList.add("is-visible");
      }

      if (e.target !== lastTarget) {
        lastTarget = e.target;
        const target = e.target as HTMLElement | null;
        const interactive = !!target?.closest(
          'a, button, [role="button"], input, textarea, [data-hover]',
        );
        el.classList.toggle("is-active", interactive);
      }
    };
    const leave = () => {
      visible = false;
      el.classList.remove("is-visible");
    };
    const down = () => {
      el.classList.remove("did-click");
      el.classList.add("is-pressed");
    };
    const up = () => {
      el.classList.remove("is-pressed");
      el.classList.add("did-click");
      window.setTimeout(() => el.classList.remove("did-click"), 420);
    };

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    document.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.removeEventListener("mouseleave", leave);
      document.body.classList.remove("reticle-active");
    };
  }, []);

  return (
    <div className="reticle" ref={ref} aria-hidden="true">
      <span className="reticle-box">
        <span className="reticle-corner tl" />
        <span className="reticle-corner tr" />
        <span className="reticle-corner bl" />
        <span className="reticle-corner br" />
      </span>
      <span className="reticle-ring" />
      <span className="reticle-dot" />
    </div>
  );
}
