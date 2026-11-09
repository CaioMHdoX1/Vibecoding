# Protocolo do Projeto: E-commerce de Bonsai desenvolvido 100% com IA

> **Status:** rascunho v1.0 · **Criado em:** 09/11/2026 · **Prazo final:** 31/12/2026
> **Equipe:** 4 pessoas (nível iniciante/mediano) · **Natureza:** projeto de portfólio, sem fins comerciais

---

## 1. Visão geral

### 1.1 Objetivo geral

Construir um e-commerce de bonsai completo, sem fins comerciais, desenvolvido integralmente por ferramentas de IA e revisado por humanos, para demonstrar a recrutadores domínio prático de desenvolvimento assistido por IA.

### 1.2 Objetivos específicos

- Entregar um produto funcional: front-end responsivo, back-end próprio, painel administrativo e checkout simulado.
- Documentar o processo (prompts, decisões, erros e acertos da IA) de forma visível no repositório.
- Demonstrar trabalho em equipe e engenharia de qualidade: testes, CI, revisão de código e padrões.
- Deixar o repositório fácil de rodar e de entender para quem o visitar no GitHub.

### 1.3 Público-alvo do projeto

Recrutadores e avaliadores técnicos que visitarão o repositório. O "cliente" fictício da loja é o público amplo brasileiro.

### 1.4 Regras do projeto

1. **Nenhuma linha de código é escrita manualmente.** Todo código é gerado por IA.
2. **Todo código passa por revisão humana** via Pull Request antes de entrar na `main`.
3. Os prompts têm liberdade de estilo, mas **decisões relevantes e prompts-chave são registrados**.
4. Pagamento, estoque, frete e fiscal são **simulados**; nenhuma transação real existe.
5. A regra de "100% IA" é declarada de forma transparente no README.

### 1.5 Fora do escopo

Operação comercial real, emissão de NF-e, integração com gateways de pagamento reais, app mobile nativo, deploy em produção, multi-idioma e multimoeda.

---

## 2. Escopo funcional

| Área | Itens |
|---|---|
| **Loja** | Catálogo, busca com filtros, página de produto com variações, carrinho, lista de desejos, cupons, avaliações |
| **Cliente** | Cadastro, login, perfil, endereços, histórico de pedidos |
| **Checkout** | Frete simulado, tela de pagamento simulada (Pix, cartão, boleto), confirmação de pedido |
| **Admin** | Gestão de produtos, pedidos, cupons e usuários, com perfis de permissão |
| **Nicho (bonsai)** | Atributos: espécie, idade, estilo, porte, nível de cuidado, exposição ao sol |
| **Marketing** | Pixel de rastreamento (simulado ou em modo de teste) |
| **Interface** | Site responsivo (sem app nativo) |

**Decisões de simulação:**
- **Estoque:** simples, por unidade, apenas para dar realismo à interface.
- **Frete:** cálculo simulado (valor fixo ou por região).
- **Pagamento:** a tela existe, mas nenhuma transferência é realizada.

---

## 3. Ferramentas e skills

### 3.1 Ferramentas de IA

Claude Code, Antigravity, Gemini, ChatGPT e outras. Cada integrante pode usar a sua, mas todas seguem os mesmos arquivos de contexto do projeto.

### 3.2 Skills de apoio

| Skill | Função | Problema que resolve |
|---|---|---|
| **graphify** | Converte o projeto em um grafo; a IA consulta os nós em vez de ler todos os arquivos | Contexto grande demais, custo de tokens e agentes que se perdem no repositório |
| **ponytail** | Busca referências e soluções existentes antes de gerar código e enxuga o resultado, removendo texto desnecessário | Reinvenção da roda, código redundante e verboso |

> **Nota:** as descrições acima partem da explicação da equipe. Antes da Etapa 0, confirmar na documentação oficial de cada skill a instalação, os limites e a compatibilidade com cada ferramenta de IA usada.

### 3.3 Arquivos de contexto para os agentes

- `AGENTS.md` / `CLAUDE.md`: regras do projeto, padrões de código, estrutura de pastas, quando e como usar graphify e ponytail.
- `docs/adr/`: registros de decisões de arquitetura.
- `docs/ai-log/`: prompts relevantes, resultados e lições aprendidas.
- `docs/specs/`: especificações e user stories escritas antes de gerar código.

