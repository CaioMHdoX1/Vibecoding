---
name: magic-mcp
description: Integration guide and workflow for searching, generating, and installing 21st.dev (Magic MCP) components and brand logos into React/Tailwind/shadcn projects.
---

# magic-mcp (21st.dev MCP)

Use this skill to search, generate, and install community components, animations, and brand logos from the 21st.dev ecosystem.

## MCP Server Configuration

Connects your AI agent to 21st.dev's catalog of 10,000+ UI components and AI UI generator.

- **Command**: `npx`
- **Args**: `["-y", "@21st-dev/cli@latest", "mcp", "start"]` (ou via wrapper `magic-mcp`)

### Client Configurations

#### 1. Claude Code / Antigravity (`.mcp.json`):
```json
{
  "mcpServers": {
    "magic": {
      "command": "npx",
      "args": ["-y", "@21st-dev/cli@latest", "mcp", "start"]
    }
  }
}
```

#### 2. Cursor (`.cursor/mcp.json`):
```json
{
  "mcpServers": {
    "magic": {
      "command": "npx",
      "args": ["-y", "@21st-dev/cli@latest", "mcp", "start"]
    }
  }
}
```

## Available Capabilities & Workflows

1. **Search & Install Components:**
   - Search the 21st.dev registry for specialized UI effects (Magic UI, Aceternity, animations, hero blocks).
   - Compatible with `shadcn/ui` registries and Tailwind CSS tokens.

2. **Brand SVG Logo Search:**
   - Query JSX/TSX SVG code for company and brand logos to build landing pages, client testimonials, and tech stack showcases.

3. **AI UI Generation:**
   - Draft and generate novel UI variants based on natural language descriptions when no existing component matches.
