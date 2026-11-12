# Spec Drift Verification Guide (VERIFY.md)

This protocol is executed when `/interview-me --verify <spec-file>` is run.

---

## Objective

Ensure that the actual codebase matches the commitments made in the specification document, catching:

1. **Unimplemented Acceptance Criteria:** Features described in the spec that were omitted from code.
2. **Architectural Drift:** Endpoints, schema columns, or component names that differ from the spec contract.
3. **Missing Safeguards:** Input validation, error handling, or security checks specified in the spec but skipped in implementation.
4. **Undocumented Features:** Scope creep or unapproved additions introduced during coding.

---

## Verification Protocol

1. **Read Spec File:**
   - Parse the target specification markdown file (e.g. `docs/specs/spec-<feature>.md`).
   - Extract all Acceptance Criteria, API endpoints, Data Models, and Edge Cases.

2. **Inspect Codebase:**
   - Locate files cited in the spec's Implementation Plan.
   - Use AST or grep/graphify tools to check routes, models, test suites, and handler functions.

3. **Check Acceptance Criteria:**
   - For each AC item:
     - Check whether code exists implementing the behavior.
     - Check whether corresponding automated tests (unit/integration/E2E) exist.

4. **Generate Drift Report:**
   Output a markdown summary table:

| Requirement / AC     | Status        | Code Location            | Test Coverage       | Notes                         |
| -------------------- | ------------- | ------------------------ | ------------------- | ----------------------------- |
| AC-1: Auth with JWT  | ✅ Complete   | `src/auth/jwt.ts`        | `test/auth.test.ts` | Fully compliant               |
| AC-2: Rate limiting  | ⚠️ Incomplete | `src/middleware/rate.ts` | ❌ None             | Implemented but missing tests |
| AC-3: Password reset | ❌ Missing    | —                        | —                   | Not yet implemented           |

5. **Action Plan:**
   Provide concrete next steps or PR feedback to achieve 100% compliance with the specification.