---

## 4. Fluxo de trabalho (ciclo de cada tarefa)

1. **Especificar:** escrever a tarefa com critérios de aceite.
2. **Consultar contexto (graphify):** a IA localiza no grafo os módulos, funções e dependências relacionados.
3. **Buscar referência (ponytail):** verificar se já existe solução no projeto, em bibliotecas ou em padrões conhecidos.
4. **Gerar:** a IA produz o código com o contexto reduzido e focado.
5. **Otimizar (ponytail):** passada de enxugamento, sem sacrificar a clareza.
6. **Testar:** o CI roda lint, testes e build.
7. **Revisar:** outro integrante revisa o Pull Request (uma segunda IA pode atuar como revisora adicional).
8. **Registrar e atualizar:** prompts relevantes vão para o `ai-log` e o grafo é regenerado.
9. **Integrar:** merge na `main`.

### 4.1 Convenções de Git

- Branches curtas, uma por tarefa (`feat/`, `fix/`, `docs/`, `chore/`).
- Commits padronizados (Conventional Commits).
- Pull Requests pequenos, com descrição, critérios de aceite e indicação da IA utilizada.
- Revisão obrigatória por pelo menos 1 integrante que não gerou o código.
- `main` protegida: merge só com CI verde.
- Toda dependência nova exige justificativa no PR.

---

## 5. Cronograma

Restam cerca de 7 semanas. A última semana funciona como margem de segurança.

| Etapa | Período | Foco |
|---|---|---|
| 0. Fundação e método | Semana 1 (09/11 a 15/11) | Repositório, identidade, contexto dos agentes, Git, skills |
| 1. Especificação e arquitetura | Semanas 1 e 2 | Requisitos, stack, modelagem, wireframes, divisão do trabalho |
| 2. Base técnica | Semanas 2 e 3 | Projetos base, banco, CI, autenticação, ambiente local |
| 3. Núcleo da loja (MVP) | Semanas 3 a 5 | Catálogo, carrinho, checkout simulado, pedidos, área do cliente |
| 4. Admin e extras | Semanas 5 e 6 | Painel admin, cupons, avaliações, pixel, responsividade |
| 5. Qualidade e polimento | Semanas 6 e 7 | Testes E2E, segurança, desempenho, dados e fotos reais |
| 6. Vitrine para recrutadores | Semana 7 (em paralelo desde a semana 1) | README final, demo, seção "Como foi feito com IA" |

### Etapa 0: Fundação e método
- Definir nome, identidade visual, logo e paleta (a IA cria, o time aprova).
- Criar o repositório, o README inicial e a estrutura de pastas.
- Escrever `AGENTS.md`/`CLAUDE.md` com padrões e regras.
- Definir o fluxo de Git e proteger a `main`.
- Instalar e configurar graphify e ponytail; testar cada uma em todas as ferramentas de IA e documentar o que funciona onde.
- Criar `docs/ai-log` e o modelo de ADR.
- Gerar o primeiro grafo (ainda pequeno).

### Etapa 1: Especificação e arquitetura
- Levantar requisitos e escrever user stories com critérios de aceite.
- Escolher a stack com justificativa em ADR (ver seção 7).
- Modelar o banco de dados e desenhar a API.
- Criar wireframes das telas principais.
- Definir padrão claro de pastas e nomes (um grafo bom depende de estrutura organizada).
- Dividir o trabalho entre as 4 pessoas por módulo ou fatia vertical.

### Etapa 2: Base técnica
- Configurar back-end e front-end, banco, migrations e seeds.
- Montar o CI (lint, testes, build) desde o início.
- Implementar autenticação e controle de permissões.
- Ambiente local reproduzível com um comando (Docker Compose).
- Automatizar a regeneração do grafo (hook ou CI).

### Etapa 3: Núcleo da loja (MVP)
- Catálogo, filtros e busca com atributos de bonsai.
- Página de produto e variações.
- Carrinho e lista de desejos.
- Checkout simulado, frete simulado e pedidos.
- Área do cliente.
- **Congelar o escopo do MVP ao final desta etapa.**

