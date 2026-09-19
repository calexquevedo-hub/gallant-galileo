import React from 'react';
import { site, emailUrl, whatsappUrl, mapsUrl } from '../data/site';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="brand footer-brand">
              <img src="/images/logo-tree-white.png" alt="" width="48" height="48" loading="lazy" />
              <span className="brand-copy">
                <span className="brand-name">{site.name}</span>
                <span className="brand-registration">Psicólogo · {site.crp}</span>
              </span>
            </div>
            <p>{site.fullName}<br />Psicólogo · {site.crp}</p>
            <p>Atendimento presencial na Aldeota e online.</p>
          </div>
          <div>
            <h3>Contato e localização</h3>
            <address>
              <strong>{site.clinic}</strong><br />
              {site.street}, {site.suite}<br />
              {site.building}<br />
              {site.locality}, {site.postalCode}
            </address>
            <a href={mapsUrl} target="_blank" rel="noopener noreferrer">Ver no mapa</a>
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">WhatsApp: {site.phoneDisplay}</a>
            <a className="email-link" href={emailUrl}>{site.email}</a>
          </div>
          <div className="footer-support">
            <h3>Apoio emocional e emergências</h3>
            <p>Este site e seus canais de contato não oferecem atendimento de emergência.</p>
            <p>Em uma emergência ou risco à vida, acione o <a href="tel:192">SAMU: 192</a> ou procure um pronto-socorro.</p>
            <p>Para apoio emocional, o <a href="tel:188">CVV: 188</a> atende gratuitamente, 24 horas por dia. Não substitui o atendimento de emergência.</p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {site.fullName} · {site.crp}</span>
          <a href="#cuidado">Sigilo e cuidado no atendimento</a>
          <a href={emailUrl}>Dúvidas sobre privacidade? Entre em contato.</a>
        </div>
      </div>
    </footer>
  );
}
