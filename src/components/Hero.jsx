import React from 'react';
import { CheckCircle2, MapPin, Users } from 'lucide-react';
import { site, audience } from '../data/site';

export default function Hero() {
  return (
    <section id="inicio" className="section hero-section">
      <div className="container">
        <div className="hero-copy">
          <span className="hero-eyebrow">Psicólogo em Fortaleza e online</span>
          <h1>Um espaço para compreender o que você vive.</h1>
          <p className="hero-intro">
            Psicoterapia para olhar com mais cuidado para suas dificuldades, relações e escolhas, respeitando o seu ritmo e a sua história.
          </p>

          <div className="hero-professional">
            <strong>{site.name}</strong>
            <span>{site.profession}</span>
          </div>

          <ul className="hero-highlights">
            <li><CheckCircle2 size={18} aria-hidden="true" /><span>Atuação orientada pela Análise do Comportamento.</span></li>
            <li><CheckCircle2 size={18} aria-hidden="true" /><span>Atendimento presencial em Fortaleza e online.</span></li>
          </ul>

          <div className="hero-details">
            <p><MapPin size={17} aria-hidden="true" /><span>Aldeota, Maraponga e atendimento online.</span></p>
            <p><Users size={17} aria-hidden="true" /><span>{audience}.</span></p>
          </div>
        </div>
      </div>
    </section>
  );
}
