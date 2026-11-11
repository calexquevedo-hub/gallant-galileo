import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const projectRoot = resolve(import.meta.dirname, '..');
const output = readFileSync(resolve(projectRoot, 'dist/index.html'), 'utf8');
const firstContactSource = readFileSync(resolve(projectRoot, 'src/components/FirstContactModal.tsx'), 'utf8');

test('Astro generates the public page with the expected structure', () => {
  assert.match(output, /<html lang="pt-BR">/);
  assert.match(output, /id="sobre"/);
  assert.match(output, /id="primeiro-encontro"/);
  assert.ok(output.includes('/images/psicologo-2026.webp'));
  assert.ok(!output.includes('Agendar o primeiro encontro'));
  assert.ok(!output.includes('Como funciona o primeiro encontro'));
  assert.ok(!output.includes('Contato e informações'));
  assert.match(output, /id="atendimento"/);
  assert.match(output, /id="locais"/);
  assert.match(output, /id="duvidas"/);
  assert.match(output, /id="rodape"/);
  assert.match(output, /<a (?=[^>]*class="nav-link")(?=[^>]*href="#inicio")[^>]*>/);
  assert.match(output, /<a (?=[^>]*class="nav-link")(?=[^>]*href="#primeiro-encontro")[^>]*>/);
  assert.match(output, /<a (?=[^>]*class="nav-link")(?=[^>]*href="#rodape")[^>]*>/);
});

test('Astro page keeps the approved professional and office information', () => {
  assert.match(output, /Carlos Alexandre Quevedo/);
  assert.match(output, /CRP 11\/24669/);
  assert.match(output, /Díade Lab/);
  assert.match(output, /Transcender Psicologia/);
  assert.match(output, /MultiMais Clínica/);
  assert.match(output, /Av\. Dom Luís/);
  assert.match(output, /Rua Luxemburgo/);
  assert.doesNotMatch(output, /UNINASSAU/);
  assert.doesNotMatch(output, /Díade\|Lab/);
});

test('Astro page uses the approved positioning and opening copy', () => {
  assert.match(output, /<title>Alexandre Quevedo \| Psicólogo em Fortaleza<\/title>/);
  assert.match(output, /Quando a vida pesa, compreender o que acontece é um/);
  assert.match(output, /Psicoterapia para ansiedade, sobrecarga e dificuldades nos relacionamentos\./);
  assert.match(output, /Um espaço de escuta, compreensão e construção de mudanças possíveis\./);
  assert.match(output, /Atendimento presencial em Fortaleza e online, com hora marcada/);
  assert.match(output, /Trabalho com Análise do Comportamento e mantenho formação continuada/);
});

test('Astro page preserves the two first-contact entry points and privacy access', () => {
  assert.equal((output.match(/>Iniciar conversa</g) ?? []).length, 2);
  assert.match(output, /Iniciar conversa pelo WhatsApp/);
  assert.match(firstContactSource, /Primeiro contato/);
  assert.match(firstContactSource, /Onde você prefere ser atendido\?/);
  assert.match(firstContactSource, /Abrir WhatsApp/);
  assert.doesNotMatch(firstContactSource, /triagem|sintomas|Seu primeiro nome/i);
  assert.match(output, /Conecte-se/);
  assert.match(output, /Sigilo e privacidade/);
  assert.match(output, /ProfessionalService/);
  assert.doesNotMatch(output, /Powered by Netlify|Netlify badge/i);
});

test('Astro page includes the Metricool tracker exactly once', () => {
  assert.equal((output.match(/tracker\.metricool\.com\/resources\/be\.js/g) ?? []).length, 1);
  assert.equal((output.match(/fcf7bf1199e74fcf2956e0c3a56b2d1b/g) ?? []).length, 1);
});

test('Astro page uses distinct office map links and local font loading', () => {
  assert.match(output, /Como chegar à Transcender · Aldeota/);
  assert.match(output, /Como chegar à MultiMais · Maraponga/);
  assert.ok(output.includes('https://maps.app.goo.gl/7Z1i29d4GykqXn3e6'));
  assert.ok(output.includes('https://maps.app.goo.gl/apB2vpDF95uMKgvC6'));
  assert.doesNotMatch(output, /fonts\.googleapis\.com/);
  assert.ok(output.includes('inter-variable-latin.woff2'));
  assert.ok(output.includes('lora-variable-latin.woff2'));
});

test('Astro project contains TypeScript configuration and required public assets', () => {
  assert.equal(existsSync(resolve(projectRoot, 'astro.config.ts')), true);
  assert.equal(existsSync(resolve(projectRoot, 'tsconfig.json')), true);
  assert.equal(existsSync(resolve(projectRoot, 'public/images/psicologo.jpg')), true);
  assert.equal(existsSync(resolve(projectRoot, 'public/images/psicologo-2026.webp')), true);
  assert.equal(existsSync(resolve(projectRoot, 'public/images/psicologo-480.avif')), true);
  assert.equal(existsSync(resolve(projectRoot, 'public/images/psicologo-768.webp')), true);
  assert.equal(existsSync(resolve(projectRoot, 'public/images/logo-tree-blue-192.webp')), true);
  assert.equal(existsSync(resolve(projectRoot, 'public/fonts/inter-variable-latin.woff2')), true);
  assert.equal(existsSync(resolve(projectRoot, 'public/robots.txt')), true);
  assert.equal(existsSync(resolve(projectRoot, 'public/sitemap.xml')), true);
});
