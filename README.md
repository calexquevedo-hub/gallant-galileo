# Site de Alexandre Quevedo

Site institucional de Carlos Alexandre Quevedo, Psicólogo, construído com Astro, TypeScript e React para as partes interativas.

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

O conteúdo público fica nos componentes Astro e os comportamentos interativos são ilhas React em TypeScript. A configuração de hospedagem continua em `netlify.toml`, com saída de produção em `dist/`.

## Onde atualizar as informações

- `src/data/site.ts`: dados profissionais, consultórios, horários, modalidades, temas e dúvidas frequentes.
- `src/components/`: seções visuais e componentes interativos.
- `src/layouts/SiteLayout.astro`: metadados, dados estruturados e estrutura HTML da página.
- `src/index.css`: estilos e comportamento responsivo.
- `public/images/`: logotipos e retrato profissional.

O site mantém dois pontos de entrada para a triagem: o botão do menu superior e o botão fixo no canto inferior direito. A jornada de triagem continua antes da abertura do WhatsApp. Não há formulário de contato nem fotos dos consultórios.

Os atendimentos presenciais ocorrem na Aldeota, de segunda a sexta-feira, das 18h às 21h, e na Maraponga, aos sábados, das 8h às 12h, sempre mediante agendamento. O atendimento online permanece sujeito a consulta.

## Antes de publicar

- Revisar o menu no celular, o FAQ, os links de WhatsApp, e-mail e localização.
- Confirmar a apresentação da marca e da foto pessoal nos tamanhos de tela usados pelo público.
- Conferir os horários e endereços nos dados da página e nos dados estruturados.
- Se for necessário alterar a política de privacidade, conferir antes os serviços efetivamente ativos na hospedagem, analytics, cookies e canais de contato.
