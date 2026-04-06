import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Temples from './pages/Temples';
import TempleDetailPage from './pages/TempleDetailPage';
import LeelaSthals from './pages/LeelaSthals';
import VisitorInfo from './pages/VisitorInfo';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/temples" element={<Temples />} />
            <Route path="/temples/:id" element={<TempleDetailPage />} />
            <Route path="/leela-sthals" element={<LeelaSthals />} />
            <Route path="/leela-sthals/:id" element={<TempleDetailPage />} />
            <Route path="/visitor-info" element={<VisitorInfo />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
