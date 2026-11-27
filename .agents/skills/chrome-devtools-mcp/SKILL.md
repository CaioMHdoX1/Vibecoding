---
name: chrome-devtools-mcp
description: Integration guide and workflow for using the official Chrome DevTools MCP server for live browser inspection, visual verification, performance audits, console log debugging, and UI automation.
---

# chrome-devtools-mcp

Use this skill when inspecting the running frontend in Chrome, testing responsive layouts, checking browser console errors, verifying DOM elements, or analyzing Core Web Vitals.

## MCP Server Configuration

This tool connects AI agents directly to a live Chrome browser via the Chrome DevTools Protocol (CDP).

- **Command**: `npx`
- **Args**: `["-y", "chrome-devtools-mcp@latest"]`

### Client Configurations

#### 1. Claude Code / Antigravity (`.mcp.json`):
```json
{
  "mcpServers": {
    "chrome-devtools": {
      "command": "npx",
      "args": ["-y", "chrome-devtools-mcp@latest"]
    }
  }
}
```

#### 2. Cursor (`.cursor/mcp.json`):
```json
{
  "mcpServers": {
    "chrome-devtools": {
      "command": "npx",
      "args": ["-y", "chrome-devtools-mcp@latest"]
    }
  }
}
```

## Available Capabilities & Workflows

1. **Visual Inspection & Screenshots:**
   - Capture snapshots and screenshots of the running app (e.g. `localhost:5173`) to visually review layouts and alignments.
   - Test responsive breakpoints (mobile, tablet, desktop).

2. **Console & Network Debugging:**
   - Inspect console warnings and unhandled exceptions in real time.
   - Track failing network requests and API endpoints.

3. **User Flow Automation & Testing:**
   - Click, type, navigate, and test interactive components (e.g., test filters, search inputs, adding products to cart).

4. **Performance & Core Web Vitals:**
   - Measure Largest Contentful Paint (LCP), Cumulative Layout Shift (CLS), and interaction responsiveness.
