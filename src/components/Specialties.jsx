import React from 'react';
import { ArrowRight, Brain, Briefcase, Compass, Heart, Users } from 'lucide-react';
import { audience, topics } from '../data/site';

const icons = [Brain, Heart, Users, Briefcase, Compass];

export default function Specialties({ onOpenTriage }) {
  return (
    <section id="atendimento" className="section reveal-on-scroll">
      <div className="container">
        <div className="section-heading">
          <span className="badge badge-sage">Atendimento psicológico</span>
          <h2>Para quem é este atendimento?</h2>
          <p>{audience}. Cada pessoa chega com uma história, e os temas abaixo são alguns dos que fazem parte da minha atuação.</p>
        </div>

        <div className="approach-strip" aria-label="Como funciona o atendimento">
          <div><span>Abordagem</span><strong>Análise do Comportamento</strong></div>
          <div><span>Formato</span><strong>Individual e de casal</strong></div>
          <div><span>Agendamento</span><strong>Presencial ou online</strong></div>
        </div>

        <div className="grid-3 topic-grid">
          {topics.map((topic, index) => {
            const Icon = icons[index];
            return (
              <article key={topic.title} className="card-hover topic-card">
                <div className="topic-icon"><Icon size={25} aria-hidden="true" /></div>
                <h3>{topic.title}</h3>
                <p>{topic.description}</p>
              </article>
            );
          })}
          <div className="topic-invitation">
            <h3>Não sabe por onde começar?</h3>
            <p>Você não precisa ter tudo definido para buscar atendimento.</p>
            <button type="button" className="text-link button-link" onClick={() => onOpenTriage?.()}>
              Iniciar triagem rápida <ArrowRight size={16} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
