import React from 'react';
import { ShieldCheck, HeartHandshake, GraduationCap, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre" className="section reveal-on-scroll" style={{ backgroundColor: 'var(--bg-surface)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        
        {/* Narrative & Pillars */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem', textAlign: 'center', alignItems: 'center' }}>
          <span className="badge badge-gold">
            Trajetória & Orientação Terapêutica
          </span>

          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: 'var(--text-main)', maxWidth: '780px' }}>
            Prática científica orientada pela Análise do Comportamento.
          </h2>

          <p style={{ color: 'var(--text-muted)', fontSize: '1.08rem', lineHeight: '1.8', maxWidth: '820px' }}>
            Sou <strong>Carlos Alexandre Quevedo</strong> (conhecido profissionalmente como Alexandre Quevedo), Psicólogo inscrito no Conselho Regional de Psicologia da 11ª Região sob o registro <strong>CRP 11/24669</strong>. Minha atuação clínica é fundamentada nos princípios científicos da <strong>Análise do Comportamento</strong>.
          </p>

          <p style={{ color: 'var(--text-muted)', fontSize: '1.08rem', lineHeight: '1.8', maxWidth: '820px' }}>
            Na clínica <strong>Transcender Psicologia</strong> (localizada na Aldeota em Fortaleza/CE), realizo atendimento presencial para <strong>Crianças, Jovens, Adultos, Casais e Idosos</strong>, além de manter o acompanhamento psicológico online autorizado pelo e-PSI. O objetivo é oferecer uma escuta analítica, ética e construir estratégias personalizadas para o bem-estar e autonomia de cada paciente.
          </p>

          {/* Pillars Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.5rem',
            width: '100%',
            marginTop: '1.5rem',
            textAlign: 'left'
          }}>
            
            <div className="card-hover" style={{ padding: '1.6rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <div style={{ background: 'var(--accent-gold-light)', width: '42px', height: '42px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)' }}>
                <GraduationCap size={22} />
              </div>
              <h4 style={{ fontSize: '1.05rem', color: 'var(--text-main)', marginTop: '0.4rem' }}>Análise do Comportamento</h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>Compreensão funcional das interações humanas, emoções e padrões comportamentais.</p>
            </div>

            <div className="card-hover" style={{ padding: '1.6rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <div style={{ background: 'var(--accent-sage-light)', width: '42px', height: '42px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-sage)' }}>
                <Users size={22} />
              </div>
              <h4 style={{ fontSize: '1.05rem', color: 'var(--text-main)', marginTop: '0.4rem' }}>Crianças a Idosos & Casais</h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>Plano terapêutico personalizado e adaptado às especificidades de cada fase da vida.</p>
            </div>

            <div className="card-hover" style={{ padding: '1.6rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <div style={{ background: 'rgba(30, 58, 138, 0.08)', width: '42px', height: '42px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-navy)' }}>
                <ShieldCheck size={22} />
              </div>
              <h4 style={{ fontSize: '1.05rem', color: 'var(--text-main)', marginTop: '0.4rem' }}>Identificação Ética (CFP)</h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>Transparência total com registro profissional ativo: Carlos Alexandre Quevedo (CRP 11/24669).</p>
            </div>

            <div className="card-hover" style={{ padding: '1.6rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <div style={{ background: 'var(--accent-gold-light)', width: '42px', height: '42px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)' }}>
                <HeartHandshake size={22} />
              </div>
              <h4 style={{ fontSize: '1.05rem', color: 'var(--text-main)', marginTop: '0.4rem' }}>Presencial & Online</h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>Atendimento no bairro Aldeota (Fortaleza) e consultas remotas para todo o país.</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
