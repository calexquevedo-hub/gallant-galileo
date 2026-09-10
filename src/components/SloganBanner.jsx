import React from 'react';
import { ArrowRight, Quote } from 'lucide-react';

export default function SloganBanner() {
  const whatsappUrl = "https://wa.me/5585989234111?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20com%20o%20Psicólogo%20Carlos%20Alexandre%20Quevedo.";

  return (
    <section className="slogan-banner reveal-on-scroll">
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', maxWidth: '880px' }}>
        <div style={{ background: 'rgba(48, 63, 78, 0.08)', padding: '0.75rem', borderRadius: '50%', color: '#303F4E' }}>
          <Quote size={28} />
        </div>

        <h2 style={{
          fontSize: 'clamp(1.6rem, 3.2vw, 2.4rem)',
          fontFamily: 'var(--font-serif)',
          fontWeight: '600',
          color: '#1D1C1D',
          lineHeight: '1.4',
          letterSpacing: '-0.01em',
          maxWidth: '820px'
        }}>
          "A Análise do Comportamento compreende o ser humano em sua totalidade, transformando padrões e construindo autonomia para uma vida com mais significado."
        </h2>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.92rem', color: '#495867', fontWeight: '500' }}>
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
            padding: '0.85rem 2.2rem',
            fontSize: '0.95rem',
            fontWeight: '500',
            marginTop: '0.5rem',
            boxShadow: '0 8px 20px rgba(48, 63, 78, 0.18)'
          }}
        >
          <span>Iniciar Atendimento Psicológico</span>
          <ArrowRight size={17} />
        </a>
      </div>
    </section>
  );
}
