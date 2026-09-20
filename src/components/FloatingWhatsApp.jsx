import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp({ onOpenTriage }) {
  return (
    <button type="button" className="floating-whatsapp" onClick={() => onOpenTriage?.()}
      aria-label="Iniciar triagem rápida pelo WhatsApp">
      <MessageCircle size={22} aria-hidden="true" />
      <span>Iniciar triagem</span>
    </button>
  );
}
