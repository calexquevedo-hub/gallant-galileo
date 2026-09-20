import React from 'react';
import { Clock, Users } from 'lucide-react';
import { site, audience, serviceSummary } from '../data/site';

export default function About() {
  return (
    <section id="sobre" className="section reveal-on-scroll surface-section">
      <div className="container about-content">
        <span className="badge badge-gold">Sobre mim</span>
        <h2>Um espaço para compreender sua história.</h2>
        <p>Sou <strong>{site.fullName}</strong>, psicólogo, <strong>{site.crp}</strong>. Minha prática é orientada pela Análise do Comportamento.</p>
        <p>No acompanhamento, busco compreender com você como sua história, suas relações e as situações do cotidiano se relacionam com o que você sente, pensa e faz. A partir dessa escuta, construímos possibilidades de lidar com as dificuldades, respeitando suas necessidades e o que é importante para você.</p>
        <div className="grid-2 about-facts">
          <div className="card-hover">
            <Users size={24} aria-hidden="true" />
            <h3>Quem eu atendo</h3>
            <p>{audience}.</p>
            <p className="small-note">No atendimento infantil, o acompanhamento envolve também os responsáveis.</p>
          </div>
          <div className="card-hover">
            <Clock size={24} aria-hidden="true" />
            <h3>Como nos encontramos</h3>
            <p>{serviceSummary}</p>
            <p className="small-note">Presencialmente na Aldeota e na Maraponga, em Fortaleza, ou online, mediante agendamento.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
