import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { BrandDesign } from './pages/BrandDesign';
import { WebDesign } from './pages/WebDesign';

// Wrapper to handle scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-olive-200">
        <ScrollToTop />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/brand-design" element={<BrandDesign />} />
            <Route path="/web-design" element={<WebDesign />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;