# Site de Alexandre Quevedo

Site institucional em React e Vite. A configuração existente de hospedagem está em `netlify.toml`; a saída de produção é `dist/`.

## Desenvolvimento e verificações

Use uma versão LTS mantida do Node.js.

```sh
npm ci
npm run dev
npm test
npm run build
npm run preview
```

Os testes verificam a renderização HTML, contatos, âncoras, relações de acessibilidade, metadados e contraste das cores dos botões. Não substituem revisão visual e testes de interação em navegador, especialmente no celular.

## Onde atualizar as informações

- `src/data/site.js`: contatos, consultórios, horários presenciais, idade mínima, modalidades, temas e perguntas frequentes.
- `src/components/`: apresentação de cada seção.
- `src/index.css`: estilos e comportamento responsivo.
- `index.html`: título, descrição, compartilhamento, dados estruturados e contato sem JavaScript. Ao alterar dados cadastrais, mantenha estes metadados sincronizados.

O contato é direto por WhatsApp ou e-mail. Não há formulário nem serviço de envio de mensagens no site. Os valores e horários são informados antes do agendamento. Não há divulgação da duração das sessões. O atendimento presencial ocorre na Aldeota de segunda a sexta-feira, das 18h às 21h, e na Maraponga aos sábados, das 8h às 12h, sempre mediante agendamento. Os dois locais e horários constam também nos dados estruturados. O horário online continua sujeito a consulta. Não foram incluídos preços ou autorização e-Psi nos metadados.

## Antes de publicar

- Revisar o menu no celular, o FAQ, os links de WhatsApp, e-mail e localização.
- Confirmar a apresentação da marca e da foto pessoal nos tamanhos de tela usados pelo público.
- Nenhuma foto de consultório é exibida ou mantida nos arquivos públicos do site.
- Se for necessário publicar uma política de privacidade, levantar antes os serviços efetivamente ativos na hospedagem, analytics, cookies e canais de contato. O texto de sigilo clínico não substitui uma política de privacidade do site.
- Conferir qual branch a hospedagem utiliza antes de integrar alterações. Abrir uma revisão no GitHub não equivale a publicar o site.
