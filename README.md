# Misho Bonsai (実生) · E-commerce de Bonsai 100% IA

> **Status:** Etapa 0 Concluída (Fundação e Método) · **Prazo final:** 31/12/2026  
> **Equipe:** 4 pessoas (2 Front-end, 2 Back-end) · **Natureza:** Projeto de portfólio colaborativo, sem fins comerciais.  
> **Transparência:** 100% do código foi gerado por ferramentas de Inteligência Artificial e revisado por humanos via Pull Request.

---

## 1. Visão Geral

O **Misho Bonsai** (termo japonês para o cultivo de um bonsai a partir da semente, simbolizando paciência e crescimento) é um e-commerce fictício completo desenvolvido para demonstrar a recrutadores e avaliadores técnicos o domínio de engenharia de software assistida por IA.

### Objetivos do Projeto
- **Produto Funcional:** Catálogo responsivo com filtros botânicos (espécie, estilo, nível de cuidado, porte), carrinho, área do cliente, checkout simulado (Pix, Cartão, Boleto) e painel administrativo.
- **Rigor de Engenharia:** Monorepo com `pnpm workspaces`, TypeScript estrito em todo o projeto, NestJS modular, Prisma ORM, MySQL via Docker Compose, React + Vite e Tailwind CSS com design tokens Wabi-Sabi.
- **Governança de IA:** Documentação transparente de prompts e lições aprendidas (`docs/ai-log/`), decisões de arquitetura registradas (`docs/adr/`), regras de contexto para agentes (`AGENTS.md`) e auxílio de skills especializadas (`graphify`, `ponytail`, `interview-me`).

---

## 2. Regras Inegociáveis

1. **100% IA:** Nenhuma linha de código é escrita manualmente por humanos.
2. **Revisão Humana:** Todo código passa por revisão via Pull Request com o template do repositório antes de entrar na `main`.
3. **Simulação Total:** Pagamento, estoque, frete e fiscal são simulados. Nenhuma transação financeira real existe.
4. **Sem Segredos:** Nenhuma credencial ou arquivo `.env` real é versionado. Apenas `.env.example`.
5. **Justificativa de Dependências:** Qualquer nova biblioteca requer justificativa explícita no PR.

---

## 3. Arquitetura e Stack

A stack e decisões delegadas estão formalizadas no [ADR-001](docs/adr/001-stack-and-architecture.md):

| Camada | Tecnologia | Papel |
|---|---|---|
| **Linguagem** | TypeScript 5 (Strict) | Tipagem estrita de ponta a ponta |
| **Monorepo** | pnpm workspaces | Gerenciamento de múltiplos pacotes |
| **Back-end** | Node.js + NestJS | API modular com documentação Swagger/OpenAPI |
| **Banco de Dados** | MySQL 8.4 via Docker | Ambiente local reproduzível |
| **ORM** | Prisma | Migrations versionadas e tipadas |
| **Front-end** | React 18 + Vite | SPA responsiva mobile-first |
| **Estilos & Design** | Tailwind CSS | Design tokens Misho Bonsai (Wabi-Sabi) |
| **Contratos** | Zod (`packages/shared`) | Validação compartilhada e contratos únicos |
| **Estado do Servidor** | TanStack Query v5 | Cache e sincronização de dados assíncronos |
| **CI / Automação** | GitHub Actions | Lint, testes e build automáticos em cada PR |

### Estrutura do Repositório

```
/
├── AGENTS.md               # Regras e contexto unificado para todas as IAs
├── CLAUDE.md               # Diretrizes para Claude Code
├── README.md               # Apresentação do projeto e guia de execução
├── LICENSE                 # Licença MIT
├── docker-compose.yml      # MySQL 8.4 local com healthcheck
├── pnpm-workspace.yaml     # Configuração de workspaces pnpm
├── apps/
│   ├── api/                # Back-end NestJS + Prisma
│   └── web/                # Front-end React + Vite + Tailwind
├── packages/
│   └── shared/             # Zod schemas, design tokens e tipos compartilhados
├── docs/
│   ├── adr/                # Architecture Decision Records (ADR-001)
│   ├── ai-log/             # Registro de prompts e lições da IA
│   └── specs/              # Especificações e user stories
└── .github/
    ├── workflows/ci.yml    # Pipeline de integração contínua
    └── pull_request_template.md
```

---

## 4. Como Executar Localmente

### Pré-requisitos
- [Node.js](https://nodejs.org/) v20+
- [pnpm](https://pnpm.io/) v9+
- [Docker](https://www.docker.com/) e Docker Compose

### 1. Clonar e configurar ambiente
```bash
git clone https://github.com/seu-usuario/vibe.git
cd vibe
cp .env.example .env
```

### 2. Subir o Banco de Dados
```bash
docker compose up -d
```

### 3. Instalar dependências
```bash
pnpm install
```

### 4. Executar em modo desenvolvimento
```bash
pnpm dev
```
- **Front-end (Web):** `http://localhost:5173`
- **Back-end (API):** `http://localhost:3000/api/v1`
- **Documentação Swagger:** `http://localhost:3000/api/docs`

---

## 5. Skills de IA Instaladas

O repositório conta com suporte nativo às seguintes skills em `.agents/skills/`:

1. **`graphify`**: Gera e atualiza um grafo de conhecimento em `graphify-out/` com nós centrais e visualização interativa.
   - *Comando:* `graphify query "<pergunta>"` | `graphify update .`
2. **`ponytail`**: Enforça a hierarquia de decisão **The Ladder** para evitar código inchado (*bloat*), código redundante ou dependências supérfluas.
   - *Comando:* `/ponytail review` | `/ponytail audit`
3. **`interview-me`**: Conduz uma entrevista socrática de arquitetura para elicitar requisitos e criar especificações em `docs/specs/` antes da codificação.
   - *Comando:* `/interview-me <tema>` | `/interview-me --verify <spec>`

---

## 6. Cronograma de Entregas

- [x] **Etapa 0: Fundação e Método (Semana 1):** Identidade Misho Bonsai, monorepo pnpm, Docker Compose, ADR-001, AGENTS.md, templates e CI.
- [ ] **Etapa 1: Especificação e Arquitetura (Semanas 1 e 2):** User stories detalhadas, modelagem de banco, endpoints e wireframes.
- [ ] **Etapa 2: Base Técnica (Semanas 2 e 3):** Configuração de banco, migrations, seed, autenticação JWT e testes base.
- [ ] **Etapa 3: Núcleo da Loja - MVP (Semanas 3 a 5):** Catálogo, busca por atributos de bonsai, carrinho, checkout simulado.
- [ ] **Etapa 4: Admin e Extras (Semanas 5 e 6):** CRUD de produtos, gestão de pedidos, avaliações, lista de desejos.
- [ ] **Etapa 5: Qualidade e Polimento (Semanas 6 e 7):** Testes E2E com Playwright, segurança básica e fotos reais dos bonsais.
- [ ] **Etapa 6: Vitrine para Recrutadores (Semana 7):** Vídeo de demonstração, métricas e seção detalhada "Como foi feito com IA".

---

## 7. Licença

Este projeto está sob a licença [MIT](LICENSE).
