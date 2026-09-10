import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useLanguage } from "../../i18n/useLanguage";

import pet1 from "../../assets/HeroImages/pets/pet1.jpeg";
import pet2 from "../../assets/HeroImages/pets/pet2.jpeg";
import pet4 from "../../assets/HeroImages/pets/pet4.jpeg";
import pet6 from "../../assets/HeroImages/pets/pet6.jpeg";
import pet8 from "../../assets/HeroImages/pets/pet8.jpeg";
import pet10 from "../../assets/HeroImages/pets/pet10.jpeg";
import pet13 from "../../assets/HeroImages/pets/pet13.jpeg";
import motorcycle4 from "../../assets/HeroImages/motorcycle/motorcycle4.jpeg";
import motorcycle7 from "../../assets/HeroImages/motorcycle/motorcycle7.jpeg";
import motorcycle9 from "../../assets/HeroImages/motorcycle/motorcycle9.jpeg";
import motorcycle13 from "../../assets/HeroImages/motorcycle/motorcycle13.jpeg";
import motorcycle17 from "../../assets/HeroImages/motorcycle/motorcycle17.jpeg";
import motorcycle19 from "../../assets/HeroImages/motorcycle/motorcycle19.jpeg";
import motorcycle21 from "../../assets/HeroImages/motorcycle/motorcycle21.jpeg";
import me1 from "../../assets/HeroImages/me/me1.jpeg";
import me3 from "../../assets/HeroImages/me/me3.jpg";
import me6 from "../../assets/HeroImages/me/me6.jpeg";
import hike1 from "../../assets/hike/hike1.jpg";
import hike2 from "../../assets/hike/hike2.jpg";
import hike4 from "../../assets/hike/hike4.jpg";
import hike6 from "../../assets/hike/hike6.jpg";
import hike9 from "../../assets/hike/hike9.jpg";

interface Shot {
  img: string;
  tag: string;
}

const SHOTS: Shot[] = [
  { img: hike1, tag: "HIKE" },
  { img: motorcycle4, tag: "MOTO" },
  { img: pet1, tag: "PETS" },
  { img: me1, tag: "ME" },
  { img: motorcycle9, tag: "MOTO" },
  { img: hike2, tag: "HIKE" },
  { img: pet6, tag: "PETS" },
  { img: motorcycle17, tag: "MOTO" },
  { img: hike4, tag: "HIKE" },
  { img: me3, tag: "ME" },
  { img: pet10, tag: "PETS" },
  { img: motorcycle13, tag: "MOTO" },
  { img: hike6, tag: "HIKE" },
  { img: pet2, tag: "PETS" },
  { img: motorcycle21, tag: "MOTO" },
  { img: me6, tag: "ME" },
  { img: hike9, tag: "HIKE" },
  { img: pet13, tag: "PETS" },
  { img: motorcycle7, tag: "MOTO" },
  { img: pet4, tag: "PETS" },
  { img: motorcycle19, tag: "MOTO" },
  { img: pet8, tag: "PETS" },
];

const TAGS = ["ALL", "HIKE", "MOTO", "PETS", "ME"] as const;

export default function GallerySection() {
  const { lang } = useLanguage();
  const trackRef = useRef<HTMLDivElement>(null);
  const draggedRef = useRef(false);
  const [tag, setTag] = useState<(typeof TAGS)[number]>("ALL");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const shots = useMemo(
    () => (tag === "ALL" ? SHOTS : SHOTS.filter((s) => s.tag === tag)),
    [tag],
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
    const onDown = (e: MouseEvent) => {
      down = true;
      draggedRef.current = false;
      startX = e.pageX;
      startScroll = track.scrollLeft;
      track.classList.add("dragging");
    };
    const onMove = (e: MouseEvent) => {
      if (!down) return;
      const dx = e.pageX - startX;
      if (Math.abs(dx) > 4) draggedRef.current = true;
      track.scrollLeft = startScroll - dx;
    };
    const onUp = () => {
      down = false;
      track.classList.remove("dragging");
    };
    track.addEventListener("mousedown", onDown);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);

    return () => {
      track.removeEventListener("wheel", onWheel);
      track.removeEventListener("mousedown", onDown);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, [tag]);

  useEffect(() => {
    trackRef.current?.scrollTo({ left: 0 });
  }, [tag]);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  return (
    <div className="gsec">
      <div className="gsec-filter">
        {TAGS.map((tg) => (
          <button
            key={tg}
            className={tg === tag ? "active" : ""}
            onClick={() => setTag(tg)}
          >
            {tg}
          </button>
        ))}
      </div>

      <div className="gsec-track" ref={trackRef}>
        {shots.map((s, i) => (
          <figure
            key={`${s.img}-${i}`}
            className="gsec-shot"
            onClick={() => {
              if (!draggedRef.current) setLightbox(s.img);
            }}
          >
            <img src={s.img} alt="" draggable={false} loading="lazy" />
            <figcaption>
              {String(i + 1).padStart(2, "0")} — {s.tag}
            </figcaption>
          </figure>
        ))}
      </div>

      <p className="gsec-hint">
        {lang === "de"
          ? "ZIEHEN ODER SCROLLEN — KLICK ZUM VERGRÖSSERN"
          : "DRAG OR SCROLL — CLICK TO ENLARGE"}
      </p>

      {lightbox &&
        createPortal(
          <div className="gsec-lightbox" onClick={() => setLightbox(null)}>
            <img src={lightbox} alt="" onClick={(e) => e.stopPropagation()} />
          </div>,
          document.body,
        )}
    </div>
  );
}
