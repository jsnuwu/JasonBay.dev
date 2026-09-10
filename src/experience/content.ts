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

// primary focus (from CV)
const STRONG_KEYWORDS = [
  "ANGULAR",
  "TYPESCRIPT",
  "HTML5",
  "CSS3",
  "JAVASCRIPT",
  "TAILWIND",
  "WORDPRESS",
  "VIDEO EDITING",
];

// secondary skills / tools (from CV)
const FAINT_KEYWORDS = ["REACT", "VUE.JS", "FIGMA", "GIT", "DOCKER", "PHP"];

export interface Identity {
  name: string;
  tagline: string;
}

export function getIdentity(lang: Lang): Identity {
  return {
    name: "JASON BAY",
    tagline:
      lang === "de"
        ? "Frontend Developer — Web & UI"
        : "Frontend Developer — Web & UI",
  };
}

export function getRadialKeywords(_lang: Lang): RadialKeyword[] {
  void _lang;
  const faint = FAINT_KEYWORDS;

  const strong = STRONG_KEYWORDS.map((label, i) => {
    const angle = (i / STRONG_KEYWORDS.length) * Math.PI * 2 + 0.5;
    return {
      label,
      strong: true,
      angle,
      radius: 3.6 + (i % 3) * 0.5,
      depth: (i % 2 === 0 ? 1 : -1) * (0.4 + (i % 3) * 0.3),
    };
  });

  const weak = faint.map((label, i) => {
    const angle = (i / faint.length) * Math.PI * 2 + 1.7;
    return {
      label,
      strong: false,
      angle,
      radius: 4.3 + (i % 3) * 0.45,
      depth: (i % 2 === 0 ? -1 : 1) * (1.6 + (i % 2) * 0.8),
    };
  });

  return [...strong, ...weak];
}

export function getSectionNodes(lang: Lang): SectionNode[] {
  const de = lang === "de";
  return [
    { id: "about", label: de ? "ÜBER MICH" : "ABOUT", position: [-4.2, -1.6, 1.2], scale: 1 },
    { id: "work", label: "PORTFOLIO", position: [-3.6, 2.8, -2.4], scale: 1.35 },
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
