import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, Check, X } from 'lucide-react';
import { contactOptions, firstContactWhatsAppUrl } from '../data/site';

export default function FirstContactModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [selection, setSelection] = useState('');

  useEffect(() => {
    const open = () => {
      setStep(0);
      setSelection('');
      setIsOpen(true);
    };
    window.addEventListener('open-first-contact', open);
    return () => window.removeEventListener('open-first-contact', open);
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const selectedOption = contactOptions.find((option) => option.label === selection);
  const canContinue = step === 0 || Boolean(selectedOption);
  const stepTitles = ['Vamos começar seu primeiro contato', 'Onde você prefere ser atendido?'];
  const close = () => setIsOpen(false);
  const openWhatsApp = () => {
    if (!selectedOption) return;
    window.open(firstContactWhatsAppUrl({ modality: selectedOption.message }), '_blank', 'noopener,noreferrer');
    close();
  };

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={(event) => {
      if (event.target === event.currentTarget) close();
    }}>
      <div className="contact-dialog" role="dialog" aria-modal="true" aria-labelledby="contact-title" aria-describedby="contact-description">
        <div className="contact-dialog-top">
          <span className="contact-progress">Primeiro contato · {step + 1} de 2</span>
          <button type="button" className="icon-button" onClick={close} aria-label="Fechar primeiro contato"><X size={20} aria-hidden="true" /></button>
        </div>
        <h2 id="contact-title">{stepTitles[step]}</h2>
        <p id="contact-description" className="contact-description">
          {step === 0
            ? 'Escolha o formato que faz mais sentido para você. Depois, o WhatsApp será aberto para combinarmos horários e outras informações.'
            : 'Selecione o local ou formato de atendimento que você procura.'}
        </p>

        {step === 0 && (
          <div className="contact-intro">
            <p>Para preservar sua privacidade, evite enviar detalhes clínicos antes da sessão.</p>
          </div>
        )}

        {step === 1 && (
          <div className="contact-options" role="group" aria-label="Local ou formato de atendimento">
            {contactOptions.map((option) => (
              <button type="button" key={option.label} className={'contact-option' + (selection === option.label ? ' is-selected' : '')} aria-pressed={selection === option.label} onClick={() => setSelection(option.label)}>
                <span>{option.label}</span>{selection === option.label && <Check size={17} aria-hidden="true" />}
              </button>
            ))}
          </div>
        )}

        <div className="contact-actions">
          <button type="button" className="contact-back" onClick={() => step > 0 && setStep((current) => current - 1)} disabled={step === 0}><ArrowLeft size={17} aria-hidden="true" /> Voltar</button>
          {step === 0 ? (
            <button type="button" className="btn btn-primary contact-next" onClick={() => canContinue && setStep(1)}>Escolher atendimento <ArrowRight size={17} aria-hidden="true" /></button>
          ) : (
            <button type="button" className="btn btn-gold contact-next" onClick={openWhatsApp} disabled={!canContinue}>Abrir WhatsApp <ArrowRight size={17} aria-hidden="true" /></button>
          )}
        </div>
      </div>
    </div>
  );
}
