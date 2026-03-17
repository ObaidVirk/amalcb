'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import en from '@/translations/en.json';
import ur from '@/translations/ur.json';
import ar from '@/translations/ar.json';
import es from '@/translations/es.json';
import fr from '@/translations/fr.json';
import de from '@/translations/de.json';
import it from '@/translations/it.json';
import pt from '@/translations/pt.json';
import nl from '@/translations/nl.json';
import tr from '@/translations/tr.json';
import hi from '@/translations/hi.json';
import zh from '@/translations/zh.json';
import ja from '@/translations/ja.json';
import ko from '@/translations/ko.json';
import ru from '@/translations/ru.json';
import id from '@/translations/id.json';
import th from '@/translations/th.json';
import vi from '@/translations/vi.json';
import pl from '@/translations/pl.json';
import el from '@/translations/el.json';

export type Translation = typeof en;

const translations: Record<string, Translation> = {
  en, ur, ar, es, fr, de, it, pt, nl, tr, hi, zh, ja, ko, ru, id, th, vi, pl, el,
};

interface TranslationContextType {
  lang: string;
  setLang: (code: string) => void;
  t: Translation;
}

const TranslationContext = createContext<TranslationContextType>({
  lang: 'en',
  setLang: () => {},
  t: en,
});

export function TranslationProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState('en');

  useEffect(() => {
    const saved = localStorage.getItem('siteLanguage');
    if (saved && saved in translations) {
      setLangState(saved);
    }
  }, []);

  function setLang(code: string) {
    if (code in translations) {
      localStorage.setItem('siteLanguage', code);
      setLangState(code);
    }
  }

  const t = translations[lang] ?? en;

  return (
    <TranslationContext.Provider value={{ lang, setLang, t }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  return useContext(TranslationContext);
}
