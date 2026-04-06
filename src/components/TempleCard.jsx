import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const CATEGORY_ICONS = {
  prachin: '🏛️',
  historical: '🕌',
  modern: '🪷',
  leelaSthal: '🌿',
};

const CATEGORY_COLORS = {
  prachin: 'badge--prachin',
  historical: 'badge--historical',
  modern: 'badge--modern',
  leelaSthal: 'badge--leela',
};

export default function TempleCard({ temple, basePath = '/temples' }) {
  const { language, t } = useLanguage();

  const categoryLabel = t.categories[temple.category] || temple.category;
  const badgeClass = CATEGORY_COLORS[temple.category] || '';
  const icon = CATEGORY_ICONS[temple.category] || '🛕';

  return (
    <div className="temple-card">
      <div className="temple-card__banner">
        <span className="temple-card__icon">{icon}</span>
      </div>
      <div className="temple-card__body">
        <span className={`badge ${badgeClass}`}>{categoryLabel}</span>
        <h3 className="temple-card__name">{temple.name[language]}</h3>
        <p className="temple-card__deity">
          {language === 'hi' ? 'ठाकुर जी:' : 'Deity:'}{' '}
          <span>{temple.deity[language]}</span>
        </p>
        {temple.location && (
          <p className="temple-card__location">
            📍 {temple.location[language]}
          </p>
        )}
        <Link to={`${basePath}/${temple.id}`} className="btn btn--primary temple-card__btn">
          {t.templesPage.viewDetails}
        </Link>
      </div>
    </div>
  );
}
