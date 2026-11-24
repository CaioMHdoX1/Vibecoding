---
name: shadcn-ui-mcp-server
description: Integration guide and workflow for discovering, exploring, and installing components and blocks from the shadcn/ui registry using the official shadcn MCP server.
---

# shadcn-ui-mcp-server

Use this skill when interacting with, discovering, or installing `shadcn/ui` components and blocks.

## MCP Server Configuration

This tool connects AI coding assistants directly to shadcn component registries.

- **Command**: `npx`
- **Args**: `["shadcn@latest", "mcp"]`

### Client Configurations

#### 1. Claude Code / Antigravity (`.mcp.json`):
```json
{
  "mcpServers": {
    "shadcn": {
      "command": "npx",
      "args": ["shadcn@latest", "mcp"]
    }
  }
}
```

#### 2. Cursor (`.cursor/mcp.json`):
```json
{
  "mcpServers": {
    "shadcn": {
      "command": "npx",
      "args": ["shadcn@latest", "mcp"]
    }
  }
}
```

## Available Capabilities & Workflows

1. **Component Discovery & Search:**
   - Search for official components, UI blocks, and third-party registry items via natural language.
   - Inspect registry item schemas, dependencies, and Tailwind classes before installing.

2. **Installation:**
   - Add components using standard shadcn CLI commands (e.g., `pnpm dlx shadcn@latest add button`).
   - Ensures correct alignment with your project's `components.json` configuration and CSS variables.
