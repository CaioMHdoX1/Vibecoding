# Graph Report - vibe  (2026-11-09)

## Corpus Check
- 4 files · ~2,103 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 17 nodes · 18 edges · 4 communities (3 shown, 1 thin omitted)
- Extraction: 78% EXTRACTED · 22% INFERRED · 0% AMBIGUOUS · INFERRED: 4 edges (avg confidence: 0.93)
- Token cost: 1,200 input · 800 output

## Community Hubs (Navigation)
- Gestão e Governança do Projeto
- Fluxo e Ferramentas de IA
- Configuração do Agente Claude
- Escopo e Domínio Bonsai

## God Nodes (most connected - your core abstractions)
1. `E-commerce de Bonsai 100% IA` - 8 edges
2. `Ferramentas de IA` - 4 edges
3. `Fluxo de Trabalho em 9 Passos` - 3 edges
4. `Skill graphify` - 3 edges
5. `Diretrizes graphify no CLAUDE.md` - 3 edges
6. `Skill ponytail` - 2 edges
7. `Arquivos de Contexto (AGENTS/CLAUDE)` - 2 edges
8. `Escopo Funcional` - 2 edges
9. `Cronograma em 7 Etapas` - 1 edges
10. `Decisões Pendentes (Stack e Papéis)` - 1 edges

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

## Communities (4 total, 1 thin omitted)

### Community 0 - "Gestão e Governança do Projeto"
Cohesion: 0.29
Nodes (5): Cronograma em 7 Etapas, Decisões Pendentes (Stack e Papéis), E-commerce de Bonsai 100% IA, Riscos e Mitigações, Visão Geral e Objetivos

### Community 1 - "Fluxo e Ferramentas de IA"
Cohesion: 0.50
Nodes (4): Ferramentas de IA, Fluxo de Trabalho em 9 Passos, Skill graphify, Skill ponytail

### Community 2 - "Configuração do Agente Claude"
Cohesion: 0.67
Nodes (3): Gatilho /graphify no .claude, Diretrizes graphify no CLAUDE.md, Arquivos de Contexto (AGENTS/CLAUDE)

## Knowledge Gaps
- **6 isolated node(s):** `Cronograma em 7 Etapas`, `Decisões Pendentes (Stack e Papéis)`, `Riscos e Mitigações`, `Visão Geral e Objetivos`, `Gatilho /graphify no .claude` (+1 more)
  These have ≤1 connection - possible missing edges. (Counts symbols only; 9 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `E-commerce de Bonsai 100% IA` connect `Gestão e Governança do Projeto` to `Fluxo e Ferramentas de IA`, `Escopo e Domínio Bonsai`?**
  _High betweenness centrality (0.758) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `Diretrizes graphify no CLAUDE.md` (e.g. with `Gatilho /graphify no .claude` and `Arquivos de Contexto (AGENTS/CLAUDE)`) actually correct?**
  _`Diretrizes graphify no CLAUDE.md` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `Cronograma em 7 Etapas`, `Decisões Pendentes (Stack e Papéis)`, `Riscos e Mitigações` to the rest of the system?**
  _6 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Why does `Ferramentas de IA` connect `Fluxo e Ferramentas de IA` to `Gestão e Governança do Projeto`, `Configuração do Agente Claude`?**
  _High betweenness centrality (0.564) - this node is a cross-community bridge._
- **Why does `Skill graphify` connect `Fluxo e Ferramentas de IA` to `Configuração do Agente Claude`?**
  _High betweenness centrality (0.222) - this node is a cross-community bridge._