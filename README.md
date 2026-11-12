# Bonsai Shop (E‑commerce de Bonsai)

> Projeto demonstrativo 100 % gerado por IA para mostrar boas práticas de engenharia.

## Visão geral
- **Monorepo** com `apps/web` (React + Vite) e `apps/api` (NestJS + Prisma).
- **TypeScript** em modo `strict`.
- **Docker Compose** para subir banco MySQL, API e front em um único comando.
- **CI** no GitHub Actions: lint, testes (Jest, Vitest, Playwright) e build.
- **Graphify** e **Ponytail** como assistentes de IA para navegação de código e revisão.

## Começando
```bash
# Instalar dependências
pnpm install

# Subir ambiente local (Docker)
docker compose up -d

# Executar a API
pnpm --filter api dev

# Executar o front
pnpm --filter web dev
```

Veja [docs/SETUP.md](docs/SETUP.md) para detalhes de instalação, testes e uso das ferramentas de IA.

## Estrutura do repositório
```
/ (raiz)
├─ .github/          # CI & templates
├─ apps/              # Aplicações
│   ├─ api/           # NestJS + Prisma
│   └─ web/           # React + Vite
├─ docs/              # Documentação
│   ├─ adr/           # Decisões de arquitetura (ADRs)
│   ├─ ai-log/        # Registro de prompts e lições
│   └─ SETUP.md       # Guia de configuração e ferramentas
├─ packages/          # Código compartilhado
│   └─ shared/        # Tipos e contratos
├─ scripts/           # Scripts auxiliares
├─ graphify-out/      # Artefatos do Graphify (gerados)
├─ LICENSE            # MIT
└─ README.md          # Este arquivo
```

---

*Este repositório foi concebido para demonstrar workflow de desenvolvimento assistido por IA, seguindo as regras definidas em `docs/prompt.md` e `docs/AGENTS.md`.*