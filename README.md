# Bonsai Store

Este repositório contém o código‑fonte de um **e‑commerce de bonsai** desenvolvido 100 % por IA, para demonstração de boas práticas de engenharia.

## 📦 Tecnologias
- **TypeScript** (strict)
- **React + Vite** (frontend)
- **NestJS** (backend)
- **Prisma + MySQL** (banco de dados)
- **Docker Compose** (ambiente local)
- **pnpm workspaces** (monorepo)

## 🛠️ Como rodar o projeto
```bash
# Instalar dependências
pnpm install

# Subir banco e serviços
docker compose up -d

# Iniciar API e Web simultaneamente
pnpm dev
```

A aplicação ficará disponível em `http://localhost:3000` (frontend) e `http://localhost:4000` (API).

## 📚 Documentação
- Arquitetura e decisões: `docs/adr/`
- Especificações e critérios de aceite: `docs/specs/`
- Registro de uso de IA: `docs/ai-log/`

## 🎨 Identidade visual
Nome da loja: **Bonsai Verde** – logo simples de folha verde, paleta de verdes e terra, tipografia serifada elegante (conforme proposta).

---

*Este projeto não será publicado; a licença será adicionada apenas se necessário no futuro.*