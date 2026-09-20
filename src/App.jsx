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
    // Content stays visible when animation support is unavailable.
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const targets = document.querySelectorAll('.reveal-on-scroll');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('reveal-pending');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0, rootMargin: '0px 0px -20px 0px' });

    targets.forEach((element) => {
      if (element.getBoundingClientRect().top >= window.innerHeight) {
        element.classList.add('reveal-pending');
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
      targets.forEach((element) => element.classList.remove('reveal-pending'));
    };
  }, []);

  return (
    <div className="site-shell">
      <Header />
      <main id="conteudo" tabIndex={-1}>
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
