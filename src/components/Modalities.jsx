import React from 'react';
import { ArrowUpRight, MapPin, Video } from 'lucide-react';
import { offices, mapsUrl } from '../data/site';

function OfficeCard({ officeKey }) {
  const office = offices[officeKey];

  return (
    <article className="modality-card">
      <MapPin size={25} aria-hidden="true" />
      <span className="modality-label">Atendimento presencial</span>
      <h3>{office.district}</h3>
      <p><strong>{office.clinic}</strong></p>
      <address>
        {office.street}<br />
        {office.complement && <>{office.complement}<br /></>}
        {office.building && <>{office.building}<br /></>}
        {office.district}, {office.locality}, CEP {office.postalCode}
      </address>
      <p><strong>Horário</strong><br />{office.hours}</p>
      <a className="text-link map-link" href={mapsUrl(officeKey)} target="_blank" rel="noopener noreferrer">
        Ver localização no mapa <ArrowUpRight size={16} aria-hidden="true" />
      </a>
    </article>
  );
}

export default function Modalities() {
  return (
    <section id="locais" className="section reveal-on-scroll surface-section">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow eyebrow-gold">Onde atendo</span>
          <h2>Presencial em Fortaleza e online.</h2>
          <p>Atendimentos mediante agendamento, em espaços reservados para acolher cada encontro.</p>
        </div>

        <div className="grid-3 modalities-grid">
          <OfficeCard officeKey="aldeota" />
          <OfficeCard officeKey="maraponga" />
          <article className="modality-card">
            <Video size={25} aria-hidden="true" />
            <span className="modality-label">Atendimento por videochamada</span>
            <h3>Online</h3>
            <p>Para quem prefere conversar de onde estiver, com horário previamente combinado.</p>
            <ul className="simple-list">
              <li>Local reservado para conversar.</li>
              <li>Conexão estável e dispositivo com câmera e áudio.</li>
              <li>Orientações de acesso enviadas após o agendamento.</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
