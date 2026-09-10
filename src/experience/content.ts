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
  "BACKEND",
  "DESIGN",
  "CONTENT CREATION",
  "SOCIAL MEDIA",
  "VIDEO EDITING",
  "UI / UX",
  "BRANDING",
];

const FAINT_KEYWORDS = [
  "PHOTOGRAPHY",
  "MOTION",
  "LAYOUT",
  "TYPOGRAPHY",
  "PROTOTYPING",
  "WEB",
];

export interface Identity {
  name: string;
  tagline: string;
}

export function getIdentity(_lang: Lang): Identity {
  void _lang;
  return {
    name: "JASON BAY",
    tagline: "Frontend Developer",
  };
}

export function getRadialKeywords(_lang: Lang): RadialKeyword[] {
  void _lang;
  const faint = FAINT_KEYWORDS;

  const strongStep = (Math.PI * 2) / STRONG_KEYWORDS.length;
  const strong = STRONG_KEYWORDS.map((label, i) => ({
    label,
    strong: true,
    angle: i * strongStep - Math.PI / 2 + 0.12,
    radius: 4.6 + (i % 2) * 0.35,
    depth: Math.sin(i * 1.3) * 0.9,
  }));

  const faintStep = (Math.PI * 2) / faint.length;
  const weak = faint.map((label, i) => ({
    label,
    strong: false,
    angle: i * faintStep - Math.PI / 2 + faintStep / 2,
    radius: 6.6 + (i % 2) * 0.5,
    depth: (i % 2 === 0 ? -1 : 1) * (1.9 + (i % 3) * 0.5),
  }));

  return [...strong, ...weak];
}

export function getSectionNodes(lang: Lang): SectionNode[] {
  const de = lang === "de";
  const defs: { id: string; label: string; scale: number }[] = [
    { id: "about", label: de ? "ÜBER MICH" : "ABOUT", scale: 1.15 },
    { id: "work", label: "PORTFOLIO", scale: 1.35 },
    { id: "skills", label: "SKILLS", scale: 0.9 },
    { id: "experience", label: de ? "WERDEGANG" : "EXPERIENCE", scale: 1.3 },
    { id: "gallery", label: de ? "GALERIE" : "GALLERY", scale: 0.95 },
    { id: "social", label: "SOCIAL MEDIA", scale: 1 },
    { id: "languages", label: de ? "SPRACHEN" : "LANGUAGES", scale: 0.8 },
    { id: "contact", label: de ? "KONTAKT" : "CONTACT", scale: 1.05 },
  ];

  const R = 5.4;
  const golden = Math.PI * (3 - Math.sqrt(5));
  const n = defs.length;

  return defs.map((d, i) => {
    const y = 1 - (i / (n - 1)) * 2;
    const ring = Math.sqrt(Math.max(0, 1 - y * y));
    const theta = golden * i;
    return {
      ...d,
      position: [
        Math.cos(theta) * ring * R,
        y * R * 0.72,
        Math.sin(theta) * ring * R,
      ] as [number, number, number],
    };
  });
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
      label: "YouTube",
      handle: "@jsnuwu",
      href: "https://www.youtube.com/@jsnuwu",
    },
    {
      label: "LinkedIn",
      handle: "Jason Bay",
      href: "https://www.linkedin.com/in/jason-bay-275499398/",
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
