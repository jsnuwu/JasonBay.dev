import { useEffect, useMemo, useRef, useState } from "react";
import "../styles/AboutSlider.css";
import { useReveal } from "../hooks/useReveal";

import pet1 from "../assets/HeroImages/pets/pet1.jpeg";
import pet2 from "../assets/HeroImages/pets/pet2.jpeg";
import pet3 from "../assets/HeroImages/pets/pet3.jpeg";
import pet4 from "../assets/HeroImages/pets/pet4.jpeg";
import pet5 from "../assets/HeroImages/pets/pet5.jpeg";
import pet6 from "../assets/HeroImages/pets/pet6.jpeg";
import pet7 from "../assets/HeroImages/pets/pet7.jpeg";
import pet8 from "../assets/HeroImages/pets/pet8.jpeg";
import pet9 from "../assets/HeroImages/pets/pet9.jpeg";
import pet10 from "../assets/HeroImages/pets/pet10.jpeg";
import pet12 from "../assets/HeroImages/pets/pet12.jpeg";
import pet13 from "../assets/HeroImages/pets/pet13.jpeg";
import pet14 from "../assets/HeroImages/pets/pet14.jpeg";

import motorcycle from "../assets/HeroImages/motorcycle/motorcycle.jpeg";
import motorcycle3 from "../assets/HeroImages/motorcycle/motorcycle3.jpeg";
import motorcycle4 from "../assets/HeroImages/motorcycle/motorcycle4.jpeg";
import motorcycle6 from "../assets/HeroImages/motorcycle/motorcycle6.jpeg";
import motorcycle7 from "../assets/HeroImages/motorcycle/motorcycle7.jpeg";
import motorcycle8 from "../assets/HeroImages/motorcycle/motorcycle8.jpeg";
import motorcycle9 from "../assets/HeroImages/motorcycle/motorcycle9.jpeg";
import motorcycle10 from "../assets/HeroImages/motorcycle/motorcycle10.jpeg";
import motorcycle11 from "../assets/HeroImages/motorcycle/motorcycle11.jpeg";
import motorcycle12 from "../assets/HeroImages/motorcycle/motorcycle12.jpeg";
import motorcycle13 from "../assets/HeroImages/motorcycle/motorcycle13.jpeg";
import motorcycle14 from "../assets/HeroImages/motorcycle/motorcycle14.jpeg";
import motorcycle15 from "../assets/HeroImages/motorcycle/motorcycle15.jpeg";
import motorcycle16 from "../assets/HeroImages/motorcycle/motorcycle16.jpeg";
import motorcycle17 from "../assets/HeroImages/motorcycle/motorcycle17.jpeg";
import motorcycle18 from "../assets/HeroImages/motorcycle/motorcycle18.jpeg";
import motorcycle19 from "../assets/HeroImages/motorcycle/motorcycle19.jpeg";
import motorcycle20 from "../assets/HeroImages/motorcycle/motorcycle20.jpeg";
import motorcycle21 from "../assets/HeroImages/motorcycle/motorcycle21.jpeg";

import me1 from "../assets/HeroImages/me/me1.jpeg";
import me2 from "../assets/HeroImages/me/me2.jpeg";
import me3 from "../assets/HeroImages/me/me3.jpg";
import me5 from "../assets/HeroImages/me/me5.jpg";

import motoClip1 from "../assets/HeroImages/videos/lv_7596400225086934277_20260813152434.mp4";
import motoClip2 from "../assets/HeroImages/videos/lv_7654485784015260946_20260812210744.mp4";

type Category = "pets" | "moto" | "me";

interface Slide {
  img?: string;
  video?: string;
  title: string;
  category: Category;
}

const categories: { key: "all" | Category; label: string }[] = [
  { key: "all", label: "Alles" },
  { key: "pets", label: "Tiere" },
  { key: "moto", label: "Motorrad" },
  { key: "me", label: "Ich" },
];

