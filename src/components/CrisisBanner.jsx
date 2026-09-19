import React from 'react';
import { AlertCircle } from 'lucide-react';

export default function CrisisBanner() {
  return (
    <aside className="crisis-banner" aria-label="Orientação para emergências">
      <div className="container crisis-content">
        <AlertCircle size={20} aria-hidden="true" />
        <p>Este site não oferece atendimento de emergência. Em uma emergência ou risco à vida, ligue <a href="tel:192"><strong>192 (SAMU)</strong></a> ou procure um pronto-socorro. Para apoio emocional, <a href="tel:188"><strong>188 (CVV)</strong></a>.</p>
      </div>
    </aside>
  );
}
