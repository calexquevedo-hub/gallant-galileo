import React, { useState, useEffect } from 'react';
import { Shield, CheckCircle2, ArrowRight, MapPin, Users } from 'lucide-react';

export default function Hero() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    // Subtle parallax that respects prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Subtle damping factor: maximum offset limited to 40px for elegance
          const currentScroll = window.scrollY;
          if (currentScroll < 1200) {
            setOffsetY(currentScroll);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = "https://wa.me/5585989234111?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20com%20o%20Psicólogo%20Carlos%20Alexandre%20Quevedo.";

  // Calculated soft offsets (0% to 8% travel speed)
  const glowTranslate = `translate3d(0, ${offsetY * 0.12}px, 0)`;
  const imageTranslate = `translate3d(0, ${offsetY * -0.05}px, 0)`;
  const badgeTranslate = `translate3d(0, ${offsetY * 0.04}px, 0)`;

  return (
    <section className="section reveal-on-scroll" style={{ position: 'relative', overflow: 'hidden', padding: '5.5rem 0 6.5rem 0' }}>
      
      {/* Dynamic Ambient Glow Parallax */}
      <div 
        style={{
          position: 'absolute',
          top: '-15%',
          right: '-5%',
          width: '580px',
          height: '580px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(197, 168, 128, 0.16) 0%, rgba(250, 248, 245, 0) 70%)',
          pointerEvents: 'none',
          transform: glowTranslate,
          transition: 'transform 0.1s cubic-bezier(0, 0, 0.2, 1)',
          willChange: 'transform',
          zIndex: 0
        }} 
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
          
          {/* Text Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            {/* Approach Badge */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
              <span className="badge badge-sage" style={{ boxShadow: '0 2px 10px rgba(90, 115, 99, 0.15)' }}>
                <Shield size={14} />
                <span>Análise do Comportamento</span>
              </span>
            </div>

            {/* Main Headline */}
            <h1 style={{ fontSize: 'clamp(2.4rem, 4.8vw, 3.6rem)', color: 'var(--text-main)', letterSpacing: '-0.02em', fontWeight: '700', lineHeight: '1.15' }}>
              Psicologia embasada na Análise do Comportamento.
            </h1>

            {/* Subheadline */}
            <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', maxWidth: '560px', lineHeight: '1.75' }}>
              Atendimento por <strong>Carlos Alexandre Quevedo</strong> (CRP 11/24669). Consultório presencial para <strong>Crianças, Jovens, Adultos, Casais e Idosos</strong> no bairro Aldeota em Fortaleza/CE, além de psicoterapia online (e-PSI).
            </p>

            {/* Highlights List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', margin: '0.3rem 0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-main)', fontSize: '0.95rem' }}>
                <CheckCircle2 size={18} style={{ color: 'var(--accent-gold)' }} />
                <span>Atendimento presencial na <strong>Transcender Psicologia</strong> (Aldeota)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-main)', fontSize: '0.95rem' }}>
                <CheckCircle2 size={18} style={{ color: 'var(--accent-gold)' }} />
                <span>Prática fundamentada na Análise do Comportamento (Ciência Comportamental)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-main)', fontSize: '0.95rem' }}>
                <CheckCircle2 size={18} style={{ color: 'var(--accent-gold)' }} />
                <span>Recibo com nome completo e CRP para reembolso em plano de saúde</span>
              </div>
            </div>

            {/* CTA Action Group */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold"
                style={{ fontSize: '1rem', padding: '1rem 2rem' }}
              >
                <span>Agendar Consulta</span>
                <ArrowRight size={18} />
              </a>

              <a href="#sobre" className="btn btn-outline" style={{ fontSize: '0.95rem' }}>
                Conhecer Abordagem
              </a>
            </div>

            {/* Location & Public Indicator */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)', marginTop: '1rem', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                <MapPin size={16} style={{ color: 'var(--accent-gold)' }} />
                <span>Av. Dom Luís, 500 - Sala 818 (Aldeota)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                <Users size={16} style={{ color: 'var(--accent-sage)' }} />
                <span>Crianças, Jovens, Adultos, Casais e Idosos</span>
              </div>
            </div>

          </div>

          {/* Portrait Photo Container with Depth Parallax */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            
            {/* Soft Shadow Base Under Frame */}
            <div style={{
              position: 'absolute',
              bottom: '-20px',
              width: '80%',
              height: '30px',
              background: 'radial-gradient(ellipse, rgba(15, 23, 42, 0.25) 0%, rgba(0,0,0,0) 70%)',
              filter: 'blur(10px)',
              zIndex: 0
            }} />

            {/* Frame with Parallax */}
            <div style={{
              position: 'relative',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.18)',
              border: '8px solid #FFFFFF',
              maxWidth: '440px',
              width: '100%',
              transform: imageTranslate,
              transition: 'transform 0.12s cubic-bezier(0, 0, 0.2, 1)',
              willChange: 'transform',
              zIndex: 1
            }}>
              <img 
                src="/images/psicologo.jpg" 
                alt="Carlos Alexandre Quevedo - Psicólogo CRP 11/24669" 
                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
              />
              
              {/* Floating Credential Overlay with Counter-Parallax */}
              <div style={{
                position: 'absolute',
                bottom: '1.5rem',
                left: '1.5rem',
                right: '1.5rem',
                background: 'rgba(15, 23, 42, 0.88)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                padding: '1.1rem 1.35rem',
                borderRadius: 'var(--radius-md)',
                color: '#FFFFFF',
                border: '1px solid rgba(255, 255, 255, 0.18)',
                boxShadow: '0 12px 25px rgba(0, 0, 0, 0.25)',
                transform: badgeTranslate,
                transition: 'transform 0.15s cubic-bezier(0, 0, 0.2, 1)'
              }}>
                <div style={{ fontSize: '1.12rem', fontFamily: 'var(--font-serif)', fontWeight: '600' }}>
                  Carlos Alexandre Quevedo
                </div>
                <div style={{ fontSize: '0.82rem', color: 'rgba(255, 255, 255, 0.85)' }}>
                  Psicólogo • CRP 11/24669
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--accent-gold)', marginTop: '0.2rem', fontWeight: '500' }}>
                  Análise do Comportamento • Aldeota, Fortaleza
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
