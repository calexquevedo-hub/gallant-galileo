import React from 'react';
import { Brain, Briefcase, Compass, Heart, Users } from 'lucide-react';
import { audience, topics } from '../data/site';

const icons = [Brain, Heart, Users, Briefcase, Compass];

export default function Specialties() {
  return (
    <section id="atendimento" className="section reveal-on-scroll">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow eyebrow-sage">Atendimento psicológico</span>
          <h2>Para quem é este atendimento?</h2>
          <p>{audience}. Cada pessoa chega com uma história, e os temas abaixo são alguns dos que podem fazer parte da busca por acompanhamento.</p>
        </div>

        <div className="grid-3 topic-grid">
          {topics.map((topic, index) => {
            const Icon = icons[index];
            return (
              <article key={topic.title} className="topic-card">
                <div className="topic-icon"><Icon size={23} aria-hidden="true" /></div>
                <h3>{topic.title}</h3>
                <p>{topic.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
