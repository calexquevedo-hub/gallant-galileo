export const site = Object.freeze({
  name: 'Alexandre Quevedo',
  fullName: 'Carlos Alexandre Quevedo',
  profession: 'Psicólogo',
  crp: 'CRP 11/24669',
  email: 'alexandrequevedo@outlook.com',
  whatsappNumber: '5585989234111',
  phoneDisplay: '(85) 98923-4111',
  url: 'https://alexandrequevedo.com.br',
  minimumAge: 8,
  availability: 'Atendimento mediante agendamento. Consulte os horários disponíveis.'
});

export const offices = Object.freeze({
  aldeota: Object.freeze({
    district: 'Aldeota',
    clinic: 'Transcender Psicologia',
    street: 'Av. Dom Luís, 500',
    complement: 'Sala 818, 8º andar',
    building: 'Torre do Shopping Aldeota',
    locality: 'Fortaleza, CE',
    postalCode: '60160-196',
    hours: 'De segunda a sexta-feira, das 18h às 21h.'
  }),
  maraponga: Object.freeze({
    district: 'Maraponga',
    clinic: 'MultiMais Clínica',
    street: 'Rua Luxemburgo, 148',
    complement: '',
    building: '',
    locality: 'Fortaleza, CE',
    postalCode: '60711-025',
    hours: 'Aos sábados, das 8h às 12h.'
  })
});

export const audience = 'Crianças a partir de ' + site.minimumAge + ' anos, adolescentes, adultos, idosos e casais';
export const serviceSummary = 'Atendimento individual e de casal, mediante agendamento.';
export const emailUrl = 'mailto:' + site.email;
export const socialLinks = Object.freeze([
  Object.freeze({ label: 'Instagram', href: 'https://www.instagram.com/alexandrequevedo.psi/' }),
  Object.freeze({ label: 'TikTok', href: 'https://www.tiktok.com/@alexandrequevedo.psi' })
]);

export const triageReasons = Object.freeze([
  'Ansiedade e preocupações',
  'Luto e mudanças',
  'Relacionamentos',
  'Sobrecarga no trabalho',
  'Sexualidade',
  'Outro motivo'
]);

export const triageModalities = Object.freeze([
  'Presencial na Aldeota',
  'Presencial na Maraponga',
  'Atendimento online',
  'Ainda não sei'
]);

export function mapsUrl(officeKey) {
  const office = offices[officeKey];
  if (!office) return '';
  const parts = [office.clinic, office.street, office.complement, office.building, office.district, office.locality, office.postalCode];
  return 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(parts.filter(Boolean).join(', '));
}

const messages = {
  general: 'Olá, Alexandre! Encontrei seu site e gostaria de consultar valores e horários para atendimento psicológico.',
  online: 'Olá, Alexandre! Gostaria de consultar valores e horários para atendimento psicológico online.',
  aldeota: 'Olá, Alexandre! Gostaria de consultar valores e horários para atendimento presencial na Aldeota.',
  maraponga: 'Olá, Alexandre! Gostaria de consultar valores e horários para atendimento presencial na Maraponga.'
};

export function whatsappUrl(modality = 'general') {
  return 'https://wa.me/' + site.whatsappNumber + '?text=' + encodeURIComponent(messages[modality] || messages.general);
}

export function triageWhatsAppUrl({ name = '', modality = '' } = {}) {
  const cleanName = name.trim();
  const cleanModality = modality.trim() || 'presencial ou online';
  const greeting = cleanName ? 'Meu nome é ' + cleanName + '. ' : '';
  const message = 'Olá, Alexandre. ' + greeting + 'Gostaria de iniciar uma triagem para atendimento ' + cleanModality + '.';
  return 'https://wa.me/' + site.whatsappNumber + '?text=' + encodeURIComponent(message);
}

export const firstSession = [
  'O primeiro encontro é um momento para nos conhecermos, conversar sobre o que motivou sua busca por atendimento e começar a construir uma relação de confiança. Você poderá compartilhar suas dificuldades e expectativas no seu ritmo, sem precisar chegar com tudo organizado.',
  'Também explicarei como trabalho, esclarecerei suas dúvidas e combinaremos os próximos passos do acompanhamento.'
];

export const topics = [
  { title: 'Ansiedade', description: 'Preocupações, medos e situações que têm gerado desconforto ou dificultado o seu dia a dia.' },
  { title: 'Luto', description: 'Um espaço para falar sobre perdas, saudade e as mudanças que elas trazem, respeitando a sua história.' },
  { title: 'Relacionamentos', description: 'Dificuldades de comunicação, conflitos, limites e convivência, em sessões individuais ou de casal.' },
  { title: 'Sobrecarga no trabalho', description: 'Exigências, cansaço e dificuldades para conciliar o trabalho com outras áreas da vida.' },
  { title: 'Questões de sexualidade', description: 'Escuta respeitosa sobre desejos, experiências, dúvidas e dificuldades relacionadas à sexualidade, sem julgamentos.' }
];

export const faqs = [
  { question: 'Qual é o valor da sessão?', answer: 'Entre em contato pelo WhatsApp para consultar os valores, as formas de pagamento e os horários disponíveis. Essas informações são combinadas antes do agendamento.' },
  { question: 'Com que frequência acontecem as sessões?', answer: 'A frequência é combinada a partir das suas necessidades e da disponibilidade de horários. Esse acordo pode ser revisto ao longo do acompanhamento.' },
  { question: 'Você atende crianças a partir de qual idade?', answer: 'Atendo crianças a partir de ' + site.minimumAge + ' anos. O acompanhamento é adaptado à idade e às necessidades da criança e envolve também os responsáveis. Conversaremos sobre a demanda e o formato mais adequado antes de iniciar.' },
  { question: 'Como funciona a terapia de casal?', answer: 'O atendimento oferece espaço para escutar os dois integrantes e compreender a relação, suas dificuldades e expectativas. Os objetivos do acompanhamento são construídos em conjunto.' },
  { question: 'Como funciona o atendimento online?', answer: 'As sessões acontecem por videochamada, em horário previamente agendado. Você precisará de conexão com a internet e de um local reservado. As orientações de acesso são enviadas após o agendamento, e a adequação dessa modalidade é conversada antes do início.' },
  { question: 'Como a Análise do Comportamento orienta o atendimento?', answer: 'Buscamos compreender como sua história, suas relações e as situações do dia a dia se relacionam com o que você sente, pensa e faz. A partir dessa compreensão, construímos possibilidades de lidar com as dificuldades e com aquilo que é importante para você.' }
];
