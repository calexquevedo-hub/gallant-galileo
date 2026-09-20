import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Mail } from 'lucide-react';
import { emailUrl, faqs, firstSession, site } from '../data/site';

export default function FAQ({ onOpenTriage }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="duvidas" className="section reveal-on-scroll">
      <div className="container">
        <div className="first-session-layout">
          <div className="first-session-copy">
            <span className="badge badge-sage">Primeiro encontro</span>
            <h2>Como começamos?</h2>
            {firstSession.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>

          <div className="faq-panel">
            <div className="section-heading section-heading-left">
              <span className="badge badge-gold">Dúvidas frequentes</span>
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

        <div className="triage-callout">
          <div>
            <span className="badge badge-gold">Próximo passo</span>
            <h3>Você não precisa ter tudo definido para entrar em contato.</h3>
            <p>A triagem inicial é uma conversa breve para entender sua busca e indicar os próximos passos.</p>
          </div>
          <div className="triage-callout-actions">
            <button type="button" className="btn btn-gold" onClick={() => onOpenTriage?.()}>
              Iniciar triagem rápida
            </button>
            <a className="text-link" href={emailUrl}><Mail size={17} aria-hidden="true" />{site.email}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
