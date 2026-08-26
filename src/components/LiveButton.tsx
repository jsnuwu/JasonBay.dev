import "../styles/LiveButton.css";

interface LiveButtonProps {
  href: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

export default function LiveButton({ href, onClick }: LiveButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="live-button"
      onClick={onClick}
    >
      <span className="live-button-dot" />
      <span className="live-button-text">Live ansehen</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="live-button-arrow"
      >
        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
      </svg>
    </a>
  );
}
