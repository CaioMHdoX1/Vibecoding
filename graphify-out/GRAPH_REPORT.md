# Graph Report - vibe  (2026-11-10)

## Corpus Check

- 41 files · ~9,459 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 4 file(s) not represented in the graph (top: .example 1, (none) 1, .prisma 1)

## Summary

- 425 nodes · 456 edges · 30 communities (24 shown, 6 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 4 edges (avg confidence: 0.92)
- Token cost: 0 input · 0 output

## Graph Freshness

- Built from commit: `e6c81db4`
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
- api/package.json
- product.schema.ts
- steps
- interview-me.md
- mysql
- scripts
- compilerOptions
- compilerOptions
- shared/package.json
- dependencies
- compilerOptions
- main.ts
- scripts
- AGENTS.md: Regras e Contexto para Ferramentas de IA (Misho Bonsai)
- 3. Decisões Delegadas à IA
- 🌿 Pull Request: [Título descritivo]
- ADR-[Número]: [Título da Decisão Arquitetural]
- AI Log: Etapa 0 - Fundação, Identidade Misho Bonsai e Estrutura do Monorepo
- AI Log: [Título da Tarefa / Funcionalidade]
- nest-cli.json
- pnpm-workspace.yaml

## God Nodes (most connected - your core abstractions)

1. `compilerOptions` - 16 edges
2. `compilerOptions` - 15 edges
3. `Prompt inicial: E-commerce de Bonsai desenvolvido 100% com IA` - 15 edges
4. `scripts` - 13 edges
5. `compilerOptions` - 13 edges
6. `scripts` - 10 edges
7. `mysql` - 8 edges
8. `E-commerce de Bonsai 100% IA` - 8 edges
9. `steps` - 7 edges
10. `The 6-Phase Spec Interview Workflow` - 7 edges

## Surprising Connections (you probably didn't know these)

- `Gatilho /graphify no .claude` --conceptually_related_to--> `Diretrizes graphify no CLAUDE.md` [INFERRED]
  .claude/CLAUDE.md → CLAUDE.md
- `Diretrizes graphify no CLAUDE.md` --implements--> `Arquivos de Contexto (AGENTS/CLAUDE)` [INFERRED]
  CLAUDE.md → README.md
- `Diretrizes graphify no CLAUDE.md` --conceptually_related_to--> `Skill graphify` [INFERRED]
  CLAUDE.md → README.md

## Import Cycles

- None detected.

## Hyperedges (group relationships)

- **Fluxo de Trabalho Assistido por IA** — readme_fluxo_trabalho, readme_graphify_skill, readme_ponytail_skill, readme_regras_projeto [INFERRED 0.85]
- **Governança e Qualidade de Código** — readme_regras_projeto, readme_convencoes_git, readme_criterios_pronto, readme_riscos_mitigacoes [INFERRED 0.85]

## Communities (30 total, 6 thin omitted)

### Community 0 - "Gestão e Governança do Projeto"

Cohesion: 0.13
Nodes (14): Gatilho /graphify no .claude, Diretrizes graphify no CLAUDE.md, Arquivos de Contexto (AGENTS/CLAUDE), Cronograma em 7 Etapas, Decisões Pendentes (Stack e Papéis), E-commerce de Bonsai 100% IA, Escopo Funcional, Ferramentas de IA (+6 more)

### Community 1 - "web/package.json"

Cohesion: 0.05
Nodes (47): dependencies, lucide-react@^0.468.0, @misho/shared@workspace:*, react@^18.3.1, react-dom@^18.3.1, react-hook-form@^7.54.1, react-router-dom@^7.0.2, @tanstack/react-query@^5.62.8 (+39 more)

### Community 2 - "/ponytail"

Cohesion: 0.22
Nodes (8): Intensity Modes, Output Transparency, /ponytail, `/ponytail audit`, `/ponytail review`, Review & Audit Commands, The Core Philosophy: "The Ladder", What NOT to Cut (Non-Negotiable Boundaries)

### Community 5 - "Prompt inicial: E-commerce de Bonsai desenvolvido 100% com IA"

Cohesion: 0.07
Nodes (26): 10. Fluxo de cada tarefa, 11. Cronograma e prioridades, 12. Critérios de pronto, 13. Fora do escopo, 14. Sua primeira tarefa (Etapa 0), 1. Papel e contexto, 2. Regras inegociáveis, 3. Stack decidida (+18 more)

### Community 6 - "The 6-Phase Spec Interview Workflow"

Cohesion: 0.08
Nodes (21): Commands & Usage, /interview-me, Phase 1: Intake & Context Discovery, Phase 2: The Socratic Interview Loop, Phase 3: Trade-offs & Decisions Log, Phase 4: Production-Grade Specification Generation, Phase 5: Architecture Diagrams (Mermaid), Phase 6: Drift Verification (`--verify`) (+13 more)

### Community 7 - "api/package.json"

Cohesion: 0.09
Nodes (30): devDependencies, jest@^29.7.0, @nestjs/cli@^10.4.9, @nestjs/schematics@^10.2.3, @nestjs/testing@^10.4.15, prisma@^6.1.0, ts-jest@^29.2.5, ts-node@^10.9.2 (+22 more)

### Community 8 - "product.schema.ts"

Cohesion: 0.08
Nodes (23): ORDER_STATUS, OrderStatus, PAYMENT_METHOD, PAYMENT_STATUS, PaymentMethod, PaymentStatus, Role, ROLES (+15 more)

### Community 9 - "steps"

Cohesion: 0.09
Nodes (22): jobs, validate, name, branches, branches, id, name, run (+14 more)

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

### Community 16 - "dependencies"

Cohesion: 0.13
Nodes (15): dependencies, bcrypt@^5.1.1, @misho/shared@workspace:*, @nestjs/platform-express@^10.4.15, @prisma/client@^6.1.0, reflect-metadata@^0.2.2, rxjs@^7.8.1, zod@^3.24.1 (+7 more)

### Community 17 - "compilerOptions"

Cohesion: 0.13
Nodes (14): compilerOptions, declaration, declarationMap, esModuleInterop, forceConsistentCasingInFileNames, module, moduleResolution, outDir (+6 more)

### Community 18 - "main.ts"

Cohesion: 0.17
Nodes (9): cookie-parser@^1.4.7, @nestjs/common@^10.4.15, @nestjs/core@^10.4.15, @nestjs/swagger@^8.1.0, AppModule, cookie-parser, @nestjs/common, @nestjs/core (+1 more)

### Community 19 - "scripts"

Cohesion: 0.15
Nodes (13): scripts, build, lint, prisma:generate, prisma:migrate, prisma:seed, start, start:debug (+5 more)

### Community 20 - "AGENTS.md: Regras e Contexto para Ferramentas de IA (Misho Bonsai)"

Cohesion: 0.18
Nodes (10): 1. Contexto do Projeto, 2. Regras Inegociáveis, 3. Padrões de Código e Idioma, 4.1 graphify (Navegação em Grafo), 4.2 ponytail (Minimalismo e Anti-Bloat), 4.3 interview-me (Especificação Socrática), 4. Skills de Apoio Obrigatórias, 5. Estrutura do Monorepo (+2 more)

### Community 21 - "3. Decisões Delegadas à IA"

Cohesion: 0.18
Nodes (10): 1. Contexto e Problema, 2. Decisões Fundamentais (Fixadas no PROMPT.md), 3.1 Validação e Contratos: Zod Compartilhado (`packages/shared`), 3.2 Gerenciamento de Dados e Estado no Front-end: TanStack Query v5, 3.3 Roteamento no Front-end: React Router v7, 3.4 Componentes e UI Primitives: Tailwind CSS + Lucide Icons + Headless Primitives, 3.5 Estratégia de Imagens de Bonsai, 3. Decisões Delegadas à IA (+2 more)

### Community 22 - "🌿 Pull Request: [Título descritivo]"

Cohesion: 0.25
Nodes (7): 1. Descrição das Alterações, 2. Critérios de Aceite Atendidos, 3. Registro de Uso de Inteligência Artificial, 4. Novas Dependências, 5. Como Testar, 6. Checklist de Qualidade, 🌿 Pull Request: [Título descritivo]

### Community 23 - "ADR-[Número]: [Título da Decisão Arquitetural]"

Cohesion: 0.33
Nodes (5): 1. Contexto e Problema, 2. Opções Avaliadas, 3. Decisão, 4. Consequências, ADR-[Número]: [Título da Decisão Arquitetural]

### Community 24 - "AI Log: Etapa 0 - Fundação, Identidade Misho Bonsai e Estrutura do Monorepo"

Cohesion: 0.33
Nodes (5): 1. Prompt(s) Chave Utilizado(s), 2. Decisões Técnicas e Raciocínio da IA, 3. Erros, Limitações ou Alucinações da IA, 4. Lições Aprendidas e Dicas para o Time, AI Log: Etapa 0 - Fundação, Identidade Misho Bonsai e Estrutura do Monorepo

### Community 25 - "AI Log: [Título da Tarefa / Funcionalidade]"

Cohesion: 0.33
Nodes (5): 1. Prompt(s) Chave Utilizado(s), 2. Decisões Técnicas e Raciocínio da IA, 3. Erros, Limitações ou Alucinações da IA, 4. Lições Aprendidas e Dicas para o Time, AI Log: [Título da Tarefa / Funcionalidade]

### Community 26 - "nest-cli.json"

Cohesion: 0.50
Nodes (3): collection, $schema, sourceRoot

## Knowledge Gaps

- **6 isolated node(s):** `Cronograma em 7 Etapas`, `Decisões Pendentes (Stack e Papéis)`, `Atributos de Nicho (Bonsai)`, `Riscos e Mitigações`, `Visão Geral e Objetivos` (+1 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 249 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions

_Questions this graph is uniquely positioned to answer:_

- **Why does `scripts` connect `scripts` to `api/package.json`?**
  _High betweenness centrality (0.009) - this node is a cross-community bridge._
- **What connects `Cronograma em 7 Etapas`, `Decisões Pendentes (Stack e Papéis)`, `Atributos de Nicho (Bonsai)` to the rest of the system?**
  _6 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Gestão e Governança do Projeto` be split into smaller, more focused modules?**
  _Cohesion score 0.1323529411764706 - nodes in this community are weakly interconnected._
- **Why does `dependencies` connect `dependencies` to `main.ts`, `api/package.json`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **Should `web/package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.05429864253393665 - nodes in this community are weakly interconnected._
- **Should `Prompt inicial: E-commerce de Bonsai desenvolvido 100% com IA` be split into smaller, more focused modules?**
  _Cohesion score 0.07407407407407407 - nodes in this community are weakly interconnected._
- **Should `The 6-Phase Spec Interview Workflow` be split into smaller, more focused modules?**
  _Cohesion score 0.08333333333333333 - nodes in this community are weakly interconnected._
