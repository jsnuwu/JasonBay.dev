import { useRef, useEffect, useState } from "react";
import "../styles/AboutSlider.css";

import pet1 from "../assets/HeroImages/pets/pet1.jpeg";
import pet2 from "../assets/HeroImages/pets/pet2.jpeg";
import pet3 from "../assets/HeroImages/pets/pet3.jpeg";
import pet5 from "../assets/HeroImages/pets/pet5.jpeg";
import pet6 from "../assets/HeroImages/pets/pet6.jpeg";
import pet7 from "../assets/HeroImages/pets/pet7.jpeg";
import pet8 from "../assets/HeroImages/pets/pet8.jpeg";
import pet9 from "../assets/HeroImages/pets/pet9.jpeg";
import pet10 from "../assets/HeroImages/pets/pet10.jpeg";
import pet12 from "../assets/HeroImages/pets/pet12.jpeg";

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
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const [time, setTime] = useState("");

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

  const slides = [
    { img: pet1, title: "👆" },
    { img: pet2, title: "🐷" },
    { img: pet3, title: "🐕" },
    { img: pet5, title: "😺" },
    { img: pet6, title: "😋" },
    { img: pet7, title: "🧛" },
    { img: pet8, title: "☀️" },
    { img: pet9, title: "🌻" },
    { img: pet10, title: "🐈" },
    { img: pet12, title: "🐽" },
  ];

  const scrollSlider = (direction: "left" | "right") => {
    const slider = sliderRef.current;
    if (!slider) return;

    const slideWidth = slider.offsetWidth;
    const maxScroll = slider.scrollWidth - slideWidth;
    const current = slider.scrollLeft;

    if (direction === "right") {
      if (current >= maxScroll - 10) {
        slider.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        slider.scrollBy({ left: slideWidth, behavior: "smooth" });
      }
    }

    if (direction === "left") {
      if (current <= 10) {
        slider.scrollTo({ left: maxScroll, behavior: "smooth" });
      } else {
        slider.scrollBy({ left: -slideWidth, behavior: "smooth" });
      }
    }
  };

  return (
    <section className="about-preview">
      <h2 className="about-title">Mehr als nur Code</h2>

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
            {slides.map((slide, index) => (
              <div className="slide" key={index}>
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
