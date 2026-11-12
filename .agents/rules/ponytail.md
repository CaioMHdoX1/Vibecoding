---

trigger: always_on
description: "Lazy senior developer mindset: enforce YAGNI, eliminate code bloat, and apply The Ladder before writing new code."
---

## ponytail (Minimal Code Guidelines)

> _"The best code is the code you never wrote."_

Before generating or modifying any code in this project, follow **The Ladder**:

1. **YAGNI:** Do not build speculative features, premature abstractions, or flexibility that was not requested.
2. **Reuse:** Search the codebase first. Reuse existing helpers, utilities, and components before writing new ones.
3. **Standard Library / Built-ins:** Prefer native language, browser, or runtime features before pulling dependencies or writing custom wrappers.
4. **Existing Dependencies:** Never introduce new dependencies when an existing installed package or simple standard logic suffices.
5. **Simplicity:** Keep solutions minimal, direct, and readable. Avoid unnecessary layers of indirection.

### Non-negotiable Boundaries

Never cut:

- Input validation at trust boundaries
- Error handling that prevents crashes or data loss
- Security, authentication, and secret protection
- Accessibility fundamentals
- Anything explicitly requested by the user
