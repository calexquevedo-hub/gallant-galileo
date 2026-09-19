import React from 'react';
import { CheckCircle2, ArrowRight, MapPin, Users } from 'lucide-react';
import { site, audience, serviceSummary, whatsappUrl } from '../data/site';

export default function Hero() {
  return (
    <section id="inicio" className="section hero-section">
      <div className="container">
        <div className="grid-2 hero-grid">
          <div className="hero-copy">
            <span className="badge badge-sage">Psicoterapia presencial e online</span>
            <h1>Psicólogo na Aldeota, em Fortaleza, e online.</h1>
            <p className="hero-intro">Um espaço para conversar sobre o que você está vivendo, compreender suas dificuldades e construir caminhos possíveis.</p>
            <p><strong>{site.fullName}</strong><br />Psicólogo · {site.crp}</p>
            <ul className="hero-highlights">
              <li><CheckCircle2 size={18} aria-hidden="true" /><span>Atendimento fundamentado na Análise do Comportamento.</span></li>
              <li><CheckCircle2 size={18} aria-hidden="true" /><span>{serviceSummary}</span></li>
            </ul>
            <div className="hero-actions">
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="btn btn-gold">
                Consultar horários <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a href="#primeiro-encontro" className="btn btn-outline">Como funciona</a>
            </div>
            <div className="hero-details">
              <p><MapPin size={17} aria-hidden="true" /><span>{site.clinic}, Aldeota, Fortaleza.</span></p>
              <p><Users size={17} aria-hidden="true" /><span>{audience}.</span></p>
            </div>
          </div>
          <div className="hero-portrait-wrap">
            <figure className="hero-portrait">
              <img src="/images/psicologo.jpg" alt="Carlos Alexandre Quevedo, psicólogo, CRP 11/24669"
                width="600" height="900" fetchpriority="high" decoding="async" />
              <figcaption className="portrait-caption">
                <strong>{site.fullName}</strong>
                <span>Psicólogo · {site.crp}</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
