import React from 'react';
import { Brain, Heart, Users, Briefcase, Compass } from 'lucide-react';
import { topics } from '../data/site';

const icons = [Brain, Heart, Users, Briefcase, Compass];

export default function Specialties() {
  return (
    <section id="atuacao" className="section reveal-on-scroll">
      <div className="container">
        <div className="section-heading">
          <span className="badge badge-sage">Atendimento psicológico</span>
          <h2>Questões que podemos trabalhar na terapia.</h2>
          <p>Cada pessoa chega com uma história. Estes são alguns dos temas que fazem parte da minha atuação.</p>
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
            <a href="#primeiro-encontro" className="text-link">Conheça o primeiro encontro</a>
          </div>
        </div>
      </div>
    </section>
  );
}
