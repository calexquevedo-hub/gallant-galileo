import React, { useState, useEffect } from 'react';
import { ArrowRight, Quote } from 'lucide-react';

export default function SloganBanner() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setOffsetY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = "https://wa.me/5585989234111?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20com%20o%20Psicólogo%20Carlos%20Alexandre%20Quevedo.";

  // Subtle floating icon offset
  const iconTranslate = `translate3d(0, ${Math.sin(offsetY * 0.003) * 6}px, 0)`;

  return (
    <section className="slogan-banner reveal-on-scroll">
      {/* Background Soft Glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '600px',
        height: '300px',
        transform: 'translate(-50%, -50%)',
        background: 'radial-gradient(ellipse, rgba(255, 255, 255, 0.4) 0%, rgba(198, 235, 192, 0) 70%)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', maxWidth: '880px' }}>
        <div style={{ 
          background: 'rgba(48, 63, 78, 0.08)', 
          padding: '0.85rem', 
          borderRadius: '50%', 
          color: '#303F4E',
          transform: iconTranslate,
          transition: 'transform 0.2s ease-out',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.04)'
        }}>
          <Quote size={28} />
        </div>

        <h2 style={{
          fontSize: 'clamp(1.6rem, 3.2vw, 2.4rem)',
          fontFamily: 'var(--font-serif)',
          fontWeight: '600',
          color: '#1D1C1D',
          lineHeight: '1.4',
          letterSpacing: '-0.01em',
          maxWidth: '820px',
          textAlign: 'center'
        }}>
          "A Análise do Comportamento compreende o ser humano em sua totalidade, transformando padrões e construindo autonomia para uma vida com mais significado."
        </h2>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.95rem', color: '#495867', fontWeight: '500' }}>
          <span>Carlos Alexandre Quevedo</span>
          <span>•</span>
          <span style={{ fontWeight: '600', color: '#1D1C1D' }}>CRP 11/24669</span>
        </div>

        <a 
          href={whatsappUrl}
          target="_blank" 
          rel="noopener noreferrer"
          className="btn"
          style={{
            backgroundColor: '#303F4E',
            color: '#FFFFFF',
            borderRadius: '9999px',
            padding: '0.9rem 2.4rem',
            fontSize: '0.98rem',
            fontWeight: '500',
            marginTop: '0.5rem',
            boxShadow: '0 8px 20px rgba(48, 63, 78, 0.18)',
            transition: 'var(--transition)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
            e.currentTarget.style.boxShadow = '0 12px 25px rgba(48, 63, 78, 0.25)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = '0 8px 20px rgba(48, 63, 78, 0.18)';
          }}
        >
          <span>Iniciar Atendimento Psicológico</span>
          <ArrowRight size={17} />
        </a>
      </div>
    </section>
  );
}
