# Pull Request Template

## What does this PR change?

- Brief description of the changes (in Portuguese).

## Why?

- Explain the motivation and the problem being solved.

## How to test?

1. Run `pnpm install`.
2. Start the services: `docker compose up -d`.
3. Run `pnpm dev` and verify the affected functionality.
4. Execute the relevant tests (`pnpm test` or `pnpm run test:api` / `pnpm run test:web`).

## Checklist
- [ ] Código segue as regras do `AGENTS.md`.
- [ ] Todos os testes passam (`pnpm test`).
- [ ] Lint e type‑check sem erros (`pnpm run lint`).
- [ ] Grafo atualizado (`graphify update .`).
- [ ] AI‑log registrado (`docs/ai-log/`).
- [ ] Documentação (README/ADR) atualizada, se necessário.

---

**Ferramentas de IA usadas**: (ex.: Antigravity, Claude Code, Gemini)
**Prompt‑chave**: (texto do prompt que gerou o código)
**Erros ou ajustes necessários**: (breve relato)
