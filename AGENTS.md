# AGENTS.md: Regras e Contexto para Ferramentas de IA (Misho Bonsai)

> Este arquivo é a fonte primária de verdade para todos os agentes de IA que atuam neste projeto (Antigravity, Claude Code, Gemini CLI, ChatGPT, Codex, Cursor).
> Sempre consulte este documento antes de gerar ou refatorar código.

---

## 1. Contexto do Projeto

Você atua como engenheiro(a) de software sênior no projeto **Misho Bonsai**: um e-commerce de bonsai sem fins comerciais, desenvolvido **100% por IA** e **revisado por humanos via Pull Request**. O público do repositório é composto por recrutadores e desenvolvedores em início/meio de carreira.

- **Prioridade Máxima:** Clareza, simplicidade, consistência e padrões conhecidos sobre sofisticação e abstrações prematuras.
- **Distribuição:** Apenas no GitHub. Todo o sistema roda localmente com Docker Compose.

---

## 2. Regras Inegociáveis

1. **Nenhuma linha de código escrita manualmente:** Todo código é gerado por IA.
2. **Revisão humana obrigatória via PR:** Todo código passa por revisão antes de entrar na `main`.
3. **Simulação total:** Pagamento, frete, estoque e emissão fiscal são 100% simulados. Não existem transações reais.
4. **Segurança de credenciais:** Nunca commitar arquivos `.env` ou segredos reais. Forneça apenas `.env.example`.
5. **Justificativa de dependências:** Toda dependência nova exige justificativa explícita no PR.
6. **Não inventar requisitos:** Em caso de dúvida ou ambiguidade, use o comando `/interview-me` ou pergunte ao usuário.
7. **Consulte o grafo antes de ler arquivos em massa:** Use a skill `graphify`.

---

## 3. Padrões de Código e Idioma

- **Código:** Nomes de variáveis, funções, classes, arquivos e comentários técnicos estritamente em **inglês**.
- **Interface e Textos:** Textos de UI voltados ao usuário em **português do Brasil (pt-BR)**.
- **Commits:** Conventional Commits com o tipo em inglês e a mensagem em português. Exemplo: `feat: adiciona filtro por espécie no catálogo`.
- **TypeScript:** Modo `strict` absoluto, sem uso de `any` sem justificativa formal.
- **Contratos:** Schemas compartilhados residem em `packages/shared` com Zod.

---

## 4. Skills de Apoio Obrigatórias

### 4.1 graphify (Navegação em Grafo)
- Quando `graphify-out/graph.json` existir, execute `graphify query "<pergunta>"` antes de ler múltiplos arquivos soltos.
- Use `graphify path "<A>" "<B>"` para relações e `graphify explain "<conceito>"` para módulos específicos.
- Após alterar código, execute `graphify update .` para atualizar o grafo (sem custo de LLM).

### 4.2 ponytail (Minimalismo e Anti-Bloat)
- Aplique **The Ladder** antes de escrever código:
  1. *YAGNI:* Não adicione funcionalidades não solicitadas ou configurações especulativas.
  2. *Reuso:* Busque no repositório antes de criar novos helpers ou componentes.
  3. *Built-ins:* Prefira bibliotecas padrão e APIs nativas (HTML/CSS/JS).
  4. *Dependências existentes:* Nunca instale novos pacotes se os já instalados bastarem.
  5. *Simplicidade:* Mantenha funções pequenas e diretas.
- **Limites inegociáveis mantidos:** Validação em trust boundaries, tratamento de erros para prevenir perda de dados, segurança e acessibilidade nunca são cortados.

### 4.3 interview-me (Especificação Socrática)
- Antes de iniciar módulos complexos, execute `/interview-me` para definir critérios de aceite, arquitetura e não-objetivos em `docs/specs/`.

---

## 5. Estrutura do Monorepo

```
/
├── apps/
│   ├── api/            # NestJS + Prisma + MySQL + Swagger
│   └── web/            # React + Vite + Tailwind CSS + TanStack Query
├── packages/
│   └── shared/         # Zod schemas, design tokens e tipos TypeScript compartilhados
├── docs/
│   ├── adr/            # Architecture Decision Records
│   ├── ai-log/         # Registros de prompts e lições da IA
│   └── specs/          # Especificações e critérios de aceite
└── docker-compose.yml  # MySQL 8.4 local
```

---

## 6. Comandos Principais

```bash
pnpm install            # Instala dependências do monorepo
docker compose up -d    # Sobe o banco de dados MySQL
pnpm dev                # Roda a API e o Web simultaneamente
pnpm run build          # Compila todos os pacotes
pnpm run lint           # Executa verificação de tipos e lint
pnpm run test           # Executa testes unitários
```
