# Graph Report - vibe  (2026-11-26)

## Corpus Check
- 83 files · ~17,660 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 5 file(s) not represented in the graph (top: (none) 2, .example 1, .prisma 1)

## Summary
- 635 nodes · 771 edges · 57 communities (39 shown, 18 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 8 edges (avg confidence: 0.89)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `bc1e3fc2`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Gestão e Governança do Projeto
- web/package.json
- /ponytail
- ponytail (Minimal Code Guidelines)
- workflows/ponytail.md
- Prompt inicial: E-commerce de Bonsai desenvolvido 100% com IA
- The 6-Phase Spec Interview Workflow
- devDependencies
- product.schema.ts
- steps
- interview-me.md
- mysql
- scripts
- compilerOptions
- compilerOptions
- shared/package.json
- formatter
- compilerOptions
- ADR_TEMPLATE.md
- scripts
- Regras e Contexto para Ferramentas de IA (Misho Bonsai)
- 3. Decisões Delegadas à IA
- Pull Request Template
- ADR-[Número]: [Título da Decisão Arquitetural]
- AI Log: Etapa 0 - Fundação, Identidade Misho Bonsai e Estrutura do Monorepo
- ai-log/template.md
- nest-cli.json
- pnpm-workspace.yaml
- ADR-001.md
- shared/design-tokens.ts
- chrome-devtools-mcp
- chrome-devtools-mcp
- agent-desktop Skill
- agent-desktop Skill
- dependencies
- api/package.json
- roles.guard.ts
- main.ts
- bcrypt
- @misho/shared@workspace:*
- @nestjs/testing@^10.4.15
- ts-jest@^29.2.5
- @types/cookie-parser@^1.4.8
- @nestjs/common
- CatalogPage.tsx
- Client Configurations
- Client Configurations
- Client Configurations
- Client Configurations
- magic
- Frontend Design Skill
- Frontend Design Skill
- ProductDetail.ts

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `@nestjs/common` - 15 edges
3. `compilerOptions` - 15 edges
4. `Prompt inicial: E-commerce de Bonsai desenvolvido 100% com IA` - 15 edges
5. `scripts` - 13 edges
6. `compilerOptions` - 13 edges
7. `react` - 11 edges
8. `scripts` - 10 edges
9. `AuthService` - 9 edges
10. `PrismaService` - 8 edges

## Surprising Connections (you probably didn't know these)
- `Gatilho /graphify no .claude` --conceptually_related_to--> `Diretrizes graphify no CLAUDE.md`  [INFERRED]
  .claude/CLAUDE.md → CLAUDE.md
- `CatalogProduct` --inherits--> `Product`  [EXTRACTED]
  apps/web/src/data/products.ts → packages/shared/src/schemas/product.schema.ts
- `DiscountCarouselProps` --references--> `CatalogProduct`  [EXTRACTED]
  apps/web/src/components/DiscountCarousel.tsx → apps/web/src/data/products.ts
- `ProductCardProps` --references--> `CatalogProduct`  [EXTRACTED]
  apps/web/src/components/ProductCard.tsx → apps/web/src/data/products.ts
- `Diretrizes graphify no CLAUDE.md` --implements--> `Arquivos de Contexto (AGENTS/CLAUDE)`  [INFERRED]
  CLAUDE.md → README.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Fluxo de Trabalho Assistido por IA** — readme_fluxo_trabalho, readme_graphify_skill, readme_ponytail_skill, readme_regras_projeto [INFERRED 0.85]
- **Governança e Qualidade de Código** — readme_regras_projeto, readme_convencoes_git, readme_criterios_pronto, readme_riscos_mitigacoes [INFERRED 0.85]

## Communities (57 total, 18 thin omitted)

### Community 0 - "Gestão e Governança do Projeto"
Cohesion: 0.13
Nodes (14): Gatilho /graphify no .claude, Diretrizes graphify no CLAUDE.md, Arquivos de Contexto (AGENTS/CLAUDE), Cronograma em 7 Etapas, Decisões Pendentes (Stack e Papéis), E-commerce de Bonsai 100% IA, Escopo Funcional, Ferramentas de IA (+6 more)

### Community 1 - "web/package.json"
Cohesion: 0.06
Nodes (43): dependencies, lucide-react@^0.468.0, @misho/shared@workspace:*, react@^18.3.1, react-dom@^18.3.1, react-hook-form@^7.54.1, react-router-dom@^6.30.6, @tanstack/react-query@^5.62.8 (+35 more)

### Community 2 - "/ponytail"
Cohesion: 0.22
Nodes (8): Intensity Modes, Output Transparency, /ponytail, `/ponytail audit`, `/ponytail review`, Review & Audit Commands, The Core Philosophy: "The Ladder", What NOT to Cut (Non-Negotiable Boundaries)

### Community 5 - "Prompt inicial: E-commerce de Bonsai desenvolvido 100% com IA"
Cohesion: 0.07
Nodes (26): 10. Fluxo de cada tarefa, 11. Cronograma e prioridades, 12. Critérios de pronto, 13. Fora do escopo, 14. Sua primeira tarefa (Etapa 0), 1. Papel e contexto, 2. Regras inegociáveis, 3. Stack decidida (+18 more)

### Community 6 - "The 6-Phase Spec Interview Workflow"
Cohesion: 0.08
Nodes (21): Commands & Usage, /interview-me, Phase 1: Intake & Context Discovery, Phase 2: The Socratic Interview Loop, Phase 3: Trade-offs & Decisions Log, Phase 4: Production-Grade Specification Generation, Phase 5: Architecture Diagrams (Mermaid), Phase 6: Drift Verification (`--verify`) (+13 more)

### Community 7 - "devDependencies"
Cohesion: 0.12
Nodes (17): devDependencies, jest@^29.7.0, @nestjs/cli@^10.4.9, prisma@^6.1.0, @types/bcrypt@^5.0.2, @types/express@^5.0.0, @types/jest@^29.5.14, @types/node@^22.10.2 (+9 more)

### Community 8 - "product.schema.ts"
Cohesion: 0.08
Nodes (22): ORDER_STATUS, OrderStatus, PAYMENT_METHOD, PAYMENT_STATUS, PaymentMethod, PaymentStatus, Role, ROLES (+14 more)

### Community 9 - "steps"
Cohesion: 0.10
Nodes (20): defaults, runs-on, steps, run, jobs, build, name, branches (+12 more)

### Community 11 - "mysql"
Cohesion: 0.10
Nodes (20): MYSQL_DATABASE, MYSQL_PASSWORD, MYSQL_ROOT_PASSWORD, MYSQL_USER, interval, retries, test, timeout (+12 more)

### Community 12 - "scripts"
Cohesion: 0.10
Nodes (20): description, devDependencies, prettier@^3.4.2, typescript@^5.7.2, typescript, name, packageManager, private (+12 more)

### Community 13 - "compilerOptions"
Cohesion: 0.11
Nodes (17): compilerOptions, allowImportingTsExtensions, isolatedModules, jsx, lib, module, moduleResolution, noEmit (+9 more)

### Community 14 - "compilerOptions"
Cohesion: 0.12
Nodes (16): compilerOptions, allowSyntheticDefaultImports, baseUrl, declaration, emitDecoratorMetadata, experimentalDecorators, forceConsistentCasingInFileNames, incremental (+8 more)

### Community 15 - "shared/package.json"
Cohesion: 0.14
Nodes (15): dependencies, zod@^3.24.1, devDependencies, typescript@^5.7.2, typescript, zod, main, name (+7 more)

### Community 16 - "formatter"
Cohesion: 0.20
Nodes (9): files, includes, formatter, indentStyle, indentWidth, lineWidth, linter, rules (+1 more)

### Community 17 - "compilerOptions"
Cohesion: 0.13
Nodes (14): compilerOptions, declaration, declarationMap, esModuleInterop, forceConsistentCasingInFileNames, module, moduleResolution, outDir (+6 more)

### Community 19 - "scripts"
Cohesion: 0.15
Nodes (13): scripts, build, lint, prisma:generate, prisma:migrate, prisma:seed, start, start:debug (+5 more)

### Community 20 - "Regras e Contexto para Ferramentas de IA (Misho Bonsai)"
Cohesion: 0.29
Nodes (5): 1. Contexto do Projeto, 2. Regras Inegociáveis, 3. Padrões de Código, 4. Skills Obrigatórias, Regras e Contexto para Ferramentas de IA (Misho Bonsai)

### Community 21 - "3. Decisões Delegadas à IA"
Cohesion: 0.18
Nodes (10): 1. Contexto e Problema, 2. Decisões Fundamentais (Fixadas no PROMPT.md), 3.1 Validação e Contratos: Zod Compartilhado (`packages/shared`), 3.2 Gerenciamento de Dados e Estado no Front-end: TanStack Query v5, 3.3 Roteamento no Front-end: React Router v7, 3.4 Componentes e UI Primitives: Tailwind CSS + Lucide Icons + Headless Primitives, 3.5 Estratégia de Imagens de Bonsai, 3. Decisões Delegadas à IA (+2 more)

### Community 22 - "Pull Request Template"
Cohesion: 0.33
Nodes (5): Checklist, How to test?, Pull Request Template, What does this PR change?, Why?

### Community 23 - "ADR-[Número]: [Título da Decisão Arquitetural]"
Cohesion: 0.33
Nodes (5): 1. Contexto e Problema, 2. Opções Avaliadas, 3. Decisão, 4. Consequências, ADR-[Número]: [Título da Decisão Arquitetural]

### Community 24 - "AI Log: Etapa 0 - Fundação, Identidade Misho Bonsai e Estrutura do Monorepo"
Cohesion: 0.33
Nodes (5): 1. Prompt(s) Chave Utilizado(s), 2. Decisões Técnicas e Raciocínio da IA, 3. Erros, Limitações ou Alucinações da IA, 4. Lições Aprendidas e Dicas para o Time, AI Log: Etapa 0 - Fundação, Identidade Misho Bonsai e Estrutura do Monorepo

### Community 26 - "nest-cli.json"
Cohesion: 0.50
Nodes (3): collection, $schema, sourceRoot

### Community 31 - "shared/design-tokens.ts"
Cohesion: 0.50
Nodes (3): colors, spacing, typography

### Community 32 - "chrome-devtools-mcp"
Cohesion: 0.29
Nodes (6): 1. Claude Code / Antigravity (`.mcp.json`):, 2. Cursor (`.cursor/mcp.json`):, Available Capabilities & Workflows, chrome-devtools-mcp, Client Configurations, MCP Server Configuration

### Community 33 - "chrome-devtools-mcp"
Cohesion: 0.29
Nodes (6): 1. Claude Code / Antigravity (`.mcp.json`):, 2. Cursor (`.cursor/mcp.json`):, Available Capabilities & Workflows, chrome-devtools-mcp, Client Configurations, MCP Server Configuration

### Community 34 - "agent-desktop Skill"
Cohesion: 0.25
Nodes (7): 1. Status & Initialization, 2. Observation (`snapshot`), 3. Interaction, agent-desktop Skill, Antigravity Agent Guidelines, Core CLI Reference, Key Architectural Principles

### Community 35 - "agent-desktop Skill"
Cohesion: 0.25
Nodes (7): 1. Status & Initialization, 2. Observation (`snapshot`), 3. Interaction, agent-desktop Skill, Antigravity Agent Guidelines, Core CLI Reference, Key Architectural Principles

### Community 36 - "dependencies"
Cohesion: 0.11
Nodes (18): dependencies, @nestjs/common@^10.4.15, @nestjs/jwt@^10.2.0, @nestjs/passport@^10.0.3, @nestjs/platform-express@^10.4.15, passport@^0.7.0, passport-jwt@^4.0.1, @prisma/client@^6.1.0 (+10 more)

### Community 37 - "api/package.json"
Cohesion: 0.20
Nodes (9): @nestjs/schematics@^10.2.3, ts-node@^10.9.2, typescript@^5.7.2, typescript, name, private, version, @nestjs/schematics (+1 more)

### Community 38 - "roles.guard.ts"
Cohesion: 0.22
Nodes (4): @nestjs/core@^10.4.15, ROLES_KEY, RolesGuard, @nestjs/core

### Community 39 - "main.ts"
Cohesion: 0.25
Nodes (5): cookie-parser@^1.4.7, @nestjs/swagger@^8.1.0, AppModule, cookie-parser, @nestjs/swagger

### Community 209 - "@nestjs/common"
Cohesion: 0.05
Nodes (20): AuthController, AuthModule, AuthService, LoginDto, RegisterDto, JwtAuthGuard, JwtPayload, JwtStrategy (+12 more)

### Community 220 - "CatalogPage.tsx"
Cohesion: 0.07
Nodes (37): App(), ROLE_LABELS, DiscountCarousel(), DiscountCarouselProps, CARE_LABELS, ProductCard(), ProductCardProps, STYLE_LABELS (+29 more)

### Community 221 - "Client Configurations"
Cohesion: 0.29
Nodes (6): 1. Claude Code / Antigravity (`.mcp.json`):, 2. Cursor (`.cursor/mcp.json`):, Available Capabilities & Workflows, Client Configurations, magic-mcp (21st.dev MCP), MCP Server Configuration

### Community 223 - "Client Configurations"
Cohesion: 0.29
Nodes (6): 1. Claude Code / Antigravity (`.mcp.json`):, 2. Cursor (`.cursor/mcp.json`):, Available Capabilities & Workflows, Client Configurations, MCP Server Configuration, shadcn-ui-mcp-server

### Community 233 - "Client Configurations"
Cohesion: 0.29
Nodes (6): 1. Claude Code / Antigravity (`.mcp.json`):, 2. Cursor (`.cursor/mcp.json`):, Available Capabilities & Workflows, Client Configurations, magic-mcp (21st.dev MCP), MCP Server Configuration

### Community 239 - "Client Configurations"
Cohesion: 0.29
Nodes (6): 1. Claude Code / Antigravity (`.mcp.json`):, 2. Cursor (`.cursor/mcp.json`):, Available Capabilities & Workflows, Client Configurations, MCP Server Configuration, shadcn-ui-mcp-server

### Community 292 - "magic"
Cohesion: 0.47
Nodes (5): npx, chrome-devtools, magic, shadcn, @21st-dev/cli

### Community 333 - "ProductDetail.ts"
Cohesion: 0.40
Nodes (4): ProductDetail, ProductImage, ProductVariant, Review

## Knowledge Gaps
- **7 isolated node(s):** `@21st-dev/cli`, `Gatilho /graphify no .claude`, `Cronograma em 7 Etapas`, `Decisões Pendentes (Stack e Papéis)`, `Atributos de Nicho (Bonsai)` (+2 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 340 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **18 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `@nestjs/common` connect `@nestjs/common` to `dependencies`, `api/package.json`, `roles.guard.ts`?**
  _High betweenness centrality (0.022) - this node is a cross-community bridge._
- **What connects `@21st-dev/cli`, `Gatilho /graphify no .claude`, `Cronograma em 7 Etapas` to the rest of the system?**
  _7 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Gestão e Governança do Projeto` be split into smaller, more focused modules?**
  _Cohesion score 0.1323529411764706 - nodes in this community are weakly interconnected._
- **Why does `react` connect `CatalogPage.tsx` to `web/package.json`?**
  _High betweenness centrality (0.012) - this node is a cross-community bridge._
- **Should `web/package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.0595959595959596 - nodes in this community are weakly interconnected._
- **Why does `scripts` connect `scripts` to `api/package.json`?**
  _High betweenness centrality (0.009) - this node is a cross-community bridge._
- **Should `Prompt inicial: E-commerce de Bonsai desenvolvido 100% com IA` be split into smaller, more focused modules?**
  _Cohesion score 0.07407407407407407 - nodes in this community are weakly interconnected._