# Graph Report - vibe  (2026-11-10)

## Corpus Check

- 12 files · ~6,779 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary

- 84 nodes · 79 edges · 11 communities (8 shown, 3 thin omitted)
- Extraction: 95% EXTRACTED · 5% INFERRED · 0% AMBIGUOUS · INFERRED: 4 edges (avg confidence: 0.92)
- Token cost: 0 input · 0 output

## Graph Freshness

- Built from commit: `e6c81db4`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)

- Gestão e Governança do Projeto
- Fluxo e Ferramentas de IA
- /ponytail
- ponytail (Minimal Code Guidelines)
- workflows/ponytail.md
- Prompt inicial: E-commerce de Bonsai desenvolvido 100% com IA
- /interview-me
- The 6-Phase Spec Interview Workflow
- Style Presets for interview-me Specifications
- 4. Escopo funcional
- interview-me.md

## God Nodes (most connected - your core abstractions)

1. `Prompt inicial: E-commerce de Bonsai desenvolvido 100% com IA` - 15 edges
2. `E-commerce de Bonsai 100% IA` - 8 edges
3. `The 6-Phase Spec Interview Workflow` - 7 edges
4. `4. Escopo funcional` - 7 edges
5. `/ponytail` - 6 edges
6. `/interview-me` - 5 edges
7. `Style Presets for interview-me Specifications` - 4 edges
8. `Ferramentas de IA` - 4 edges
9. `Spec Drift Verification Guide (VERIFY.md)` - 3 edges
10. `Review & Audit Commands` - 3 edges

## Surprising Connections (you probably didn't know these)

- `Gatilho /graphify no .claude` --conceptually_related_to--> `Diretrizes graphify no CLAUDE.md` [INFERRED]
  .claude/CLAUDE.md → CLAUDE.md
- `Diretrizes graphify no CLAUDE.md` --implements--> `Arquivos de Contexto (AGENTS/CLAUDE)` [INFERRED]
  CLAUDE.md → README.md
- `Diretrizes graphify no CLAUDE.md` --conceptually_related_to--> `Skill graphify` [INFERRED]
  CLAUDE.md → README.md

## Hyperedges (group relationships)

- **Fluxo de Trabalho Assistido por IA** — readme_fluxo_trabalho, readme_graphify_skill, readme_ponytail_skill, readme_regras_projeto [INFERRED 0.85]
- **Governança e Qualidade de Código** — readme_regras_projeto, readme_convencoes_git, readme_criterios_pronto, readme_riscos_mitigacoes [INFERRED 0.85]

## Communities (11 total, 3 thin omitted)

### Community 0 - "Gestão e Governança do Projeto"

Cohesion: 0.22
Nodes (7): Cronograma em 7 Etapas, Decisões Pendentes (Stack e Papéis), E-commerce de Bonsai 100% IA, Escopo Funcional, Atributos de Nicho (Bonsai), Riscos e Mitigações, Visão Geral e Objetivos

### Community 1 - "Fluxo e Ferramentas de IA"

Cohesion: 0.32
Nodes (7): Gatilho /graphify no .claude, Diretrizes graphify no CLAUDE.md, Arquivos de Contexto (AGENTS/CLAUDE), Ferramentas de IA, Fluxo de Trabalho em 9 Passos, Skill graphify, Skill ponytail

### Community 2 - "/ponytail"

Cohesion: 0.22
Nodes (8): Intensity Modes, Output Transparency, /ponytail, `/ponytail audit`, `/ponytail review`, Review & Audit Commands, The Core Philosophy: "The Ladder", What NOT to Cut (Non-Negotiable Boundaries)

### Community 5 - "Prompt inicial: E-commerce de Bonsai desenvolvido 100% com IA"

Cohesion: 0.10
Nodes (19): 10. Fluxo de cada tarefa, 11. Cronograma e prioridades, 12. Critérios de pronto, 13. Fora do escopo, 14. Sua primeira tarefa (Etapa 0), 1. Papel e contexto, 2. Regras inegociáveis, 3. Stack decidida (+11 more)

### Community 6 - "/interview-me"

Cohesion: 0.20
Nodes (7): Commands & Usage, /interview-me, Supporting Resources, When to Use, Objective, Spec Drift Verification Guide (VERIFY.md), Verification Protocol

### Community 7 - "The 6-Phase Spec Interview Workflow"

Cohesion: 0.29
Nodes (7): Phase 1: Intake & Context Discovery, Phase 2: The Socratic Interview Loop, Phase 3: Trade-offs & Decisions Log, Phase 4: Production-Grade Specification Generation, Phase 5: Architecture Diagrams (Mermaid), Phase 6: Drift Verification (`--verify`), The 6-Phase Spec Interview Workflow

### Community 8 - "Style Presets for interview-me Specifications"

Cohesion: 0.29
Nodes (7): 1. Preset: `full` (Default - Complete System / Feature Spec), 2. Preset: `minimal` (Lightweight / Component Spec), 3. Preset: `adr` (Architecture Decision Record), Style Presets for interview-me Specifications, Target Structure:, Target Structure:, Target Structure:

### Community 9 - "4. Escopo funcional"

Cohesion: 0.29
Nodes (7): 4.1 Loja (público e cliente), 4.2 Cliente, 4.3 Checkout (tudo simulado), 4.4 Painel administrativo, 4.5 Rastreamento (pixel simulado), 4.6 Interface, 4. Escopo funcional

## Knowledge Gaps

- **6 isolated node(s):** `Cronograma em 7 Etapas`, `Decisões Pendentes (Stack e Papéis)`, `Atributos de Nicho (Bonsai)`, `Riscos e Mitigações`, `Visão Geral e Objetivos` (+1 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 57 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions

_Questions this graph is uniquely positioned to answer:_

- **Why does `Prompt inicial: E-commerce de Bonsai desenvolvido 100% com IA` connect `Prompt inicial: E-commerce de Bonsai desenvolvido 100% com IA` to `4. Escopo funcional`?**
  _High betweenness centrality (0.088) - this node is a cross-community bridge._
- **What connects `Cronograma em 7 Etapas`, `Decisões Pendentes (Stack e Papéis)`, `Atributos de Nicho (Bonsai)` to the rest of the system?**
  _6 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Prompt inicial: E-commerce de Bonsai desenvolvido 100% com IA` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._
- **Why does `/interview-me` connect `/interview-me` to `The 6-Phase Spec Interview Workflow`?**
  _High betweenness centrality (0.045) - this node is a cross-community bridge._
- **Why does `4. Escopo funcional` connect `4. Escopo funcional` to `Prompt inicial: E-commerce de Bonsai desenvolvido 100% com IA`?**
  _High betweenness centrality (0.040) - this node is a cross-community bridge._
