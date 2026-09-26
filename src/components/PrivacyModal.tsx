import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { site } from '../data/site';

export default function PrivacyModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const open = () => setIsOpen(true);
    window.addEventListener('open-privacy', open);
    return () => window.removeEventListener('open-privacy', open);
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop privacy-backdrop" role="presentation" onMouseDown={(event) => {
      if (event.target === event.currentTarget) setIsOpen(false);
    }}>
      <div className="privacy-dialog" role="dialog" aria-modal="true" aria-labelledby="privacy-title">
        <div className="privacy-dialog-top">
          <button type="button" className="icon-button" onClick={() => setIsOpen(false)} aria-label="Fechar sigilo e privacidade"><X size={20} aria-hidden="true" /></button>
        </div>
        <h2 id="privacy-title">Sigilo e privacidade</h2>
        <div className="privacy-copy">
          <p>O atendimento psicológico é protegido pelo dever de sigilo profissional, observado o Código de Ética Profissional do Psicólogo e os limites previstos na legislação aplicável.</p>
          <p>O primeiro contato deste site solicita apenas o local ou formato de atendimento desejado e abre uma conversa no WhatsApp. Evite enviar relatos clínicos detalhados ou outras informações sensíveis antes da sessão.</p>
          <p>O tratamento de dados pessoais segue os princípios da <a href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm" target="_blank" rel="noopener noreferrer">Lei Geral de Proteção de Dados Pessoais, Lei nº 13.709/2018</a>.</p>
          <p>Responsável pelo atendimento e por este canal: <strong>{site.fullName}</strong>, {site.profession}, {site.crp}. Para dúvidas ou solicitações relacionadas à privacidade, escreva para <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
        </div>
        <button type="button" className="btn btn-primary privacy-close" onClick={() => setIsOpen(false)}>Entendi</button>
      </div>
    </div>
  );
}
