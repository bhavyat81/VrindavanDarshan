import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-devotion">
          <span className="footer-lotus">🪷</span>
          <p className="footer-dedication">{t.footer.dedication}</p>
        </div>
        <p className="footer-disclaimer">{t.footer.disclaimer}</p>
        <p className="footer-rights">{t.footer.rights}</p>
      </div>
    </footer>
  );
}
