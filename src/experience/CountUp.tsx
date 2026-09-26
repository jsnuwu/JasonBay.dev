import { useEffect, useRef, useState } from "react";

interface Props {
  value: string;
  locale: "de" | "en";
  duration?: number;
}

function parse(value: string, locale: "de" | "en") {
  const m = value.match(/\d[\d.,]*/);
  if (!m || m.index === undefined) return null;
  const token = m[0];
  const thousands = locale === "de" ? "." : ",";
  const decimal = locale === "de" ? "," : ".";
  const normalized = token
    .split(thousands)
    .join("")
    .replace(decimal, ".");
  const num = Number(normalized);
  if (!Number.isFinite(num)) return null;
  const decimals = normalized.includes(".")
    ? normalized.split(".")[1].length
    : 0;
  return {
    prefix: value.slice(0, m.index),
    suffix: value.slice(m.index + token.length),
    num,
    decimals,
  };
}

export default function CountUp({ value, locale, duration = 1400 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const parsed = parse(value, locale);
  const [shown, setShown] = useState<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    const target = parse(value, locale);
    if (!el || !target) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - p, 4);
          setShown(target.num * eased);
          if (p < 1) raf = requestAnimationFrame(tick);
          else setShown(null);
        };
        setShown(0);
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, locale, duration]);

  if (!parsed || shown === null) return <span ref={ref}>{value}</span>;

  const formatted = shown.toLocaleString(locale === "de" ? "de-DE" : "en-US", {
    minimumFractionDigits: parsed.decimals,
    maximumFractionDigits: parsed.decimals,
  });

  return (
    <span ref={ref} aria-label={value}>
      {parsed.prefix}
      {formatted}
      {parsed.suffix}
    </span>
  );
}
