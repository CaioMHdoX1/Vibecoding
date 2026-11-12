---

name: interview-me
description: "Start a Socratic engineering interview to draft technical specifications or verify implementation drift."
---

# Workflow: interview-me

Execute the `interview-me` skill to conduct an architectural interview, draft specifications, or verify implementation drift.

- When given a feature name, user story, or notes file: conduct an interactive one-question-at-a-time interview probing edge cases, trust boundaries, and architecture before generating a spec in `docs/specs/`.
- When invoked with `--verify <spec-file>`: run the verification protocol in `VERIFY.md` to detect drift between the spec and current code.
- Follow the guidelines in `.agents/skills/interview-me/SKILL.md`.
