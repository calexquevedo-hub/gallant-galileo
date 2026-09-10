import React from 'react';
import { Shield, CheckCircle2, ArrowRight, MapPin, Users } from 'lucide-react';

export default function Hero() {
  const whatsappUrl = "https://wa.me/5585989234111?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20com%20o%20Psicólogo%20Carlos%20Alexandre%20Quevedo.";

  return (
    <section className="section reveal-on-scroll" style={{ position: 'relative', overflow: 'hidden', padding: '5rem 0 6rem 0' }}>
      
      {/* Subtle Background Accent */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '-5%',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(197, 168, 128, 0.12) 0%, rgba(250, 248, 245, 0) 70%)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
          
          {/* Text Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            {/* Approach Badge */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
              <span className="badge badge-sage">
                <Shield size={14} />
                <span>Análise do Comportamento</span>
              </span>
            </div>

            {/* Main Headline */}
            <h1 style={{ fontSize: 'clamp(2.4rem, 4.8vw, 3.6rem)', color: 'var(--text-main)', letterSpacing: '-0.02em', fontWeight: '700' }}>
              Psicologia embasada na Análise do Comportamento.
            </h1>

            {/* Subheadline */}
            <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', maxWidth: '560px', lineHeight: '1.7' }}>
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

          {/* Portrait Photo Container */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            
            {/* Frame */}
            <div style={{
              position: 'relative',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.18)',
              border: '8px solid #FFFFFF',
              maxWidth: '440px',
              width: '100%'
            }}>
              <img 
                src="/images/psicologo.jpg" 
                alt="Carlos Alexandre Quevedo - Psicólogo CRP 11/24669" 
                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
              />
              
              {/* Floating Credential Overlay */}
              <div style={{
                position: 'absolute',
                bottom: '1.5rem',
                left: '1.5rem',
                right: '1.5rem',
                background: 'rgba(15, 23, 42, 0.88)',
                backdropFilter: 'blur(10px)',
                padding: '1rem 1.25rem',
                borderRadius: 'var(--radius-md)',
                color: '#FFFFFF',
                border: '1px solid rgba(255, 255, 255, 0.15)'
              }}>
                <div style={{ fontSize: '1.1rem', fontFamily: 'var(--font-serif)', fontWeight: '600' }}>
                  Carlos Alexandre Quevedo
                </div>
                <div style={{ fontSize: '0.82rem', color: 'rgba(255, 255, 255, 0.85)' }}>
                  Psicólogo • CRP 11/24669
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--accent-gold)', marginTop: '0.2rem' }}>
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
