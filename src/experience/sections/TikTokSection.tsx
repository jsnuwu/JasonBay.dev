import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../../i18n/useLanguage";

import video1 from "../../assets/TikTokPreview/1.mp4";
import video2 from "../../assets/TikTokPreview/2.mp4";
import video3 from "../../assets/TikTokPreview/3.mp4";
import video4 from "../../assets/TikTokPreview/4.mp4";
import video6 from "../../assets/TikTokPreview/6.mp4";
import video66 from "../../assets/TikTokPreview/66.mp4";

const VIDEOS = [video1, video2, video3, video4, video6, video66];

export default function TikTokSection() {
  const { t, lang } = useLanguage();
  const [index, setIndex] = useState(0);
  const [muted, setMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = muted;
    v.play().catch(() => void 0);
  }, [index, muted]);

  const go = (d: number) =>
    setIndex((p) => (p + d + VIDEOS.length) % VIDEOS.length);

  const de = lang === "de";

  return (
    <div className="tsec">
      <div className="tsec-stage">
        <button
          className="tsec-nav prev"
          onClick={() => go(-1)}
          aria-label={de ? "Vorheriges Video" : "Previous video"}
        >
          ↑
        </button>

        <div className="tsec-phone">
          <video
            key={VIDEOS[index]}
            ref={videoRef}
            src={VIDEOS[index]}
            className="tsec-video"
            loop
            playsInline
            autoPlay
            muted={muted}
            onClick={() => setMuted((m) => !m)}
          />
          <button
            className="tsec-mute"
            onClick={() => setMuted((m) => !m)}
          >
            {muted ? (de ? "TON — AUS" : "SOUND — OFF") : de ? "TON — AN" : "SOUND — ON"}
          </button>
        </div>

        <button
          className="tsec-nav next"
          onClick={() => go(1)}
          aria-label={de ? "Nächstes Video" : "Next video"}
        >
          ↓
        </button>
      </div>

      <div className="tsec-side">
        <ul className="tsec-dots">
          {VIDEOS.map((_, i) => (
            <li key={i}>
              <button
                className={i === index ? "active" : ""}
                onClick={() => setIndex(i)}
              >
                {String(i + 1).padStart(2, "0")}
              </button>
            </li>
          ))}
        </ul>
        <div className="tsec-stats">
          <div>
            <strong>{t.about.spotlight.statFollowerValue}</strong>
            <span>{t.about.spotlight.statFollowerLabel}</span>
          </div>
          <div>
            <strong>{t.about.spotlight.statLikesValue}</strong>
            <span>{t.about.spotlight.statLikesLabel}</span>
          </div>
        </div>
        <a
          className="tsec-link"
          href="https://www.tiktok.com/@jsnuwu"
          target="_blank"
          rel="noopener noreferrer"
        >
          {de ? "TIKTOK @JSNUWU ↗" : "TIKTOK @JSNUWU ↗"}
        </a>
      </div>
    </div>
  );
}
