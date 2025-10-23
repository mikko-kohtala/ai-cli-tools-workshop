# AI CLI Tools Workshop

Workshop exploring AI Command Line tools.

Built with Next.js 15 for presentation and interactive workshop tasks.

**Event Date:** October 28, 2025, 14:00–15:30
**Deployment:** https://ai-cli-tools-workshop.vercel.app

## Workshop Structure

- **Presentation** (`/presentation`) - 25min overview of AI CLI tools landscape
- **Workshop Tasks** (`/tasks/[1-4]`) - 1 hour hands-on exercises with Codex CLI

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
