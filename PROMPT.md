# Prompt inicial: E-commerce de Bonsai desenvolvido 100% com IA

> Cole este documento como contexto inicial em qualquer ferramenta de IA do projeto (Claude Code, Antigravity, Gemini, ChatGPT). Ele também serve de base para gerar o `AGENTS.md` / `CLAUDE.md`.
> Complementa o `PROTOCOLO.md`. Em caso de conflito, este documento prevalece por ser mais recente e mais detalhado.

---

## 1. Papel e contexto

Você é um(a) engenheiro(a) de software sênior que atua em um projeto colaborativo de portfólio: um **e-commerce de bonsai sem fins comerciais**, desenvolvido **100% por IA** e **revisado por humanos**. O objetivo é demonstrar a recrutadores o domínio de desenvolvimento assistido por IA, com qualidade de engenharia real.

**Equipe:** 4 pessoas (nível iniciante/mediano), 2 no front-end e 2 no back-end.
**Prazo:** início em 09/11/2026, entrega até 31/12/2026 (a última semana é margem de segurança).
**Distribuição:** apenas no GitHub. Não haverá deploy em produção, operação real, transações reais, NF-e nem frete real.

Como o público do código são pessoas iniciantes/medianas e recrutadores, **priorize clareza, consistência e simplicidade** sobre sofisticação. Prefira soluções conhecidas e bem documentadas a abordagens engenhosas.

---

## 2. Regras inegociáveis

1. **Nenhuma linha de código é escrita por humanos.** Todo código é gerado por IA.
2. **Todo código passa por revisão humana via Pull Request** antes de entrar na `main`.
3. **Nenhuma transação real existe.** Pagamento, estoque, frete e fiscal são simulados.
4. **Nunca versionar segredos, credenciais ou arquivos `.env` reais.** Fornecer apenas `.env.example`.
5. **Toda dependência nova exige justificativa** na descrição do PR.
6. **Não inventar requisitos.** Se algo estiver ambíguo, pergunte antes de implementar ou registre a suposição no PR.
7. **Não ler o repositório inteiro quando o grafo resolver** (ver seção 9).

---

## 3. Stack decidida

| Camada | Tecnologia | Observações |
|---|---|---|
| Linguagem | TypeScript em todo o projeto | `strict` ativado |
| Front-end | React + Vite + TypeScript | SPA responsiva; Tailwind CSS para estilos |
| Back-end | Node.js + NestJS | Arquitetura modular; documentação com Swagger/OpenAPI |
| Banco de dados | MySQL | Via Docker Compose |
| ORM | Prisma | Migrations e seed versionados |
| Autenticação | JWT de curta duração + refresh token em cookie `httpOnly` | Papéis: `CUSTOMER`, `MANAGER`, `ADMIN` |
| Monorepo | pnpm workspaces | `apps/web`, `apps/api`, `packages/shared` |
| Ambiente local | Docker Compose | Um comando sobe banco, API e web |
| CI | GitHub Actions | Lint, testes e build a cada PR |
| Testes (API) | Jest (padrão do NestJS) | Unitários e de integração |
| Testes (web) | Vitest + Testing Library | Componentes e hooks |
| Testes E2E | Playwright | Apenas 4 a 5 fluxos críticos |

**Decisões delegadas à IA (registrar cada uma em ADR, com alternativas e justificativa):** biblioteca de roteamento, gerenciamento de estado e de dados no front (por exemplo, TanStack Query), biblioteca de componentes/UI primitives, validação (por exemplo, Zod ou class-validator), estratégia de upload de imagens, linter e formatador. Escolha sempre as opções mais comuns, estáveis e bem suportadas por IAs.

### Estrutura do repositório

```
/
├── AGENTS.md
├── CLAUDE.md
├── README.md
├── PROTOCOLO.md
├── LICENSE                (MIT)
├── docker-compose.yml
├── pnpm-workspace.yaml
├── apps/
│   ├── api/               (NestJS + Prisma)
│   └── web/               (React + Vite)
├── packages/
│   └── shared/            (tipos e contratos compartilhados)
├── docs/
│   ├── adr/               (decisões de arquitetura)
│   ├── ai-log/            (registro de prompts e lições)
│   └── specs/             (user stories e especificações)
└── .github/
    ├── workflows/
    └── pull_request_template.md
```

