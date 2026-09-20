import React from 'react';
import { Lock, MessageCircle } from 'lucide-react';

export default function EthicsSigilo() {
  return (
    <section id="cuidado" className="section reveal-on-scroll care-section">
      <div className="container grid-2">
        <div>
          <Lock size={28} aria-hidden="true" />
          <h2>Sigilo profissional e respeito à sua privacidade.</h2>
          <p>O atendimento é conduzido com cuidado e confidencialidade, conforme o Código de Ética Profissional do Psicólogo. Os limites e as exceções ao sigilo são explicados no acompanhamento.</p>
        </div>
        <div>
          <MessageCircle size={28} aria-hidden="true" />
          <h3>Informações claras desde o início</h3>
          <p>Conversaremos sobre o funcionamento das sessões, os valores e os combinados do atendimento. Você poderá esclarecer suas dúvidas antes de começar e ao longo do processo.</p>
          <p>Para consultar horários pelo WhatsApp ou pelo e-mail, não é necessário enviar um relato detalhado de questões pessoais.</p>
        </div>
      </div>
    </section>
  );
}
