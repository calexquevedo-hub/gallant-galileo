import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, Menu, X } from 'lucide-react';
import { site, whatsappUrl } from '../data/site';

const navigation = [
  { href: '#sobre', label: 'Sobre mim' },
  { href: '#atuacao', label: 'Atendimento' },
  { href: '#modalidades', label: 'Consultório' },
  { href: '#faq', label: 'Dúvidas' },
  { href: '#contato', label: 'Contato' }
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [mobileMenuOpen]);

  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <header className={'glass-header' + (scrolled ? ' scrolled' : '')}>
        <div className="container header-inner">
          <a className="brand" href="#inicio" onClick={() => setMobileMenuOpen(false)}
            aria-label={site.name + ', início'}>
            <img src="/images/logo-tree-blue.png" alt="" width="48" height="48" />
            <span className="brand-copy">
              <span className="brand-name">{site.name}</span>
              <span className="brand-registration">Psicólogo · {site.crp}</span>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Navegação principal">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">{item.label}</a>
            ))}
          </nav>

          <div className="header-actions">
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="btn-nav-cta">
              <MessageCircle size={17} aria-hidden="true" />
              <span>Consultar horários</span>
            </a>
            <button ref={toggleRef} type="button" className="mobile-toggle"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={mobileMenuOpen} aria-controls="menu-mobile">
              {mobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </div>
        </div>
        <nav id="menu-mobile" className="mobile-nav" aria-label="Navegação no celular" hidden={!mobileMenuOpen}>
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMobileMenuOpen(false)}>{item.label}</a>
          ))}
          <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)} className="mobile-contact-link">Consultar horários pelo WhatsApp</a>
        </nav>
      </header>
    </>
  );
}
