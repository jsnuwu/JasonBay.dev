import {
  useCallback,
  useEffect,
  useRef,
  type ElementType,
  type MouseEvent,
} from "react";

const DEFAULT_SCRAMBLE_CHARS = "!<>-_\\/[]{}—=+*^?#$%&";

interface ScrambledTextProps {
  text: string;
  radius?: number;
  speed?: number;
  scrambleChars?: string;
  className?: string;
  as?: ElementType;
}

interface Point {
  x: number;
  y: number;
}

export default function ScrambledText({
  text,
  radius = 52,
  speed = 190,
  scrambleChars = DEFAULT_SCRAMBLE_CHARS,
  className = "",
  as: Tag = "span",
}: ScrambledTextProps) {
  const chars = Array.from(text);
  const charElsRef = useRef<Array<HTMLSpanElement | null>>([]);
  const rectsRef = useRef<Point[]>([]);
  const mouseRef = useRef<Point | null>(null);
  const lastSwapRef = useRef<number[]>([]);
  const frameRef = useRef<number | null>(null);

  const stopLoop = useCallback(() => {
    if (frameRef.current !== null) {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
    }
    const original = Array.from(text);
    charElsRef.current.forEach((el, i) => {
      if (!el) return;
      el.textContent = original[i];
      el.classList.remove("is-scrambled");
    });
  }, [text]);

  useEffect(() => {
    stopLoop();
    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }
    };
  }, [text, stopLoop]);

  const measure = () => {
    rectsRef.current = charElsRef.current.map((el) => {
      if (!el) return { x: 0, y: 0 };
      const rect = el.getBoundingClientRect();
      return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
    });
    lastSwapRef.current = new Array(chars.length).fill(0);
  };

  const loop = (now: number) => {
    const mouse = mouseRef.current;
    if (mouse) {
      charElsRef.current.forEach((el, i) => {
        if (!el || chars[i] === " ") return;
        const rect = rectsRef.current[i];
        const dist = Math.hypot(mouse.x - rect.x, mouse.y - rect.y);

        if (dist < radius) {
          if (now - lastSwapRef.current[i] > speed) {
            lastSwapRef.current[i] = now;
            el.textContent =
              scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
            el.classList.add("is-scrambled");
          }
        } else if (el.textContent !== chars[i]) {
          el.textContent = chars[i];
          el.classList.remove("is-scrambled");
        }
      });
    }
    frameRef.current = requestAnimationFrame(loop);
  };

  const handleEnter = () => {
    measure();
    if (frameRef.current === null) {
      frameRef.current = requestAnimationFrame(loop);
    }
  };

  const handleMove = (event: MouseEvent) => {
    mouseRef.current = { x: event.clientX, y: event.clientY };
  };

  const handleLeave = () => {
    mouseRef.current = null;
    stopLoop();
  };

  return (
    <Tag
      className={className}
      onMouseEnter={handleEnter}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {chars.map((char, index) => (
        <span
          key={index}
          ref={(el) => {
            charElsRef.current[index] = el;
          }}
        >
          {char}
        </span>
      ))}
    </Tag>
  );
}
