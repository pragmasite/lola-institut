import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { translations, type Language, type Translations } from './translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    // Check URL for language
    const path = window.location.pathname;
    const urlLang = path.split('/')[1] as Language;
    if (['fr', 'de', 'it', 'en'].includes(urlLang)) {
      return urlLang;
    }
    // Check localStorage
    const stored = localStorage.getItem('lola-institut-lang') as Language;
    if (stored && ['fr', 'de', 'it', 'en'].includes(stored)) {
      return stored;
    }
    // Default to French (Romandie region - postal code 3965)
    return 'fr';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('lola-institut-lang', lang);
    // Update URL without reload
    const newPath = `/${lang}${window.location.hash}`;
    window.history.pushState({}, '', newPath);
    // Update HTML lang attribute
    document.documentElement.lang = lang;
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
