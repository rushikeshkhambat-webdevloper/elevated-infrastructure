import { createContext, useContext, useEffect, useState } from "react";
import { content } from "../data/content.js";

const LanguageContext = createContext(undefined);

function getByPath(obj, path) {
  return path.split(".").reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj);
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window === "undefined") return "en";
    const stored = window.localStorage.getItem("ei-lang");
    return stored === "mr" || stored === "en" ? stored : "en";
  });

  useEffect(() => {
    window.localStorage.setItem("ei-lang", lang);
    if (lang === "mr") {
      document.body.classList.add("lang-mr");
    } else {
      document.body.classList.remove("lang-mr");
    }
  }, [lang]);

  const t = (key) => {
    const value = getByPath(content[lang], key);
    if (value === undefined) {
      const fallback = getByPath(content.en, key);
      return fallback !== undefined ? fallback : key;
    }
    return value;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
