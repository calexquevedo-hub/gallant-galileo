import test, { before, after } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { createServer } from 'vite';
import { site, audience, serviceSummary, firstSession, topics, faqs, whatsappUrl, emailUrl, mapsUrl } from '../src/data/site.js';

const root = fileURLToPath(new URL('../', import.meta.url));
const index = await readFile(new URL('../index.html', import.meta.url), 'utf8');
const css = await readFile(new URL('../src/index.css', import.meta.url), 'utf8');
let server;
let html;

before(async () => {
  server = await createServer({
    root,
    server: { middlewareMode: true, hmr: false, watch: null },
    appType: 'custom',
    logLevel: 'error'
  });
  const { default: App } = await server.ssrLoadModule('/src/App.jsx');
  html = renderToStaticMarkup(React.createElement(App));
});
after(async () => { await server?.close(); });

test('keeps the agreed contact, audience and appointment information', () => {
  assert.equal(site.email, 'alexandrequevedo@outlook.com');
  assert.equal(site.whatsappNumber, '5585989234111');
  assert.equal(site.minimumAge, 8);
  assert.equal(serviceSummary, 'Atendimento individual e de casal, mediante agendamento.');
  assert.equal(site.availability, 'Atendimento mediante agendamento. Consulte os horários disponíveis.');
  assert.match(audience, /Crianças a partir de 8 anos, adolescentes, adultos, idosos e casais/);
  assert.ok(html.includes(serviceSummary));
  assert.ok(html.includes(audience));
  assert.ok(html.includes(site.availability));
});

test('presents only the five agreed areas and a welcoming first meeting', () => {
  assert.deepEqual(topics.map((topic) => topic.title), [
    'Ansiedade', 'Luto', 'Relacionamentos', 'Sobrecarga no trabalho', 'Questões de sexualidade'
  ]);
  for (const topic of topics) assert.ok(html.includes(topic.title));
  for (const paragraph of firstSession) assert.ok(html.includes(paragraph));
  assert.match(firstSession.join(' '), /no seu ritmo/);
});

test('creates WhatsApp links with the right number and non-sensitive messages', () => {
  for (const modality of ['general', 'online', 'presencial', 'unknown']) {
    const url = new URL(whatsappUrl(modality));
    assert.equal(url.origin, 'https://wa.me');
    assert.equal(url.pathname, '/' + site.whatsappNumber);
    assert.match(url.searchParams.get('text'), /consultar valores e horários/);
    assert.doesNotMatch(url.searchParams.get('text'), /ansiedade|sexualidade|luto/i);
  }
  assert.equal(whatsappUrl('unknown'), whatsappUrl());
  assert.match(new URL(whatsappUrl('online')).searchParams.get('text'), /online/);
  assert.match(new URL(whatsappUrl('presencial')).searchParams.get('text'), /presencial/);
});

test('all rendered contact links point to confirmed destinations', () => {
  const hrefs = [...html.matchAll(/href="([^"]+)"/g)].map((match) => match[1].replaceAll('&amp;', '&'));
  const whatsappLinks = hrefs.filter((href) => href.startsWith('https://wa.me/'));
  const emailLinks = hrefs.filter((href) => href.startsWith('mailto:'));
  assert.ok(whatsappLinks.length >= 8);
  assert.ok(emailLinks.length >= 2);
  for (const href of whatsappLinks) assert.equal(new URL(href).pathname, '/' + site.whatsappNumber);
  for (const href of emailLinks) assert.equal(href, emailUrl);
  for (const href of hrefs.filter((href) => href.startsWith('https://www.google.com/maps/'))) {
    assert.equal(href, mapsUrl);
  }
  const mapQuery = new URL(mapsUrl).searchParams.get('query');
  for (const part of [site.clinic, site.street, site.suite, site.building, site.locality]) {
    assert.ok(mapQuery.includes(part));
  }
});

test('removes the form, fake legal links and outdated contact or scheduling claims', () => {
  assert.doesNotMatch(html, /<(?:form|input|textarea)\b/);
  assert.doesNotMatch(html, /href="#"/);
  assert.doesNotMatch(html + index, /contato@alexandrequevedo\.com\.br|e-psi|e-Psi|sigilo absoluto|75 minutos|08:00|20:00/i);
});

test('internal anchors resolve to unique elements', () => {
  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
  assert.equal(ids.length, new Set(ids).size, 'duplicate element IDs');
  for (const match of html.matchAll(/href="#([^"]+)"/g)) {
    assert.ok(ids.includes(match[1]), 'Missing anchor: ' + match[1]);
  }
  assert.equal([...html.matchAll(/<h1\b/g)].length, 1);
  assert.match(html, /<main id="conteudo" tabindex="-1"/);
});

