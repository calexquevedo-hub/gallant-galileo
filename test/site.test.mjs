import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const projectRoot = resolve(import.meta.dirname, '..');
const output = readFileSync(resolve(projectRoot, 'dist/index.html'), 'utf8');

test('Astro generates the public page with the expected structure', () => {
  assert.match(output, /<html lang="pt-BR">/);
  assert.match(output, /id="sobre"/);
  assert.match(output, /id="primeiro-encontro"/);
  assert.match(output, /id="atendimento"/);
  assert.match(output, /id="locais"/);
  assert.match(output, /id="duvidas"/);
  assert.match(output, /href="#primeiro-encontro"/);
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

test('Astro page preserves the two triage entry points and privacy access', () => {
  assert.equal((output.match(/>Iniciar triagem rápida</g) ?? []).length, 2);
  assert.match(output, /Iniciar triagem rápida pelo WhatsApp/);
  assert.match(output, /Conecte-se/);
  assert.match(output, /Sigilo e privacidade/);
  assert.match(output, /ProfessionalService/);
});

test('Astro project contains TypeScript configuration and required public assets', () => {
  assert.equal(existsSync(resolve(projectRoot, 'astro.config.ts')), true);
  assert.equal(existsSync(resolve(projectRoot, 'tsconfig.json')), true);
  assert.equal(existsSync(resolve(projectRoot, 'public/images/psicologo.jpg')), true);
  assert.equal(existsSync(resolve(projectRoot, 'public/robots.txt')), true);
  assert.equal(existsSync(resolve(projectRoot, 'public/sitemap.xml')), true);
});
