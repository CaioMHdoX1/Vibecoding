# Style Presets for interview-me Specifications

Choose or adapt the style preset matching the scope of the task.

---

## 1. Preset: `full` (Default - Complete System / Feature Spec)

Recommended for complex features spanning frontend, backend, database, and third-party integrations (e.g. Checkout Flow, User Auth, Admin Dashboard).

### Target Structure:

```markdown
# Specification: [Feature Name]

> **Status:** Draft | Approved | In Progress | Completed
> **Author:** [Name] · **Reviewed by:** [Architect / AI] · **Date:** YYYY-MM-DD
> **Related Issue / PR:** #XX

## 1. Overview & Problem Statement

- **Problem:** What pain point does this solve?
- **Solution:** High-level summary of the implementation.
- **Goals:** 2-4 measurable objectives.
- **Non-Goals:** What will explicitly NOT be implemented in this iteration.

## 2. User Stories & Acceptance Criteria

### US-1: [User Story Title]

As a [user type], I want to [action] so that [benefit].

- [ ] **AC-1.1:** Given [condition], when [action], then [outcome].
- [ ] **AC-1.2:** Given [invalid condition], when [action], then [error returned].

## 3. Architecture & Data Flow

\`\`\`mermaid
sequenceDiagram
actor User
participant Frontend
participant Backend
participant DB
User->>Frontend: Action
Frontend->>Backend: API Request
Backend->>DB: Query / Mutation
DB-->>Backend: Result
Backend-->>Frontend: HTTP Response
Frontend-->>User: Visual Update
\`\`\`

## 4. Data Models & Schemas

- Fields, types, relationships, nullability, unique constraints, and indexes.

## 5. API Contracts

### `POST /api/v1/resource`

- **Headers:** `Authorization: Bearer <token>`
- **Request Body:** JSON schema
- **Responses:**
  - `200 OK`: Success payload
  - `400 Bad Request`: Validation errors
  - `401 Unauthorized`: Missing or invalid auth
  - `409 Conflict`: Duplicate resource

## 6. Security, Validation & Trust Boundaries

- Input sanitization and validation rules.
- Authorization checks (roles / permissions).
- Rate limiting and secret handling.

## 7. Edge Cases & Failure Scenarios

| Scenario         | Expected Behavior                  | Recovery / Fallback                  |
| ---------------- | ---------------------------------- | ------------------------------------ |
| Database timeout | Log error, return 503              | Retry query with exponential backoff |
| Invalid payload  | Return 422 with field-level errors | Highlight fields in UI               |

## 8. Implementation Steps & Task Breakdown

1. [ ] **Step 1:** Database migration & schema models.
2. [ ] **Step 2:** Backend endpoints & unit tests.
3. [ ] **Step 3:** Frontend UI components & form validation.
4. [ ] **Step 4:** Integration & E2E tests.
```

---

## 2. Preset: `minimal` (Lightweight / Component Spec)

Recommended for smaller tasks, single endpoints, UI components, or bug fixes requiring architectural clarity.

### Target Structure:

```markdown
# Spec: [Component / Task Name]

## Objective

One paragraph description of what is being built and why.

## Acceptance Criteria

- [ ] Clear requirement 1
- [ ] Clear requirement 2
- [ ] Error state handled properly

## Technical Design

- **Files to modify / create:** `src/...`
- **Dependencies:** None (uses existing packages)
- **Key functions / classes:** Signatures and return types

## Edge Cases

- Behavior on empty state, network failure, or duplicate input.
```

---

## 3. Preset: `adr` (Architecture Decision Record)

Recommended when the interview resolves a major architectural debate (e.g. database choice, state management, caching strategy).

### Target Structure:

```markdown
# ADR-[Number]: [Title]

- **Status:** Proposed | Accepted | Superseded
- **Deciders:** [Team]
- **Date:** YYYY-MM-DD

## Context

What is the technical problem we are facing and what constraints exist?

## Options Considered

1. **Option A:** Pros and cons.
2. **Option B:** Pros and cons.

## Decision

We choose [Option] because [rationale].

## Consequences

- **Positive:** Benefits gained.
- **Negative:** Trade-offs or technical debt accepted.
```
