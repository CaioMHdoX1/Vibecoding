# ADR-001: Definição da Stack Tecnológica, Monorepo e Decisões Delegadas

> **Status:** Aprovado  
> **Data:** 2026-11-10  
> **Decisores:** Time Misho Bonsai & Antigravity  
> **PR Relacionado:** #1 (Etapa 0 - Fundação)

---

## 1. Contexto e Problema
O projeto **Misho Bonsai** é um e-commerce sem fins comerciais desenvolvido 100% por IA e revisado por humanos, voltado para demonstrar excelência técnica a recrutadores.
A equipe é composta por 4 pessoas (nível iniciante/mediano), divididas em duplas de front-end e back-end.
O repositório precisa ser simples de rodar localmente com um comando, ter tipagem estrita de ponta a ponta e padrões de engenharia modernos.

---

## 2. Decisões Fundamentais (Fixadas no PROMPT.md)

1. **Monorepo:** `pnpm workspaces` dividindo em `apps/api`, `apps/web` e `packages/shared`.
2. **Linguagem:** TypeScript em modo `strict` em todo o código.
3. **Back-end:** Node.js + NestJS com documentação Swagger/OpenAPI.
4. **Banco de Dados & ORM:** MySQL 8.4 via Docker Compose com Prisma ORM.
5. **Front-end:** React + Vite + Tailwind CSS (SPA responsiva mobile-first).
6. **Autenticação:** JWT de curta duração com refresh token em cookie `httpOnly`, papéis `CUSTOMER`, `MANAGER`, `ADMIN`.

---

## 3. Decisões Delegadas à IA

### 3.1 Validação e Contratos: Zod Compartilhado (`packages/shared`)
- **Opções:** Zod full-stack vs. `class-validator` no NestJS.
- **Decisão:** Zod no `packages/shared`.
- **Justificativa:** Permite inferir tipos TypeScript automaticamente (`z.infer<typeof schema>`), eliminando duplicidade de validação entre formulários do React e endpoints do NestJS. Máxima compatibilidade com IAs e zero dessincronização de contratos.

### 3.2 Gerenciamento de Dados e Estado no Front-end: TanStack Query v5
- **Opções:** Redux Toolkit vs. Zustand vs. TanStack Query.
- **Decisão:** TanStack Query para dados assíncronos de servidor + React Context/hooks nativos para estado de UI local (carrinho/tema).
- **Justificativa:** Em e-commerce, 90% do estado é server cache (produtos, pedidos, carrinho). TanStack Query abstrai carregamento, cache, revalidação e erro sem boilerplate desnecessário (princípio *ponytail*).

### 3.3 Roteamento no Front-end: React Router v7
- **Opções:** React Router v7 vs. TanStack Router.
- **Decisão:** React Router v7 (modo SPA clássico).
- **Justificativa:** É a biblioteca mais amplamente documentada, estável e melhor compreendida por qualquer ferramenta de IA e avaliador técnico.

### 3.4 Componentes e UI Primitives: Tailwind CSS + Lucide Icons + Headless Primitives
- **Opções:** Shadcn UI completo vs. Material UI vs. Tailwind CSS com componentes diretos.
- **Decisão:** Tailwind CSS modular seguindo os design tokens de Misho Bonsai, com ícones `lucide-react`.
- **Justificativa:** Evita o aspecto visual genérico ("AI slop") e cumpre a regra de minimalismo (*ponytail*), mantendo total controle sem instalar dependências pesadas e opacas.

### 3.5 Estratégia de Imagens de Bonsai
- **Decisão:** Imagens estáticas em `/public/images/placeholders/bonsai-{slug}.webp` com URLs relativas servidas pela própria aplicação e mapeadas no banco (Prisma seed). Sem dependência de buckets externos (S3/Cloudinary), mantendo o projeto 100% executável offline via Docker.

---

## 4. Consequências
- **Positivas:** Um único comando (`docker compose up -d && pnpm dev`) sobe banco, back-end e front-end. Compartilhamento absoluto de tipos sem build intermediário complexo.
- **Riscos & Mitigações:**
  - *Risco:* Dificuldade inicial com decorators NestJS vs Schemas Zod.
  - *Mitigação:* Usar Pipes simples de validação do NestJS que executam `schema.parse(data)`.
