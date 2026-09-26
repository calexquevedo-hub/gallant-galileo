import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <button type="button" className="floating-whatsapp" onClick={() => window.dispatchEvent(new Event('open-first-contact'))}
      aria-label="Iniciar conversa pelo WhatsApp">
      <MessageCircle size={22} aria-hidden="true" />
      <span>Iniciar conversa</span>
    </button>
  );
}
