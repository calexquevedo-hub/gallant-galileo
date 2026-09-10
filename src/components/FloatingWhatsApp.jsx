import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  const whatsappUrl = "https://wa.me/5585989234111?text=Olá!%20Gostaria%20de%20informações%20sobre%20agendamento%20de%20consulta%20com%20o%20Psicólogo%20Carlos%20Alexandre%20Quevedo.";

  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="floating-whatsapp"
      aria-label="Agendar consulta via WhatsApp com Carlos Alexandre Quevedo"
    >
      <MessageCircle size={22} />
      <span>Agendar Consulta</span>
    </a>
  );
}
