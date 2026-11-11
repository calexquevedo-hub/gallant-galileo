# Documentação técnica do site

Última revisão documental: novembro de 2026.

Este documento descreve o estado funcional e técnico da versão atual de `alexandrequevedo.com.br`.

## 1. Objetivo

O site é a presença institucional de Carlos Alexandre Quevedo, Psicólogo, CRP 11/24669.

Objetivos principais:

- apresentar o profissional e sua abordagem;
- informar temas de atendimento;
- informar locais e horários;
- esclarecer dúvidas frequentes;
- explicar o primeiro encontro;
- conduzir ao WhatsApp sem coletar dados clínicos no site;
- dar suporte a SEO local e presença institucional.

## 2. Arquitetura

Stack:

- Astro
- TypeScript
- React
- Lucide React
- CSS próprio
- Netlify

A página pública atual é única:

`src/pages/index.astro`

Componentes Astro são usados para conteúdo estático e React apenas para elementos interativos.

## 3. Ordem das seções

A ordem atual da página deve ser considerada intencional:

1. `#inicio` — Hero
2. `#sobre` — Sobre mim
3. `#atendimento` — Temas de atendimento
4. `#locais` — Onde atendo
5. `#duvidas` — FAQ
6. `#primeiro-encontro` — Primeiro encontro
7. `#rodape` — Contato e informações finais

O menu principal contém:

- Início
- Sobre
- Atendimento
- Onde atendo
- Dúvidas
- Primeiro encontro
- Contato

A logo também funciona como retorno ao início.

## 4. Conteúdo institucional vigente

### Identidade profissional

- Nome de marca: Alexandre Quevedo
- Nome completo: Carlos Alexandre Quevedo
- Profissão: Psicólogo
- Registro: CRP 11/24669
- E-mail: alexandrequevedo@outlook.com
- WhatsApp: (85) 98923-4111
- Site: https://alexandrequevedo.com.br

### Hero

Título:

> Quando a vida pesa, compreender o que acontece é um começo.

Posicionamento:

> Psicoterapia para ansiedade, sobrecarga e dificuldades nos relacionamentos.

Apoio:

> Um espaço de escuta, compreensão e construção de mudanças possíveis.

Público publicado:

> Adultos, casais, crianças e adolescentes.

O código atual não publica idade mínima infantil.

### Sobre

Texto central:

> Trabalho com Análise do Comportamento e mantenho formação continuada em terapias comportamentais e contextuais pela Díade Lab.

### Temas

- Ansiedade
- Luto
- Relacionamentos
- Sobrecarga no trabalho
- Questões de sexualidade

## 5. Locais de atendimento

### Aldeota

- Transcender Psicologia
- Av. Dom Luís, 500
- Sala 818, 8º andar
- Torre do Shopping Aldeota
- Fortaleza, CE
- CEP 60160-196
- Segunda a sexta-feira, das 18h às 21h
- Google Maps: https://maps.app.goo.gl/7Z1i29d4GykqXn3e6
- Rótulo do link: “Como chegar à Transcender · Aldeota”

### Maraponga

- MultiMais Clínica
- Rua Luxemburgo, 148
- Sala 8
- Fortaleza, CE
- CEP 60711-025
- Sábados, das 8h às 12h
- Google Maps: https://maps.app.goo.gl/apB2vpDF95uMKgvC6
- Rótulo do link: “Como chegar à MultiMais · Maraponga”

## 6. Primeiro contato

Eventos de interface:

- `open-first-contact`
- `open-privacy`

O primeiro contato funciona em duas etapas.

### Etapa 1

Mensagem de orientação:

> Para preservar sua privacidade, evite enviar detalhes clínicos antes da sessão.

### Etapa 2

Opções:

- Presencial na Aldeota
- Presencial na Maraponga
- Atendimento online
- Ainda não sei

Após a seleção, o WhatsApp é aberto com mensagem contextualizada.

Não adicionar ao site, sem decisão explícita:

- campo de nome;
- campo de sintomas;
- relato do motivo clínico;
- formulário com dados sensíveis;
- questionário diagnóstico.

## 7. Privacidade

O modal informa:

- dever de sigilo profissional;
- limites éticos e legais;
- prevenção de envio precoce de dados sensíveis;
- referência à LGPD;
- responsável pelo canal;
- e-mail de contato.

O rodapé contém aviso de não atendimento emergencial e referências ao SAMU 192 e CVV 188.

## 8. SEO

Implementado em `SiteLayout.astro`.

Inclui:

- canonical;
- meta description;
- Open Graph;
- Twitter Card;
- sitemap;
- robots;
- JSON-LD.

Entidades estruturadas:

- `Person`
- `ProfessionalService`
- dois `Place` para os consultórios

Os links de mapa usados no JSON-LD devem permanecer sincronizados com `src/data/site.ts`.

## 9. Redes sociais

Atualmente integradas ao código:

