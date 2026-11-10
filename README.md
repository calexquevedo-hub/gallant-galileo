# Site de Alexandre Quevedo

Site institucional de **Carlos Alexandre Quevedo, Psicólogo, CRP 11/24669**, publicado em [alexandrequevedo.com.br](https://alexandrequevedo.com.br).

A versão atual é uma página institucional única, construída com **Astro**, **TypeScript** e ilhas **React** para os elementos interativos.

## Estado atual

A página principal apresenta, nesta ordem:

1. Início
2. Sobre
3. Atendimento
4. Onde atendo
5. Dúvidas
6. Primeiro encontro
7. Contato / rodapé

O posicionamento principal exibido no site é:

> Quando a vida pesa, compreender o que acontece é um começo.

> Psicoterapia para ansiedade, sobrecarga e dificuldades nos relacionamentos.

O público é descrito no código atual como **adultos, casais, crianças e adolescentes**, sem idade mínima publicada.

Os temas atuais são:

- Ansiedade
- Luto
- Relacionamentos
- Sobrecarga no trabalho
- Questões de sexualidade

## Atendimento

### Aldeota

- **Clínica:** Transcender Psicologia
- **Endereço:** Av. Dom Luís, 500, sala 818, 8º andar
- **Referência:** Torre do Shopping Aldeota
- **Cidade:** Fortaleza, CE
- **CEP:** 60160-196
- **Horário:** segunda a sexta-feira, das 18h às 21h
- **Google Maps:** https://maps.app.goo.gl/7Z1i29d4GykqXn3e6

### Maraponga

- **Clínica:** MultiMais Clínica
- **Endereço:** Rua Luxemburgo, 148, sala 8
- **Cidade:** Fortaleza, CE
- **CEP:** 60711-025
- **Horário:** sábados, das 8h às 12h
- **Google Maps:** https://maps.app.goo.gl/apB2vpDF95uMKgvC6

Também há atendimento online, mediante agendamento.

## Primeiro contato

O site possui dois pontos principais de entrada:

- botão **Iniciar conversa** no cabeçalho;
- botão flutuante **Iniciar conversa**.

O fluxo abre um modal em duas etapas:

1. orientação inicial de privacidade;
2. escolha entre Aldeota, Maraponga, atendimento online ou “Ainda não sei”.

Depois disso, o WhatsApp é aberto com uma mensagem pré-preenchida.

O site **não coleta nome, sintomas, motivo clínico ou relato detalhado** antes da abertura do WhatsApp.

## Privacidade

Existe um modal de **Sigilo e privacidade** com orientações sobre:

- sigilo profissional;
- prevenção do envio precoce de dados clínicos sensíveis;
- LGPD;
- contato do responsável pelo canal.

O rodapé informa que o site não oferece atendimento emergencial e orienta, em situações de crise, a procurar **SAMU (192)**, **CVV (188)** ou o pronto atendimento mais próximo.

## SEO e dados estruturados

O layout global inclui:

- título e descrição;
- canonical;
- sitemap;
- Open Graph;
- Twitter Card;
- dados estruturados Schema.org;
- entidade `Person`;
- entidade `ProfessionalService`;
- locais de atendimento;
- links oficiais do Google Maps.

Título padrão:

> Alexandre Quevedo | Psicólogo em Fortaleza

Descrição padrão:

> Carlos Alexandre Quevedo, psicólogo em Fortaleza, CRP 11/24669. Psicoterapia presencial e online para adultos, casais, adolescentes e crianças.

## Redes sociais vinculadas no site

Atualmente o rodapé e os dados estruturados vinculam:

- Instagram: https://www.instagram.com/alexandrequevedo.psi/
- TikTok: https://www.tiktok.com/@alexandrequevedo.psi
- Facebook: https://www.facebook.com/alexandrequevedo

Kwai, Threads e X não estão vinculados no código atual.

## Analytics

O site carrega o rastreamento do **Metricool** no layout global por meio de:

`https://tracker.metricool.com/resources/be.js`

A integração está em `src/layouts/SiteLayout.astro`.

## Identidade visual atual

A implementação atual usa principalmente:

- fundo creme: `#f8f5ef`
- superfície clara: `#fffdf9`
- verde sálvia: `#527461`
- verde floresta: `#0d4036`
- azul-marinho: `#142336`
- terracota: `#b86f4e`

Tipografia:

- **Cormorant Garamond** para títulos;
- **Plus Jakarta Sans** para corpo e interface.

As fontes são servidas localmente em WOFF2.

## Navegação e rolagem

A navegação usa âncoras nativas.

**Não adicionar `scroll-margin` ou `scroll-padding` artificial às seções.** Esse tipo de offset já causou faixas visíveis da seção anterior durante a navegação.

Os modais devem usar obrigatoriamente o utilitário:

`src/utils/scrollLock.ts`

Não aplicar `document.body.style.overflow = 'hidden'` diretamente em componentes isolados, pois isso já provocou travamento de rolagem.

## Responsividade

Breakpoints principais:

- até 1180 px: menu desktop é substituído pelo menu mobile;
- até 992 px: grids de três colunas passam para duas;
- até 768 px: layouts principais passam para uma coluna;
- até 600 px: cartões e elementos de interface ficam mais compactos;
- até 480 px e 360 px: ajustes adicionais no cabeçalho.

## Estrutura do projeto

- `src/data/site.ts`: dados profissionais, consultórios, links, temas, FAQs e mensagens do WhatsApp.
- `src/pages/index.astro`: composição da página.
- `src/components/`: seções visuais e componentes interativos.
- `src/layouts/SiteLayout.astro`: HTML global, SEO, dados estruturados e Metricool.
- `src/utils/scrollLock.ts`: controle compartilhado de bloqueio de rolagem.
- `src/index.css`: identidade visual, responsividade e comportamento de layout.
- `public/images/`: logotipos e retrato profissional.
- `public/fonts/`: fontes locais.
- `test/site.test.mjs`: verificações básicas da saída de produção.

A documentação técnica detalhada está em [docs/SITE.md](docs/SITE.md).

## Desenvolvimento e verificações

Use uma versão LTS mantida do Node.js.

```sh
npm ci
npm run dev
npm run check
npm test
npm run build
npm run preview
```

O `npm test` executa primeiro o build Astro e depois os testes em Node.

## Deploy

A hospedagem está configurada para Netlify:

```toml
[build]
  command = "npm run build"
  publish = "dist"
```

O domínio configurado no Astro é:

`https://alexandrequevedo.com.br`

## Antes de publicar

- executar `npm run check`;
- executar `npm test`;
- executar `npm run build`;
- validar menu desktop e mobile;
- validar rolagem entre todas as âncoras;
- abrir e fechar os dois modais e confirmar que a rolagem é restaurada;
- testar os dois links do Google Maps;
- testar abertura do WhatsApp nas quatro opções de atendimento;
- conferir endereços e horários em `src/data/site.ts`;
- revisar título, descrição e dados estruturados;
- confirmar que o Metricool continua carregando;
- verificar a página em desktop, tablet e celular.

## Regra de manutenção

Antes de alterar textos institucionais, horários, endereços, público, temas, SEO ou integrações, conferir primeiro `src/data/site.ts`, `SiteLayout.astro` e esta documentação para evitar divergências entre conteúdo, interface e dados estruturados.
