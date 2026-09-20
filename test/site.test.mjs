import test, { after, before } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { createServer } from 'vite';
import {
  audience,
  emailUrl,
  faqs,
  firstSession,
  mapsUrl,
  offices,
  serviceSummary,
  site,
  topics,
  triageModalities,
  triageReasons,
  triageWhatsAppUrl
} from '../src/data/site.js';

const root = fileURLToPath(new URL('../', import.meta.url));
const index = await readFile(new URL('../index.html', import.meta.url), 'utf8');
const css = await readFile(new URL('../src/index.css', import.meta.url), 'utf8');
const robots = await readFile(new URL('../public/robots.txt', import.meta.url), 'utf8');
const sitemap = await readFile(new URL('../public/sitemap.xml', import.meta.url), 'utf8');
let server;
let html;
let triageHtml;
let triageSource;
let privacyHtml;

before(async () => {
  server = await createServer({
    root,
    server: { middlewareMode: true, hmr: false, watch: null },
    appType: 'custom',
    logLevel: 'error'
  });
  const appModule = await server.ssrLoadModule('/src/App.jsx');
  const triageModule = await server.ssrLoadModule('/src/components/TriageModal.jsx');
  const privacyModule = await server.ssrLoadModule('/src/components/PrivacyModal.jsx');
  html = renderToStaticMarkup(React.createElement(appModule.default));
  triageSource = triageModule.default.toString();
  triageHtml = renderToStaticMarkup(React.createElement(triageModule.default, {
    isOpen: true,
    initialModality: 'Presencial na Aldeota',
    onClose: () => {}
  }));
  privacyHtml = renderToStaticMarkup(React.createElement(privacyModule.default, {
    isOpen: true,
    onClose: () => {}
  }));
});

after(async () => { await server?.close(); });

test('mantém identidade, contatos e locais confirmados', () => {
  assert.equal(site.name, 'Alexandre Quevedo');
  assert.equal(site.profession, 'Psicólogo');
  assert.equal(site.crp, 'CRP 11/24669');
  assert.equal(site.email, 'alexandrequevedo@outlook.com');
  assert.equal(site.whatsappNumber, '5585989234111');
  assert.equal(site.minimumAge, 8);
  assert.equal(offices.aldeota.clinic, 'Transcender Psicologia');
  assert.equal(offices.aldeota.hours, 'De segunda a sexta-feira, das 18h às 21h.');
  assert.equal(offices.maraponga.clinic, 'MultiMais Clínica');
  assert.equal(offices.maraponga.street, 'Rua Luxemburgo, 148');
  assert.equal(offices.maraponga.postalCode, '60711-025');
  assert.equal(offices.maraponga.hours, 'Aos sábados, das 8h às 12h.');
  assert.equal(serviceSummary, 'Atendimento individual e de casal, mediante agendamento.');
  assert.match(audience, /Crianças a partir de 8 anos, adolescentes, adultos, idosos e casais/);
  assert.ok(html.includes(site.fullName));
  assert.ok(html.includes(offices.aldeota.clinic));
  assert.ok(html.includes(offices.maraponga.clinic));
});

test('usa uma navegação curta, sem seções repetidas', () => {
  for (const [id, label] of [
    ['sobre', 'Sobre mim'],
    ['atendimento', 'Atendimento'],
    ['locais', 'Onde atendo'],
    ['duvidas', 'Dúvidas']
  ]) {
    assert.match(html, new RegExp('href="#' + id + '">' + label));
    assert.match(html, new RegExp('id="' + id + '"'));
  }
  assert.match(html, /href="#inicio"[^>]*aria-label="Alexandre Quevedo, início"/);
  assert.doesNotMatch(html, /id="(?:atuacao|modalidades|faq|primeiro-encontro|cuidado|contato)"/);
  assert.equal([...html.matchAll(/<h1\b/g)].length, 1);
  assert.match(html, /<h1>Um espaço para compreender o que você vive\.<\/h1>/);
  assert.match(html, /hero-eyebrow">Psicólogo em Fortaleza e online<\/span>/);
  assert.equal((html.match(/>Iniciar triagem<\/span>/g) || []).length, 2);
  assert.doesNotMatch(html, /Conheça meu trabalho|Iniciar triagem na|Iniciar triagem online|Não sabe por onde começar|Próximo passo/);
});

test('mantém a jornada de triagem em três etapas e termina no WhatsApp', () => {
  assert.deepEqual(triageReasons, [
    'Ansiedade e preocupações',
    'Luto e mudanças',
    'Relacionamentos',
    'Sobrecarga no trabalho',
    'Sexualidade',
    'Outro motivo'
  ]);
  assert.deepEqual(triageModalities, [
    'Presencial na Aldeota',
    'Presencial na Maraponga',
    'Atendimento online',
    'Ainda não sei'
  ]);
  assert.match(triageHtml, /Triagem inicial · 1 de 3/);
  assert.match(triageHtml, /O que motivou seu contato\?/);
  assert.match(triageSource, /Qual modalidade você procura/);
  assert.match(triageSource, /Como posso chamar você/);
  assert.match(triageSource, /Continuar no WhatsApp/);
  assert.match(triageSource, /Será usado apenas para iniciar o contato pelo WhatsApp/);
  assert.match(html, /Iniciar triagem/);
  assert.match(html, /aria-label="Iniciar triagem rápida pelo WhatsApp"/);
});

test('o texto gerado para o WhatsApp evita dados clínicos sensíveis', () => {
  const url = new URL(triageWhatsAppUrl({ name: 'Ana', modality: 'Atendimento online' }));
  assert.equal(url.pathname, '/' + site.whatsappNumber);
  const message = url.searchParams.get('text');
  assert.match(message, /Meu nome é Ana/);
  assert.match(message, /Atendimento online/);
  assert.doesNotMatch(message, /ansiedade|sexualidade|luto|relacionamentos/i);
  assert.match(triageWhatsAppUrl(), new RegExp('wa\\.me/' + site.whatsappNumber));
});

test('o conteúdo clínico essencial aparece uma única vez, sem promessas', () => {
  for (const topic of topics) assert.ok(html.includes(topic.title));
  for (const paragraph of firstSession) assert.ok(html.includes(paragraph));
  assert.doesNotMatch(html + index, /relato verificado|pacientes satisfeitos|garantia de resultado|sigilo absoluto|75 minutos/i);
  assert.doesNotMatch(html, /contato@alexandrequevedo\.com\.br|e-psi|e-Psi/i);
  assert.doesNotMatch(html, /<form\b|<textarea\b/);
});

test('âncoras internas apontam para elementos únicos', () => {
  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
  assert.equal(ids.length, new Set(ids).size, 'duplicate element IDs');
  for (const match of html.matchAll(/href="#([^"]+)"/g)) {
    assert.ok(ids.includes(match[1]), 'Missing anchor: ' + match[1]);
  }
  assert.match(html, /<main id="conteudo" tabindex="-1"/);
  assert.match(html, /<button[^>]*aria-controls="menu-mobile"/);
});