- Instagram: https://www.instagram.com/alexandrequevedo.psi/
- TikTok: https://www.tiktok.com/@alexandrequevedo.psi
- Facebook: https://www.facebook.com/alexandrequevedo

Não estão integradas ao site atual:

- Kwai
- Threads
- X

Qualquer inclusão deve atualizar simultaneamente:

- `SocialLink`;
- `socialLinks`;
- rodapé;
- dados estruturados `sameAs`.

## 10. Metricool

O rastreamento do Metricool é carregado globalmente em:

`src/layouts/SiteLayout.astro`

Script remoto:

`https://tracker.metricool.com/resources/be.js`

Finalidade:

- acompanhamento dos acessos do site;
- integração com Metricool Social Media.

Ao alterar analytics ou serviços externos, revisar também o conteúdo do modal de privacidade.

## 11. UX/UI e navegação

### Âncoras

A navegação deve permanecer nativa.

Não adicionar:

- `scroll-margin-top` às seções;
- `scroll-padding-top` ao documento;
- JavaScript customizado para compensar manualmente o cabeçalho.

Motivo: abordagens anteriores criaram faixas visuais com a cor da seção precedente ao navegar pelo menu.

### Altura das seções

As seções principais usam `min-height: 100svh`.

Isso é intencional para manter o ritmo visual inspirado no benchmark usado durante o projeto.

### Continuidade da jornada

Decisão de 10/11/2026, por Alexandre: as seções não têm links ou botões de continuação entre si. Foram removidos o link "Como funciona o primeiro encontro" (fim das Dúvidas), o antigo link "Contato e informações" e o botão "Agendar o primeiro encontro" (fim do Primeiro encontro), por destoarem da proposta do site.

A navegação entre seções fica a cargo do menu, e o contato, do botão "Iniciar conversa" do cabeçalho e do botão flutuante. Não reintroduzir chamadas de continuação sem confirmação de Alexandre.

## 12. Regra crítica de rolagem em modais

Todos os modais devem usar:

`src/utils/scrollLock.ts`

Não implementar diretamente:

`document.body.style.overflow = 'hidden'`

em novos componentes.

O utilitário atual mantém contador de locks e corrige estados antigos preservados pelo cache de navegação.

Essa regra existe porque o site já apresentou regressão em que a página permanecia sem rolagem após fechar um modal.

## 13. Responsividade

Breakpoints:

### <= 1180 px

- menu desktop oculto;
- menu mobile habilitado;
- cards de temas passam para 3 colunas.

### <= 992 px

- grids gerais de 3 colunas passam para 2;
- gaps são reduzidos.

### <= 768 px

- layouts principais passam para 1 coluna;
- foto do profissional expande;
- hero perde altura mínima rígida;
- primeiro encontro vira coluna única;
- temas passam para 2 colunas.

### <= 600 px

- container reduz padding;
- cabeçalho é compactado;
- botão flutuante do WhatsApp vira somente ícone;
- temas passam para 1 coluna;
- modais reduzem padding;
- ações do modal empilham.

### <= 480 px e <= 360 px

- ajustes adicionais de marca e cabeçalho.

## 14. Identidade visual

Decisão de 10/11/2026: o site adota a **identidade azul do kit de marca "Alexandre Quevedo" no Canva**, a mesma usada nas redes sociais. A identidade anterior (verde-sálvia, creme, terracota, Cormorant Garamond e Plus Jakarta Sans) foi descontinuada.

Motivos registrados: unificar site e redes sob uma só marca e evitar confusão com a Clínica Vitalume, concorrente na Aldeota que usa verde-sálvia e uma árvore em círculo no logotipo.

Paleta oficial (kit de marca):

- Azul Profundo `#1F3C88`: cor principal, títulos, botões, rodapé
- Azul Médio `#4A6FA5`: ícones, destaques, rótulos
- Grafite Suave `#2F3640`: texto principal
- Cinza Claro `#E9EDF3`: superfícies secundárias
- Areia Suave `#D8C3A5`: detalhes e apoio, nunca como fundo de texto branco
- Branco `#FFFFFF`

Variáveis em `src/index.css` (os nomes antigos foram mantidos para não quebrar os componentes; o valor de cada uma agora segue a paleta azul):

- `--bg-primary: #f7f5f1`
- `--bg-surface: #ffffff`
- `--bg-surface-elevated: #e9edf3`
- `--bg-dark: #1f3c88`
- `--bg-dark-surface: #2a4a9c`
- `--text-main: #2f3640`
- `--text-muted: #5b6573`
- `--accent-sage: #4a6fa5` (o nome é legado; a cor é Azul Médio)
- `--accent-forest: #1f3c88` (nome legado; Azul Profundo)
- `--accent-editorial: #4a6fa5` (nome legado)
- `--accent-sage-light: #e9edf3` (nome legado)
- `--accent-navy: #1f3c88`
- `--accent-terracotta: #b8996e` (nome legado; tom de Areia, uso residual)

