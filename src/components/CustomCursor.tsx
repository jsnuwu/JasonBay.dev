import { useEffect, useRef } from "react";
import "../styles/CustomCursor.css";

export default function CustomCursor() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const isFinePointer = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    ).matches;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (!isFinePointer || reduceMotion) return;

    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    document.body.classList.add("custom-cursor-active");

    let visible = false;

    const handleMove = (event: MouseEvent) => {
      wrapper.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;

      if (!visible) {
        visible = true;
        wrapper.classList.add("is-visible");
      }

      const hovered = event.target as HTMLElement | null;
      const interactive = !!hovered?.closest(
        'a, button, input, textarea, select, label, [role="button"], [tabindex]:not([tabindex="-1"])',
      );
      wrapper.classList.toggle("is-interactive", interactive);
    };

    const handleLeaveWindow = () => {
      visible = false;
      wrapper.classList.remove("is-visible");
    };

    const handleDown = () => wrapper.classList.add("is-pressed");
    const handleUp = () => wrapper.classList.remove("is-pressed");

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseleave", handleLeaveWindow);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeaveWindow);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
      document.body.classList.remove("custom-cursor-active");
    };
  }, []);

  return (
    <div className="custom-cursor" ref={wrapperRef} aria-hidden="true">
      <span className="custom-cursor-dot" />
    </div>
  );
}
