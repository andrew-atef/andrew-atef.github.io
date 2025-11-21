import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
    
    // Change font based on language
    if (i18n.language === 'ar') {
      document.body.classList.add('font-cairo');
      document.body.classList.remove('font-sans');
    } else {
      document.body.classList.add('font-sans');
      document.body.classList.remove('font-cairo');
    }
  }, [i18n.language]);

  return (
    <button
      onClick={toggleLanguage}
      className="fixed bottom-4 right-4 z-50 p-2 rounded-full bg-zinc-800/80 backdrop-blur-sm border border-zinc-700 hover:bg-zinc-700 transition-colors text-white"
      aria-label="Switch Language"
    >
      <div className="flex items-center gap-2 px-2">
        <Globe size={20} />
        <span className="text-sm font-medium uppercase">{i18n.language}</span>
      </div>
    </button>
  );
};

export default LanguageSwitcher;
