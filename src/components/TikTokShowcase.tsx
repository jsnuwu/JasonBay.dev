import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type MouseEvent,
  type TouchEvent,
} from "react";
import "../styles/TikTokShowcase.css";
import { useToggleReveal } from "../hooks/useToggleReveal";
import { useLanguage } from "../i18n/useLanguage";
import ScrambledText from "./ScrambledText";

import video1 from "../assets/TikTokPreview/1.mp4";
import video2 from "../assets/TikTokPreview/2.mp4";
import video3 from "../assets/TikTokPreview/3.mp4";
import video4 from "../assets/TikTokPreview/4.mp4";
import video6 from "../assets/TikTokPreview/6.mp4";
import video66 from "../assets/TikTokPreview/66.mp4";

const VIDEOS = [
  { id: 1, src: video1 },
  { id: 2, src: video2 },
  { id: 3, src: video3 },
  { id: 4, src: video4 },
  { id: 6, src: video6 },
  { id: 66, src: video66 },
];

const WHEEL_LOCK_MS = 500;
const SWIPE_THRESHOLD_PX = 40;

function wrapIndex(index: number) {
  return ((index % VIDEOS.length) + VIDEOS.length) % VIDEOS.length;
}

export default function TikTokShowcase() {
  const { t } = useLanguage();
  const { ref: sectionRef, inView } = useToggleReveal<HTMLElement>();

  const [index, setIndex] = useState(0);
  const [muted, setMuted] = useState(true);
  const [volume, setVolume] = useState(1);
  const [playing, setPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const screenRef = useRef<HTMLDivElement>(null);
  const lockRef = useRef(false);
  const touchStartYRef = useRef<number | null>(null);

  const step = (delta: number) => {
    if (lockRef.current) return;
    lockRef.current = true;
    setIndex((prev) => wrapIndex(prev + delta));
    window.setTimeout(() => {
      lockRef.current = false;
    }, WHEEL_LOCK_MS);
  };

  const goToIndex = (target: number) => {
    if (lockRef.current) return;
    lockRef.current = true;
    setIndex(wrapIndex(target));
    window.setTimeout(() => {
      lockRef.current = false;
    }, WHEEL_LOCK_MS);
  };

  const goNext = () => step(1);
  const goPrev = () => step(-1);
  const togglePlay = () => setPlaying((prev) => !prev);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    video.volume = volume;
    setPlaying(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (inView && playing) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [inView, playing, index]);

  useEffect(() => {
    const video = videoRef.current;
    if (video) video.volume = volume;
  }, [volume]);

  useEffect(() => {
    const node = screenRef.current;
    if (!node) return;

    const handleWheel = (event: globalThis.WheelEvent) => {
      event.preventDefault();
      if (Math.abs(event.deltaY) < 12) return;
      step(event.deltaY > 0 ? 1 : -1);
    };

    const handleTouchMove = (event: globalThis.TouchEvent) => {
      event.preventDefault();
    };

    node.addEventListener("wheel", handleWheel, { passive: false });
    node.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      node.removeEventListener("wheel", handleWheel);
      node.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  const isControlTarget = (target: EventTarget | null) =>
    target instanceof HTMLElement &&
    !!target.closest("button, input[type='range']");

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    if (isControlTarget(event.target)) {
      touchStartYRef.current = null;
      return;
    }
    touchStartYRef.current = event.touches[0].clientY;
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (isControlTarget(event.target)) return;

    const startY = touchStartYRef.current;
    touchStartYRef.current = null;
    if (startY === null) return;

    const deltaY = startY - event.changedTouches[0].clientY;
    if (Math.abs(deltaY) < SWIPE_THRESHOLD_PX) return;
    if (deltaY > 0) {
      goNext();
    } else {
      goPrev();
    }
  };

  const stop = (event: MouseEvent) => event.stopPropagation();

  const handleVolumeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const next = Number(event.target.value);
    setVolume(next);
    setMuted(next === 0);
  };

  const active = VIDEOS[index];
  const isSilent = muted || volume === 0;

  return (
    <section
      id="tiktok-showcase"
      className={`tiktok-showcase ${inView ? "in-view" : ""}`}
      ref={sectionRef}
    >
      <ScrambledText
        as="h2"
        className="tiktok-showcase-title"
        text={t.tiktokShowcase.title}
      />
      <a
        className="tiktok-showcase-subtitle"
        href="https://www.tiktok.com/@jsnuwu"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ScrambledText text={t.tiktokShowcase.subtitle} />
      </a>

      <div className="phone-dock">
        <div className="phone-frame">
          <span className="phone-camera" aria-hidden="true" />

          <div
            className="phone-screen"
            ref={screenRef}
            onClick={togglePlay}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <video
              key={active.id}
              ref={videoRef}
              className="phone-video"
              src={active.src}
              muted={muted}
              loop
              playsInline
              preload="metadata"
            />

            {!playing && (
              <span className="phone-play-indicator" aria-hidden="true">
                ▶
              </span>
            )}

            <button
              type="button"
              className="phone-play-btn"
              onClick={(event) => {
                stop(event);
                togglePlay();
              }}
              aria-label={playing ? t.tiktokShowcase.pause : t.tiktokShowcase.play}
            >
              {playing ? "⏸" : "▶"}
            </button>

            <div className="phone-volume" onClick={stop}>
              <button
                type="button"
                className="phone-mute-btn"
                onClick={(event) => {
                  stop(event);
                  setMuted((prev) => !prev);
                }}
                aria-label={
                  isSilent ? t.tiktokShowcase.unmute : t.tiktokShowcase.mute
                }
              >
                {isSilent ? "🔇" : "🔊"}
              </button>
              <div className="phone-volume-track">
                <input
                  type="range"
                  className="phone-volume-slider"
                  min={0}
                  max={1}
                  step={0.01}
                  value={muted ? 0 : volume}
                  onChange={handleVolumeChange}
                  aria-label={t.tiktokShowcase.volume}
                />
              </div>
            </div>

            <button
              type="button"
              className="phone-nav prev"
              onClick={(event) => {
                stop(event);
                goPrev();
              }}
              aria-label={t.tiktokShowcase.prev}
            >
              ▲
            </button>
            <button
              type="button"
              className="phone-nav next"
              onClick={(event) => {
                stop(event);
                goNext();
              }}
              aria-label={t.tiktokShowcase.next}
            >
              ▼
            </button>
          </div>
        </div>

        <div className="phone-dots">
          {VIDEOS.map((video, i) => (
            <button
              type="button"
              key={video.id}
              className={`phone-dot ${i === index ? "active" : ""}`}
              onClick={() => goToIndex(i)}
              aria-label={t.tiktokShowcase.jumpTo(video.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
