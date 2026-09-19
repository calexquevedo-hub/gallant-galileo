import React from 'react';
import { MessageCircle } from 'lucide-react';
import { whatsappUrl } from '../data/site';

export default function FloatingWhatsApp() {
  return (
    <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="floating-whatsapp"
      aria-label="Consultar horários pelo WhatsApp com Alexandre Quevedo">
      <MessageCircle size={22} aria-hidden="true" />
      <span>Consultar horários</span>
    </a>
  );
}
