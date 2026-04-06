import { useLanguage } from '../context/LanguageContext';
import TempleCard from '../components/TempleCard';
import leelaSthals from '../data/leelaSthals';

export default function LeelaSthals() {
  const { t } = useLanguage();

  return (
    <main className="page container">
      <div className="page-header">
        <h1 className="page-title">{t.leelaSthalsPage.title}</h1>
        <p className="page-subtitle">{t.leelaSthalsPage.subtitle}</p>
      </div>

      <div className="disclaimer-banner">
        <p>{t.disclaimer}</p>
      </div>

      <div className="temples-grid">
        {leelaSthals.map((sthal) => (
          <TempleCard
            key={sthal.id}
            temple={{ ...sthal, category: 'leelaSthal' }}
            basePath="/leela-sthals"
          />
        ))}
      </div>
    </main>
  );
}
