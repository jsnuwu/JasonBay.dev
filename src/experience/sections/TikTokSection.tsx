import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
} from "react";
import { useLanguage } from "../../i18n/useLanguage";

import video1 from "../../assets/TikTokPreview/1.mp4";
import video2 from "../../assets/TikTokPreview/2.mp4";
import video3 from "../../assets/TikTokPreview/3.mp4";
import video4 from "../../assets/TikTokPreview/4.mp4";
import video6 from "../../assets/TikTokPreview/6.mp4";
import video66 from "../../assets/TikTokPreview/66.mp4";

const VIDEOS = [video1, video2, video3, video4, video6, video66];

export default function TikTokSection() {
  const { t } = useLanguage();
  const tk = t.tiktokShowcase;

  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);
  const [volume, setVolume] = useState(0.8);
  const [progress, setProgress] = useState(0);

  const videoRef = useRef<HTMLVideoElement>(null);
  const screenRef = useRef<HTMLDivElement>(null);
  const lockRef = useRef(false);

  const step = useCallback((d: number) => {
    if (lockRef.current) return;
    lockRef.current = true;
    setIndex((p) => ((p + d) % VIDEOS.length + VIDEOS.length) % VIDEOS.length);
    setPlaying(true);
    window.setTimeout(() => (lockRef.current = false), 450);
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = 0;
    v.volume = volume;
    v.muted = muted;
    if (playing) v.play().catch(() => void 0);
    else v.pause();
  }, [index, playing, muted, volume]);

  useEffect(() => {
    const node = screenRef.current;
    if (!node) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (Math.abs(e.deltaY) < 12) return;
      step(e.deltaY > 0 ? 1 : -1);
    };
    node.addEventListener("wheel", onWheel, { passive: false });
    return () => node.removeEventListener("wheel", onWheel);
  }, [step]);

  const onTime = () => {
    const v = videoRef.current;
    if (v && v.duration) setProgress((v.currentTime / v.duration) * 100);
  };

  const onVolume = (e: ChangeEvent<HTMLInputElement>) => {
    const next = Number(e.target.value);
    setVolume(next);
    setMuted(next === 0);
  };

  const silent = muted || volume === 0;
  const stop = (e: { stopPropagation: () => void }) => e.stopPropagation();

  return (
    <div className="tsec">
      <div className="tsec-dock">
        <div className="tsec-phone">
          <span className="tsec-notch" aria-hidden="true" />
          <div
            className="tsec-screen"
            ref={screenRef}
            onClick={() => setPlaying((p) => !p)}
          >
            <video
              key={VIDEOS[index]}
              ref={videoRef}
              className="tsec-video"
              src={VIDEOS[index]}
              loop
              playsInline
              muted={muted}
              autoPlay
              onTimeUpdate={onTime}
            />

            {!playing && <span className="tsec-play-ind" aria-hidden="true">▶</span>}

            <button
              className="tsec-ctl play"
              onClick={(e) => {
                stop(e);
                setPlaying((p) => !p);
              }}
              aria-label={playing ? tk.pause : tk.play}
            >
              {playing ? "❚❚" : "▶"}
            </button>

            <div className="tsec-vol" onClick={stop}>
              <button
                className="tsec-ctl mute"
                onClick={(e) => {
                  stop(e);
                  setMuted((m) => !m);
                }}
                aria-label={silent ? tk.unmute : tk.mute}
              >
                {silent ? "MUTE" : "VOL"}
              </button>
              <input
                type="range"
                className="tsec-vol-slider"
                min={0}
                max={1}
                step={0.01}
                value={muted ? 0 : volume}
                onChange={onVolume}
                aria-label={tk.volume}
              />
            </div>

            <button
              className="tsec-edge prev"
              onClick={(e) => {
                stop(e);
                step(-1);
              }}
              aria-label={tk.prev}
            >
              ▲
            </button>
            <button
              className="tsec-edge next"
              onClick={(e) => {
                stop(e);
                step(1);
              }}
              aria-label={tk.next}
            >
              ▼
            </button>

            <div className="tsec-progress">
              <span style={{ width: `${progress}%` }} />
            </div>
          </div>
        </div>

        <div className="tsec-dots">
          {VIDEOS.map((_, i) => (
            <button
              key={i}
              className={i === index ? "active" : ""}
              onClick={() => {
                setIndex(i);
                setPlaying(true);
              }}
              aria-label={tk.jumpTo(i + 1)}
            >
              {String(i + 1).padStart(2, "0")}
            </button>
          ))}
        </div>
      </div>

      <div className="tsec-side">
        <div className="tsec-stats">
          <div>
            <strong>{t.about.spotlight.statFollowerValue}</strong>
            <span>{t.about.spotlight.statFollowerLabel}</span>
          </div>
          <div>
            <strong>{t.about.spotlight.statLikesValue}</strong>
            <span>{t.about.spotlight.statLikesLabel}</span>
          </div>
          <div>
            <strong>{t.about.spotlight.statExperienceValue}</strong>
            <span>{t.about.spotlight.statExperienceLabel}</span>
          </div>
        </div>
        <p className="tsec-copy">{t.about.spotlight.subtitle}</p>
        <ul className="tsec-list">
          {t.about.spotlight.list.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
        <a
          className="tsec-link"
          href="https://www.tiktok.com/@jsnuwu"
          target="_blank"
          rel="noopener noreferrer"
        >
          TIKTOK @JSNUWU ↗
        </a>
      </div>
    </div>
  );
}
