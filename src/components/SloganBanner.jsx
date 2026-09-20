import React from 'react';
import { ArrowRight } from 'lucide-react';
import { firstSession, whatsappUrl } from '../data/site';

// The former slogan area now answers a practical question about starting therapy.
export default function SloganBanner() {
  return (
    <section id="primeiro-encontro" className="slogan-banner reveal-on-scroll">
      <div className="container first-session">
        <span className="badge badge-sage">O primeiro encontro</span>
        <h2>Como funciona a primeira sessão?</h2>
        {firstSession.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
        <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          <span>Consultar horários</span><ArrowRight size={18} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