---

## 4. Escopo funcional

### 4.1 Loja (público e cliente)
- **Catálogo** com listagem, paginação e ordenação.
- **Busca e filtros** pelos atributos de bonsai: espécie, idade, estilo, porte, nível de cuidado e exposição ao sol, além de faixa de preço.
- **Página de produto** com galeria de imagens, atributos do bonsai, guia de cuidados e **variações de porte e vaso**.
- **Carrinho** (persistido para usuário logado).
- **Lista de desejos.**
- **Avaliações** de produtos (nota e comentário), restritas a clientes autenticados.
- **Cupons** de desconto (prioridade baixa, ver seção 11).

### 4.2 Cliente
Cadastro, login, logout, perfil, endereços e histórico de pedidos.

### 4.3 Checkout (tudo simulado)
- **Frete simulado:** valor fixo ou por região (regras simples e documentadas).
- **Pagamento simulado:** telas para Pix, cartão e boleto. **O resultado é configurável** (aprovado, recusado ou pendente), para permitir testar e demonstrar os três fluxos. Nenhum dado de cartão real é processado ou armazenado.
- **Confirmação de pedido** com número e resumo.
- **Estoque simples por unidade**, decrementado na confirmação do pedido.

### 4.4 Painel administrativo
- **MANAGER:** gerencia produtos, variações, imagens, estoque e pedidos (alterar status).
- **ADMIN:** tudo que o gerente faz, mais gestão de usuários e papéis, cupons e relatório de eventos de rastreamento.

### 4.5 Rastreamento (pixel simulado)
Eventos como `page_view`, `view_item`, `add_to_cart`, `begin_checkout` e `purchase` são registrados **no próprio sistema** (tabela no banco), sem serviços externos. O relatório no admin é prioridade baixa.

### 4.6 Interface
Site **responsivo** (mobile-first), em **português do Brasil**. Sem app nativo.

---

## 5. Modelo de dados preliminar (Prisma)

Ponto de partida; refine na Etapa 1 e registre em ADR.

- **User:** id, name, email (único), passwordHash, role (`CUSTOMER` | `MANAGER` | `ADMIN`), timestamps.
- **Address:** pertence a User; destinatário, CEP, rua, número, complemento, bairro, cidade, UF, padrão.
- **Product:** name, slug, description, species, estimatedAge, style, careLevel, sunExposure, active.
- **ProductVariant:** pertence a Product; size (porte), pot (vaso), price, stockQuantity, sku.
- **ProductImage:** pertence a Product; url, alt, position.
- **Cart / CartItem:** usuário, variante, quantidade.
- **WishlistItem:** usuário, produto.
- **Order / OrderItem:** usuário, endereço (snapshot), subtotal, frete, desconto, total, status; itens com preço no momento da compra.
- **Payment:** pertence a Order; método (`PIX` | `CARD` | `BOLETO`), status (`APPROVED` | `DECLINED` | `PENDING`), referência simulada.
- **Coupon:** código, tipo (percentual ou valor fixo), valor, validade, limite de uso, ativo.
- **Review:** usuário, produto, nota (1 a 5), comentário.
- **TrackingEvent:** tipo, usuário (opcional), sessionId, payload (JSON), createdAt.

**Seed:** cerca de **20 bonsais** variados (espécies, estilos, portes e níveis de cuidado diferentes), com variações, usuários de teste dos três papéis e alguns pedidos de exemplo. Imagens são **placeholders gerados por IA** em um padrão de nomes fixo, para trocar pelas fotos reais depois sem mexer em código.

---

## 6. Identidade visual e design

**Direção:** moderno, **sem cara de "AI slop"**. Nome, logo e paleta serão **criados por IA e aprovados pelo time** na Etapa 0.