const slides: Slide[] = [
  { img: pet1, title: "👆", category: "pets" },
  { img: pet2, title: "🐷", category: "pets" },
  { img: pet3, title: "🐕", category: "pets" },
  { img: pet4, title: "🐾", category: "pets" },
  { img: pet5, title: "😺", category: "pets" },
  { img: pet6, title: "😋", category: "pets" },
  { img: pet7, title: "🧛", category: "pets" },
  { img: pet8, title: "☀️", category: "pets" },
  { img: pet9, title: "🌻", category: "pets" },
  { img: pet10, title: "🐈", category: "pets" },
  { img: pet12, title: "🐽", category: "pets" },
  { img: pet13, title: "😌", category: "pets" },
  { img: pet14, title: "👅", category: "pets" },
  { img: motorcycle, title: "🏍️", category: "moto" },
  { img: motorcycle3, title: "🔧", category: "moto" },
  { img: motorcycle4, title: "🌄", category: "moto" },
  { img: motorcycle6, title: "🌅", category: "moto" },
  { img: motorcycle7, title: "🪖", category: "moto" },
  { img: motorcycle8, title: "😎", category: "moto" },
  { img: motorcycle9, title: "🔥", category: "moto" },
  { img: motorcycle10, title: "🌆", category: "moto" },
  { img: motorcycle11, title: "🚦", category: "moto" },
  { img: motorcycle12, title: "🅿️", category: "moto" },
  { img: motorcycle13, title: "🛠️", category: "moto" },
  { img: motorcycle14, title: "🌇", category: "moto" },
  { img: motorcycle15, title: "🧢", category: "moto" },
  { img: motorcycle16, title: "🕶️", category: "moto" },
  { img: motorcycle17, title: "🚏", category: "moto" },
  { img: motorcycle18, title: "💨", category: "moto" },
  { img: motorcycle19, title: "🏔️", category: "moto" },
  { img: motorcycle20, title: "🌃", category: "moto" },
  { img: motorcycle21, title: "😌", category: "moto" },
  { img: me1, title: "🙂", category: "me" },
  { img: me2, title: "🤔", category: "me" },
  { img: me3, title: "😎", category: "me" },
  { img: me5, title: "✌️", category: "me" },
];