Ao criar novos estilos, use as variáveis existentes ou os códigos da paleta oficial. Não reintroduza verdes nem terracota.

Fontes:

- **Lora** para títulos (`--font-serif`), arquivos `lora-variable-latin.woff2` e `lora-italic-variable-latin.woff2`
- **Inter** para corpo e interface (`--font-sans`), arquivo `inter-variable-latin.woff2`

As fontes são variáveis (pesos 400 a 700), servidas localmente em WOFF2 a partir de `public/fonts/`, sem Google Fonts. Os arquivos antigos de Cormorant Garamond e Plus Jakarta Sans continuam na pasta, mas não são mais referenciados.

## 15. Imagens e marca

Arquivos ficam em `public/images/`.

A árvore da marca não deve ser redesenhada nem modificada.

Uso atual dos logotipos:

- Cabeçalho: `logo-tree-blue-96.webp` e `logo-tree-blue-192.webp` (sem versão AVIF)
- Favicon e dados estruturados: `logo-tree-blue-512.png`
- Rodapé (fundo azul): `logo-tree-white-96` e `logo-tree-white-192`
- Os arquivos `logo-tree-forest-*` são legados e não são mais referenciados

Retrato profissional (desde 11/11/2026): `psicologo-2026.webp`, 540 × 961 px, foto de blazer marinho com fundo nos tons do site (branco a Cinza Claro `#E9EDF3`). É um arquivo único, sem variações AVIF, porque a seção exibe a foto com no máximo 30rem de altura. A foto não deve ser retocada: o rosto, a pele, o cabelo e o corpo de Alexandre precisam permanecer como são, por decisão dele.

Os arquivos `psicologo-480`, `psicologo-768` e `psicologo-1024` (AVIF e WebP) são da foto anterior e não são mais usados na página. Imagem de compartilhamento (desde 11/11/2026): `compartilhamento.jpg`, 1200 × 630 px, usada em `og:image` e `twitter:image` e como imagem do serviço nos dados estruturados. Mostra a foto profissional, o nome completo, o CRP, os temas, os locais e o endereço do site, na identidade azul. A pessoa (Person) nos dados estruturados usa `psicologo-2026.webp`. O arquivo `psicologo.jpg` é da foto anterior e não é mais referenciado pelo site; permanece no repositório apenas como histórico.

O site atual ainda não contém a galeria de fotos dos consultórios nem a página específica da Aldeota prototipada fora do repositório.

## 16. Deploy

Netlify:

- comando de build: `npm run build`
- pasta publicada: `dist`

O `astro.config.ts` define:

`site: 'https://alexandrequevedo.com.br'`

## 17. Verificações obrigatórias

Antes de publicar:

1. `npm run check`
2. `npm test` (executa `astro build` e depois `node --test`)
3. `npm run build`

Nunca publicar com teste falhando. Um erro de sintaxe no arquivo de testes faz o conjunto inteiro falhar antes de rodar, e a proteção contra regressões deixa de existir sem aviso no deploy (o Netlify só executa o build).

Regras para escrever testes em `test/site.test.mjs`:

- Para conferir URLs ou trechos com barras, use `assert.ok(output.includes('...'))`. Não coloque URLs dentro de expressões regulares literais (`/https://.../`): as barras encerram a expressão e quebram o arquivo.
- Para conferir atributos de uma tag, não dependa da ordem em que aparecem no HTML gerado. Use lookaheads, por exemplo `/<a (?=[^>]*class="nav-link")(?=[^>]*href="#inicio")[^>]*>/`.
- Ao trocar fontes, logotipos ou outros arquivos públicos, atualize também os testes que verificam a existência e o carregamento desses arquivos.

Histórico: em 09/11/2026, o commit `5493f5c` introduziu URLs em expressões regulares sem escape e uma verificação de menu dependente da ordem dos atributos. Os testes foram corrigidos em 10/11/2026.

Testar manualmente:

- menu desktop;
- menu mobile;
- todas as âncoras;
- modal de primeiro contato;
- modal de privacidade;
- restauração da rolagem;
- WhatsApp;
- Maps Aldeota;
- Maps Maraponga;
- links sociais;
- FAQ;
- primeiro encontro;
- rodapé;
- Metricool;
- desktop;
- tablet;
- celular.

## 18. Fonte de verdade

Para manutenção de conteúdo:

### `src/data/site.ts`

Fonte principal para:

- profissional;
- CRP;
- e-mail;
- telefone;
- consultórios;
- horários;
- Maps;
- redes sociais;
- público;
- temas;
- FAQ;
- mensagens do WhatsApp.

### `SiteLayout.astro`

Fonte para:

- SEO;
- JSON-LD;
- dados estruturados;
- Metricool.

### `src/index.css`

Fonte para:

- identidade visual;
- responsividade;
- regras de navegação;
- comportamento visual.

Evitar duplicar informações manualmente em múltiplos arquivos quando elas puderem vir de `site.ts`.