test('FAQ panels and menu expose consistent accessible control relationships', () => {
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
  assert.match(html, /aria-label="Abrir menu" aria-expanded="false" aria-controls="menu-mobile"/);
  assert.match(html, /id="menu-mobile"[^>]*hidden=""/);
});

test('external new-tab links are protected and images have text alternatives', () => {
  for (const match of html.matchAll(/<a\s[^>]*target="_blank"[^>]*>/g)) {
    assert.match(match[0], /rel="noopener noreferrer"/);
  }
  const images = [...html.matchAll(/<img\s[^>]*>/g)];
  assert.equal(images.length, 3);
  for (const image of images) assert.match(image[0], /\salt="[^"]*"/);
  assert.match(html, /src="\/images\/psicologo\.jpg"[^>]*fetchpriority="high"/);
  assert.doesNotMatch(html, /consultorio\.jpg/);
});

test('metadata contains confirmed local information and no invented opening hours', () => {
  const json = index.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1];
  assert.ok(json);
  const data = JSON.parse(json);
  assert.equal(data['@type'], 'LocalBusiness');
  assert.equal(data.email, site.email);
  assert.equal(data.telephone, '+' + site.whatsappNumber);
  assert.equal(data.identifier, site.crp);
  assert.equal(data.address.addressLocality, 'Fortaleza');
  assert.equal(data.address.postalCode, site.postalCode);
  assert.ok(data.address.streetAddress.includes(site.building));
  assert.equal(data.openingHoursSpecification, undefined);
  assert.equal(data.geo, undefined);
  assert.equal(data.priceRange, undefined);
  assert.equal(data.address.subEvent, undefined);
  assert.match(index, /<html lang="pt-BR">/);
  assert.ok(index.includes('href="' + site.url + '/"'));
});

test('no-JavaScript fallback still provides working contact details', () => {
  const fallback = index.match(/<noscript>([\s\S]*?)<\/noscript>/)?.[1];
  assert.ok(fallback?.includes(site.email));
  assert.ok(fallback?.includes('https://wa.me/' + site.whatsappNumber));
  assert.ok(fallback?.includes(site.crp));
});

test('emergency support distinguishes SAMU from CVV and does not promise instant replies', () => {
  assert.match(html, /href="tel:192"/);
  assert.match(html, /href="tel:188"/);
  const answer = faqs.find((faq) => faq.question.includes('emergência')).answer;
  assert.match(answer, /sem resposta imediata garantida/);
  assert.match(answer, /SAMU pelo 192/);
  assert.match(answer, /CVV atende gratuitamente pelo 188/);
  assert.match(answer, /não substitui o atendimento de emergência/);
});

const variables = Object.fromEntries(
  [...css.matchAll(/(--[\w-]+):\s*(#[a-f0-9]{6})/gi)].map((match) => [match[1], match[2]])
);
function rule(selector) {
  const escaped = selector.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const body = css.match(new RegExp(escaped + '\\s*\\{([^}]+)\\}'))?.[1] || '';
  return Object.fromEntries(body.split(';').filter((item) => item.includes(':')).map((item) => {
    const colon = item.indexOf(':');
    const key = item.slice(0, colon).trim();
    let value = item.slice(colon + 1).trim();
    value = value.replace(/var\((--[\w-]+)\)/g, (_, name) => variables[name]);
    return [key, value];
  }));
}
function luminance(hex) {
  const components = hex.slice(1).match(/../g).map((pair) => parseInt(pair, 16) / 255);
  const [r, g, b] = components.map((c) => c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
function contrast(first, second) {
  const [a, b] = [luminance(first), luminance(second)].sort((x, y) => y - x);
  return (a + 0.05) / (b + 0.05);
}

test('button and badge text has at least 4.5:1 color contrast', () => {
  for (const selector of ['.btn-gold', '.btn-primary', '.btn-whatsapp', '.btn-nav-cta', '.floating-whatsapp', '.badge-gold', '.badge-sage']) {
    const base = rule(selector);
    assert.ok(contrast(base.color, base.background) >= 4.5, selector + ' default contrast');
    const hover = { ...base, ...rule(selector + ':hover') };
    assert.ok(contrast(hover.color, hover.background) >= 4.5, selector + ' hover contrast');
  }
});

test('content is visible by default with focus, anchor offset and reduced-motion styles', () => {
  assert.match(css, /\.reveal-on-scroll\s*\{\s*opacity:\s*1/);
  assert.match(css, /:focus-visible/);
  assert.match(css, /scroll-margin-top/);
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
});

test('does not publish session duration in content, FAQ or metadata', () => {
  assert.doesNotMatch(html + index, /\b\d+\s*minutos\b|duração\s+d[ae]s?\s+sess[ãõ][oe]s?|quanto tempo dura cada sessão/i);
  assert.doesNotMatch(JSON.stringify(faqs), /duração|minutos|tempo dura/i);
});
