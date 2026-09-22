import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, Check, X } from 'lucide-react';
import { triageModalities, triageReasons, triageWhatsAppUrl } from '../data/site';

export default function TriageModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [reason, setReason] = useState('');
  const [modality, setModality] = useState('');
  const [firstName, setFirstName] = useState('');

  useEffect(() => {
    const open = () => {
      setStep(0);
      setReason('');
      setModality('');
      setFirstName('');
      setIsOpen(true);
    };
    window.addEventListener('open-triage', open);
    return () => window.removeEventListener('open-triage', open);
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

  const selectedValue = step === 0 ? reason : step === 1 ? modality : firstName.trim();
  const canContinue = Boolean(selectedValue);
  const stepTitles = ['O que motivou seu contato?', 'Qual modalidade você procura?', 'Como posso chamar você?'];
  const close = () => setIsOpen(false);
  const finish = () => {
    if (!firstName.trim()) return;
    window.open(triageWhatsAppUrl({ name: firstName, modality, reason }), '_blank', 'noopener,noreferrer');
    close();
  };

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={(event) => {
      if (event.target === event.currentTarget) close();
    }}>
      <div className="triage-dialog" role="dialog" aria-modal="true" aria-labelledby="triage-title" aria-describedby="triage-description">
        <div className="triage-dialog-top">
          <span className="triage-progress">Triagem inicial · {step + 1} de 3</span>
          <button type="button" className="icon-button" onClick={close} aria-label="Fechar triagem"><X size={20} aria-hidden="true" /></button>
        </div>
        <h2 id="triage-title">{stepTitles[step]}</h2>
        <p id="triage-description" className="triage-description">Leva menos de um minuto. Suas respostas ajudam a iniciar nossa conversa com mais cuidado.</p>

        {step === 0 && (
          <div className="triage-options" role="group" aria-label="Motivo do contato">
            {triageReasons.map((option) => (
              <button type="button" key={option} className={'triage-option' + (reason === option ? ' is-selected' : '')} aria-pressed={reason === option} onClick={() => setReason(option)}>
                <span>{option}</span>{reason === option && <Check size={17} aria-hidden="true" />}
              </button>
            ))}
          </div>
        )}

        {step === 1 && (
          <div className="triage-options" role="group" aria-label="Modalidade de atendimento">
            {triageModalities.map((option) => (
              <button type="button" key={option} className={'triage-option' + (modality === option ? ' is-selected' : '')} aria-pressed={modality === option} onClick={() => setModality(option)}>
                <span>{option}</span>{modality === option && <Check size={17} aria-hidden="true" />}
              </button>
            ))}
          </div>
        )}

        {step === 2 && (
          <label className="triage-field">
            <span>Seu primeiro nome</span>
            <input type="text" autoFocus value={firstName} onChange={(event) => setFirstName(event.target.value)} placeholder="Como prefere ser chamada(o)?" autoComplete="given-name" />
            <small>Será usado apenas para iniciar o contato pelo WhatsApp.</small>
          </label>
        )}

        <div className="triage-actions">
          <button type="button" className="triage-back" onClick={() => step > 0 && setStep((current) => current - 1)} disabled={step === 0}><ArrowLeft size={17} aria-hidden="true" /> Voltar</button>
          {step < 2 ? (
            <button type="button" className="btn btn-primary triage-next" onClick={() => canContinue && setStep((current) => current + 1)} disabled={!canContinue}>Continuar <ArrowRight size={17} aria-hidden="true" /></button>
          ) : (
            <button type="button" className="btn btn-gold triage-next" onClick={finish} disabled={!canContinue}>Continuar no WhatsApp <ArrowRight size={17} aria-hidden="true" /></button>
          )}
        </div>
      </div>
    </div>
  );
}
