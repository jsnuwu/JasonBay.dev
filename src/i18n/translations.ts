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
    tags: { label: string; target: string }[];
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
    close: string;
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
  tiktokShowcase: {
    kicker: string;
    title: string;
    subtitle: string;
    prev: string;
    next: string;
    mute: string;
    unmute: string;
    play: string;
    pause: string;
    volume: string;
    jumpTo: (index: number) => string;
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
        { label: "Frontend Dev", target: "projects-preview" },
        { label: "Galerie", target: "gallery" },
        { label: "Video Editing", target: "tiktok-showcase" },
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
      close: "Schließen",
    },
    socialStats: {
      kicker: "Abseits vom Code",
      title: "Auch online unterwegs",
      subtitle:
        "Ein paar Zahlen von den Kanälen, auf denen ich sonst noch unterwegs bin.",
      linkedinCta: "Lass uns vernetzen",
      latestPost: "Neuester Beitrag",
      tiktokPreviewCaption: "Neuester Post auf TikTok ansehen",
      instagramPreviewCaption: "Neuester Post auf Instagram ansehen",
    },
    projectsPreview: {
      kicker: "Live Vorschau",
      title: "Meine Projekte",
      subtitle:
        "Ein paar Einblicke in Dinge, die ich gebaut habe – klick dich durch oder öffne sie live.",
      previousProject: "Vorheriges Projekt",
      nextProject: "Nächstes Projekt",
      openLive: "Live öffnen",
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
          "Eigene Edits von Schnitt bis Veröffentlichung auf TikTok, YouTube und Instagram",
          "Gefühl für Bildaufbau, Timing und Reichweite",
        ],
      },
    },
    experience: {
      heading: "Werdegang",
      entries: [
        {
          org: "Telution",
          role: "Junior Software Engineer",
          period: "06/2026 – heute",
          bullets: [
            "Frontend-Komponenten mit Angular und TypeScript, angebunden an bestehende PHP-Backends",
            "Kundenwebsites mit WordPress und Elementor, erweitert um eigenen PHP- und CSS-Code",
            "Bugfixing und Feature-Erweiterungen im laufenden Betrieb",
          ],
        },
        {
          org: "adesso SE · Ausbildung",
          role: "Fachinformatiker für Anwendungsentwicklung",
          period: "09/2023 – 01/2026",
          bullets: [
            "Frontend mit Angular und TypeScript, Backend mit Java, Spring Boot und PostgreSQL",
            "Profiler (internes Produkt, 05/2025 – 12/2025): Frontend-Komponenten und UI-Bugfixes",
            "Scrum-Team: Git, Code Reviews, JIRA, Confluence",
            "IT-Support",
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
          title: "Schwerpunkt Frontend",
          items: "HTML5, CSS3, JavaScript, TypeScript, Angular, Tailwind CSS, Responsive Design",
        },
        {
          title: "Design & Web",
          items: "Figma, WordPress, Elementor",
        },
        {
          title: "Weitere Frameworks",
          items: "React, Vue.js",
        },
        {
          title: "Backend & Daten",
          items: "PHP, Java, Spring Boot, PostgreSQL, MySQL, MongoDB",
        },
        {
          title: "Tools & Arbeitsweise",
          items: "Git, Docker, Scrum, Unit Testing, JIRA, Confluence, YouTrack",
        },
        {
          title: "Content & Social",
          items: "Video-Schnitt, TikTok, YouTube, Instagram",
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
    tiktokShowcase: {
      kicker: "TikTok",
      title: "Ein paar Einblicke",
      subtitle: "Mehr davon auf TikTok ansehen",
      prev: "Vorheriges Video",
      next: "Nächstes Video",
      mute: "Stummschalten",
      unmute: "Ton an",
      play: "Abspielen",
      pause: "Pausieren",
      volume: "Lautstärke",
      jumpTo: (index) => `Zu Video ${index} springen`,
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
        { label: "Frontend Dev", target: "projects-preview" },
        { label: "Gallery", target: "gallery" },
        { label: "Video Editing", target: "tiktok-showcase" },
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
      close: "Close",
    },
    socialStats: {
      kicker: "Beyond the code",
      title: "Also active online",
      subtitle: "A few numbers from the channels I'm active on elsewhere.",
      linkedinCta: "Let's connect",
      latestPost: "Latest post",
      tiktokPreviewCaption: "Watch my latest TikTok post",
      instagramPreviewCaption: "View my latest Instagram post",
    },
    projectsPreview: {
      kicker: "Live Preview",
      title: "My Projects",
      subtitle:
        "A few glimpses of things I've built – click through or open them live.",
      previousProject: "Previous project",
      nextProject: "Next project",
      openLive: "Open live",
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
          "My own edits from cut to release on TikTok, YouTube and Instagram",
          "A feel for framing, timing and reach",
        ],
      },
    },
    experience: {
      heading: "Experience",
      entries: [
        {
          org: "Telution",
          role: "Junior Software Engineer",
          period: "06/2026 – present",
          bullets: [
            "Frontend components with Angular and TypeScript, wired into existing PHP backends",
            "Client websites with WordPress and Elementor, extended with custom PHP and CSS",
            "Bug fixing and feature work in production",
          ],
        },
        {
          org: "adesso SE · Apprenticeship",
          role: "IT Specialist for Application Development",
          period: "09/2023 – 01/2026",
          bullets: [
            "Frontend with Angular and TypeScript, backend with Java, Spring Boot and PostgreSQL",
            "Profiler (internal product, 05/2025 – 12/2025): frontend components and UI bug fixes",
            "Scrum team: Git, code reviews, JIRA, Confluence",
            "IT support",
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
          title: "Frontend focus",
          items: "HTML5, CSS3, JavaScript, TypeScript, Angular, Tailwind CSS, Responsive Design",
        },
        {
          title: "Design & Web",
          items: "Figma, WordPress, Elementor",
        },
        {
          title: "Other frameworks",
          items: "React, Vue.js",
        },
        {
          title: "Backend & Data",
          items: "PHP, Java, Spring Boot, PostgreSQL, MySQL, MongoDB",
        },
        {
          title: "Tools & Method",
          items: "Git, Docker, Scrum, Unit Testing, JIRA, Confluence, YouTrack",
        },
        {
          title: "Content & Social",
          items: "Video editing, TikTok, YouTube, Instagram",
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
    tiktokShowcase: {
      kicker: "TikTok",
      title: "A few glimpses",
      subtitle: "See more on TikTok",
      prev: "Previous video",
      next: "Next video",
      mute: "Mute",
      unmute: "Unmute",
      play: "Play",
      pause: "Pause",
      volume: "Volume",
      jumpTo: (index) => `Jump to video ${index}`,
    },
  },
};
