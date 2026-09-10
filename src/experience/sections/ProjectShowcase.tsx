import { useLanguage } from "../../i18n/useLanguage";
import { getProjects } from "../content";

function formatUrl(url: string) {
  try {
    const u = new URL(url);
    return `${u.hostname}${u.pathname.replace(/\/$/, "")}`;
  } catch {
    return url;
  }
}

interface Props {
  compact?: boolean;
}

export default function ProjectShowcase({ compact = false }: Props) {
  const { lang } = useLanguage();
  const de = lang === "de";
  const projects = getProjects();

  return (
    <div className={`showcase ${compact ? "is-compact" : ""}`}>
      {projects.map((p, i) => (
        <article className="showcase-card" key={p.name}>
          <div className="showcase-bar">
            <span className="showcase-dot" />
            <span className="showcase-dot" />
            <span className="showcase-dot" />
            <span className="showcase-url">{formatUrl(p.link)}</span>
          </div>

          <a
            className="showcase-frame"
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={de ? `${p.name} live öffnen` : `Open ${p.name} live`}
          >
            {i < (compact ? 2 : 4) && (
              <iframe
                src={p.link}
                title={p.name}
                loading="lazy"
                tabIndex={-1}
                scrolling="no"
              />
            )}
            <span className="showcase-frame-veil" />
            <span className="showcase-frame-hint">
              {de ? "LIVE ÖFFNEN ↗" : "OPEN LIVE ↗"}
            </span>
          </a>

          <div className="showcase-body">
            <span className="showcase-index">{p.index}</span>
            <h3>{p.name}</h3>
            <p>{de ? p.description : p.descriptionEn}</p>
            <span className="showcase-tech">{p.tech}</span>
            <a
              className="showcase-live"
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {de ? "Live ansehen ↗" : "View live ↗"}
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}