### Etapa 4: Painel admin e extras
- CRUD de produtos, pedidos, cupons e usuários com permissões.
- Cupons, avaliações e pixel.
- Revisão de responsividade e acessibilidade.

### Etapa 5: Qualidade e polimento
- Testes de integração e de ponta a ponta nos fluxos principais.
- Revisão de segurança básica (validação de entrada, autenticação, dependências).
- Ajustes de desempenho e UX.
- Varredura final com ponytail para código duplicado ou verboso.
- Dados de exemplo e fotos reais dos bonsais.

### Etapa 6: Vitrine para recrutadores
- README final: visão geral, screenshots/GIFs, vídeo de demonstração, como rodar e arquitetura.
- Seção **"Como foi feito com IA"**: ferramentas, fluxo, prompts de destaque, lições aprendidas e erros que a IA cometeu.
- Métricas simples: número de PRs, iterações, tempo por módulo, e comparativo de tokens ou tempo antes e depois do graphify.
- Contribuições de cada integrante visíveis no histórico.

---

## 6. Critérios de pronto

**Por tarefa (Definition of Done):**
- Critérios de aceite atendidos e testes passando no CI.
- PR revisado e aprovado por outro integrante.
- Prompts relevantes e decisões registrados.
- Grafo regenerado.

**Do projeto:**
- Todos os fluxos do escopo funcional rodando localmente com um comando.
- README completo com demonstração e seção sobre o uso de IA.
- Testes cobrindo os fluxos críticos (cadastro, login, carrinho, checkout, admin).
- Nenhum segredo ou credencial no repositório.

---

## 7. Decisões pendentes

| Item | Situação | Como resolver |
|---|---|---|
| **Stack** | Não definida | Pesquisar as opções mais usadas hoje, priorizando tecnologias bem suportadas por IA e com tipagem (por exemplo, TypeScript), e registrar a escolha em ADR na Etapa 1 |
| **Divisão de papéis** | Não definida | Preencher a tabela abaixo na Etapa 1 |
| **Nome, logo e paleta** | Serão criados | Etapa 0, gerados por IA e aprovados pelo time |
| **Compatibilidade das skills** | A confirmar | Teste em cada ferramenta de IA na Etapa 0 |

### Divisão de papéis (a preencher)

| Integrante | Módulo principal | Revisa o código de |
|---|---|---|
| Pessoa 1 | | |
| Pessoa 2 | | |
| Pessoa 3 | | |
| Pessoa 4 | | |

---

## 8. Riscos e mitigações

| Risco | Mitigação |
|---|---|
| Prazo curto (cerca de 7 semanas) | Congelar o MVP ao fim da Etapa 3; extras só com o núcleo pronto; manter a última semana como margem |
| Revisão difícil com nível iniciante/mediano | PRs pequenos, testes obrigatórios e revisão cruzada com outra IA |
| Código inconsistente entre várias IAs | Arquivos de contexto compartilhados, linter e padrões únicos |
| Conflitos de Git entre 4 pessoas | Divisão por módulos e branches curtas |
| Grafo desatualizado leva a respostas erradas | Regenerar a cada merge e registrar a data da última geração |
| Cada IA integra as skills de forma diferente | Testar na Etapa 0 e documentar o que funciona onde |
| Enxugar demais prejudica a legibilidade | Regra no `AGENTS.md`: otimizar sem sacrificar clareza; manter comentários que expliquem o "porquê" |
| Dependências desnecessárias sugeridas pela IA | Toda dependência nova exige justificativa no PR |
| Dependência de ferramentas externas | Documentar as ferramentas e garantir que o projeto rode localmente |

---

## 9. Estrutura sugerida do repositório

```
/
├── AGENTS.md
├── CLAUDE.md
├── README.md
├── PROTOCOLO.md
├── docker-compose.yml
├── docs/
│   ├── adr/
│   ├── ai-log/
│   └── specs/
├── backend/
├── frontend/
└── .github/
    └── workflows/
```

> A estrutura final dependerá da stack escolhida na Etapa 1.

---

## 10. Próximos passos imediatos

1. Confirmar a documentação oficial do graphify e do ponytail.
2. Definir a stack (ADR-001).
3. Preencher a divisão de papéis.
4. Criar o repositório e iniciar a Etapa 0.
