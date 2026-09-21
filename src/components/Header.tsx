import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { site } from '../data/site';

const navigation = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#primeiro-encontro', label: 'Primeiro encontro' },
  { href: '#atendimento', label: 'Atendimento' },
  { href: '#locais', label: 'Onde atendo' },
  { href: '#duvidas', label: 'Dúvidas' }
] as const;

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const header = document.querySelector<HTMLElement>('.glass-header');
    const headerInner = header?.querySelector<HTMLElement>('.header-inner');
    if (!header || !headerInner) return undefined;

    const updateAnchorOffset = () => {
      const rect = headerInner.getBoundingClientRect();
      const offset = Math.ceil(rect.bottom + 12);
      document.documentElement.style.setProperty('--anchor-scroll-offset', `${offset}px`);
    };

    updateAnchorOffset();
    const observer = new ResizeObserver(updateAnchorOffset);
    observer.observe(header);
    window.addEventListener('resize', updateAnchorOffset, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateAnchorOffset);
      document.documentElement.style.removeProperty('--anchor-scroll-offset');
    };
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return undefined;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [mobileMenuOpen]);

  const startTriage = () => {
    setMobileMenuOpen(false);
    window.dispatchEvent(new Event('open-triage'));
  };

  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <header className={'glass-header' + (scrolled ? ' scrolled' : '')}>
        <div className="container header-inner">
          <a className="brand" href="#inicio" onClick={() => setMobileMenuOpen(false)} aria-label={`${site.name}, início`}>
            <img src="/images/logo-tree-forest.png" alt="" width="48" height="48" />
            <span className="brand-copy">
              <span className="brand-name">{site.name}</span>
              <span className="brand-registration">{site.profession}</span>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Navegação principal">
            {navigation.map((item) => <a key={item.href} href={item.href} className="nav-link">{item.label}</a>)}
          </nav>

          <div className="header-actions">
            <button type="button" className="btn-nav-cta" onClick={startTriage}>
              <span>Iniciar triagem</span><ArrowRight size={16} aria-hidden="true" />
            </button>
            <button ref={toggleRef} type="button" className="mobile-toggle" onClick={() => setMobileMenuOpen((open) => !open)}
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={mobileMenuOpen} aria-controls="menu-mobile">
              {mobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </div>
        </div>
        <nav id="menu-mobile" className="mobile-nav" aria-label="Navegação no celular" hidden={!mobileMenuOpen}>
          {navigation.map((item) => <a key={item.href} href={item.href} onClick={() => setMobileMenuOpen(false)}>{item.label}</a>)}
        </nav>
      </header>
    </>
  );
}
