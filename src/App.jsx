import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect } from "react"; // 1. Import useEffect
import AOS from "aos"; // 2. Import AOS
import "aos/dist/aos.css"; // 3. Import AOS CSS

import TermsConditions from "./components/Term";
import PrivacyPolicy from "./components/PrivacyPolicy";
import GDPRConsent from "./components/GDPRButton";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./page/Home";
import Footer from "./components/FooterSection";

import Polishing from "./page/Services/Polishing";
import CeramicCoating from "./page/Services/CeramicCoating";
import ScrollToHash from "./components/ScrollToHash";
import PaintProtectionFilmInstallation from "./page/Services/PaintProtectionFilmInstallation";
import ReviewPage from "./page/ReviewPage";
import CarDetailing from "./page/Services/CarDetailing";


function App() {
  // 4. Initialize AOS globally
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true,     // Whether animation should happen only once - while scrolling down
      easing: 'ease-in-out',
      offset: 100,    // Offset (in px) from the original trigger point
    });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/review" element={<ReviewPage /> } />
        <Route path="/paint-protection-film-installation" element={<PaintProtectionFilmInstallation /> }/>
        <Route path="/ceramiccoating" element={<CeramicCoating /> } />
        <Route path="/polishing" element={<Polishing /> } />
        <Route path="/car-detailing" element={<CarDetailing />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
      <GDPRConsent />
    </Router>
  );
}

export default App;