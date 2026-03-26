import { Navigate, Route, Routes } from 'react-router-dom';
import SiteLayout from './components/layout/SiteLayout';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import DecorPrivatePage from './pages/DecorPrivatePage';
import GalleryPage from './pages/GalleryPage';
import HomePage from './pages/HomePage';
import WeddingServicesPage from './pages/WeddingServicesPage';

function App() {
  return (
    <SiteLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/wedding-services" element={<WeddingServicesPage />} />
        <Route path="/decor-and-private-events-services" element={<DecorPrivatePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </SiteLayout>
  );
}

export default App;