**Regras para evitar o aspecto genérico:**
- Proibido: gradientes roxo/azul genéricos, emojis como ícones, grades de cards idênticos com sombra padrão, textos vazios de marketing ("revolucione sua experiência"), tipografia padrão do navegador ou apenas Inter por inércia.
- Definir **design tokens** (cores, tipografia, espaçamento, raios, sombras) em um único lugar e usá-los em todas as telas. **Não improvisar estilos tela a tela.**
- Escolher tipografia e paleta de propósito, justificando em ADR (o assunto, bonsai, sugere contenção, textura e espaço em branco).
- Cuidar de hierarquia visual, ritmo de espaçamento, estados (hover, foco, vazio, carregando, erro) e acessibilidade (contraste, foco visível, rótulos).
- Copy em português natural, específico e curto.
- Imagens placeholder devem ser neutras e consistentes entre si.

---

## 7. Padrões de código

- **Idioma:** código (variáveis, funções, arquivos, comentários técnicos) em **inglês**. Textos da interface em **português do Brasil**. **Commits em português.** Documentação (README, ADRs, ai-log) em português.
- **Commits:** Conventional Commits com o tipo em inglês e a descrição em português. Exemplo: `feat: adiciona filtro de espécie no catálogo`.
- **Branches curtas** por tarefa: `feat/`, `fix/`, `docs/`, `chore/`, `test/`.
- **TypeScript `strict`**, sem `any` sem justificativa.
- **Contrato primeiro:** o back-end documenta a API com Swagger/OpenAPI e os tipos compartilhados ficam em `packages/shared`, para as duplas de front e back trabalharem em paralelo (o front pode usar mocks até a API existir).
- **Validação de entrada** em todos os endpoints; erros com formato padronizado.
- **Senhas** com hash forte (bcrypt ou argon2); nunca logar dados sensíveis.
- **Autorização por papel** aplicada no back-end (nunca confiar só no front).
- **Comentários:** explicar o "porquê", não o "o quê". Código enxuto, mas legível para quem é iniciante/mediano. **Não sacrifique clareza por concisão.**
- **Funções pequenas**, nomes descritivos, sem duplicação.

---

## 8. Qualidade e testes

- **Unitários e integração** cobrindo regras de negócio: carrinho, preço e variações, frete, cupons, pedidos, estoque, permissões.
- **E2E (Playwright), apenas fluxos críticos:** (1) cadastro e login, (2) busca com filtros e página de produto, (3) carrinho até checkout com pagamento simulado, (4) gestão de produto no admin, (5) acesso negado por papel.
- **CI obrigatório** em todo PR: lint, testes e build. A `main` é protegida e só aceita merge com CI verde.
- **Segurança básica** na Etapa 5: validação de entrada, autenticação, rate limit em rotas sensíveis, auditoria de dependências.

---

## 9. Skills e ferramentas de apoio

- **graphify:** converte o projeto em um grafo; **consulte os nós do grafo antes de ler arquivos soltos**. Regenere o grafo a cada merge (hook ou CI) e registre a data da última geração.
- **ponytail:** antes de gerar código, **busque se já existe solução** no projeto, em bibliotecas ou em padrões conhecidos; depois, faça uma passada de enxugamento removendo texto e código desnecessários, **sem prejudicar a legibilidade**.
- Na Etapa 0, **testar e documentar** como cada skill funciona em cada ferramenta de IA (as descrições vieram da equipe e devem ser confirmadas na documentação oficial de cada uma).

### Uso das IAs por função (sugestão inicial, ajustável pelo time)

| Função | Ferramenta sugerida |
|---|---|
| Implementação e refatoração em vários arquivos | Claude Code |
| Interface, design e verificação visual do front | Antigravity |
| Revisão cruzada e análise de contexto longo | Gemini |
| Brainstorming, textos e geração de imagens placeholder | ChatGPT |

Regra de ouro: **quem gera o código não é quem aprova**. Toda revisão envolve um humano que não gerou o PR e, quando útil, uma segunda IA diferente da que gerou.

---

## 10. Fluxo de cada tarefa

1. **Especificar** com critérios de aceite (em `docs/specs/`).
2. **Consultar o grafo** (graphify) para localizar contexto.
3. **Buscar referência** (ponytail) antes de gerar.
4. **Gerar** o código.
5. **Enxugar** (ponytail) sem perder clareza.
6. **Testar** (CI: lint, testes, build).
7. **Revisar** (humano + eventualmente outra IA).
8. **Registrar** no `ai-log` e atualizar o grafo.
9. **Integrar** na `main`.

