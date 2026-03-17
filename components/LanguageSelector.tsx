'use client';

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { useTranslation } from '@/context/TranslationContext';

const languages = [
  { code: 'en', name: 'English', country: 'gb' },
  { code: 'ur', name: 'Urdu', country: 'pk' },
  { code: 'ar', name: 'Arabic', country: 'sa' },
  { code: 'es', name: 'Spanish', country: 'es' },
  { code: 'fr', name: 'French', country: 'fr' },
  { code: 'de', name: 'German', country: 'de' },
  { code: 'it', name: 'Italian', country: 'it' },
  { code: 'pt', name: 'Portuguese', country: 'pt' },
  { code: 'nl', name: 'Dutch', country: 'nl' },
  { code: 'tr', name: 'Turkish', country: 'tr' },
  { code: 'hi', name: 'Hindi', country: 'in' },
  { code: 'zh', name: 'Chinese', country: 'cn' },
  { code: 'ja', name: 'Japanese', country: 'jp' },
  { code: 'ko', name: 'Korean', country: 'kr' },
  { code: 'ru', name: 'Russian', country: 'ru' },
  { code: 'id', name: 'Indonesian', country: 'id' },
  { code: 'th', name: 'Thai', country: 'th' },
  { code: 'vi', name: 'Vietnamese', country: 'vn' },
  { code: 'pl', name: 'Polish', country: 'pl' },
  { code: 'el', name: 'Greek', country: 'gr' },
];

export default function LanguageSelector() {
  const { lang, setLang } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const selected = languages.find((l) => l.code === lang) ?? languages[0];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-gray-200 hover:border-red-500 transition-colors text-sm font-medium text-gray-700 hover:text-red-600 bg-white"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <Image
          src={`https://flagcdn.com/w40/${selected.country}.png`}
          alt={selected.name}
          width={20}
          height={14}
          className="rounded-sm object-cover"
          unoptimized
        />
        <span className="hidden sm:inline">{selected.name}</span>
        <svg className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-xl z-[100] max-h-72 overflow-y-auto">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => { setLang(language.code); setOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-red-50 hover:text-red-700 transition-colors text-left ${
                selected.code === language.code ? 'bg-red-50 text-red-700 font-medium' : 'text-gray-700'
              }`}
            >
              <Image
                src={`https://flagcdn.com/w40/${language.country}.png`}
                alt={language.name}
                width={20}
                height={14}
                className="rounded-sm object-cover flex-shrink-0"
                unoptimized
              />
              {language.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
