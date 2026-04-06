import { useLanguage } from '../context/LanguageContext';
import visitorInfo from '../data/visitorInfo';

export default function VisitorInfo() {
  const { language, t } = useLanguage();
  const lang = language;

  const reach = visitorInfo.howToReach[lang];
  const bestTime = visitorInfo.bestTime[lang];
  const festivals = visitorInfo.festivals[lang];
  const dosDonts = visitorInfo.dosDonts[lang];
  const localTips = visitorInfo.localTips[lang];

  return (
    <main className="page container">
      <div className="page-header">
        <h1 className="page-title">{t.visitorInfoPage.title}</h1>
        <p className="page-subtitle">{t.visitorInfoPage.subtitle}</p>
      </div>

      {/* How to Reach */}
      <section className="info-section">
        <h2 className="info-section__title">🚗 {reach.title}</h2>
        <div className="reach-grid">
          {reach.sections.map((s, i) => (
            <div className="reach-card" key={i}>
              <h3 className="reach-card__mode">{s.mode}</h3>
              <p>{s.details}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Best Time */}
      <section className="info-section">
        <h2 className="info-section__title">📅 {bestTime.title}</h2>
        <p className="info-text">{bestTime.content}</p>
        <div className="seasons-grid">
          {bestTime.seasons.map((s, i) => (
            <div className="season-card" key={i}>
              <span className="season-card__icon">{s.icon}</span>
              <h4>{s.name}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Festivals */}
      <section className="info-section">
        <h2 className="info-section__title">🎊 {festivals.title}</h2>
        <div className="festivals-grid">
          {festivals.list.map((f, i) => (
            <div className="festival-card" key={i}>
              <span className="festival-card__icon">{f.icon}</span>
              <div className="festival-card__body">
                <h4>{f.name}</h4>
                <span className="festival-card__time">{f.time}</span>
                <p>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Dos and Don'ts */}
      <section className="info-section">
        <h2 className="info-section__title">🙏 {t.visitorInfoPage.dosDonts}</h2>
        <div className="dos-donts">
          <div className="dos">
            <h3>✅ {t.visitorInfoPage.dos}</h3>
            <ul>
              {dosDonts.dos.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </div>
          <div className="donts">
            <h3>❌ {t.visitorInfoPage.donts}</h3>
            <ul>
              {dosDonts.donts.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Local Tips */}
      <section className="info-section">
        <h2 className="info-section__title">💡 {localTips.title}</h2>
        <ul className="tips-list">
          {localTips.tips.map((tip, i) => (
            <li className="tips-list__item" key={i}>
              <span className="tips-list__icon">{tip.icon}</span>
              <span>{tip.text}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
