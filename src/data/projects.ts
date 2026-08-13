export interface Project {
  name: string;
  description: string;
  tech: string;
  link: string;
}

export const projects: Project[] = [
    {
    name: "League Of Legends @adesso",
    description:
      "Ein React Playground in Form einer League of Legends Team-Maker Web-App. Die Anwendung ermöglicht es, zwei Teams zu erstellen, Spieler hinzuzufügen und (ehemals) mithilfe einer KI faire Teams basierend auf Spieler-Daten zu generieren. Das Projekt dient sowohl als Lern- & Experimentierumgebung als auch als Funktions-Prototyp.",
    tech: "React, Vite, JavaScript, Tailwind CSS",
    link: "https://jsnuwu.github.io/react-playground/",
  },
    {
    name: "3D Earth",
    description:
      "Dieses Projekt ist ein Three.js Playground, in dem ich mit 3D-Grafiken im Web experimentiert habe. Konkret wurde eine 3D-Erdkugel umgesetzt, um Grundlagen von Three.js, Szenen, Kameras und Animationen zu testen. Das Repository ist als Experiment / Lernprojekt gedacht.",
    tech: "Three.js, JavaScript, HTML/CSS",
    link: "https://jsnuwu.github.io/Earth/",
  },
    {
    name: "Flowers",
    description:
      "Ein kleines CSS/JavaScript-Experiment ganz ohne Framework: Ein Klick auf den Button lässt vor einem animierten Sternenhimmel eine leuchtende Blume wachsen und aufblühen. Reine Spielerei mit CSS-Animationen und Timing.",
    tech: "HTML, CSS, JavaScript",
    link: "https://jsnuwu.github.io/Flowers/",
  },
  {
    name: "OnlineShopVue.js",
    description:
      "Dieses Projekt ist ein moderner, interaktiver Online-Shop für Bekleidung und Accessoires, entwickelt mit Vue 3, Pinia und Tailwind CSS. Es bietet eine benutzerfreundliche Oberfläche, die es Kunden ermöglicht, Produkte detailliert zu konfigurieren, bevor sie sie in den Warenkorb legen.",
    tech: "Vue.js, Pinia, Tailwind CSS, TypeScript, Vite",
    link: "https://jsnuwu.github.io/OnlineShopVue.js/",
  },
  {
    name: "Flappy Game",
    description:
      "Ein Flappy-Bird-Klon, gebaut mit Angular. Der Vogel wird per Klick/Tastendruck durch eine Reihe von Rohr-Hindernissen gesteuert, während im Hintergrund der Score mitgezählt wird. Erreichte Highscores werden in einem lokalen Leaderboard gespeichert.",
    tech: "Angular, TypeScript, RxJS",
    link: "https://jsnuwu.github.io/flappy-game/",
  },
  {
    name: "Angular Playground",
    description:
      "Ein Angular Playground – eine Entwicklungs- und Lernumgebung, in der ich mit Angular an kleinen Beispiel-Seiten und Konzepten experimentiert habe. Dieses Repository dient als Sandbox für Angular-Ideen, Komponenten-Tests und erste Implementierungen ohne festen Produkt-Fokus.",
    tech: "Angular, TypeScript, HTML/CSS",
    link: "https://jsnuwu.github.io/angular-playground/",
  },
  {
    name: "About Me Page (old)",
    description:
      "Dieses Repository enthält eine kurze „About Me“-Präsentation, die ich im Rahmen einer internen Vorstellung vor meinen Führungskräften gehalten habe. Ziel war es, einen Überblick über meine Person, meine Arbeitsweise und meine Schwerpunkte zu geben – kompakt und auf den Punkt. Das Projekt dient ausschließlich Dokumentations- und Referenzzwecken.",
    tech: "Angular, TypeScript, HTML/CSS",
    link: "https://jsnuwu.github.io/AboutMe/",
  },
];
