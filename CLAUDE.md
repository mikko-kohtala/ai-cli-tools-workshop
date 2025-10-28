# AI CLI Tools Workshop

Workshop exploring AI Command Line tools.

Built with Next.js 15 for presentation and interactive workshop tasks.

**Event Date:** October 28, 2025, 14:00–15:30
**Deployment:** https://ai-cli-tools-workshop.vercel.app

## Workshop Structure

- **Presentation** (`/presentation`) - 25min overview of AI CLI tools landscape
- **Workshop Tasks** (`/tasks/[1-4]`) - 1 hour hands-on exercises with Codex CLI

## Content Guidelines

### AI CLI Tool References

When creating or updating content, follow these naming conventions:

**Use Specific Product Names:**

- ✅ **Claude Code** (by Anthropic) - NOT "Claude-based CLIs" or "Claude CLI"
- ✅ **Codex CLI** (open-source, by OpenAI) - Primary workshop tool
- ✅ **Gemini CLI** (by Google) - NOT "Gemini-based CLIs"
- ✅ **Amp** (by Sourcegraph) - VS Code extension + CLI with subagent capabilities

**Keep Descriptions General:**

- Use capability-focused language: "uses latest Claude models" NOT "uses Claude Sonnet 4.5"
- Focus on features, not version numbers: "strong reasoning capabilities" NOT "state-of-the-art GPT-5"
- Avoid specific token limits or benchmarks that quickly become outdated

**Include Ecosystem Disclaimer:**
When listing tools or making comparisons, include:

> "Examples only—this ecosystem moves quickly and names/models evolve. Focus on capabilities and fit."

### Workshop Focus

- **Primary Tool:** Codex CLI (the workshop teaches this tool specifically)
- **Comparison Context:** Other tools (Claude Code, Gemini CLI, Amp) are mentioned for context and comparison
- **Approach:** Teach Codex CLI deeply while providing awareness of the broader AI CLI ecosystem

### Reasoning & Model Selection

**Claude Code:**

- Features thinking mode with keywords: `think`, `think hard`, `think harder`, `ultrathink`
- Describe as natural language reasoning control

**Codex CLI:**

- Uses reasoning levels: `minimal`, `medium`, `high`
- Supports multiple model providers via configuration
- Describe model switching via `--model` flag or `/model` command

## Tech Stack

- **Frontend**: Next.js 15 (App Router), React 19, TailwindCSS
- **UI Components**: shadcn/ui with Radix UI primitives
- **Styling**: Simple and clean design patterns (sidebar navigation, card layouts)
- **Deployment**: Vercel

## Styling & Dark Mode

The application uses TailwindCSS with full dark mode support. All components should work seamlessly in both light and dark themes.

### Dark Mode Pattern

When adding or modifying components, always include dark mode variants for light backgrounds:

```tsx
// Light backgrounds
bg-*-50      → bg-*-50 dark:bg-*-950/30
bg-*-100     → bg-*-100 dark:bg-*-900/30
bg-white     → bg-white dark:bg-slate-900 (for content cards)
bg-white     → bg-white dark:bg-slate-950 (for code blocks)

// Text colors
text-*-600   → text-*-600 dark:text-*-400 (for icons and accent colors)
text-blue-600 → text-blue-600 dark:text-blue-400 (for links)

// Examples
className="bg-blue-50 dark:bg-blue-950/30"
className="text-purple-600 dark:text-purple-400"
className="bg-white dark:bg-slate-900"
```

**Note:** The presentation section (`/presentation`) and root page (`/`) have been fully updated with dark mode support. When adding new features, maintain this pattern for consistency.

## Content Accuracy & Updates

### Verified Tool Information (as of October 2025)

All mentioned AI CLI tools are real, actively maintained products:

- **Claude Code** - Launched Feb 2025 by Anthropic, web version Oct 2025
- **Codex CLI** - Open-source, supports multiple LLM providers (OpenAI, Anthropic, Google)
- **Gemini CLI** - Launched June 2025 by Google, reached 1M+ users by Oct 2025
- **Amp** - By Sourcegraph, VS Code extension + CLI with Oracle reasoning and subagents

### When Updating Content

1. **Verify Claims via Internet:** Always search the web to verify current information about tools, capabilities, and features before adding content
2. **Check Official Sources:** Consult official documentation, release notes, and announcements
3. **Avoid Version Lock-in:** Don't tie content to specific model versions
4. **Update Dates Carefully:** Event date, deployment URLs, and timeline references
5. **Research New Tools:** The AI CLI ecosystem evolves rapidly—verify tools exist and check current state via web search before referencing

### Workshop-Specific Context

- This is an educational workshop about AI coding assistants
- Attendees will hands-on learn Codex CLI during tasks
- Presentation provides broader ecosystem context
- Focus on principles that transfer across tools

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Key Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run linting
- `npm run format` - Format code
