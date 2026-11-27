---
name: agent-desktop
description: Control and inspect native desktop applications via the OS accessibility tree (UI Automation / AX API) using the observe-act-verify loop without brittle pixel matching.
---

# agent-desktop Skill

Use this skill when interacting with, automating, or verifying native desktop applications (Windows UI Automation, macOS AX API, Linux AT-SPI) directly through the accessibility tree using `agent-desktop`.

## Key Architectural Principles

1. **Accessibility Tree vs. Screenshots:**
   - Interacts semantically with native UI components (buttons, text inputs, windows, menus) instead of guessing pixel coordinates or relying on heavy visual OCR.
   - Headless by default: actions interact directly with nodes without hijacking the physical cursor or requiring mouse focus.

2. **The Observe-Act-Verify Loop:**
   - **Observe:** Take a snapshot of the target window to retrieve structured JSON with stable reference IDs (`@snapshot_id:eN`).
   - **Act:** Perform actions using the exact snapshot-scoped ref (e.g., `click '@s8f3k2p9:e1'`).
   - **Verify:** Take another snapshot to confirm the state change. If the UI changes or window refreshes, it throws a `STALE_REF` error, ensuring safety.

3. **PowerShell / Windows Quoting:**
   - Always quote element references containing `@` in PowerShell to avoid splatting (e.g., `'@s8f3k2p9:e2'`).

## Core CLI Reference

### 1. Status & Initialization
```powershell
agent-desktop status
agent-desktop skills get desktop
agent-desktop skills get platform
```

### 2. Observation (`snapshot`)
```powershell
# Interactive elements only of a running app
agent-desktop snapshot --app "NomeDoApp" -i

# Compact view to save tokens
agent-desktop snapshot --app "NomeDoApp" -i --compact

# Shallow structure for complex/large hierarchies
agent-desktop snapshot --skeleton --app "NomeDoApp"

# Inspect a specific subtree
agent-desktop snapshot --root '@s8f3k2p9:e3'
```

### 3. Interaction
```powershell
# Click
agent-desktop click '@s8f3k2p9:e1'

# Double click
agent-desktop double-click '@s8f3k2p9:e1'

# Type text into focused input
agent-desktop type "Texto a ser inserido"

# Set input value directly
agent-desktop set-value '@s8f3k2p9:e4' "Valor"

# Scroll
agent-desktop scroll --direction down --amount 5

# Press key combinations
agent-desktop key-combination "Ctrl+S"
```

## Antigravity Agent Guidelines

- Before interacting with native desktop apps, execute `agent-desktop status` to verify permissions and accessibility engine availability.
- Always observe (`snapshot`) first, extract the target `@snapshot_id:eN`, perform the action, and take a follow-up snapshot to confirm outcome.
- Never use bare un-scoped refs (like `@e1`); always use the snapshot token (like `'@s8f3k2p9:e1'`).
