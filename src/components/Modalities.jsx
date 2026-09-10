import React from 'react';
import { Video, MapPin, Globe, Calendar, Check } from 'lucide-react';

export default function Modalities() {
  const whatsappOnline = "https://wa.me/5585989234111?text=Olá!%20Gostaria%20de%20informações%20sobre%20o%20Atendimento%20Online%20com%20o%20Psicólogo%20Alexandre%20Quevedo.";
  const whatsappPresencial = "https://wa.me/5585989234111?text=Olá!%20Gostaria%20de%20informações%20sobre%20o%20Atendimento%20Presencial%20na%20Transcender%20Psicologia%20(Aldeota)%20com%20o%20Psicólogo%20Alexandre%20Quevedo.";

  return (
    <section id="modalidades" className="section reveal-on-scroll" style={{ backgroundColor: 'var(--bg-surface)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 4rem auto' }}>
          <span className="badge badge-gold" style={{ marginBottom: '1rem' }}>
            Modalidades de Atendimento
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: 'var(--text-main)', marginBottom: '1rem' }}>
            Atendimento Presencial em Fortaleza e Online para todo o Brasil.
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.08rem' }}>
            Escolha a modalidade de psicoterapia baseada na Análise do Comportamento que melhor atende às suas necessidades.
          </p>
        </div>

        <div className="grid-2" style={{ gap: '2.5rem' }}>
          
          {/* Online Modality (e-PSI) */}
          <div style={{
            background: 'var(--bg-primary)',
            borderRadius: 'var(--radius-lg)',
            padding: '2.5rem',
            border: '2px solid rgba(90, 115, 99, 0.25)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            position: 'relative'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ background: 'var(--accent-sage-light)', padding: '0.8rem', borderRadius: '16px', color: 'var(--accent-sage)' }}>
                <Video size={28} />
              </div>
              <span className="badge badge-sage">
                Autorizado e-PSI (CFP)
              </span>
            </div>

            <div>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                Atendimento Psicológico Online
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', lineHeight: '1.6' }}>
                Sessões de psicoterapia por videochamada com total sigilo, privacidade e rigor científico. Atendimentos para brasileiros em qualquer lugar do Brasil e no exterior.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', margin: '0.5rem 0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.92rem', color: 'var(--text-main)' }}>
                <Check size={18} style={{ color: 'var(--accent-sage)' }} />
                <span>Plataforma segura e criptografada conforme resolução do CFP</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.92rem', color: 'var(--text-main)' }}>
                <Check size={18} style={{ color: 'var(--accent-sage)' }} />
                <span>Praticidade de realizar suas sessões de onde você estiver</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.92rem', color: 'var(--text-main)' }}>
                <Check size={18} style={{ color: 'var(--accent-sage)' }} />
                <span>Flexibilidade de horários para rotinas exigentes</span>
              </div>
            </div>

            <a 
              href={whatsappOnline}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary" 
              style={{ marginTop: 'auto', alignSelf: 'flex-start' }}
            >
              <Globe size={18} />
              <span>Agendar Sessão Online</span>
            </a>
          </div>

          {/* In-Person Modality (Aldeota - Fortaleza) */}
          <div style={{
            background: 'var(--bg-primary)',
            borderRadius: 'var(--radius-lg)',
            padding: '2.5rem',
            border: '2px solid rgba(197, 168, 128, 0.25)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            position: 'relative'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ background: 'var(--accent-gold-light)', padding: '0.8rem', borderRadius: '16px', color: 'var(--accent-gold)' }}>
                <MapPin size={28} />
              </div>
              <span className="badge badge-gold">
                Aldeota - Fortaleza/CE
              </span>
            </div>

            <div>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                Atendimento Presencial
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', lineHeight: '1.6' }}>
                Consultório estruturado na <strong>Transcender Psicologia</strong>, localizado na Av. Dom Luís, 500 - Sala 818 (Aldeota). Ambiente acolhedor e privativo.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', margin: '0.5rem 0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.92rem', color: 'var(--text-main)' }}>
                <Check size={18} style={{ color: 'var(--accent-gold)' }} />
                <span>Espaço preparado para Crianças, Jovens, Adultos, Casais e Idosos</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.92rem', color: 'var(--text-main)' }}>
                <Check size={18} style={{ color: 'var(--accent-gold)' }} />
                <span>Excelente localização empresarial no Pátio Dom Luís com estacionamento</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.92rem', color: 'var(--text-main)' }}>
                <Check size={18} style={{ color: 'var(--accent-gold)' }} />
                <span>Pontualidade e ambiente com isolamento acústico e privacidade</span>
              </div>
            </div>

            <a 
              href={whatsappPresencial}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold" 
              style={{ marginTop: 'auto', alignSelf: 'flex-start' }}
            >
              <Calendar size={18} />
              <span>Agendar Sessão Presencial</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
