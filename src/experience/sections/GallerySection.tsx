import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useLanguage } from "../../i18n/useLanguage";

import pet1 from "../../assets/HeroImages/pets/pet1.jpeg";
import pet2 from "../../assets/HeroImages/pets/pet2.jpeg";
import pet3 from "../../assets/HeroImages/pets/pet3.jpeg";
import pet4 from "../../assets/HeroImages/pets/pet4.jpeg";
import pet5 from "../../assets/HeroImages/pets/pet5.jpeg";
import pet6 from "../../assets/HeroImages/pets/pet6.jpeg";
import pet7 from "../../assets/HeroImages/pets/pet7.jpeg";
import pet8 from "../../assets/HeroImages/pets/pet8.jpeg";
import pet9 from "../../assets/HeroImages/pets/pet9.jpeg";
import pet10 from "../../assets/HeroImages/pets/pet10.jpeg";
import pet12 from "../../assets/HeroImages/pets/pet12.jpeg";
import pet13 from "../../assets/HeroImages/pets/pet13.jpeg";
import pet14 from "../../assets/HeroImages/pets/pet14.jpeg";

import motorcycle4 from "../../assets/HeroImages/motorcycle/motorcycle4.jpeg";
import motorcycle6 from "../../assets/HeroImages/motorcycle/motorcycle6.jpeg";
import motorcycle7 from "../../assets/HeroImages/motorcycle/motorcycle7.jpeg";
import motorcycle8 from "../../assets/HeroImages/motorcycle/motorcycle8.jpeg";
import motorcycle9 from "../../assets/HeroImages/motorcycle/motorcycle9.jpeg";
import motorcycle11 from "../../assets/HeroImages/motorcycle/motorcycle11.jpeg";
import motorcycle12 from "../../assets/HeroImages/motorcycle/motorcycle12.jpeg";
import motorcycle13 from "../../assets/HeroImages/motorcycle/motorcycle13.jpeg";
import motorcycle14 from "../../assets/HeroImages/motorcycle/motorcycle14.jpeg";
import motorcycle15 from "../../assets/HeroImages/motorcycle/motorcycle15.jpeg";
import motorcycle17 from "../../assets/HeroImages/motorcycle/motorcycle17.jpeg";
import motorcycle18 from "../../assets/HeroImages/motorcycle/motorcycle18.jpeg";
import motorcycle19 from "../../assets/HeroImages/motorcycle/motorcycle19.jpeg";
import motorcycle20 from "../../assets/HeroImages/motorcycle/motorcycle20.jpeg";
import motorcycle21 from "../../assets/HeroImages/motorcycle/motorcycle21.jpeg";

import me1 from "../../assets/HeroImages/me/me1.jpeg";
import me2 from "../../assets/HeroImages/me/me2.jpeg";
import me3 from "../../assets/HeroImages/me/me3.jpg";
import me5 from "../../assets/HeroImages/me/me5.jpg";
import me6 from "../../assets/HeroImages/me/me6.jpeg";

import hike1 from "../../assets/hike/hike1.jpg";
import hike2 from "../../assets/hike/hike2.jpg";
import hike3 from "../../assets/hike/hike3.jpg";
import hike4 from "../../assets/hike/hike4.jpg";
import hike5 from "../../assets/hike/hike5.jpg";
import hike6 from "../../assets/hike/hike6.jpg";
import hike8 from "../../assets/hike/hike8.jpg";
import hike9 from "../../assets/hike/hike9.jpg";

type Cat = "pets" | "moto" | "hike" | "me";

interface Shot {
  img: string;
  cat: Cat;
}

const RAW: Shot[] = [
  { img: pet1, cat: "pets" },
  { img: pet2, cat: "pets" },
  { img: pet3, cat: "pets" },
  { img: pet4, cat: "pets" },
  { img: pet5, cat: "pets" },
  { img: pet6, cat: "pets" },
  { img: pet7, cat: "pets" },
  { img: pet8, cat: "pets" },
  { img: pet9, cat: "pets" },
  { img: pet10, cat: "pets" },
  { img: pet12, cat: "pets" },
  { img: pet13, cat: "pets" },
  { img: pet14, cat: "pets" },
  { img: motorcycle4, cat: "moto" },
  { img: motorcycle6, cat: "moto" },
  { img: motorcycle7, cat: "moto" },
  { img: motorcycle8, cat: "moto" },
  { img: motorcycle9, cat: "moto" },
  { img: motorcycle11, cat: "moto" },
  { img: motorcycle12, cat: "moto" },
  { img: motorcycle13, cat: "moto" },
  { img: motorcycle14, cat: "moto" },
  { img: motorcycle15, cat: "moto" },
  { img: motorcycle17, cat: "moto" },
  { img: motorcycle18, cat: "moto" },
  { img: motorcycle19, cat: "moto" },
  { img: motorcycle20, cat: "moto" },
  { img: motorcycle21, cat: "moto" },
  { img: hike1, cat: "hike" },
  { img: hike2, cat: "hike" },
  { img: hike3, cat: "hike" },
  { img: hike4, cat: "hike" },
  { img: hike5, cat: "hike" },
  { img: hike6, cat: "hike" },
  { img: hike8, cat: "hike" },
  { img: hike9, cat: "hike" },
  { img: me1, cat: "me" },
  { img: me2, cat: "me" },
  { img: me3, cat: "me" },
  { img: me5, cat: "me" },
  { img: me6, cat: "me" },
];

