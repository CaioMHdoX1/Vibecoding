# AGENTS.md

## Regras e Contexto para Ferramentas de IA (Misho Bonsai)

> Este documento é a fonte primária de verdade para todos os agentes de IA que atuam neste projeto (Antigravity, Claude Code, Gemini CLI, ChatGPT, Codex, Cursor). Sempre consulte antes de gerar ou refatorar código.

### 1. Contexto do Projeto
- **Projeto:** E‑commerce de bonsai (não‑comercial), 100 % desenvolvido por IA.
- **Público‑alvo:** Recrutadores e desenvolvedores iniciantes/medianos.
- **Prioridade Máxima:** Clareza, simplicidade e consistência.

### 2. Regras Inegociáveis
1. Nenhuma linha de código escrita manualmente – todo código gerado por IA.
2. Todo código deve passar por revisão humana via Pull Request antes de entrar na `main`.
3. Transações são simuladas – nenhum pagamento real.
4. Nunca versionar credenciais reais; usar apenas `.env.example`.
5. Cada nova dependência requer justificativa no PR.
6. Não inventar requisitos – perguntar ou registrar suposições.
7. Use **graphify** antes de ler arquivos massivamente.

### 3. Padrões de Código
- **Idiomas:** Código e comentários técnicos em **inglês**; UI em **pt‑BR**.
- **TypeScript:** `strict` absoluto, evite `any`.
- **Commits:** Conventional Commits (tipo em inglês, mensagem em português).
- **Arquitetura:** Monorepo com `apps/web`, `apps/api`, `packages/shared`.

### 4. Skills Obrigatórias
- **graphify:** Consulte o grafo antes de acessar arquivos soltos; rode `graphify update .` após alterações.
- **ponytail:** YAGNI, reutilização, built‑ins, dependências existentes, simplicidade.
- **interview‑me:** Use para definir critérios de aceite antes de iniciar módulos complexos.
