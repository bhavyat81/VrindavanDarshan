import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import TempleCard from '../components/TempleCard';
import temples from '../data/temples';

export default function Temples() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [search, setSearch] = useState('');

  const categories = ['all', 'prachin', 'historical', 'modern'];

  const filtered = temples.filter((temple) => {
    const matchCat = activeCategory === 'all' || temple.category === activeCategory;
    const q = search.toLowerCase();
    const matchSearch =
      !q ||
      temple.name.hi.toLowerCase().includes(q) ||
      temple.name.en.toLowerCase().includes(q) ||
      temple.deity.hi.toLowerCase().includes(q) ||
      temple.deity.en.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  return (
    <main className="page container">
      <div className="page-header">
        <h1 className="page-title">{t.templesPage.title}</h1>
        <p className="page-subtitle">{t.templesPage.subtitle}</p>
      </div>

      <div className="disclaimer-banner">
        <p>{t.disclaimer}</p>
      </div>

      {/* Search */}
      <div className="search-bar">
        <input
          type="text"
          placeholder={t.templesPage.searchPlaceholder}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
          aria-label={t.templesPage.searchPlaceholder}
        />
      </div>

      {/* Category Filter */}
      <div className="category-filter">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn${activeCategory === cat ? ' filter-btn--active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {t.categories[cat]}
          </button>
        ))}
      </div>

      {/* Temple Grid */}
      {filtered.length > 0 ? (
        <div className="temples-grid">
          {filtered.map((temple) => (
            <TempleCard key={temple.id} temple={temple} basePath="/temples" />
          ))}
        </div>
      ) : (
        <p className="no-results">{t.templesPage.noResults}</p>
      )}
    </main>
  );
}
