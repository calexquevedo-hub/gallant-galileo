import React from 'react';
import { Brain, Heart, Users, Smile, Compass, Sparkles } from 'lucide-react';

export default function Specialties() {
  const targetAudiences = [
    {
      icon: <Smile size={24} style={{ color: 'var(--accent-gold)' }} />,
      title: "Psicologia Infantil & Orientação de Pais",
      audience: "Crianças",
      description: "Intervenção comportamental para desenvolvimento infantil, manejo de birras, habilidades socioemocionais, ansiedade infantil e orientação analítico-comportamental para pais."
    },
    {
      icon: <Brain size={24} style={{ color: 'var(--accent-sage)' }} />,
      title: "Psicoterapia para Jovens & Adolescentes",
      audience: "Jovens",
      description: "Acompanhamento focado nas transformações da adolescência, orientação de carreira, escolha profissional, ansiedade acadêmica/social e fortalecimento da identidade."
    },
    {
      icon: <Sparkles size={24} style={{ color: 'var(--accent-navy)' }} />,
      title: "Psicoterapia Individual para Adultos",
      audience: "Adultos",
      description: "Manejo da ansiedade, depressão, estresse ocupacional (Burnout), desenvolvimento pessoal, resolução de problemas e modificação de padrões comportamentais disfuncionais."
    },
    {
      icon: <Heart size={24} style={{ color: '#E11D48' }} />,
      title: "Terapia de Casal & Conflitos Relacionais",
      audience: "Casais",
      description: "Análise das dinâmicas de comunicação e interação do casal, superação de crises, estabelecimento de alinhamentos afetivos e reconstrução da intimidade e respeito mutuo."
    },
    {
      icon: <Compass size={24} style={{ color: 'var(--accent-gold)' }} />,
      title: "Psicoterapia para a Terceira Idade",
      audience: "Idosos",
      description: "Acompanhamento voltado ao envelhecimento ativo, adaptação à aposentadoria, manejo do luto, preservação da autonomia e promoção da saúde mental na maturidade."
    },
    {
      icon: <Users size={24} style={{ color: 'var(--accent-sage)' }} />,
      title: "Desenvolvimento de Habilidades Sociais",
      audience: "Todos os públicos",
      description: "Treinamento de assertividade, expressão de sentimentos, tolerância à frustração e regulação emocional baseada em evidências da Análise do Comportamento."
    }
  ];

  return (
    <section id="atuacao" className="section reveal-on-scroll">
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 4rem auto' }}>
          <span className="badge badge-sage" style={{ marginBottom: '1rem' }}>
            Atendimento Especializado
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: 'var(--text-main)', marginBottom: '1rem' }}>
            Cuidado comportamental para todas as fases da vida.
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.08rem' }}>
            Atendimento clínico presencial estruturado a partir da Análise do Comportamento para Crianças, Jovens, Adultos, Casais e Idosos.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid-3">
          {targetAudiences.map((item, idx) => (
            <div key={idx} className="card-hover" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '16px',
                  background: 'var(--bg-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid var(--border-subtle)'
                }}>
                  {item.icon}
                </div>
                <span className="badge badge-gold" style={{ fontSize: '0.75rem' }}>
                  {item.audience}
                </span>
              </div>

              <h3 style={{ fontSize: '1.35rem', color: 'var(--text-main)', marginTop: '0.3rem' }}>
                {item.title}
              </h3>
              
              <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', lineHeight: '1.6', flexGrow: 1 }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Footnote Compliance Note */}
        <div style={{
          marginTop: '3.5rem',
          textAlign: 'center',
          fontSize: '0.88rem',
          color: 'var(--text-muted)',
          background: 'var(--bg-surface-elevated)',
          padding: '1.25rem 2rem',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--border-subtle)'
        }}>
          * A Análise do Comportamento é uma ciência com comprovação de eficácia clínica. As estratégias são desenhadas sob medida após a avaliação inicial individualizada.
        </div>

      </div>
    </section>
  );
}
