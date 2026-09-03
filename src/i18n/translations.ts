export type Lang = "de" | "en";

export interface Translations {
  header: {
    home: string;
    about: string;
    contact: string;
  };
  hero: {
    kicker: string;
    titlePrefix: string;
    tags: string[];
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    scroll: string;
  };
  aboutSlider: {
    title: string;
    categories: {
      key: "all" | "pets" | "moto" | "hike" | "me";
      label: string;
    }[];
    back: string;
    next: string;
  };
  socialStats: {
    kicker: string;
    title: string;
    subtitle: string;
    linkedinCta: string;
    latestPost: string;
    tiktokPreviewCaption: string;
    instagramPreviewCaption: string;
  };
  projectsPreview: {
    kicker: string;
    title: string;
    subtitle: string;
    previousProject: string;
    nextProject: string;
    openLive: string;
    openLiveAria: (name: string) => string;
    jumpTo: (name: string) => string;
  };
  liveButton: {
    label: string;
  };
  about: {
    heading: string;
    lead: string;
    body: string;
    spotlight: {
      kicker: string;
      heading: string;
      subtitle: string;
      statFollowerValue: string;
      statFollowerLabel: string;
      statLikesValue: string;
      statLikesLabel: string;
      statExperienceValue: string;
      statExperienceLabel: string;
      list: string[];
    };
  };
  experience: {
    heading: string;
    entries: {
      org: string;
      role: string;
      period: string;
      bullets: string[];
    }[];
  };
  skills: {
    heading: string;
    groups: { title: string; items: string }[];
    languages: { name: string; level: string }[];
  };
  techStack: {
    heading: string;
  };
  projects: {
    heading: string;
    skillsLabel: string;
  };
  contact: {
    heading: string;
    intro: string;
    send: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    submit: string;
  };
}

