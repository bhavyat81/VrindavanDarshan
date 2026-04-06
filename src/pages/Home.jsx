import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Home() {
  const { t } = useLanguage();

  const navCards = [
    {
      to: '/temples',
      icon: '🛕',
      title: t.quickNav.temples,
      desc: t.quickNav.templesDesc,
    },
    {
      to: '/leela-sthals',
      icon: '🌿',
      title: t.quickNav.leelaSthals,
      desc: t.quickNav.leelaSthalsDesc,
    },
    {
      to: '/visitor-info',
      icon: 'ℹ️',
      title: t.quickNav.visitorInfo,
      desc: t.quickNav.visitorInfoDesc,
    },
    {
      to: '/about',
      icon: '📖',
      title: t.quickNav.about,
      desc: t.quickNav.aboutDesc,
    },
  ];

  return (
    <main className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero__decor hero__decor--left" aria-hidden="true">
          <div className="decor-peacock">🦚</div>
          <div className="decor-lotus">🪷</div>
          <div className="decor-flute">🎶</div>
        </div>
        <div className="hero__content">
          <div className="hero__om" aria-hidden="true">ॐ</div>
          <h1 className="hero__tagline">{t.hero.tagline}</h1>
          <p className="hero__subtitle">{t.hero.subtitle}</p>
          <p className="hero__description">{t.hero.description}</p>
          <div className="hero__actions">
            <Link to="/temples" className="btn btn--primary btn--lg">
              🛕 {t.hero.exploreBtn}
            </Link>
            <Link to="/visitor-info" className="btn btn--outline btn--lg">
              ℹ️ {t.hero.infoBtn}
            </Link>
          </div>
        </div>
        <div className="hero__decor hero__decor--right" aria-hidden="true">
          <div className="decor-peacock">🦚</div>
          <div className="decor-lotus">🪷</div>
          <div className="decor-flute">🎶</div>
        </div>
      </section>

      {/* Disclaimer */}
      <div className="disclaimer-banner">
        <p>{t.disclaimer}</p>
      </div>

      {/* Quick Nav */}
      <section className="quick-nav container">
        <h2 className="section-title">{t.quickNav.title}</h2>
        <div className="quick-nav__grid">
          {navCards.map((card) => (
            <Link to={card.to} key={card.to} className="nav-card">
              <span className="nav-card__icon">{card.icon}</span>
              <h3 className="nav-card__title">{card.title}</h3>
              <p className="nav-card__desc">{card.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Decorative divider */}
      <div className="lotus-divider" aria-hidden="true">
        🪷 ✦ 🪷 ✦ 🪷
      </div>
    </main>
  );
}
