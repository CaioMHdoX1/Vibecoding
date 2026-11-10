---
name: interview-me
description: "Conducts a rigorous, Socratic senior-architect interview to turn vague ideas, requirements, or issue notes into production-grade engineering specifications before coding."
---

# /interview-me

Turn vague ideas, rough notes, or issue tickets into production-grade engineering specifications through a structured, Socratic interview process.

> *"Think before coding: a 10-minute architecture interview saves 10 hours of debugging and rewrites."*

---

## When to Use

- Before writing any code for a new feature, module, or user story.
- When an issue or task description is ambiguous, incomplete, or lacks acceptance criteria.
- To challenge assumptions, uncover edge cases, verify security trust boundaries, and establish clear non-goals.
- To detect implementation drift against an existing specification (`--verify`).

---

## Commands & Usage

```
/interview-me <feature-name-or-idea>    # Start an interactive interview from a brief idea
/interview-me <path-to-notes.md>        # Interview based on an existing requirements draft
/interview-me <issue-url>               # Interview based on a GitHub/GitLab issue
/interview-me --verify <path-to-spec>   # Verify current codebase against an existing spec
/interview-me --preset minimal          # Use lightweight spec style (see STYLE_PRESETS.md)
/interview-me --preset full             # Full enterprise/system architecture style (default)
```

---

## The 6-Phase Spec Interview Workflow

### Phase 1: Intake & Context Discovery
1. **Analyze Input:** Read the user's prompt, draft document, or issue description.
2. **Scan Codebase:** Check if related code, models, or schemas already exist in the repository (e.g. check graphify knowledge graph or directory structures).
3. **Identify Ambiguities:** Map out what is clear, what is missing, and what assumptions are unvalidated.

### Phase 2: The Socratic Interview Loop
1. **Ask One Question at a Time:** Never overwhelm the user with a wall of 5-10 questions. Group tightly related inquiries together if needed, but prefer single, high-leverage questions.
2. **Role:** Act as a critical, pragmatic senior software architect.
3. **Active Pushback:**
   - Challenge unnecessary complexity and premature generalizations (aligning with `ponytail` / YAGNI).
   - Hard-block security oversights (auth, validation at trust boundaries, rate limits, data exposure).
   - Probe failure modes: *"What happens if network drops?", "What if the user submits twice?", "How are partial failures rolled back?"*
   - Uncover hidden constraints: performance targets, data retention, localization, and compatibility.
4. **Offer Concrete Options:** When asking design questions, present 2-3 feasible approaches with trade-offs and recommend one.

### Phase 3: Trade-offs & Decisions Log
1. Summarize key decisions made during the interview.
2. Formulate explicit **Non-Goals** (what will NOT be built in this iteration).
3. If relevant, propose creating an Architectural Decision Record (`docs/adr/ADR-XXX.md`).

### Phase 4: Production-Grade Specification Generation
Once consensus is reached, compile the complete specification and save it to `docs/specs/spec-<feature>.md`.

The specification must include:
1. **Executive Summary & Business Value**
2. **User Stories & Acceptance Criteria** (Gherkin syntax `Given-When-Then` or strict checklist)
3. **Architecture & Component Design**
4. **Data Models, Schemas & Migrations**
5. **API / Interface Contracts** (Endpoints, payload types, status codes, error models)
6. **Security & Trust Boundaries** (Input validation, auth, permissions)
7. **Edge Cases & Failure Handling**
8. **Testing Strategy** (Unit, Integration, E2E)
9. **Implementation Checklist & Order of Execution**

### Phase 5: Architecture Diagrams (Mermaid)
Embed clean, renderable Mermaid diagrams inside the specification:
- Sequence diagrams for API / Auth / Checkout flows.
- Entity-Relationship (ER) diagrams for database models.
- State diagrams for status lifecycles (e.g. Order: `pending` → `paid` → `shipped`).

### Phase 6: Drift Verification (`--verify`)
When invoked as `/interview-me --verify docs/specs/spec-<feature>.md`:
1. Read the specification's acceptance criteria and technical contracts.
2. Inspect the current codebase to check implementation status.
3. Generate a Drift Report:
   - ✅ Completed items
   - ⚠️ Deviations from architecture or missing validations
   - ❌ Unimplemented requirements
   - 💡 Recommendations for alignment

---

## Supporting Resources

- [STYLE_PRESETS.md](./STYLE_PRESETS.md): Spec format templates and customization guidelines.
- [VERIFY.md](./VERIFY.md): Protocol for automated drift detection and audits.
