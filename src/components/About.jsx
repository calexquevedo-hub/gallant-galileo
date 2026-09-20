import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { site } from '../data/site';

export default function About() {
  return (
    <section id="sobre" className="section reveal-on-scroll surface-section">
      <div className="container about-layout">
        <div className="about-portrait-wrap">
          <figure className="about-portrait">
            <img
              src="/images/psicologo.jpg"
              alt="Carlos Alexandre Quevedo, psicólogo"
              width="600"
              height="900"
              loading="lazy"
              decoding="async"
            />
            <figcaption className="portrait-caption">
              <strong><CheckCircle2 size={18} aria-hidden="true" />Registro ativo</strong>
              <span>{site.crp}</span>
            </figcaption>
          </figure>
        </div>

        <div className="about-content">
          <span className="eyebrow eyebrow-gold">Sobre mim</span>
          <h2>Quem vai caminhar com você.</h2>
          <p className="about-lead"><strong>{site.fullName}</strong><br />{site.profession} · {site.crp}</p>
          <p>
            Sou graduado em Psicologia pela UNINASSAU. Minha trajetória na Psicologia começou no Rio de Janeiro e continua sendo construída por meio de estudo, supervisão e atualização clínica.
          </p>
          <p>
            Minha atuação é orientada pela Análise do Comportamento, com formação continuada pela Díade|Lab e estudos em terapias comportamentais e práticas psicológicas baseadas em evidências. No atendimento, busco compreender com você como sua história, suas relações e os contextos do cotidiano se relacionam com o que sente, pensa e faz.
          </p>
          <p>
            A partir dessa compreensão, construímos possibilidades de lidar com as dificuldades e de aproximar o acompanhamento daquilo que é importante para você.
          </p>
        </div>
      </div>
    </section>
  );
}
