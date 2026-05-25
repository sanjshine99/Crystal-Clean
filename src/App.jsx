import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import React, { useEffect } from "react"; // 1. Import useEffect
import AOS from "aos"; // 2. Import AOS
import "aos/dist/aos.css"; // 3. Import AOS CSS

import TermsConditions from "./components/Term";
import PrivacyPolicy from "./components/PrivacyPolicy";
import GDPRConsent from "./components/GDPRButton";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./page/Home";
import Footer from "./components/FooterSection";
import Navbar from "./components/Navbar";

import Polishing from "./page/Services/Polishing";
import CeramicCoating from "./page/Services/CeramicCoating";
import ScrollToHash from "./components/ScrollToHash";
import PaintProtectionFilmInstallation from "./page/Services/PaintProtectionFilmInstallation";
import ReviewPage from "./page/ReviewPage";
import CarDetailing from "./page/Services/CarDetailing";
import { ROUTES } from "./constants/routes";


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
      <Navbar />
      <Routes>
        <Route path={ROUTES.home} element={<Home />} />
        <Route path={ROUTES.reviews} element={<ReviewPage /> } />
        <Route path={ROUTES.paintProtectionFilm} element={<PaintProtectionFilmInstallation /> }/>
        <Route path={ROUTES.ceramicCoating} element={<CeramicCoating /> } />
        <Route path={ROUTES.paintCorrection} element={<Polishing /> } />
        <Route path={ROUTES.carDetailing} element={<CarDetailing />} />
        <Route path={ROUTES.termsAndConditions} element={<TermsConditions />} />
        <Route path={ROUTES.privacyPolicy} element={<PrivacyPolicy />} />
        <Route path="/review" element={<Navigate to={ROUTES.reviews} replace />} />
        <Route path="/terms" element={<Navigate to={ROUTES.termsAndConditions} replace />} />
        <Route path="/privacy" element={<Navigate to={ROUTES.privacyPolicy} replace />} />
      </Routes>
      <Footer />
      <GDPRConsent />
    </Router>
  );
}

export default App;
