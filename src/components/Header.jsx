import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = "https://wa.me/5585989234111?text=Olá!%20Gostaria%20de%20informações%20sobre%20agendamento%20de%20consulta%20com%20o%20Psicólogo%20Carlos%20Alexandre%20Quevedo.";

  return (
    <header className={`glass-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.1rem 1.5rem' }}>
        
        {/* Brand Logo & Non-Repetitive Lockup */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', textDecoration: 'none' }}>
          <img 
            src="/images/logo-tree-blue.png" 
            alt="Logo Árvore Alexandre Quevedo Psicologia" 
            style={{ height: '48px', width: 'auto', objectFit: 'contain' }}
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.55rem', fontWeight: '700', color: 'var(--text-main)', letterSpacing: '-0.02em', lineHeight: '1.1' }}>
              Alexandre Quevedo
            </span>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '0.35rem', marginTop: '0.15rem' }}>
              <span>Psicólogo Clínico</span>
              <span style={{ color: 'var(--accent-gold)' }}>•</span>
              <span style={{ color: 'var(--accent-navy)', fontWeight: '600' }}>CRP 11/24669</span>
            </span>
          </div>
        </a>

        {/* Desktop Nav with Animated Hover States */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2.2rem' }} className="desktop-nav">
          <a href="#sobre" className="nav-link">Sobre Mim</a>
          <a href="#atuacao" className="nav-link">Atendimento</a>
          <a href="#modalidades" className="nav-link">Consultório</a>
          <a href="#faq" className="nav-link">Dúvidas</a>
          <a href="#contato" className="nav-link">Contato</a>
        </nav>

        {/* Action Group */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <a 
            href={whatsappUrl}
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-nav-cta"
          >
            <MessageCircle size={17} />
            <span>Agendar Consulta</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ display: 'none', padding: '0.5rem', borderRadius: '8px', color: 'var(--text-main)' }}
            className="mobile-toggle"
            aria-label="Abrir Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{ background: '#FFFFFF', padding: '1.5rem', borderBottom: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          <a href="#sobre" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '1.05rem', fontWeight: '500' }}>Sobre Mim</a>
          <a href="#atuacao" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '1.05rem', fontWeight: '500' }}>Atendimento</a>
          <a href="#modalidades" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '1.05rem', fontWeight: '500' }}>Consultório</a>
          <a href="#faq" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '1.05rem', fontWeight: '500' }}>Dúvidas</a>
          <a href="#contato" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '1.05rem', fontWeight: '500' }}>Contato</a>
        </div>
      )}

      <style>{`
        @media (max-width: 868px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </header>
  );
}