test('FAQ e imagem mantêm acessibilidade básica', () => {
  for (let i = 0; i < faqs.length; i++) {
    const button = html.match(new RegExp('<button[^>]*id="faq-question-' + i + '"[^>]*>'))?.[0];
    const panel = html.match(new RegExp('<div[^>]*id="faq-answer-' + i + '"[^>]*>'))?.[0];
    assert.ok(button);
    assert.ok(panel);
    assert.ok(button.includes('aria-controls="faq-answer-' + i + '"'));
    assert.ok(button.includes('aria-expanded="' + (i === 0) + '"'));
    assert.ok(panel.includes('aria-labelledby="faq-question-' + i + '"'));
    assert.equal(panel.includes('hidden=""'), i !== 0);
  }
  const images = [...html.matchAll(/<img\s[^>]*>/g)];
  assert.equal(images.length, 3);
  for (const image of images) assert.match(image[0], /\salt="[^"]*"/);
  assert.match(html, /src="\/images\/psicologo\.jpg"[^>]*loading="lazy"/);
  assert.doesNotMatch(html, /consultorio(?:-aldeota)?\.(?:jpg|png|webp)/i);
});

test('mapas, privacidade e dados estruturados continuam corretos', () => {
  const hrefs = [...html.matchAll(/href="([^"]+)"/g)].map((match) => match[1].replaceAll('&amp;', '&'));
  const mapLinks = hrefs.filter((href) => href.startsWith('https://www.google.com/maps/'));
  assert.equal(mapLinks.length, 2);
  for (const officeKey of ['aldeota', 'maraponga']) {
    const office = offices[officeKey];
    const expected = mapsUrl(officeKey);
    assert.ok(mapLinks.includes(expected));
    const mapQuery = new URL(expected).searchParams.get('query');
    for (const part of [office.clinic, office.street, office.district, office.locality, office.postalCode]) {
      assert.ok(mapQuery.includes(part));
    }
  }
  assert.equal(hrefs.filter((href) => href.startsWith('mailto:')).length, 0);
  assert.match(privacyHtml, new RegExp('mailto:' + site.email.replace('.', '\\.') ));
  assert.match(privacyHtml, /Lei Geral de Proteção de Dados Pessoais/);

  const json = index.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1];
  const data = JSON.parse(json);
  assert.equal(data['@type'], 'ProfessionalService');
  assert.equal(data.identifier, site.crp);
  assert.equal(data.telephone, '+' + site.whatsappNumber);
  assert.equal(data.location.length, 2);
  assert.equal(data.location.find((location) => location.name.includes('Aldeota')).address.postalCode, offices.aldeota.postalCode);
  assert.equal(data.location.find((location) => location.name.includes('Maraponga')).address.postalCode, offices.maraponga.postalCode);
  assert.match(index, /href="\/sitemap\.xml"/);
});

test('SEO técnico básico está disponível', () => {
  assert.match(robots, /User-agent: \*/);
  assert.match(robots, /Allow: \/\n/);
  assert.match(robots, /Sitemap: https:\/\/alexandrequevedo\.com\.br\/sitemap\.xml/);
  assert.match(sitemap, /<loc>https:\/\/alexandrequevedo\.com\.br\/<\/loc>/);
  assert.match(sitemap, /<lastmod>2026-09-20<\/lastmod>/);
  assert.match(index, /<meta name="theme-color" content="#142336"/);
  assert.match(index, /<html lang="pt-BR">/);
  assert.match(index, /<meta name="robots" content="index, follow"/);
});

test('estilos preservam foco, contraste e conteúdo visível', () => {
  assert.match(css, /\.reveal-on-scroll\s*\{\s*opacity:\s*1/);
  assert.match(css, /:focus-visible/);
  assert.match(css, /scroll-margin-top/);
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
  assert.match(css, /\.modal-backdrop/);
  assert.match(css, /\.triage-option\.is-selected/);
  assert.match(css, /\.floating-whatsapp[\s\S]*bottom: calc\(5rem/);
});
