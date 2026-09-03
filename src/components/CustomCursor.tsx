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

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let posX = mouseX;
    let posY = mouseY;
    let angle = 0;
    let visible = false;
    let frame = 0;

    const handleMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      if (!visible) {
        visible = true;
        wrapper.classList.add("is-visible");
      }
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

    const loop = () => {
      const dx = mouseX - posX;
      const dy = mouseY - posY;
      posX += dx * 0.28;
      posY += dy * 0.28;

      const speed = Math.hypot(dx, dy);
      if (speed > 1) {
        angle = Math.atan2(dy, dx) * (180 / Math.PI);
      }
      const stretch = Math.min(1 + speed * 0.012, 1.5);
      const squeeze = Math.max(1 - speed * 0.005, 0.82);

      const hovered = document.elementFromPoint(
        mouseX,
        mouseY,
      ) as HTMLElement | null;
      const nativelyInteractive = hovered?.closest(
        'a, button, input, textarea, select, label, [role="button"], [tabindex]:not([tabindex="-1"])',
      );
      const cursorStyle = hovered ? getComputedStyle(hovered).cursor : "auto";
      const interactive =
        !!nativelyInteractive ||
        cursorStyle === "pointer" ||
        cursorStyle === "grab" ||
        cursorStyle === "grabbing" ||
        cursorStyle === "text";
      wrapper.classList.toggle("is-interactive", interactive);

      wrapper.style.transform = `translate3d(${posX}px, ${posY}px, 0) rotate(${angle}deg) scale(${stretch}, ${squeeze})`;

      frame = requestAnimationFrame(loop);
    };
    frame = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(frame);
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
