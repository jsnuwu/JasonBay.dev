import type { Lang } from "../i18n/translations";
import { projects } from "../data/projects";

export interface RadialKeyword {
  label: string;
  strong: boolean;
  angle: number;
  radius: number;
  depth: number;
}

export interface SectionNode {
  id: string;
  label: string;
  position: [number, number, number];
  scale: number;
}

export interface SocialLink {
  label: string;
  handle: string;
  href: string;
}

const STRONG_KEYWORDS = [
  "FRONTEND",
  "REACT",
  "ANGULAR",
  "VUE",
  "TYPESCRIPT",
  "MOTION",
  "GRAPHIC DESIGN",
  "VIDEO EDITING",
];

const FAINT_KEYWORDS_DE = [
  "CTRL+Z",
  "NACHTAKTIV",
  "PIXELGENAU",
  "AUTODIDAKT",
  "KOFFEIN",
  "DETAILVERLIEBT",
];

const FAINT_KEYWORDS_EN = [
  "CTRL+Z",
  "NIGHT OWL",
  "PIXEL-PERFECT",
  "SELF-TAUGHT",
  "CAFFEINE",
  "RELENTLESS",
];

export function getRadialKeywords(lang: Lang): RadialKeyword[] {
  const faint = lang === "de" ? FAINT_KEYWORDS_DE : FAINT_KEYWORDS_EN;

  const strong = STRONG_KEYWORDS.map((label, i) => {
    const angle = (i / STRONG_KEYWORDS.length) * Math.PI * 2 + 0.35;
    return {
      label,
      strong: true,
      angle,
      radius: 3.7 + (i % 3) * 0.55,
      depth: (i % 2 === 0 ? 1 : -1) * (0.4 + (i % 3) * 0.3),
    };
  });

  const weak = faint.map((label, i) => {
    const angle = (i / faint.length) * Math.PI * 2 + 0.9;
    return {
      label,
      strong: false,
      angle,
      radius: 5.2 + (i % 3) * 0.7,
      depth: (i % 2 === 0 ? -1 : 1) * (1.6 + (i % 2) * 0.8),
    };
  });

  return [...strong, ...weak];
}

export function getSectionNodes(lang: Lang): SectionNode[] {
  const de = lang === "de";
  return [
    { id: "about", label: de ? "ÜBER MICH" : "ABOUT", position: [-4.2, -1.6, 1.2], scale: 1 },
    { id: "work", label: de ? "ARBEITEN" : "WORK", position: [-3.6, 2.8, -2.4], scale: 1.35 },
    { id: "skills", label: "SKILLS", position: [0.4, 2.4, 0.2], scale: 0.8 },
    { id: "experience", label: de ? "WERDEGANG" : "EXPERIENCE", position: [-5.4, 0.6, -1.1], scale: 1.5 },
    { id: "gallery", label: de ? "GALERIE" : "GALLERY", position: [3.4, 1.1, -3.2], scale: 0.9 },
    { id: "tiktok", label: "TIKTOK", position: [2.9, -0.2, 0.6], scale: 0.85 },
    { id: "languages", label: de ? "SPRACHEN" : "LANGUAGES", position: [1.6, -2.6, -1.4], scale: 0.75 },
    { id: "contact", label: de ? "KONTAKT" : "CONTACT", position: [0.1, 0.05, 0.05], scale: 0.7 },
    { id: "background", label: de ? "HINTERGRUND" : "BACKGROUND", position: [5.6, 0.4, -4.8], scale: 1.2 },
  ];
}

export function getSocials(): SocialLink[] {
  return [
    { label: "GitHub", handle: "@jsnuwu", href: "https://github.com/jsnuwu" },
    {
      label: "TikTok",
      handle: "@jsnuwu",
      href: "https://www.tiktok.com/@jsnuwu",
    },
    {
      label: "Instagram",
      handle: "@jsnuwu",
      href: "https://www.instagram.com/jsnuwu/",
    },
    {
      label: "LinkedIn",
      handle: "Jason Bay",
      href: "https://www.linkedin.com/in/jason-bay-275499398/",
    },
    {
      label: "YouTube",
      handle: "@jsnuwu",
      href: "https://www.youtube.com/@jsnuwu",
    },
  ];
}

export function getProjects() {
  return projects.map((p, i) => ({
    index: String(i + 1).padStart(2, "0"),
    name: p.name,
    description: p.description,
    descriptionEn: p.descriptionEn,
    tech: p.tech,
    link: p.link,
  }));
}

export const EMAIL = "jasonbay05@gmail.com";
