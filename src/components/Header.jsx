import { Link, NavLink } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import LanguageToggle from './LanguageToggle';
import { useState } from 'react';

export default function Header() {
  const { t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="header-brand" onClick={closeMenu}>
          <span className="header-lotus">🪷</span>
          <div className="header-titles">
            <span className="header-name">{t.appName}</span>
            <span className="header-subtitle">{t.appSubtitle}</span>
          </div>
        </Link>

        <div className="header-right">
          <nav className={`nav${menuOpen ? ' nav--open' : ''}`}>
            <NavLink to="/" end className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} onClick={closeMenu}>
              {t.nav.home}
            </NavLink>
            <NavLink to="/temples" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} onClick={closeMenu}>
              {t.nav.temples}
            </NavLink>
            <NavLink to="/leela-sthals" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} onClick={closeMenu}>
              {t.nav.leelaSthals}
            </NavLink>
            <NavLink to="/visitor-info" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} onClick={closeMenu}>
              {t.nav.visitorInfo}
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} onClick={closeMenu}>
              {t.nav.about}
            </NavLink>
          </nav>
          <LanguageToggle />
          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
