import { useParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import temples from '../data/temples';
import leelaSthals from '../data/leelaSthals';

const CATEGORY_ICONS = {
  prachin: '🏛️',
  historical: '🕌',
  modern: '🪷',
  leelaSthal: '🌿',
};

export default function TempleDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { language, t } = useLanguage();

  const allPlaces = [...temples, ...leelaSthals];
  const place = allPlaces.find((p) => p.id === id);

  if (!place) {
    return (
      <main className="page container">
        <p>Temple not found.</p>
        <button className="btn btn--outline" onClick={() => navigate(-1)}>
          {t.templeDetail.backBtn}
        </button>
      </main>
    );
  }

  const icon = CATEGORY_ICONS[place.category] || '🛕';
  const categoryLabel = place.category ? (t.categories[place.category] || place.category) : '';

  const renderTimings = () => {
    const timings = place.timings;
    if (!timings) return null;

    // Seasonal timings
    if (timings.summer || timings.winter) {
      return (
        <div className="timings">
          {timings.summer && (
            <div className="timings__season">
              <h4>☀️ {t.templeDetail.summer}</h4>
              <p>🌅 {t.templeDetail.morning}: {timings.summer.morning}</p>
              <p>🌇 {t.templeDetail.evening}: {timings.summer.evening}</p>
            </div>
          )}
          {timings.winter && (
            <div className="timings__season">
              <h4>❄️ {t.templeDetail.winter}</h4>
              <p>🌅 {t.templeDetail.morning}: {timings.winter.morning}</p>
              <p>🌇 {t.templeDetail.evening}: {timings.winter.evening}</p>
            </div>
          )}
        </div>
      );
    }

    // Simple timings
    return (
      <div className="timings">
        <div className="timings__season">
          {timings.morning && <p>🌅 {t.templeDetail.morning}: {timings.morning}</p>}
          {timings.en_morning && language === 'en' && <p>🌅 {t.templeDetail.morning}: {timings.en_morning}</p>}
          {timings.evening && <p>🌇 {t.templeDetail.evening}: {timings.evening}</p>}
          {timings.note && (
            <p className="timings__note">
              ⚠️ {language === 'hi' ? timings.note.hi : timings.note.en}
            </p>
          )}
        </div>
      </div>
    );
  };

  return (
    <main className="page container">
      <button className="btn btn--outline btn--back" onClick={() => navigate(-1)}>
        ← {t.templeDetail.backBtn}
      </button>

      {/* Banner */}
      <div className="detail-banner">
        <span className="detail-banner__icon">{icon}</span>
        <div className="detail-banner__content">
          <h1 className="detail-banner__name">{place.name[language]}</h1>
          {categoryLabel && (
            <span className={`badge badge--detail badge--${place.category}`}>{categoryLabel}</span>
          )}
          <p className="detail-banner__deity">
            {language === 'hi' ? 'ठाकुर जी: ' : 'Deity: '}
            <strong>{place.deity[language]}</strong>
          </p>
        </div>
      </div>

      <div className="detail-grid">
        {/* Timings */}
        <section className="detail-card">
          <h2 className="detail-card__title">⏰ {t.templeDetail.timings}</h2>
          {renderTimings()}
          <p className="timings__disclaimer">{t.disclaimer}</p>
        </section>

        {/* Story */}
        <section className="detail-card detail-card--story">
          <h2 className="detail-card__title">📖 {t.templeDetail.story}</h2>
          <p className="detail-story">{place.story[language]}</p>
        </section>

        {/* Special Features */}
        {place.special && (
          <section className="detail-card">
            <h2 className="detail-card__title">✨ {t.templeDetail.special}</h2>
            <ul className="detail-list">
              {place.special[language].map((item, i) => (
                <li key={i}>🌸 {item}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Location */}
        {place.location && (
          <section className="detail-card">
            <h2 className="detail-card__title">📍 {t.templeDetail.location}</h2>
            <p>{place.location[language]}</p>
          </section>
        )}

        {/* Do's and Don'ts */}
        {place.dosDonts && (
          <section className="detail-card detail-card--full">
            <h2 className="detail-card__title">🙏 {t.templeDetail.dosDonts}</h2>
            <div className="dos-donts">
              <div className="dos">
                <h3>✅ {t.templeDetail.dos}</h3>
                <ul>
                  {place.dosDonts.dos[language].map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="donts">
                <h3>❌ {t.templeDetail.donts}</h3>
                <ul>
                  {place.dosDonts.donts[language].map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
