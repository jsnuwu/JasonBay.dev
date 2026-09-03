export interface Project {
  name: string;
  description: string;
  descriptionEn: string;
  tech: string;
  link: string;
}

export const projects: Project[] = [
  {
    name: "League Of Legends @adesso",
    description:
      "Ein React Playground in Form einer League of Legends Team-Maker Web-App. Die Anwendung ermöglicht es, zwei Teams zu erstellen, Spieler hinzuzufügen und (ehemals) mithilfe einer KI faire Teams basierend auf Spieler-Daten zu generieren. Das Projekt dient sowohl als Lern- & Experimentierumgebung als auch als Funktions-Prototyp.",
    descriptionEn:
      "A React playground in the form of a League of Legends team-maker web app. The app lets you create two teams, add players, and (formerly) uses AI to generate fair teams based on player data. The project serves both as a learning & experimentation environment and as a functional prototype.",
    tech: "React, Vite, JavaScript, Tailwind CSS",
    link: "https://jsnuwu.github.io/react-playground/",
  },
  {
    name: "OnlineShopVue.js",
    description:
      "Dieses Projekt ist ein moderner, interaktiver Online-Shop für Bekleidung und Accessoires, entwickelt mit Vue 3, Pinia und Tailwind CSS. Es bietet eine benutzerfreundliche Oberfläche, die es Kunden ermöglicht, Produkte detailliert zu konfigurieren, bevor sie sie in den Warenkorb legen.",
    descriptionEn:
      "This project is a modern, interactive online shop for clothing and accessories, built with Vue 3, Pinia and Tailwind CSS. It offers a user-friendly interface that lets customers configure products in detail before adding them to the cart.",
    tech: "Vue.js, Pinia, Tailwind CSS, TypeScript, Vite",
    link: "https://jsnuwu.github.io/OnlineShopVue.js/",
  },
  {
    name: "Placeholder",
    description:
      "Ein React Three Fiber Experiment: eine kleine 3D-Szene mit Himmel, Haus und zufällig platzierten Bäumen, durch die man sich per WASD und Sprung frei bewegen kann – mit Pointer-Lock-Kamera wie in einem Ego-Shooter. Reines Spiel- und Lernprojekt ohne festen Zweck.",
    descriptionEn:
      "A React Three Fiber experiment: a small 3D scene with a sky, a house, and randomly placed trees you can walk through freely with WASD and jump – pointer-lock camera, like a first-person game. A pure playground / learning project with no fixed purpose.",
    tech: "React, Three.js, React Three Fiber, TypeScript",
    link: "https://jsnuwu.github.io/PLACEHOLDER/",
  },
  {
    name: "Flappy Game",
    description:
      "Ein Flappy-Bird-Klon, gebaut mit Angular. Der Vogel wird per Klick/Tastendruck durch eine Reihe von Rohr-Hindernissen gesteuert, während im Hintergrund der Score mitgezählt wird. Erreichte Highscores werden in einem lokalen Leaderboard gespeichert.",
    descriptionEn:
      "A Flappy Bird clone built with Angular. The bird is steered through a series of pipe obstacles via click/keypress while the score is tracked in the background. High scores are saved to a local leaderboard.",
    tech: "Angular, TypeScript, RxJS",
    link: "https://jsnuwu.github.io/flappy-game/",
  },
  {
    name: "3D Earth",
    description:
      "Dieses Projekt ist ein Three.js Playground, in dem ich mit 3D-Grafiken im Web experimentiert habe. Konkret wurde eine 3D-Erdkugel umgesetzt, um Grundlagen von Three.js, Szenen, Kameras und Animationen zu testen. Das Repository ist als Experiment / Lernprojekt gedacht.",
    descriptionEn:
      "This project is a Three.js playground where I experimented with 3D graphics on the web. Specifically, I built a 3D globe to test the basics of Three.js, scenes, cameras and animations. The repository is meant as an experiment / learning project.",
    tech: "Three.js, JavaScript, HTML/CSS",
    link: "https://jsnuwu.github.io/Earth/",
  },
  {
    name: "Flowers",
    description:
      "Ein kleines CSS/JavaScript-Experiment ganz ohne Framework: Ein Klick auf den Button lässt vor einem animierten Sternenhimmel eine leuchtende Blume wachsen und aufblühen. Reine Spielerei mit CSS-Animationen und Timing.",
    descriptionEn:
      "A small CSS/JavaScript experiment with no framework at all: clicking the button grows and blooms a glowing flower in front of an animated starry sky. Pure play with CSS animations and timing.",
    tech: "HTML, CSS, JavaScript",
    link: "https://jsnuwu.github.io/Flowers/",
  },
  {
    name: "About Me Page (old)",
    description:
      "Dieses Repository enthält eine kurze „About Me“-Präsentation, die ich im Rahmen einer internen Vorstellung vor meinen Führungskräften gehalten habe. Ziel war es, einen Überblick über meine Person, meine Arbeitsweise und meine Schwerpunkte zu geben – kompakt und auf den Punkt. Das Projekt dient ausschließlich Dokumentations- und Referenzzwecken.",
    descriptionEn:
      "This repository contains a short 'About Me' presentation I gave as part of an internal introduction to my managers. The goal was to give an overview of who I am, how I work and my focus areas – compact and to the point. The project serves purely documentation and reference purposes.",
    tech: "Angular, TypeScript, HTML/CSS",
    link: "https://jsnuwu.github.io/AboutMe/",
  },
];