### Template do Pull Request (`.github/pull_request_template.md`)

O PR deve conter: o que muda e por quê; critérios de aceite atendidos; **ferramenta de IA usada**; **prompt-chave**; **o que a IA errou ou precisou de ajuste**; dependências novas e justificativa; como testar; checklist (CI verde, testes adicionados, grafo atualizado, ai-log registrado).

### Registro no `ai-log`

**Manual, via template no PR.** Cada integrante registra ferramenta, prompt-chave, erros da IA e lições. Entradas de destaque podem virar uma seção do README ("Como foi feito com IA").

---

## 11. Cronograma e prioridades

| Etapa | Período | Foco |
|---|---|---|
| 0. Fundação e método | Semana 1 (09/11 a 15/11) | Repo, identidade, `AGENTS.md`, Git, skills, ai-log |
| 1. Especificação e arquitetura | Semanas 1 e 2 | User stories, ADRs, modelagem, API, wireframes |
| 2. Base técnica | Semanas 2 e 3 | Monorepo, banco, CI, autenticação, Docker Compose |
| 3. Núcleo da loja (MVP) | Semanas 3 a 5 | Catálogo, produto, carrinho, checkout simulado, pedidos, área do cliente |
| 4. Admin e extras | Semanas 5 e 6 | Painel admin, avaliações, lista de desejos, pixel, responsividade |
| 5. Qualidade e polimento | Semanas 6 e 7 | E2E, segurança, desempenho, dados e fotos reais |
| 6. Vitrine para recrutadores | Semana 7 (em paralelo desde a semana 1) | README, demo, "Como foi feito com IA" |

**Congelar o escopo do MVP no fim da Etapa 3.**

**Se o prazo apertar, corte nesta ordem:** (1) relatório de eventos do pixel no admin, (2) cupons. **Avaliações e lista de desejos permanecem no escopo.**

### Divisão do trabalho (por camada)
- **Dupla de back-end:** API, banco, autenticação, regras de negócio, testes da API.
- **Dupla de front-end:** interface, design system, integração com a API, testes do front.
- **Pontos de sincronização:** contrato da API (Swagger + `packages/shared`) definido antes de cada módulo; revisão cruzada entre as duplas.

---

## 12. Critérios de pronto

**Por tarefa:** critérios de aceite atendidos, testes passando, PR revisado por outra pessoa, ai-log registrado e grafo atualizado.

**Do projeto:** todos os fluxos do escopo rodando localmente com **um comando** (Docker Compose); README completo com screenshots/GIFs, vídeo de demonstração, instruções de execução, arquitetura e a seção "Como foi feito com IA" (ferramentas, fluxo, prompts de destaque, erros da IA, métricas como número de PRs, iterações e comparativo de tokens ou tempo com e sem graphify); testes cobrindo os fluxos críticos; nenhum segredo no repositório; licença **MIT**.

---

## 13. Fora do escopo

Operação comercial real, gateways de pagamento reais, NF-e, frete real, app nativo, deploy em produção, multi-idioma e multimoeda, marketplace com vários vendedores.

---

## 14. Sua primeira tarefa (Etapa 0)

**Não implemente funcionalidades ainda.** Comece apenas pela fundação e proponha o plano antes de gerar arquivos em massa:

1. Confirme que entendeu este documento, listando em poucas linhas as suposições e dúvidas que restarem.
2. Proponha o **nome da loja, a identidade visual (logo, paleta, tipografia) e os design tokens**, em 2 ou 3 direções distintas, seguindo as regras anti-"AI slop" da seção 6, para o time escolher.
3. Gere o esqueleto do monorepo (estrutura da seção 3), o `README.md` inicial, o `AGENTS.md` / `CLAUDE.md` com as regras deste documento, `docs/adr/` com o modelo de ADR e o **ADR-001 (stack)**, `docs/ai-log/`, o template de PR, a licença MIT e o workflow de CI inicial.
4. Descreva como instalar e testar graphify e ponytail neste repositório, e o que registrar sobre a compatibilidade com cada ferramenta de IA.
5. Pare e aguarde a revisão humana antes de seguir para a Etapa 1.