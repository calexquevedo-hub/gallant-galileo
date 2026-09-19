import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { faqs } from '../data/site';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <section id="faq" className="section reveal-on-scroll">
      <div className="container">
        <div className="section-heading">
          <span className="badge badge-sage">Antes de começar</span>
          <h2>Perguntas frequentes</h2>
          <p>Informações sobre as sessões, o agendamento e as modalidades de atendimento.</p>
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
    </section>
  );
}
