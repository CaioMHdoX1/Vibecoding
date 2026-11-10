# CLAUDE.md: Diretrizes para Claude Code (Misho Bonsai)

> Consulte o arquivo raiz [AGENTS.md](AGENTS.md) para as regras completas e contexto do projeto.

---

## Regras Essenciais

1. **Código 100% IA, Revisão Humana:** Todo código deve ser gerado por IA e submetido via PR com o template `.github/pull_request_template.md`.
2. **Nenhuma transação real:** Pagamentos, estoque e frete são estritamente simulados.
3. **Consulte o Grafo Primeiro (graphify):**
   - Quando `graphify-out/graph.json` existir, use `graphify query "<pergunta>"` antes de fazer grep ou ler arquivos em massa.
   - Use `graphify path "<A>" "<B>"` e `graphify explain "<conceito>"`.
   - Após modificar código, execute `graphify update .` para atualizar o grafo.
4. **Anti-Bloat & YAGNI (ponytail):**
   - Siga **The Ladder**: YAGNI → Reuso → Standard Library → Dependências Existentes → Código Mínimo.
   - Não sacrifique validação de entrada, segurança ou tratamento de erros.
5. **Especificação Prévia (interview-me):**
   - Em caso de ambiguidade ou nova funcionalidade, use `/interview-me` para documentar a especificação em `docs/specs/`.

---

## Comandos Rápidos

```bash
pnpm install          # Instalar dependências
docker compose up -d  # Subir banco MySQL
pnpm dev              # Executar API e Web em paralelo
pnpm run build        # Build de todos os workspaces
pnpm run lint         # Verificação de tipos TypeScript
pnpm run test         # Rodar testes
```
