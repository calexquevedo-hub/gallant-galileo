import React from 'react';
import { ArrowUpRight, MapPin, Video } from 'lucide-react';
import { offices, mapsUrl } from '../data/site';

function OfficeCard({ officeKey, onOpenTriage }) {
  const office = offices[officeKey];
  const modality = 'Presencial na ' + office.district;

  return (
    <article className="modality-card">
      <MapPin size={28} aria-hidden="true" />
      <span className="modality-label">Atendimento presencial</span>
      <h3>Psicólogo na {office.district}</h3>
      <p><strong>{office.clinic}</strong></p>
      <address>
        {office.street}<br />
        {office.complement && <>{office.complement}<br /></>}
        {office.building && <>{office.building}<br /></>}
        {office.district}, {office.locality}, CEP {office.postalCode}
      </address>
      <p><strong>Horário de atendimento</strong><br />{office.hours}</p>
      <a className="text-link" href={mapsUrl(officeKey)} target="_blank" rel="noopener noreferrer">
        Ver localização no mapa <ArrowUpRight size={16} aria-hidden="true" />
      </a>
      <button type="button" className="btn btn-gold" onClick={() => onOpenTriage?.(modality)}>
        Iniciar triagem na {office.district}
      </button>
    </article>
  );
}

export default function Modalities({ onOpenTriage }) {
  return (
    <section id="locais" className="section reveal-on-scroll surface-section">
      <div className="container">
        <div className="section-heading">
          <span className="badge badge-gold">Onde atendo</span>
          <h2>Atendimento presencial e online.</h2>
          <p>Escolha a modalidade que melhor combina com sua rotina. Todos os atendimentos são realizados mediante agendamento.</p>
        </div>
        <div className="grid-3 modalities-grid">
          <OfficeCard officeKey="aldeota" onOpenTriage={onOpenTriage} />
          <OfficeCard officeKey="maraponga" onOpenTriage={onOpenTriage} />
          <article className="modality-card">
            <Video size={28} aria-hidden="true" />
            <span className="modality-label">Atendimento por videochamada</span>
            <h3>Online</h3>
            <p>Uma alternativa para quem prefere conversar de onde estiver, com horário previamente agendado.</p>
            <ul className="simple-list">
              <li>Local reservado para conversar.</li>
              <li>Conexão com a internet e dispositivo com câmera e áudio.</li>
              <li>Orientações de acesso enviadas após o agendamento.</li>
            </ul>
            <button type="button" className="btn btn-primary" onClick={() => onOpenTriage?.('Atendimento online')}>
              Iniciar triagem online
            </button>
          </article>
        </div>
      </div>
    </section>
  );
}
