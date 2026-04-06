import { useLanguage } from '../context/LanguageContext';

export default function LanguageToggle() {
  const { toggleLanguage, t } = useLanguage();

  return (
    <button className="lang-toggle" onClick={toggleLanguage} aria-label="Toggle language">
      🌐 {t.langToggle}
    </button>
  );
}
