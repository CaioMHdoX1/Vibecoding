# AI Log: Etapa 0 - Fundação, Identidade Misho Bonsai e Estrutura do Monorepo

- **Data:** 2026-11-10
- **Autor / Integrante:** Time Misho Bonsai + Antigravity
- **Ferramenta de IA Utilizada:** Antigravity (Google)
- **PR Relacionado:** #1 (Fundação do Monorepo)

---

## 1. Prompt(s) Chave Utilizado(s)
```text
/interview-me quero que leia o arquivo situado na raiz do projeto chamado "PROMPT.md" e comece a me questionar sobre o projeto
```

## 2. Decisões Técnicas e Raciocínio da IA
- **Identidade da Loja:** Escolhida a estética Wabi-Sabi ("Misho Bonsai"), priorizando materiais naturais (linho cru, musgo, argila, tinta sumi-e) para evitar a aparência genérica de layouts de IA.
- **Validação:** Adotado Zod em `packages/shared` para permitir tipagem compartilhada entre NestJS e React sem duplicidade de schemas.
- **Skills:** Utilizadas as skills `interview-me` para condução socrática dos requisitos, `ponytail` para evitar over-engineering e `graphify` para manter a rastreabilidade do código.

## 3. Erros, Limitações ou Alucinações da IA
- Inicialmente foi preciso alinhar os limites do terminal e encoding de caracteres no PowerShell Windows para garantir arquivos UTF-8 consistentes em `GRAPH_REPORT.md` e JSONs de configuração.
- Atenção redobrada para não instalar bibliotecas desnecessárias no NestJS e React (mantendo aderência ao *ponytail*).

## 4. Lições Aprendidas e Dicas para o Time
- A definição prévia dos contratos em `packages/shared` destrava o trabalho em paralelo das duplas de front-end e back-end antes mesmo da API estar implementada.
- O uso de `docker-compose.yml` simplifica drasticamente a configuração de banco MySQL para todos os integrantes.
