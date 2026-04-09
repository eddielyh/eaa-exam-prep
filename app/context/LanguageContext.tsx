"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import type { Language } from "../types";

const LanguageContext = createContext<{
  language: Language;
  setLanguage: (l: Language) => void;
}>({ language: "cn", setLanguage: () => {} });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("cn");
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
