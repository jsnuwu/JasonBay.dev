import "../styles/LiveButton.css";
import { useLanguage } from "../i18n/useLanguage";

interface LiveButtonProps {
  href: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

export default function LiveButton({ href, onClick }: LiveButtonProps) {
  const { t } = useLanguage();

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="live-button"
      onClick={onClick}
    >
      {t.liveButton.label}
    </a>
  );
}
