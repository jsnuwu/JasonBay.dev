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
import motorcycle1 from "../assets/HeroImages/motorcycle/motorcycle1.jpeg";
import motorcycle2 from "../assets/HeroImages/motorcycle/motorcycle2.jpeg";
import motorcycle3 from "../assets/HeroImages/motorcycle/motorcycle3.jpeg";
import motorcycle4 from "../assets/HeroImages/motorcycle/motorcycle4.jpeg";
import motorcycle5 from "../assets/HeroImages/motorcycle/motorcycle5.jpeg";
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

type Category = "pets" | "moto" | "me";

interface Slide {
  img: string;
  title: string;
  category: Category;
}

const categories: { key: "all" | Category; label: string; emoji: string }[] =
  [
    { key: "all", label: "Alles", emoji: "✨" },
    { key: "pets", label: "Tiere", emoji: "🐶" },
    { key: "moto", label: "Motorrad", emoji: "🏍️" },
    { key: "me", label: "Ich", emoji: "🙂" },
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
  { img: motorcycle1, title: "🛣️", category: "moto" },
  { img: motorcycle2, title: "⚙️", category: "moto" },
  { img: motorcycle3, title: "🔧", category: "moto" },
  { img: motorcycle4, title: "🌄", category: "moto" },
  { img: motorcycle5, title: "🏁", category: "moto" },
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

const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
  const card = e.currentTarget;

  const rect = card.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = -(y - centerY) / 38;
  const rotateY = (x - centerX) / 38;

  card.style.transform = `
    rotateX(${rotateX}deg)
    rotateY(${rotateY}deg)
    scale(1.03)
  `;
};

const handleMouseLeave = () => {
  const card = document.querySelector(".phone-frame") as HTMLDivElement;

  if (!card) return;

  card.style.transform = `
    rotateX(0deg)
    rotateY(0deg)
    scale(1)
  `;
};

export default function AboutSlider() {
  const sectionRef = useReveal<HTMLElement>();
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const [time, setTime] = useState("");
  const [activeCategory, setActiveCategory] = useState<"all" | Category>(
    "all",
  );

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const formatted = now.toLocaleTimeString("de-DE", {
        hour: "2-digit",
        minute: "2-digit",
      });

      setTime(formatted);
    };

    updateTime();

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const visibleSlides = useMemo(
    () =>
      activeCategory === "all"
        ? shuffledSlides
        : shuffledSlides.filter((slide) => slide.category === activeCategory),
    [activeCategory],
  );

  const loopSlides = useMemo(() => {
    if (visibleSlides.length === 0) return [];
    return [
      visibleSlides[visibleSlides.length - 1],
      ...visibleSlides,
      visibleSlides[0],
    ];
  }, [visibleSlides]);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    slider.scrollTo({ left: slider.offsetWidth, behavior: "instant" });
  }, [activeCategory]);

  useEffect(() => {
    const slider = sliderRef.current;
    const total = visibleSlides.length;
    if (!slider || total === 0) return;

    const settleAtEdge = () => {
      const width = slider.offsetWidth;
      if (!width) return;

      const index = Math.round(slider.scrollLeft / width);
      if (index <= 0) {
        slider.scrollTo({ left: total * width, behavior: "instant" });
      } else if (index >= total + 1) {
        slider.scrollTo({ left: width, behavior: "instant" });
      }
    };

    slider.addEventListener("scrollend", settleAtEdge);
    return () => slider.removeEventListener("scrollend", settleAtEdge);
  }, [visibleSlides.length]);

  const scrollSlider = (direction: "left" | "right") => {
    const slider = sliderRef.current;
    if (!slider) return;

    slider.scrollBy({
      left: direction === "right" ? slider.offsetWidth : -slider.offsetWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="about-preview reveal" ref={sectionRef}>
      <h2 className="about-title">Mehr als nur Code</h2>

      <div className="slider-categories">
        {categories.map((cat) => (
          <button
            key={cat.key}
            className={`slider-category-btn ${activeCategory === cat.key ? "active" : ""}`}
            onClick={() => setActiveCategory(cat.key)}
          >
            <span>{cat.emoji}</span> {cat.label}
          </button>
        ))}
      </div>

      <div className="phone-container">
        <div
          className="phone-frame"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className="phone-time">{time}</div>
          <div className="phone-battery">
            <div className="battery-fill"></div>
          </div>
          <button
            className="slider-btn left"
            onClick={() => scrollSlider("left")}
          >
            ‹
          </button>

          <div className="about-slider" ref={sliderRef}>
            {loopSlides.map((slide, index) => (
              <div className="slide" key={`${activeCategory}-${index}`}>
                <img src={slide.img} alt={slide.title} />

                <div className="slide-overlay">
                  <h3>{slide.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <button
            className="slider-btn right"
            onClick={() => scrollSlider("right")}
          >
            ›
          </button>

          <div className="phone-homebar"></div>
        </div>
      </div>
    </section>
  );
}
