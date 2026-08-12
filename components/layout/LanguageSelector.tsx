'use client';

import { useState, useEffect, useRef } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';

export interface LanguageOption {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
  isSouthAfrican?: boolean;
}

const LANGUAGES: LanguageOption[] = [
  // South Africa Official 11
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇿🇦', isSouthAfrican: true },
  { code: 'zu', name: 'isiZulu', nativeName: 'isiZulu', flag: '🇿🇦', isSouthAfrican: true },
  { code: 'af', name: 'Afrikaans', nativeName: 'Afrikaans', flag: '🇿🇦', isSouthAfrican: true },
  { code: 'xh', name: 'isiXhosa', nativeName: 'isiXhosa', flag: '🇿🇦', isSouthAfrican: true },
  { code: 'nso', name: 'Sepedi', nativeName: 'Sepedi', flag: '🇿🇦', isSouthAfrican: true },
  { code: 'st', name: 'Sesotho', nativeName: 'Sesotho', flag: '🇿🇦', isSouthAfrican: true },
  { code: 'tn', name: 'Setswana', nativeName: 'Setswana', flag: '🇿🇦', isSouthAfrican: true },
  { code: 'ts', name: 'Xitsonga', nativeName: 'Xitsonga', flag: '🇿🇦', isSouthAfrican: true },
  { code: 'ss', name: 'siSwati', nativeName: 'siSwati', flag: '🇿🇦', isSouthAfrican: true },
  { code: 've', name: 'Tshivenda', nativeName: 'Tshivenda', flag: '🇿🇦', isSouthAfrican: true },
  { code: 'nr', name: 'isiNdebele', nativeName: 'isiNdebele', flag: '🇿🇦', isSouthAfrican: true },
  // International
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português', flag: '🇵🇹' },
  { code: 'sw', name: 'Swahili', nativeName: 'Kiswahili', flag: '🇰🇪' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪' },
];

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: {
      translate?: {
        TranslateElement?: new (options: Record<string, unknown>, elementId: string) => void;
      };
    };
  }
}

export default function LanguageSelector({ isCompact = false }: { isCompact?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState<LanguageOption>(LANGUAGES[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Read saved language from localStorage
    const savedCode = localStorage.getItem('graduates_hub_lang') || 'en';
    const found = LANGUAGES.find((l) => l.code === savedCode) || LANGUAGES[0];
    setSelectedLang(found);

    // Initialize Google Translate hidden widget once
    if (!document.getElementById('google-translate-script')) {
      window.googleTranslateElementInit = () => {
        if (window.google?.translate?.TranslateElement) {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: 'en',
              includedLanguages: LANGUAGES.map((l) => l.code).join(','),
              autoDisplay: false,
            },
            'google_translate_element_hidden'
          );
        }
      };

      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelectLanguage = (lang: LanguageOption) => {
    setSelectedLang(lang);
    setIsOpen(false);
    localStorage.setItem('graduates_hub_lang', lang.code);

    // Set cookie for Google Translate widget
    const domain = window.location.hostname;
    document.cookie = `googtrans=/en/${lang.code}; path=/; domain=${domain}`;
    document.cookie = `googtrans=/en/${lang.code}; path=/;`;

    // Trigger iframe change or reload if needed
    const selectElem = document.querySelector('.goog-te-combo') as HTMLSelectElement | null;
    if (selectElem) {
      selectElem.value = lang.code;
      selectElem.dispatchEvent(new Event('change'));
    } else {
      window.location.reload();
    }
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Hidden container for Google Translate widget */}
      <div id="google_translate_element_hidden" className="hidden" aria-hidden="true" />

      {/* Selector Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`inline-flex items-center justify-center gap-1.5 rounded-lg border border-[#D1C5B4] bg-white font-bold text-xs text-[#1F1B13] hover:bg-[#FFF8F1] hover:border-primary transition-all shadow-sm ${
          isCompact ? 'px-2.5 py-1.5' : 'px-3 py-2'
        }`}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Globe size={14} className="text-primary shrink-0" />
        <span className="font-semibold tracking-wide">
          {selectedLang.flag} {selectedLang.code.toUpperCase()}
        </span>
        <ChevronDown size={13} className={`text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Popover Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 rounded-xl bg-white border border-[#D1C5B4] shadow-xl z-50 overflow-hidden text-xs py-2 max-h-80 overflow-y-auto">
          <div className="px-3 py-1.5 font-bold text-slate-400 uppercase tracking-wider text-[10px] border-b border-slate-100 mb-1">
            🇿🇦 South African Official Languages
          </div>
          {LANGUAGES.filter((l) => l.isSouthAfrican).map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleSelectLanguage(lang)}
              className={`w-full text-left px-3 py-2 flex items-center justify-between hover:bg-[#FFF8F1] transition-colors ${
                selectedLang.code === lang.code ? 'font-extrabold text-primary bg-primary/5' : 'text-[#4F4639]'
              }`}
            >
              <span className="flex items-center gap-2">
                <span>{lang.flag}</span>
                <span className="font-bold">{lang.name}</span>
                <span className="text-slate-400 font-normal text-[11px]">({lang.nativeName})</span>
              </span>
              {selectedLang.code === lang.code && <Check size={14} className="text-primary shrink-0" />}
            </button>
          ))}

          <div className="px-3 py-1.5 font-bold text-slate-400 uppercase tracking-wider text-[10px] border-t border-b border-slate-100 my-1">
            🌍 Global Languages
          </div>
          {LANGUAGES.filter((l) => !l.isSouthAfrican).map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleSelectLanguage(lang)}
              className={`w-full text-left px-3 py-2 flex items-center justify-between hover:bg-[#FFF8F1] transition-colors ${
                selectedLang.code === lang.code ? 'font-extrabold text-primary bg-primary/5' : 'text-[#4F4639]'
              }`}
            >
              <span className="flex items-center gap-2">
                <span>{lang.flag}</span>
                <span className="font-bold">{lang.name}</span>
                <span className="text-slate-400 font-normal text-[11px]">({lang.nativeName})</span>
              </span>
              {selectedLang.code === lang.code && <Check size={14} className="text-primary shrink-0" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
