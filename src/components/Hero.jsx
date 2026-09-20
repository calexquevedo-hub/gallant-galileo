import React from 'react';
import { ArrowRight, CheckCircle2, MapPin, Users } from 'lucide-react';
import { site, audience } from '../data/site';

export default function Hero({ onOpenTriage }) {
  return (
    <section id="inicio" className="section hero-section">
      <div className="container">
        <div className="grid-2 hero-grid">
          <div className="hero-copy">
            <span className="badge badge-sage">Psicoterapia presencial e online</span>
            <h1>Psicólogo em Fortaleza e online.</h1>
            <p className="hero-intro">Um espaço para compreender o que você está vivendo, conversar sobre suas dificuldades e construir caminhos possíveis.</p>
            <p className="hero-professional"><strong>{site.fullName}</strong><br />{site.profession}</p>
            <ul className="hero-highlights">
              <li><CheckCircle2 size={18} aria-hidden="true" /><span>Prática orientada pela Análise do Comportamento.</span></li>
              <li><CheckCircle2 size={18} aria-hidden="true" /><span>Atendimento individual e de casal, mediante agendamento.</span></li>
            </ul>
            <div className="hero-actions">
              <button type="button" className="btn btn-gold" onClick={() => onOpenTriage?.()}>
                Iniciar triagem rápida <ArrowRight size={18} aria-hidden="true" />
              </button>
              <a href="#sobre" className="btn btn-outline">Conheça meu trabalho</a>
            </div>
            <div className="hero-details">
              <p><MapPin size={17} aria-hidden="true" /><span>Aldeota, Maraponga e atendimento online.</span></p>
              <p><Users size={17} aria-hidden="true" /><span>{audience}.</span></p>
            </div>
          </div>
          <div className="hero-portrait-wrap">
            <figure className="hero-portrait">
              <img src="/images/psicologo.jpg" alt="Carlos Alexandre Quevedo, psicólogo, em retrato profissional"
                width="600" height="900" fetchpriority="high" decoding="async" />
              <figcaption className="portrait-caption">
                <strong>Registro ativo</strong>
                <span>{site.crp}</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
