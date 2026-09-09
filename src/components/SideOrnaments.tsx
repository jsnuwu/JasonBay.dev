import "../styles/SideOrnaments.css";

export default function SideOrnaments() {
  return (
    <div className="side-ornaments" aria-hidden="true">
      <span className="side-orb left orb-a" />
      <span className="side-orb right orb-b" />
      <span className="side-orb left orb-c" />

      <svg
        className="side-ring left ring-a"
        viewBox="0 0 100 100"
        width="70"
        height="70"
      >
        <circle
          cx="50"
          cy="50"
          r="46"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="6 10"
        />
      </svg>

      <svg
        className="side-ring right ring-b"
        viewBox="0 0 100 100"
        width="90"
        height="90"
      >
        <circle
          cx="50"
          cy="50"
          r="46"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
      </svg>

      <svg className="side-plus left plus-a" viewBox="0 0 24 24" width="18" height="18">
        <path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="2" />
      </svg>

      <svg className="side-plus right plus-b" viewBox="0 0 24 24" width="14" height="14">
        <path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="2" />
      </svg>

      <svg className="side-dots left dots-a" viewBox="0 0 60 60" width="60" height="60">
        {[0, 1, 2].map((row) =>
          [0, 1, 2].map((col) => (
            <circle
              key={`${row}-${col}`}
              cx={10 + col * 20}
              cy={10 + row * 20}
              r="2.5"
              fill="currentColor"
            />
          )),
        )}
      </svg>
    </div>
  );
}
