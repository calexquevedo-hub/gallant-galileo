import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { faqs, firstSession } from '../data/site';

const firstSessionSteps = [
  'Conhecer o motivo que trouxe você até aqui.',
  'Explicar como trabalho e responder às suas dúvidas.',
  'Combinar os próximos passos do acompanhamento.'
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="duvidas" className="section reveal-on-scroll">
      <div className="container">
        <div className="first-session-layout">
          <div className="first-session-copy">
            <span className="eyebrow eyebrow-sage">Primeiro encontro</span>
            <h2>Como começamos?</h2>
            {firstSession.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <ol className="first-session-steps">
              {firstSessionSteps.map((step, index) => (
                <li key={step}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{step}</strong>
                </li>
              ))}
            </ol>
          </div>

          <div className="faq-panel">
            <div className="section-heading section-heading-left">
              <span className="eyebrow eyebrow-gold">Dúvidas frequentes</span>
              <h2>Antes de agendar</h2>
            </div>
            <div className="faq-list">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div key={faq.question} className="accordion-item">
                    <h3>
                      <button type="button" id={'faq-question-' + index} className="accordion-header"
                        onClick={() => setOpenIndex(isOpen ? null : index)}
                        aria-expanded={isOpen} aria-controls={'faq-answer-' + index}>
                        <span className="faq-question"><HelpCircle size={18} aria-hidden="true" />{faq.question}</span>
                        <ChevronDown size={20} aria-hidden="true" className={isOpen ? 'faq-chevron is-open' : 'faq-chevron'} />
                      </button>
                    </h3>
                    <div id={'faq-answer-' + index} role="region" aria-labelledby={'faq-question-' + index}
                      className="accordion-body" hidden={!isOpen}>{faq.answer}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
