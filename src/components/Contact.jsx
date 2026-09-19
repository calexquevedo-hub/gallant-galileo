import React from 'react';
import { MessageCircle, Mail, MapPin, Clock, ArrowUpRight } from 'lucide-react';
import { site, whatsappUrl, emailUrl, mapsUrl } from '../data/site';

export default function Contact() {
  return (
    <section id="contato" className="section reveal-on-scroll surface-section">
      <div className="container">
        <div className="section-heading">
          <span className="badge badge-gold">Vamos conversar</span>
          <h2>Consulte valores e horários.</h2>
          <p>Entre em contato para tirar dúvidas e combinar seu atendimento presencial ou online.</p>
        </div>

        <div className="grid-2 contact-grid">
          <div className="contact-callout">
            <MessageCircle size={30} aria-hidden="true" />
            <h3>Fale comigo pelo WhatsApp</h3>
            <p>Você pode consultar os valores, as formas de pagamento e a disponibilidade antes de agendar.</p>
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              <MessageCircle size={21} aria-hidden="true" />
              <span>Consultar horários no WhatsApp</span>
            </a>
            <p className="contact-number">{site.phoneDisplay}</p>
            <p className="contact-note">Respondo conforme minha disponibilidade entre o trabalho e os atendimentos. Este canal não oferece resposta imediata nem atendimento de emergência.</p>
          </div>

          <div className="contact-details">
            <div className="contact-detail">
              <MapPin size={23} aria-hidden="true" />
              <div>
                <h3>Consultório na Aldeota</h3>
                <address>
                  <strong>{site.clinic}</strong><br />
                  {site.street}, {site.suite}<br />
                  {site.building}<br />
                  {site.locality}, CEP {site.postalCode}
                </address>
                <a className="text-link" href={mapsUrl} target="_blank" rel="noopener noreferrer">
                  Ver localização no mapa <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </div>
            </div>
            <div className="contact-detail">
              <Clock size={23} aria-hidden="true" />
              <div><h3>Disponibilidade</h3><p>{site.availability}</p></div>
            </div>
            <div className="contact-detail">
              <Mail size={23} aria-hidden="true" />
              <div>
                <h3>Prefere enviar um e-mail?</h3>
                <a className="text-link email-link" href={emailUrl}>{site.email}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
