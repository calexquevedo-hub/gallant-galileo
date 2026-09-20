import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import FirstSession from './components/FirstSession';
import Specialties from './components/Specialties';
import Modalities from './components/Modalities';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import TriageModal from './components/TriageModal';
import PrivacyModal from './components/PrivacyModal';

export default function App() {
  const [triageOpen, setTriageOpen] = useState(false);
  const [triageModality, setTriageModality] = useState('');
  const [privacyOpen, setPrivacyOpen] = useState(false);

  useEffect(() => {
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

  const openTriage = (modality = '') => {
    setTriageModality(modality);
    setTriageOpen(true);
  };

  const closeTriage = () => {
    setTriageOpen(false);
    setTriageModality('');
  };

  return (
    <div className="site-shell">
      <Header onOpenTriage={() => openTriage()} />
      <main id="conteudo" tabIndex={-1}>
        <Hero />
        <About />
        <FirstSession />
        <Specialties />
        <Modalities />
        <FAQ />
      </main>
      <Footer onOpenPrivacy={() => setPrivacyOpen(true)} />
      <FloatingWhatsApp onOpenTriage={() => openTriage()} />
      <TriageModal isOpen={triageOpen} initialModality={triageModality} onClose={closeTriage} />
      <PrivacyModal isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />
    </div>
  );
}
