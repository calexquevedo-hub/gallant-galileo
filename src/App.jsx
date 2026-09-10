import React, { useEffect } from 'react';
import Header from './components/Header';
import CrisisBanner from './components/CrisisBanner';
import Hero from './components/Hero';
import About from './components/About';
import Specialties from './components/Specialties';
import SloganBanner from './components/SloganBanner';
import Modalities from './components/Modalities';
import EthicsSigilo from './components/EthicsSigilo';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  useEffect(() => {
    // Scroll reveal observer (Karalee Wellness inspired scroll animation)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const targets = document.querySelectorAll('.reveal-on-scroll');
    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-primary)' }}>
      <Header />
      <main>
        <CrisisBanner />
        <Hero />
        <About />
        <Specialties />
        <SloganBanner />
        <Modalities />
        <EthicsSigilo />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
