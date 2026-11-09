# Graph Report - vibe  (2026-11-09)

## Corpus Check
- 7 files · ~2,892 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 31 nodes · 29 edges · 5 communities (3 shown, 2 thin omitted)
- Extraction: 86% EXTRACTED · 14% INFERRED · 0% AMBIGUOUS · INFERRED: 4 edges (avg confidence: 0.93)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `478cf749`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Gestão e Governança do Projeto
- Fluxo e Ferramentas de IA
- /ponytail
- ponytail (Minimal Code Guidelines)
- workflows/ponytail.md

## God Nodes (most connected - your core abstractions)
1. `E-commerce de Bonsai 100% IA` - 8 edges
2. `/ponytail` - 6 edges
3. `Ferramentas de IA` - 4 edges
4. `Review & Audit Commands` - 3 edges
5. `Fluxo de Trabalho em 9 Passos` - 3 edges
6. `Skill graphify` - 3 edges
7. `Diretrizes graphify no CLAUDE.md` - 3 edges
8. `ponytail (Minimal Code Guidelines)` - 2 edges
9. `Skill ponytail` - 2 edges
10. `Arquivos de Contexto (AGENTS/CLAUDE)` - 2 edges

## Surprising Connections (you probably didn't know these)
- `Gatilho /graphify no .claude` --conceptually_related_to--> `Diretrizes graphify no CLAUDE.md`  [INFERRED]
  .claude/CLAUDE.md → CLAUDE.md
- `Diretrizes graphify no CLAUDE.md` --conceptually_related_to--> `Skill graphify`  [INFERRED]
  CLAUDE.md → README.md
- `Diretrizes graphify no CLAUDE.md` --implements--> `Arquivos de Contexto (AGENTS/CLAUDE)`  [INFERRED]
  CLAUDE.md → README.md

## Hyperedges (group relationships)
- **Fluxo de Trabalho Assistido por IA** — readme_fluxo_trabalho, readme_graphify_skill, readme_ponytail_skill, readme_regras_projeto [INFERRED 0.85]
- **Governança e Qualidade de Código** — readme_regras_projeto, readme_convencoes_git, readme_criterios_pronto, readme_riscos_mitigacoes [INFERRED 0.85]

## Communities (5 total, 2 thin omitted)

### Community 0 - "Gestão e Governança do Projeto"
Cohesion: 0.22
Nodes (7): Cronograma em 7 Etapas, Decisões Pendentes (Stack e Papéis), E-commerce de Bonsai 100% IA, Escopo Funcional, Atributos de Nicho (Bonsai), Riscos e Mitigações, Visão Geral e Objetivos

### Community 1 - "Fluxo e Ferramentas de IA"
Cohesion: 0.32
Nodes (7): Gatilho /graphify no .claude, Diretrizes graphify no CLAUDE.md, Arquivos de Contexto (AGENTS/CLAUDE), Ferramentas de IA, Fluxo de Trabalho em 9 Passos, Skill graphify, Skill ponytail

### Community 2 - "/ponytail"
Cohesion: 0.22
Nodes (8): Intensity Modes, Output Transparency, /ponytail, `/ponytail audit`, `/ponytail review`, Review & Audit Commands, The Core Philosophy: "The Ladder", What NOT to Cut (Non-Negotiable Boundaries)

## Knowledge Gaps
- **6 isolated node(s):** `Cronograma em 7 Etapas`, `Decisões Pendentes (Stack e Papéis)`, `Riscos e Mitigações`, `Visão Geral e Objetivos`, `Gatilho /graphify no .claude` (+1 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 20 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `E-commerce de Bonsai 100% IA` connect `Gestão e Governança do Projeto` to `Fluxo e Ferramentas de IA`?**
  _High betweenness centrality (0.209) - this node is a cross-community bridge._
- **What connects `Cronograma em 7 Etapas`, `Decisões Pendentes (Stack e Papéis)`, `Riscos e Mitigações` to the rest of the system?**
  _6 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Why does `Ferramentas de IA` connect `Fluxo e Ferramentas de IA` to `Gestão e Governança do Projeto`?**
  _High betweenness centrality (0.156) - this node is a cross-community bridge._