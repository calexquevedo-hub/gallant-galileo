import React from 'react';
import { Instagram, Music2 } from 'lucide-react';
import { site, socialLinks } from '../data/site';

const socialIcons = { Instagram, TikTok: Music2 };

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
            <div className="footer-social">
              <span className="footer-social-label">Redes sociais</span>
              <div className="footer-social-links">
                {socialLinks.map(({ label, href }) => {
                  const Icon = socialIcons[label];
                  return (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                      aria-label={`${label} de ${site.name}`}>
                      <Icon size={18} strokeWidth={1.8} aria-hidden="true" />
                      <span>{label}</span>
                    </a>
                  );
                })}
              </div>
            </div>
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
