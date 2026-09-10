import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "O que é a Análise do Comportamento?",
      answer: "A Análise do Comportamento é uma abordagem da Psicologia baseada na ciência comportamental. Seu foco é compreender como as interações com o ambiente, histórico de vida e relações afetam as ações, sentimentos e pensamentos, promovendo mudanças sustentáveis e desenvolvimento de novos repertórios de enfrentamento."
    },
    {
      question: "Qual o nome completo do profissional nos recibos para reembolso?",
      answer: "Em conformidade com o Artigo 20 do Código de Ética do Psicólogo, todos os recibos e notas fiscais de prestação de serviços psicológicos são emitidos com o nome completo registrado do profissional — Carlos Alexandre Quevedo —, acompanhado do número de inscrição CRP 11/24669 e CPF/CNPJ."
    },
    {
      question: "Como funciona o agendamento para atendimento presencial em Fortaleza?",
      answer: "Os atendimentos presenciais ocorrem na clínica Transcender Psicologia, localizada na Av. Dom Luís, 500 - 8º andar Sala 818 (Aldeota). O agendamento é realizado previamente via WhatsApp (85 98923-4111) para garantir o horário exclusivo da sua consulta."
    },
    {
      question: "Vocês atendem crianças, jovens, casais e idosos?",
      answer: "Sim. A prática clínica de Carlos Alexandre Quevedo abrange todas as faixas etárias — Crianças, Jovens, Adultos e Idosos —, além de atendimento especializado para Casais. Cada público recebe um plano terapêutico personalizado."
    },
    {
      question: "Ainda posso realizar atendimento online?",
      answer: "Sim! Mantemos a modalidade de atendimento psicológico online devidamente autorizada pelo sistema e-PSI do CFP. É uma opção ideal para quem busca flexibilidade de horários ou reside fora de Fortaleza."
    },
    {
      question: "Como proceder em situações de emergência emocional grave?",
      answer: "A psicoterapia por agendamento não oferece atendimento emergencial imediato. Em situações de risco à vida ou crise intensa, procure o pronto-socorro mais próximo, acione o SAMU (192) ou ligue gratuitamente para o Centro de Valorização da Vida — CVV no número 188 (atendimento 24h)."
    }
  ];

  return (
    <section id="faq" className="section reveal-on-scroll">
      <div className="container">
        
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 4rem auto' }}>
          <span className="badge badge-sage" style={{ marginBottom: '1rem' }}>
            Esclarecimentos Clínicos
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: 'var(--text-main)', marginBottom: '1rem' }}>
            Perguntas Frequentes
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.08rem' }}>
            Respostas claras sobre o funcionamento das consultas, abordagem teórica, identificação legal e reembolso.
          </p>
        </div>

        <div style={{ maxWidth: '840px', margin: '0 auto' }}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="accordion-item">
                <button 
                  className="accordion-header"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontWeight: '600' }}>
                    <HelpCircle size={18} style={{ color: 'var(--accent-gold)', flexShrink: 0 }} />
                    {faq.question}
                  </span>
                  {isOpen ? <ChevronUp size={20} style={{ color: 'var(--accent-gold)' }} /> : <ChevronDown size={20} style={{ color: 'var(--text-muted)' }} />}
                </button>
                
                {isOpen && (
                  <div className="accordion-body animate-fade-in" style={{ paddingLeft: '2.1rem' }}>
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
