import React, { useState } from 'react';
import { MessageCircle, Mail, MapPin, Send, CheckCircle2, Clock, AlertTriangle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    modalidade: 'presencial',
    mensagem: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const whatsappNumber = "5585989234111";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Olá!%20Encontrei%20seu%20site%20e%20gostaria%20de%20informações%20sobre%20atendimento%20psicológico%20com%20o%20Psicólogo%20Alexandre%20Quevedo.`;

  const validate = () => {
    const newErrors = {};

    if (!formData.nome.trim()) {
      newErrors.nome = 'Por favor, informe o seu nome completo.';
    } else if (formData.nome.trim().length < 3) {
      newErrors.nome = 'O nome deve conter pelo menos 3 caracteres.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Por favor, informe o seu endereço de e-mail.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Por favor, digite um e-mail válido (exemplo: seuemail@dominio.com).';
    }

    if (!formData.telefone.trim()) {
      newErrors.telefone = 'Por favor, informe seu número de telefone ou WhatsApp.';
    } else if (formData.telefone.replace(/\D/g, '').length < 8) {
      newErrors.telefone = 'O número de telefone deve conter pelo menos 8 dígitos com DDD.';
    }

    if (!formData.mensagem.trim()) {
      newErrors.mensagem = 'Por favor, escreva uma breve mensagem ou dúvida.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setErrors({});
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  return (
    <section id="contato" className="section reveal-on-scroll" style={{ backgroundColor: 'var(--bg-surface)', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 4rem auto' }}>
          <span className="badge badge-gold" style={{ marginBottom: '1rem' }}>
            Canais de Comunicação
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: 'var(--text-main)', marginBottom: '1rem' }}>
            Entre em contato e agende sua consulta.
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.08rem' }}>
            Atendimento presencial na Aldeota em Fortaleza/CE e sessões online para todo o Brasil.
          </p>
        </div>

        <div className="grid-2" style={{ gap: '3.5rem' }}>
          
          {/* Left Column: Direct Info & WhatsApp Callout */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            <div style={{
              background: 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)',
              color: '#FFFFFF',
              borderRadius: 'var(--radius-lg)',
              padding: '2.5rem',
              boxShadow: 'var(--shadow-lg)'
            }}>
              <span className="badge badge-gold" style={{ marginBottom: '1.25rem' }}>
                Atendimento Imediato
              </span>

              <h3 style={{ fontSize: '1.8rem', color: '#FFFFFF', marginBottom: '1rem', fontFamily: 'var(--font-serif)' }}>
                Fale diretamente via WhatsApp
              </h3>

              <p style={{ color: 'var(--text-on-dark-muted)', fontSize: '0.98rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                Clique no botão abaixo para conversar pelo WhatsApp do consultório <strong>(85 98923-4111)</strong> sobre horários e agendamento.
              </p>

              <a 
                href={whatsappUrl} 
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ width: '100%', fontSize: '1.05rem', padding: '1rem 1.5rem' }}
              >
                <MessageCircle size={22} />
                <span>Conversar no WhatsApp (85 98923-4111)</span>
              </a>
            </div>

            {/* Address & Details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem', padding: '0 0.5rem' }}>
              
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ background: 'var(--accent-gold-light)', padding: '0.65rem', borderRadius: '12px', color: 'var(--accent-gold)', flexShrink: 0 }}>
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.05rem', color: 'var(--text-main)', marginBottom: '0.2rem' }}>Endereço do Consultório Presencial</h4>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                    <strong>Transcender Psicologia</strong><br />
                    Av. Dom Luís, 500 - 8º andar, Sala 818<br />
                    Aldeota, Fortaleza - CE, CEP: 60160-196
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ background: 'var(--accent-sage-light)', padding: '0.65rem', borderRadius: '12px', color: 'var(--accent-sage)', flexShrink: 0 }}>
                  <Clock size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.05rem', color: 'var(--text-main)', marginBottom: '0.2rem' }}>Horário de Atendimento</h4>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                    Segunda a Sexta-feira: 08:00 às 20:00<br />
                    (Sessões presenciais e online mediante agendamento)
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ background: 'rgba(30, 58, 138, 0.08)', padding: '0.65rem', borderRadius: '12px', color: 'var(--accent-navy)', flexShrink: 0 }}>
                  <Mail size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.05rem', color: 'var(--text-main)', marginBottom: '0.2rem' }}>E-mail Profissional</h4>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)' }}>
                    contato@alexandrequevedo.com.br
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Contact Form with Validation in Pt-BR */}
          <div style={{
            background: 'var(--bg-primary)',
            borderRadius: 'var(--radius-lg)',
            padding: '2.5rem',
            border: '1px solid var(--border-subtle)',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <h3 style={{ fontSize: '1.6rem', color: 'var(--text-main)', marginBottom: '0.5rem', fontFamily: 'var(--font-serif)' }}>
              Enviar Mensagem Direta
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              Preencha os campos abaixo. Retornaremos com discrição e rapidez.
            </p>

            {submitted ? (
              <div style={{
                background: 'var(--accent-sage-light)',
                color: 'var(--accent-sage)',
                padding: '2rem',
                borderRadius: 'var(--radius-md)',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem'
              }}>
                <CheckCircle2 size={48} />
                <div>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: '600' }}>Mensagem enviada com sucesso!</h4>
                  <p style={{ fontSize: '0.9rem', marginTop: '0.4rem', color: 'var(--text-main)' }}>
                    Obrigado pelo contato, <strong>{formData.nome}</strong>. O Psicólogo Alexandre Quevedo responderá em breve.
                  </p>
                  <button 
                    onClick={() => { setSubmitted(false); setFormData({ nome: '', email: '', telefone: '', modalidade: 'presencial', mensagem: '' }); }}
                    className="btn btn-outline"
                    style={{ marginTop: '1.25rem', fontSize: '0.85rem' }}
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                
                {/* Nome */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                    Seu Nome Completo *
                  </label>
                  <input 
                    type="text" 
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder="Ex: Maria da Silva" 
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: errors.nome ? '1.5px solid #EF4444' : '1px solid var(--border-subtle)',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.95rem',
                      outline: 'none',
                      background: '#FFFFFF'
                    }}
                  />
                  {errors.nome && (
                    <span style={{ color: '#DC2626', fontSize: '0.82rem', marginTop: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <AlertTriangle size={14} />
                      {errors.nome}
                    </span>
                  )}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                  {/* Email */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                      Seu E-mail *
                    </label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seuemail@exemplo.com" 
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        border: errors.email ? '1.5px solid #EF4444' : '1px solid var(--border-subtle)',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.95rem',
                        outline: 'none',
                        background: '#FFFFFF'
                      }}
                    />
                    {errors.email && (
                      <span style={{ color: '#DC2626', fontSize: '0.82rem', marginTop: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        <AlertTriangle size={14} />
                        {errors.email}
                      </span>
                    )}
                  </div>

                  {/* Telefone */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                      Telefone / WhatsApp *
                    </label>
                    <input 
                      type="tel" 
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleChange}
                      placeholder="(85) 98923-4111" 
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        border: errors.telefone ? '1.5px solid #EF4444' : '1px solid var(--border-subtle)',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.95rem',
                        outline: 'none',
                        background: '#FFFFFF'
                      }}
                    />
                    {errors.telefone && (
                      <span style={{ color: '#DC2626', fontSize: '0.82rem', marginTop: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        <AlertTriangle size={14} />
                        {errors.telefone}
                      </span>
                    )}
                  </div>
                </div>

                {/* Modalidade */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                    Modalidade de Preferência
                  </label>
                  <select 
                    name="modalidade"
                    value={formData.modalidade}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-subtle)',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.95rem',
                      outline: 'none',
                      background: '#FFFFFF'
                    }}
                  >
                    <option value="presencial">Atendimento Presencial (Aldeota - Fortaleza/CE)</option>
                    <option value="online">Atendimento Online (e-PSI - Todo o Brasil)</option>
                    <option value="ambos">Desejo entender qual a melhor opção para mim</option>
                  </select>
                </div>

                {/* Mensagem */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                    Sua Mensagem *
                  </label>
                  <textarea 
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Descreva brevemente sua busca ou dúvida..." 
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: errors.mensagem ? '1.5px solid #EF4444' : '1px solid var(--border-subtle)',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.95rem',
                      outline: 'none',
                      background: '#FFFFFF',
                      resize: 'vertical'
                    }}
                  />
                  {errors.mensagem && (
                    <span style={{ color: '#DC2626', fontSize: '0.82rem', marginTop: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <AlertTriangle size={14} />
                      {errors.mensagem}
                    </span>
                  )}
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '0.9rem', fontSize: '1rem', marginTop: '0.5rem' }}
                >
                  <Send size={18} />
                  <span>Enviar Mensagem Segura</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
