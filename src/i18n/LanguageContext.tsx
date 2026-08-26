import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { translations, type Lang } from "./translations";
import { LanguageContext } from "./languageContextStore";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem("lang");
    return saved === "en" || saved === "de" ? saved : "de";
  });

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}
