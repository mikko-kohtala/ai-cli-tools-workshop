# AI CLI Tools Workshop

> Learn to use AI-powered command line tools in your development workflow

**Live Workshop:** [ai-cli-tools-workshop.vercel.app](https://ai-cli-tools-workshop.vercel.app)

---

## Overview

An interactive workshop exploring the landscape of AI command line tools, with hands-on exercises using Codex CLI. Learn how to integrate AI assistants into your terminal workflow for faster, smarter development.

### What's Included

- **📊 Presentation** (25 minutes) — Overview of AI CLI tools ecosystem, key concepts, and architecture patterns
- **🛠️ 4 Hands-On Tasks** (60 minutes) — Progressive exercises from basics to building a complete arcade game

### Workshop Structure

| Task       | Focus        | What You'll Build                                       |
| ---------- | ------------ | ------------------------------------------------------- |
| **Task 1** | CLI Basics   | Get started with Codex CLI, learn sessions and commands |
| **Task 2** | Your Project | Build any project using AGENTS.md constraints           |
| **Task 3** | Power Tools  | Custom prompts, automation, and MCP server integration  |
| **Task 4** | Arcade Game  | Retro game using all techniques learned                 |

## What You'll Learn

- ✅ Overview of AI CLI tools (Codex CLI, Claude Code, Gemini CLI, Amp)
- ✅ Planning and executing code changes with AI assistance
- ✅ Custom prompts, automation, and workflow integration
- ✅ Controlling reasoning depth for different task types
- ✅ Extending capabilities with MCP (Model Context Protocol) servers
- ✅ Best practices for AI-assisted development

## Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **UI:** [shadcn/ui](https://ui.shadcn.com/) with [Radix UI](https://www.radix-ui.com/)
- **Styling:** [TailwindCSS](https://tailwindcss.com/) with full dark mode support
- **Deployment:** [Vercel](https://vercel.com/)
- **Package Manager:** [Bun](https://bun.sh/)

## Quick Start

### Prerequisites

- Node.js >= 22
- Bun >= 1.4

### Development

```bash
# Install dependencies
bun install

# Start development server
bun run dev
```

The workshop will be available at `http://localhost:3000`

### Build

```bash
# Build for production
bun run build

# Type checking
bun run typecheck

# Linting
bun run lint

# Format code
bun run format
```

## Project Structure

```
apps/nextjs/
├── app/
│   ├── presentation/          # Workshop presentation slides
│   │   └── _components/       # Presentation sections
│   ├── tasks/                 # 4 hands-on workshop tasks
│   │   ├── 1/                 # Task 1: Getting Started
│   │   ├── 2/                 # Task 2: Build Your Project
│   │   ├── 3/                 # Task 3: Advanced Features
│   │   └── 4/                 # Task 4: Arcade Game
│   └── page.tsx               # Landing page
├── components/
│   └── ui/                    # shadcn/ui components
└── ...
```

## Workshop Focus

**Primary Tool:** [Codex CLI](https://developers.openai.com/codex/cli) (open-source, by OpenAI)

**Comparison Context:** Other tools like Claude Code, Gemini CLI, and Amp are discussed for ecosystem awareness

## Contributing

This is a workshop repository. If you find issues or have suggestions:

1. Open an issue describing the problem
2. For fixes, submit a PR with clear description
3. Follow the existing code style (oxlint and oxfmt configured)
