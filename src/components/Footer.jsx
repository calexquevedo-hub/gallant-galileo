import React from 'react';
import { ShieldCheck, ExternalLink, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const whatsappUrl = "https://wa.me/5585989234111?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20com%20o%20Psicólogo%20Carlos%20Alexandre%20Quevedo.";

  return (
    <footer className="reveal-on-scroll" style={{ backgroundColor: 'var(--bg-dark)', color: 'var(--text-on-dark)', borderTop: '1px solid var(--border-dark)', paddingTop: '4rem', paddingBottom: '2.5rem' }}>
      <div className="container">
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '3rem', marginBottom: '3.5rem' }}>
          
          {/* Brand Info & Non-Repetitive Logo Lockup */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <img 
                src="/images/logo-tree-white.png" 
                alt="Logo Árvore Alexandre Quevedo Psicologia" 
                style={{ height: '48px', width: 'auto', objectFit: 'contain' }}
              />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', fontWeight: '700', color: '#FFFFFF', lineHeight: '1.1' }}>
                  Alexandre Quevedo
                </span>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-on-dark-muted)', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '0.35rem', marginTop: '0.15rem' }}>
                  <span>Psicólogo Clínico</span>
                  <span style={{ color: 'var(--accent-gold)' }}>•</span>
                  <span style={{ color: 'var(--accent-gold)', fontWeight: '600' }}>CRP 11/24669</span>
                </span>
              </div>
            </div>
            <p style={{ color: 'var(--text-on-dark-muted)', fontSize: '0.88rem', lineHeight: '1.6' }}>
              <strong>Responsável Técnico:</strong> Carlos Alexandre Quevedo (Psicólogo Clínico — <strong>CRP 11/24669</strong>). Atuação baseada na Análise do Comportamento para Crianças, Jovens, Adultos, Casais e Idosos.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--accent-gold)' }}>
              <ShieldCheck size={16} />
              <span>Carlos Alexandre Quevedo • CRP 11/24669</span>
            </div>
          </div>

          {/* Location & Contact */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1.05rem', marginBottom: '1.2rem', fontFamily: 'var(--font-serif)' }}>Consultório Presencial</h4>
            <div style={{ fontSize: '0.88rem', color: 'var(--text-on-dark-muted)', lineHeight: '1.6', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                <MapPin size={16} style={{ color: 'var(--accent-gold)', flexShrink: 0, marginTop: '0.2rem' }} />
                <span><strong>Transcender Psicologia</strong><br />Av. Dom Luís, 500 - 8º andar Sala 818<br />Aldeota, Fortaleza - CE, 60160-196</span>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginTop: '0.4rem' }}>
                <Phone size={16} style={{ color: 'var(--accent-sage)', flexShrink: 0 }} />
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-sage)', fontWeight: '600' }}>
                  WhatsApp: (85) 98923-4111
                </a>
              </div>
            </div>
          </div>

          {/* Ethics & Regulation */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1.05rem', marginBottom: '1.2rem', fontFamily: 'var(--font-serif)' }}>Regulamentação & Ética (CFP)</h4>
            <p style={{ color: 'var(--text-on-dark-muted)', fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '1rem' }}>
              Em estrita conformidade com o Artigo 20 do Código de Ética Profissional do Psicólogo, divulgando o nome completo do profissional, título e inscrição CRP.
            </p>
            <a 
              href="https://e-psi.cfp.org.br/" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ color: 'var(--accent-gold)', fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}
            >
              <span>Validação do Cadastro e-PSI</span>
              <ExternalLink size={14} />
            </a>
          </div>

          {/* Crisis Contact Box */}
          <div style={{
            background: 'var(--bg-dark-surface)',
            padding: '1.5rem',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-dark)'
          }}>
            <h4 style={{ color: '#FFFFFF', fontSize: '0.98rem', marginBottom: '0.6rem' }}>Apoio Emocional de Emergência</h4>
            <p style={{ color: 'var(--text-on-dark-muted)', fontSize: '0.82rem', lineHeight: '1.5' }}>
              Em situações de emergência emocional imediata, ligue gratuitamente para o <strong>CVV (188)</strong> — atendimento confidencial 24 horas — ou acione o <strong>SAMU (192)</strong>.
            </p>
          </div>

        </div>

        {/* Bottom Copyright & SEO Footer Bar */}
        <div style={{
          borderTop: '1px solid var(--border-dark)',
          paddingTop: '2rem',
          display: 'flex',
          justify: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.82rem',
          color: 'var(--text-on-dark-muted)'
        }}>
          <div>
            © {new Date().getFullYear()} Carlos Alexandre Quevedo - Psicólogo Clínico (CRP 11/24669). Domínio oficial: <strong>alexandrequevedo.com.br</strong>
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#" style={{ color: 'var(--text-on-dark-muted)' }}>Política de Privacidade (LGPD)</a>
            <a href="#" style={{ color: 'var(--text-on-dark-muted)' }}>Termos de Uso</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