function shuffle<T>(arr: T[], seed: number): T[] {
  const out = [...arr];
  let s = seed;
  const rnd = () => {
    s = (s * 1103515245 + 12345) & 0x7fffffff;
    return s / 0x7fffffff;
  };
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

const SHOTS = shuffle(RAW, 1337);

export default function GallerySection() {
  const { t, lang } = useLanguage();
  const trackRef = useRef<HTMLDivElement>(null);
  const draggedRef = useRef(false);
  const [cat, setCat] = useState<"all" | Cat>("all");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const shots = useMemo(
    () => (cat === "all" ? SHOTS : SHOTS.filter((s) => s.cat === cat)),
    [cat],
  );

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onWheel = (e: WheelEvent) => {
      const max = track.scrollWidth - track.clientWidth;
      if (max <= 1) return;
      const fwd = e.deltaY > 0;
      if ((fwd && track.scrollLeft >= max - 1) || (!fwd && track.scrollLeft <= 0))
        return;
      e.preventDefault();
      track.scrollLeft += e.deltaY;
    };
    track.addEventListener("wheel", onWheel, { passive: false });

    let down = false;
    let startX = 0;
    let startScroll = 0;
    let lastX = 0;
    let lastT = 0;
    let vel = 0;
    let raf: number | null = null;

    const momentum = () => {
      vel *= 0.94;
      track.scrollLeft -= vel * 16;
      if (Math.abs(vel) > 0.02) raf = requestAnimationFrame(momentum);
      else raf = null;
    };

    const onDown = (e: MouseEvent) => {
      if (raf) cancelAnimationFrame(raf);
      down = true;
      draggedRef.current = false;
      startX = e.pageX;
      startScroll = track.scrollLeft;
      lastX = e.pageX;
      lastT = performance.now();
      vel = 0;
      track.classList.add("dragging");
    };
    const onMove = (e: MouseEvent) => {
      if (!down) return;
      const dx = e.pageX - startX;
      if (Math.abs(dx) > 4) draggedRef.current = true;
      track.scrollLeft = startScroll - dx;
      const now = performance.now();
      const dt = now - lastT;
      if (dt > 0) vel = (e.pageX - lastX) / dt;
      lastX = e.pageX;
      lastT = now;
    };
    const onUp = () => {
      if (!down) return;
      down = false;
      track.classList.remove("dragging");
      if (Math.abs(vel) > 0.05) raf = requestAnimationFrame(momentum);
    };

    track.addEventListener("mousedown", onDown);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      track.removeEventListener("wheel", onWheel);
      track.removeEventListener("mousedown", onDown);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, [cat]);

  useEffect(() => {
    trackRef.current?.scrollTo({ left: 0 });
  }, [cat]);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight")
        setLightbox((v) => (v === null ? v : (v + 1) % shots.length));
      if (e.key === "ArrowLeft")
        setLightbox((v) =>
          v === null ? v : (v - 1 + shots.length) % shots.length,
        );
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, shots.length]);

  const de = lang === "de";

  return (
    <div className="gsec">
      <div className="gsec-filter">
        {t.aboutSlider.categories.map((c) => (
          <button
            key={c.key}
            className={c.key === cat ? "active" : ""}
            onClick={() => setCat(c.key as "all" | Cat)}
          >
            {c.label}
          </button>
        ))}
        <span className="gsec-count">
          {shots.length} {de ? "BILDER" : "IMAGES"}
        </span>
      </div>

      <div className="gsec-track" ref={trackRef}>
        {shots.map((s, i) => (
          <figure
            key={`${s.img}-${i}`}
            className="gsec-shot"
            onClick={() => {
              if (!draggedRef.current) setLightbox(i);
            }}
          >
            <img src={s.img} alt="" draggable={false} loading="lazy" />
            <figcaption>
              {String(i + 1).padStart(2, "0")} · {s.cat.toUpperCase()}
            </figcaption>
          </figure>
        ))}
      </div>

      <p className="gsec-hint">
        {de
          ? "ZIEHEN ODER SCROLLEN · KLICK ZUM VERGRÖSSERN"
          : "DRAG OR SCROLL · CLICK TO ENLARGE"}
      </p>

      {lightbox !== null &&
        createPortal(
          <div className="gsec-lightbox" onClick={() => setLightbox(null)}>
            <span className="gsec-lightbox-count">
              {String(lightbox + 1).padStart(2, "0")} /{" "}
              {String(shots.length).padStart(2, "0")}
            </span>
            <button
              className="gsec-lb-nav prev"
              aria-label={de ? "Vorheriges Bild" : "Previous image"}
              onClick={(e) => {
                e.stopPropagation();
                setLightbox(
                  (v) => (v === null ? v : (v - 1 + shots.length) % shots.length),
                );
              }}
            >
              ‹
            </button>
            <img
              src={shots[lightbox].img}
              alt=""
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="gsec-lb-nav next"
              aria-label={de ? "Nächstes Bild" : "Next image"}
              onClick={(e) => {
                e.stopPropagation();
                setLightbox((v) => (v === null ? v : (v + 1) % shots.length));
              }}
            >
              ›
            </button>
          </div>,
          document.body,
        )}
    </div>
  );
}