export const translations: Record<Lang, Translations> = {
  de: {
    header: {
      home: "Home",
      about: "Über mich",
      contact: "Kontakt",
    },
    hero: {
      kicker: "Portfolio",
      titlePrefix: "Hi, ich bin",
      tags: [
        "💻 Frontend Dev",
        "⚛️ React & TypeScript",
        "🎨 Design",
        "🎬 Video Editing",
      ],
      subtitle:
        "Junior Software Engineer mit Fokus auf Frontend-Entwicklung – React, Angular, Vue.js und moderne Webtechnologien. Nebenbei: Video-Editing & Grafikdesign seit 2020.",
      ctaPrimary: "Was ich mache",
      ctaSecondary: "Kontakt",
      scroll: "Scroll",
    },
    aboutSlider: {
      title: "Nebenbei",
      categories: [
        { key: "all", label: "Alles" },
        { key: "pets", label: "Tiere" },
        { key: "moto", label: "Motorrad" },
        { key: "hike", label: "Wandern" },
        { key: "me", label: "Ich" },
      ],
      back: "Zurück",
      next: "Weiter",
    },
    socialStats: {
      kicker: "Abseits vom Code",
      title: "Auch online unterwegs",
      subtitle:
        "Ein paar Zahlen von den Kanälen, auf denen ich sonst noch unterwegs bin.",
      linkedinCta: "Lass uns vernetzen →",
      latestPost: "Neuester Beitrag",
      tiktokPreviewCaption: "Neuester Post auf TikTok ansehen →",
      instagramPreviewCaption: "Neuester Post auf Instagram ansehen →",
    },
    projectsPreview: {
      kicker: "Live Vorschau",
      title: "Meine Projekte",
      subtitle:
        "Ein paar Einblicke in Dinge, die ich gebaut habe – klick dich durch oder öffne sie live.",
      previousProject: "Vorheriges Projekt",
      nextProject: "Nächstes Projekt",
      openLive: "Live öffnen ↗",
      openLiveAria: (name) => `${name} live öffnen`,
      jumpTo: (name) => `Zu ${name} springen`,
    },
    liveButton: {
      label: "Live ansehen",
    },
    about: {
      heading: "Über mich",
      lead: "Junior Software Engineer mit Fokus auf Frontend-Entwicklung.",
      body: "Ich bin Junior Software Engineer mit Fokus auf moderne Webentwicklung und Frontend-Technologien wie React, Angular und Vue.js – von durchdachten Oberflächen bis zur Backend-Anbindung. Daneben schneide ich seit 2020 Videos für Social Media und gestalte Grafiken; mein eigener TikTok-Kanal hat über 20.000 Follower und 3,5 Mio. Likes. Was ich mitbringe: sauberer Code, ein Auge für Timing und Komposition, und die Bereitschaft, mich kontinuierlich in neue Technologien einzuarbeiten.",
      spotlight: {
        kicker: "Nebenbei: Video & Grafikdesign",
        heading: "TikTok @jsnuwu – eigener Kanal seit 2020",
        subtitle: "Konzeption, Schnitt und Gestaltung in Eigenregie",
        statFollowerValue: "20.800",
        statFollowerLabel: "Follower",
        statLikesValue: "3,5 Mio.",
        statLikesLabel: "Likes",
        statExperienceValue: "5 Jahre",
        statExperienceLabel: "Schnitt-Praxis",
        list: [
          "Schnitt, Color Grading und Sounddesign von Kurzvideos mit After Effects und DaVinci Resolve",
          "Gestaltung von Thumbnails, Cover-Grafiken und Kanal-Branding mit Photoshop und Illustrator",
        ],
      },
    },
    experience: {
      heading: "Werdegang",
      entries: [
        {
          org: "TELUTION",
          role: "Junior Software Engineer",
          period: "06/2026 – heute",
          bullets: [
            "Mitarbeit an der Entwicklung und Betreuung von 4 Kundenprojekten",
            "Entwicklung und Anpassung von Webanwendungen mit PHP, Angular und WordPress",
            "Erstellung und Pflege von Webseiten mit WordPress und Elementor inklusive individueller Anpassungen und Erweiterungen",
            "Umsetzung von Frontend-Komponenten mit Angular sowie Backend-Anpassungen mit PHP",
          ],
        },
        {
          org: "adesso SE",
          role: "Fachinformatiker für Anwendungsentwicklung – Ausbildung",
          period: "09/2023 – 01/2026",
          bullets: [
            "Entwicklung und Wartung von Backend- und Frontend-Komponenten mit Fokus auf Java, Spring Boot, Angular und PostgreSQL",
            "Mitarbeit an interner Webanwendung zur Erfassung und Verwaltung von Mitarbeiterprofilen (Profiler, 2025)",
            "Unterstützung des IT-Support",
            "Durchführung von Frontend-Bugfixes",
          ],
        },
        {
          org: "Lebenshilfe Vaihingen-Mühlacker",
          role: "FSJ – Freiwilliges Soziales Jahr, Wohlfahrtswerk für Baden-Württemberg",
          period: "09/2022 – 08/2023",
          bullets: [
            "Begleitung und Unterstützung von Menschen mit Behinderungen im Alltag, inklusive Freizeitaktivitäten und Ausflügen",
            "Mitwirkung bei der Alltagsgestaltung: Kochen, Haushaltsaktivitäten und Förderung der Selbstständigkeit",
          ],
        },
      ],
    },
    skills: {
      heading: "Skills",
      groups: [
        {
          title: "Entwicklung",
          items: "HTML5, CSS3, Angular, React, Vue.js, TypeScript",
        },
        {
          title: "Interface & Web",
          items: "Figma, Design-Systeme, WordPress, Elementor",
        },
        {
          title: "Arbeitsweise",
          items: "Scrum, JIRA, Confluence, Git, KI-gestützte Workflows",
        },
        {
          title: "Video & Motion",
          items: "After Effects, DaVinci Resolve, CapCut",
        },
        {
          title: "Grafikdesign",
          items: "Photoshop, Illustrator, InDesign, Canva",
        },
        {
          title: "Schnitt & Post",
          items: "Color Grading, Sounddesign, Untertitel, Kurzformat",
        },
        {
          title: "Bildbearbeitung",
          items: "Retusche, Freistellen, Composing",
        },
        {
          title: "Social Media",
          items: "Thumbnails, Cover, Posts, Kanal-Branding",
        },
      ],
      languages: [
        { name: "Deutsch", level: "Muttersprache" },
        { name: "Englisch", level: "C1" },
      ],
    },
    techStack: {
      heading: "Tech Stack",
    },
    projects: {
      heading: "Projekte",
      skillsLabel: "Skills:",
    },
    contact: {
      heading: "Kontakt",
      intro:
        "Ich freue mich über deine Nachricht! Schreib mir einfach eine E-Mail oder nutze das Formular unten.",
      send: "send",
      namePlaceholder: "Dein Name",
      emailPlaceholder: "Deine E-Mail",
      messagePlaceholder: "Deine Nachricht",
      submit: "Absenden",
    },
  },
  en: {
    header: {
      home: "Home",
      about: "About",
      contact: "Contact",
    },
    hero: {
      kicker: "Portfolio",
      titlePrefix: "Hi, I'm",
      tags: [
        "💻 Frontend Dev",
        "⚛️ React & TypeScript",
        "🎨 Design",
        "🎬 Video Editing",
      ],
      subtitle:
        "Junior Software Engineer focused on frontend development – React, Angular, Vue.js and modern web technologies. On the side: video editing & graphic design since 2020.",
      ctaPrimary: "What I do",
      ctaSecondary: "Contact",
      scroll: "Scroll",
    },
    aboutSlider: {
      title: "On the side",
      categories: [
        { key: "all", label: "All" },
        { key: "pets", label: "Pets" },
        { key: "moto", label: "Motorcycles" },
        { key: "hike", label: "Hiking" },
        { key: "me", label: "Me" },
      ],
      back: "Back",
      next: "Next",
    },
    socialStats: {
      kicker: "Beyond the code",
      title: "Also active online",
      subtitle: "A few numbers from the channels I'm active on elsewhere.",
      linkedinCta: "Let's connect →",
      latestPost: "Latest post",
      tiktokPreviewCaption: "Watch my latest TikTok post →",
      instagramPreviewCaption: "View my latest Instagram post →",
    },
    projectsPreview: {
      kicker: "Live Preview",
      title: "My Projects",
      subtitle:
        "A few glimpses of things I've built – click through or open them live.",
      previousProject: "Previous project",
      nextProject: "Next project",
      openLive: "Open live ↗",
      openLiveAria: (name) => `Open ${name} live`,
      jumpTo: (name) => `Jump to ${name}`,
    },
    liveButton: {
      label: "View live",
    },
    about: {
      heading: "About me",
      lead: "Junior Software Engineer focused on frontend development.",
      body: "I'm a Junior Software Engineer focused on modern web development and frontend technologies like React, Angular and Vue.js – from thoughtful interfaces to backend integration. Alongside that, I've been editing videos for social media and designing graphics since 2020; my own TikTok channel has over 20,000 followers and 3.5M likes. What I bring: clean code, an eye for timing and composition, and a drive to keep learning new technologies.",
      spotlight: {
        kicker: "On the side: Video & Graphic Design",
        heading: "TikTok @jsnuwu – my own channel since 2020",
        subtitle: "Concept, editing and design, all done myself",
        statFollowerValue: "20.8K",
        statFollowerLabel: "Followers",
        statLikesValue: "3.5M",
        statLikesLabel: "Likes",
        statExperienceValue: "5 years",
        statExperienceLabel: "Editing Experience",
        list: [
          "Editing, color grading and sound design for short-form videos with After Effects and DaVinci Resolve",
          "Designing thumbnails, cover graphics and channel branding with Photoshop and Illustrator",
        ],
      },
    },
    experience: {
      heading: "Experience",
      entries: [
        {
          org: "TELUTION",
          role: "Junior Software Engineer",
          period: "06/2026 – present",
          bullets: [
            "Contributing to the development and maintenance of 4 client projects",
            "Developing and customizing web applications with PHP, Angular and WordPress",
            "Creating and maintaining websites with WordPress and Elementor, including custom adjustments and extensions",
            "Implementing frontend components with Angular as well as backend adjustments with PHP",
          ],
        },
        {
          org: "adesso SE",
          role: "IT Specialist for Application Development – Apprenticeship",
          period: "09/2023 – 01/2026",
          bullets: [
            "Developing and maintaining backend and frontend components with a focus on Java, Spring Boot, Angular and PostgreSQL",
            "Contributing to an internal web application for capturing and managing employee profiles (Profiler, 2025)",
            "Supporting the IT support team",
            "Performing frontend bug fixes",
          ],
        },
        {
          org: "Lebenshilfe Vaihingen-Mühlacker",
          role: "Voluntary Social Year (FSJ), Wohlfahrtswerk für Baden-Württemberg",
          period: "09/2022 – 08/2023",
          bullets: [
            "Supporting and assisting people with disabilities in daily life, including leisure activities and outings",
            "Helping shape everyday life: cooking, household activities, and fostering independence",
          ],
        },
      ],
    },
    skills: {
      heading: "Skills",
      groups: [
        {
          title: "Development",
          items: "HTML5, CSS3, Angular, React, Vue.js, TypeScript",
        },
        {
          title: "Interface & Web",
          items: "Figma, design systems, WordPress, Elementor",
        },
        {
          title: "Working Method",
          items: "Scrum, JIRA, Confluence, Git, AI-assisted workflows",
        },
        {
          title: "Video & Motion",
          items: "After Effects, DaVinci Resolve, CapCut",
        },
        {
          title: "Graphic Design",
          items: "Photoshop, Illustrator, InDesign, Canva",
        },
        {
          title: "Editing & Post",
          items: "Color grading, sound design, subtitles, short-form",
        },
        {
          title: "Photo Editing",
          items: "Retouching, cutouts, compositing",
        },
        {
          title: "Social Media",
          items: "Thumbnails, cover art, posts, channel branding",
        },
      ],
      languages: [
        { name: "German", level: "Native" },
        { name: "English", level: "C1" },
      ],
    },
    techStack: {
      heading: "Tech Stack",
    },
    projects: {
      heading: "Projects",
      skillsLabel: "Skills:",
    },
    contact: {
      heading: "Contact",
      intro:
        "I'd love to hear from you! Just send me an email or use the form below.",
      send: "send",
      namePlaceholder: "Your name",
      emailPlaceholder: "Your email",
      messagePlaceholder: "Your message",
      submit: "Send",
    },
  },
};
