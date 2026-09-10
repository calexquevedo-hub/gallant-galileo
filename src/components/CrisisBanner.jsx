import React from 'react';
import { AlertCircle } from 'lucide-react';

export default function CrisisBanner() {
  return (
    <div className="crisis-banner my-4">
      <div className="container flex items-center justify-between flex-wrap gap-2">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <AlertCircle size={20} style={{ shrink: 0 }} />
          <span>
            <strong>Aviso Importante (CFP):</strong> Este site não realiza atendimento de urgência ou emergência psicológica. Em caso de crise imediata, ligue para o <strong>CVV (188)</strong> ou procure o <strong>SAMU (192)</strong> / UPA mais próxima.
          </span>
        </div>
      </div>
    </div>
  );
}
