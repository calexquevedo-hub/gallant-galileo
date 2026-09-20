import React from 'react';
import { firstSession } from '../data/site';

const firstSessionSteps = [
  'Conhecer o motivo que trouxe você até aqui.',
  'Explicar como trabalho e responder às suas dúvidas.',
  'Combinar os próximos passos do acompanhamento.'
];

export default function FirstSession() {
  return (
    <section id="primeiro-encontro" className="section reveal-on-scroll">
      <div className="container first-session-layout">
        <div className="first-session-copy">
          <span className="eyebrow eyebrow-sage">Primeiro encontro</span>
          <h2>Como começamos?</h2>
          {firstSession.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>

        <ol className="first-session-steps">
          {firstSessionSteps.map((step, index) => (
            <li key={step}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{step}</strong>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
