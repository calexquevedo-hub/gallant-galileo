import React from 'react';
import { Lock, ShieldCheck, FileText, FileCheck } from 'lucide-react';

export default function EthicsSigilo() {
  return (
    <section className="section reveal-on-scroll" style={{ backgroundColor: 'var(--bg-dark)', color: 'var(--text-on-dark)' }}>
      <div className="container">
        
        <div className="grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <span className="badge badge-gold" style={{ alignSelf: 'flex-start' }}>
              Código de Ética Profissional (CFP)
            </span>

            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: '#FFFFFF' }}>
              Sigilo absoluto, transparência e conformidade regulatória.
            </h2>

            <p style={{ color: 'var(--text-on-dark-muted)', fontSize: '1.05rem', lineHeight: '1.8' }}>
              O sigilo profissional é um pilar inegociável da prática clínica, assegurado pelo Artigo 9º do Código de Ética Profissional do Psicólogo. Além disso, em cumprimento rigoroso ao Artigo 20 (alínea "a"), todas as divulgações informam ostensivamente o nome completo registrado do profissional: <strong>Carlos Alexandre Quevedo</strong>, título de Psicólogo e registro no <strong>CRP 11/24669</strong>.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '0.5rem' }}>
              
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ background: 'rgba(197, 168, 128, 0.2)', padding: '0.6rem', borderRadius: '12px', color: 'var(--accent-gold)' }}>
                  <Lock size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', color: '#FFFFFF', marginBottom: '0.2rem' }}>Privacidade & Proteção de Dados (LGPD)</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-on-dark-muted)' }}>Armazenamento seguro e confidencial de prontuários sob estrito segredo profissional.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ background: 'rgba(90, 115, 99, 0.2)', padding: '0.6rem', borderRadius: '12px', color: 'var(--accent-sage)' }}>
                  <FileText size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', color: '#FFFFFF', marginBottom: '0.2rem' }}>Recibos Oficiais para Reembolso</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-on-dark-muted)' }}>Emissão de recibos e notas fiscais com nome completo (Carlos Alexandre Quevedo) e CRP 11/24669 para reembolso em planos de saúde ou IRPF.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ background: 'rgba(197, 168, 128, 0.2)', padding: '0.6rem', borderRadius: '12px', color: 'var(--accent-gold)' }}>
                  <FileCheck size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', color: '#FFFFFF', marginBottom: '0.2rem' }}>Publicidade Ética sem Sensacionalismo</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-on-dark-muted)' }}>Atuação pautada pela Análise do Comportamento, sem promessas irrealistas de resultados ou mercantilização.</p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Card Panel */}
          <div style={{
            background: 'var(--bg-dark-surface)',
            borderRadius: 'var(--radius-lg)',
            padding: '3rem 2.5rem',
            border: '1px solid var(--border-dark)',
            boxShadow: 'var(--shadow-lg)'
          }}>
            <h3 style={{ fontSize: '1.8rem', color: '#FFFFFF', marginBottom: '1.5rem', fontFamily: 'var(--font-serif)' }}>
              Credenciais de Registro
            </h3>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <li style={{ display: 'flex', gap: '0.8rem', color: 'var(--text-on-dark-muted)', fontSize: '0.95rem' }}>
                <ShieldCheck size={20} style={{ color: 'var(--accent-gold)', flexShrink: 0 }} />
                <span><strong>Nome Profissional Registrado:</strong> Carlos Alexandre Quevedo</span>
              </li>
              <li style={{ display: 'flex', gap: '0.8rem', color: 'var(--text-on-dark-muted)', fontSize: '0.95rem' }}>
                <ShieldCheck size={20} style={{ color: 'var(--accent-gold)', flexShrink: 0 }} />
                <span><strong>Inscrição no CRP:</strong> CRP 11ª Região (Ceará) - <strong>CRP 11/24669</strong></span>
              </li>
              <li style={{ display: 'flex', gap: '0.8rem', color: 'var(--text-on-dark-muted)', fontSize: '0.95rem' }}>
                <ShieldCheck size={20} style={{ color: 'var(--accent-gold)', flexShrink: 0 }} />
                <span><strong>Atendimento Online:</strong> Cadastro ativo no e-PSI (Conselho Federal de Psicologia)</span>
              </li>
              <li style={{ display: 'flex', gap: '0.8rem', color: 'var(--text-on-dark-muted)', fontSize: '0.95rem' }}>
                <ShieldCheck size={20} style={{ color: 'var(--accent-gold)', flexShrink: 0 }} />
                <span><strong>Consultório Presencial:</strong> Transcender Psicologia (Av. Dom Luís, 500 - Sala 818, Aldeota)</span>
              </li>
            </ul>

            <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-dark)' }}>
              <a 
                href="https://e-psi.cfp.org.br/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: 'var(--accent-gold)', fontSize: '0.88rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', textDecoration: 'underline' }}
              >
                Consultar cadastro no site oficial do e-PSI (CFP) →
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
