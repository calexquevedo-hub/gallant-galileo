import React from 'react';
import { site } from '../data/site';

export default function About() {
  return (
    <section id="sobre" className="section reveal-on-scroll surface-section">
      <div className="container about-content">
        <span className="badge badge-gold">Sobre mim</span>
        <h2>Um espaço para compreender sua história.</h2>
        <p>Sou <strong>{site.fullName}</strong>, psicólogo. Minha prática é orientada pela Análise do Comportamento.</p>
        <p>No acompanhamento, busco compreender com você como sua história, suas relações e as situações do cotidiano se relacionam com o que você sente, pensa e faz. A partir dessa escuta, construímos possibilidades de lidar com as dificuldades, respeitando suas necessidades e o que é importante para você.</p>
        <div className="about-signature">
          <strong>{site.fullName}</strong>
          <span>{site.profession} · {site.crp}</span>
        </div>
      </div>
    </section>
  );
}
