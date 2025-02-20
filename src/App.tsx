import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Solutions from './components/Solutions';
import Team from './components/Team';
import ScrollingBanner from './components/ScrollingBanner';
import Partners from './components/Partners';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import RolgordinenPage from './pages/products/Rolgordijnen';
import FlexibeleHorPage from './pages/products/FlexibeleHor';
import ScreensPage from './pages/products/Screens';
import PlisseGordijnenPage from './pages/products/PlisseGordijnen';
import VasteHorrenPage from './pages/products/VasteHorren';
import PlisseDeurenPage from './pages/products/PlisseDeuren';

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <SocialProof />
      <Solutions />
      <Team />
      <ScrollingBanner />
      <Partners />
      <CallToAction />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products/rolgordijnen" element={<RolgordinenPage />} />
          <Route path="/products/flexibele-hor" element={<FlexibeleHorPage />} />
          <Route path="/products/screens" element={<ScreensPage />} />
          <Route path="/products/plisse-gordijnen" element={<PlisseGordijnenPage />} />
          <Route path="/products/vaste-horren" element={<VasteHorrenPage />} />
          <Route path="/products/plisse-deuren" element={<PlisseDeurenPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App