function seededShuffle<T>(items: T[], seed: number): T[] {
  const result = [...items];
  let state = seed;
  const nextRandom = () => {
    state = (state * 1103515245 + 12345) & 0x7fffffff;
    return state / 0x7fffffff;
  };

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(nextRandom() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}

const shuffledSlides = seededShuffle(slides, 1337);

export default function AboutSlider() {
  const sectionRef = useReveal<HTMLElement>();
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [activeCategory, setActiveCategory] = useState<"all" | Category>(
    "all",
  );
  const [hoveredDuo, setHoveredDuo] = useState<"a" | "b" | null>(null);

  const visibleSlides = useMemo(
    () =>
      activeCategory === "all"
        ? shuffledSlides
        : shuffledSlides.filter((slide) => slide.category === activeCategory),
    [activeCategory],
  );

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleWheel = (event: WheelEvent) => {
      const { scrollLeft, scrollWidth, clientWidth } = track;
      const maxScroll = scrollWidth - clientWidth;
      if (maxScroll <= 1) return;

      const goingForward = event.deltaY > 0;
      const atStart = scrollLeft <= 0;
      const atEnd = scrollLeft >= maxScroll - 1;
      if ((goingForward && atEnd) || (!goingForward && atStart)) return;

      event.preventDefault();
      track.scrollLeft += event.deltaY;
    };

    track.addEventListener("wheel", handleWheel, { passive: false });
    return () => track.removeEventListener("wheel", handleWheel);
  }, [activeCategory]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let isDown = false;
    let startX = 0;
    let startScrollLeft = 0;
    let moved = false;
    let lastX = 0;
    let lastTime = 0;
    let velocity = 0;
    let momentumFrame: number | null = null;

    const stopMomentum = () => {
      if (momentumFrame !== null) {
        cancelAnimationFrame(momentumFrame);
        momentumFrame = null;
      }
    };

    const runMomentum = () => {
      velocity *= 0.94;
      track.scrollLeft -= velocity * 16;

      if (Math.abs(velocity) > 0.02) {
        momentumFrame = requestAnimationFrame(runMomentum);
      } else {
        momentumFrame = null;
        track.classList.remove("no-snap");
      }
    };

    const handleMouseDown = (event: MouseEvent) => {
      if ((event.target as HTMLElement).closest("video")) return;

      stopMomentum();
      isDown = true;
      moved = false;
      startX = event.pageX;
      startScrollLeft = track.scrollLeft;
      lastX = event.pageX;
      lastTime = performance.now();
      velocity = 0;
      track.classList.add("dragging", "no-snap");
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (!isDown) return;
      const dx = event.pageX - startX;
      if (Math.abs(dx) > 4) moved = true;
      track.scrollLeft = startScrollLeft - dx;

      const now = performance.now();
      const dt = now - lastTime;
      if (dt > 0) velocity = (event.pageX - lastX) / dt;
      lastX = event.pageX;
      lastTime = now;
    };

    const handleDragStart = (event: DragEvent) => {
      if (moved || isDown) event.preventDefault();
    };

    const endDrag = () => {
      if (!isDown) return;
      isDown = false;
      track.classList.remove("dragging");
      if (!reduceMotion && Math.abs(velocity) > 0.05) {
        momentumFrame = requestAnimationFrame(runMomentum);
      } else {
        track.classList.remove("no-snap");
      }
    };

    track.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", endDrag);
    track.addEventListener("dragstart", handleDragStart);

    return () => {
      stopMomentum();
      track.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", endDrag);
      track.removeEventListener("dragstart", handleDragStart);
    };
  }, [activeCategory]);

  useEffect(() => {
    trackRef.current?.scrollTo({ left: 0, behavior: "instant" });
  }, [activeCategory]);

  const scrollByStep = (direction: "left" | "right") => {
    const track = trackRef.current;
    if (!track) return;

    const step = track.clientWidth * 0.8;
    track.scrollBy({
      left: direction === "right" ? step : -step,
      behavior: "smooth",
    });
  };

  return (
    <section className="about-preview reveal" ref={sectionRef}>
      <h2 className="about-title">Mehr als nur Code</h2>
      <p className="about-subtitle">

      </p>

      <div className="video-duo">
        <video
          className={`video-duo-item duo-a ${hoveredDuo === "a" ? "duo-active" : ""} ${hoveredDuo === "b" ? "duo-inactive" : ""}`}
          onMouseEnter={() => setHoveredDuo("a")}
          onMouseLeave={() => setHoveredDuo(null)}
          src={motoClip1}
          controls
          playsInline
          preload="metadata"
        />
        <video
          className={`video-duo-item duo-b ${hoveredDuo === "b" ? "duo-active" : ""} ${hoveredDuo === "a" ? "duo-inactive" : ""}`}
          onMouseEnter={() => setHoveredDuo("b")}
          onMouseLeave={() => setHoveredDuo(null)}
          src={motoClip2}
          controls
          playsInline
          preload="metadata"
        />
      </div>

      <div className="slider-categories">
        {categories.map((cat) => (
          <button
            key={cat.key}
            className={`slider-category-btn ${activeCategory === cat.key ? "active" : ""}`}
            onClick={() => setActiveCategory(cat.key)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="gallery-row">
        <button
          type="button"
          className="gallery-arrow left"
          onClick={() => scrollByStep("left")}
          aria-label="Zurück"
        >
          ‹
        </button>

        <div className="gallery-track-wrapper">
          <div className="gallery-track" ref={trackRef} key={activeCategory}>
            {visibleSlides.map((slide, index) => (
              <div
                className="gallery-card"
                key={`${slide.img ?? slide.video}-${index}`}
                style={{ animationDelay: `${(index % 10) * 40}ms` }}
              >
                <div className="gallery-card-inner">
                  {slide.video ? (
                    <video
                      src={slide.video}
                      className="gallery-card-video"
                      controls
                      playsInline
                      preload="metadata"
                    />
                  ) : (
                    <img
                      src={slide.img}
                      alt=""
                      loading="lazy"
                      draggable={false}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          className="gallery-arrow right"
          onClick={() => scrollByStep("right")}
          aria-label="Weiter"
        >
          ›
        </button>
      </div>
    </section>
  );
}
