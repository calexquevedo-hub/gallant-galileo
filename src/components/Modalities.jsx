import React from 'react';
import { Video, MapPin, ArrowUpRight, MessageCircle } from 'lucide-react';
import { site, serviceSummary, whatsappUrl, mapsUrl } from '../data/site';

export default function Modalities() {
  return (
    <section id="modalidades" className="section reveal-on-scroll surface-section">
      <div className="container">
        <div className="section-heading">
          <span className="badge badge-gold">Presencial e online</span>
          <h2>Atendimento que considera sua rotina.</h2>
          <p>{serviceSummary}</p>
        </div>
        <div className="grid-2">
          <article className="modality-card">
            <Video size={28} aria-hidden="true" />
            <h3>Atendimento online</h3>
            <p>Sessões por videochamada, com horário previamente agendado. A adequação dessa modalidade é conversada antes do início do acompanhamento.</p>
            <ul className="simple-list">
              <li>Um local reservado para conversar.</li>
              <li>Conexão com a internet e dispositivo com câmera e áudio.</li>
              <li>Orientações de acesso enviadas após o agendamento.</li>
            </ul>
            <a href={whatsappUrl('online')} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <MessageCircle size={18} aria-hidden="true" /><span>Consultar atendimento online</span>
            </a>
          </article>
          <article className="modality-card">
            <MapPin size={28} aria-hidden="true" />
            <h3>Consultório na Aldeota</h3>
            <p>Atendimento presencial na <strong>{site.clinic}</strong>, na {site.building}, em Fortaleza.</p>
            <address>{site.street}<br />{site.suite}<br />{site.locality}, CEP {site.postalCode}</address>
            <a className="text-link" href={mapsUrl} target="_blank" rel="noopener noreferrer">
              Ver localização no mapa <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a href={whatsappUrl('presencial')} target="_blank" rel="noopener noreferrer" className="btn btn-gold">
              <MessageCircle size={18} aria-hidden="true" /><span>Consultar atendimento presencial</span>
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
