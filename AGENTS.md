# Como trabalhar neste repositório

Este repositório é mantido por Carlos Alexandre Quevedo com o apoio de mais de um assistente de IA (atualmente Claude e ChatGPT). Os assistentes não conversam entre si: este arquivo, `README.md` e `docs/SITE.md` são a memória compartilhada. Qualquer assistente deve ler este arquivo antes de alterar o projeto.

## Regras de trabalho

1. **Um assistente por vez.** Alexandre decide quem trabalha no repositório em cada momento. Se não houver indicação clara, pergunte a ele antes de fazer commits.
2. **Comece sempre pela versão mais recente.** Antes de editar, obtenha o estado atual da branch `codex/migrate-astro` e leia os últimos commits (`git log -10`). Nunca edite a partir de uma cópia antiga de arquivo.
3. **Nunca reescreva o histórico.** Sem `git push --force`, sem `rebase` de commits já publicados, sem apagar commits de outro assistente.
4. **Identifique a autoria.** Comece a mensagem de commit com o assistente responsável, por exemplo `[claude] fix: ...` ou `[chatgpt] docs: ...`.
5. **Testes antes de publicar.** Rode `npm test` e só faça commit com todos os testes passando. Veja as regras de escrita de testes em `docs/SITE.md`, seção 17.
6. **Documente junto com a mudança.** Toda alteração de conteúdo, identidade visual, dados dos consultórios, SEO ou integrações deve atualizar `docs/SITE.md` (e, quando for visão geral, `README.md`) no mesmo conjunto de commits.
7. **Respeite as decisões registradas abaixo.** Para mudar uma delas, confirme antes com Alexandre e registre a nova decisão aqui, com a data.
8. **Ao terminar, registre o que fez.** Acrescente uma linha em "Registro de sessões" com data, assistente e resumo.

## Decisões vigentes

- **Identidade visual:** azul do kit de marca no Canva (Azul Profundo `#1F3C88`, Lora e Inter). Verde-sálvia, terracota, Cormorant Garamond e Plus Jakarta Sans foram descontinuados em 10/11/2026.
- **Logotipo:** a árvore original nunca deve ser redesenhada ou modificada.
- **Horários públicos:** Aldeota, segunda a sexta, das 18h às 21h; Maraponga, sábados, das 8h às 12h. Outros horários de Alexandre são pessoais e não devem ser publicados.
- **Público:** adultos, casais, adolescentes e crianças, sem idade mínima publicada.
- **Terapia de casal:** inclui casais LGBTQIAPN+ e relações não monogâmicas.
- **Identificação profissional:** Carlos Alexandre Quevedo, Psicólogo, CRP 11/24669. O registro antigo, CRP 05/83235, não deve aparecer.
- **Ética (Código de Ética do Psicólogo, art. 20):** sem preço como propaganda, sem promessa de resultado, sem depoimentos de pacientes, sem sensacionalismo.
- **Primeiro contato:** não pedir relato clínico antes da sessão.
- **Fontes e scripts externos:** fontes sempre locais; nenhum script externo além do rastreador do Metricool já documentado.

## Registro de sessões

- 09/11/2026, ChatGPT: atualizou `README.md`, criou `docs/SITE.md` e atualizou os testes (commit `5493f5c` deixou os testes com erro de sintaxe).
- 10/11/2026, Claude: corrigiu os testes, adotou a identidade azul (cores, fontes Lora e Inter, logotipo azul no cabeçalho e no favicon), atualizou a documentação e criou este arquivo.
