import React from 'react';
import { site } from '../data/site';

export default function Footer({ onOpenPrivacy }) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="brand footer-brand">
              <img src="/images/logo-tree-white.png" alt="" width="42" height="42" loading="lazy" />
              <span className="brand-copy">
                <span className="brand-name">{site.name}</span>
                <span className="brand-registration">{site.profession}</span>
              </span>
            </div>
            <p><strong>{site.fullName}</strong><br />{site.profession} · {site.crp}</p>
            <p>Atendimento presencial em Fortaleza e online, mediante agendamento.</p>
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
          <button type="button" className="footer-privacy-link" onClick={() => onOpenPrivacy?.()}>Sigilo e privacidade</button>
        </div>
      </div>
    </footer>
  );
}
