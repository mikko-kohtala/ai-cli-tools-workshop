# AI Context: Next.js + Convex Monorepo

## Architecture

- `apps/nextjs` - Next.js 15 app (React 19, TailwindCSS 4)
- **Next.js app**: `apps/nextjs/app/` (App Router)
- **Convex schema**: `packages/database/convex/schema.ts`
- **Components**: `apps/nextjs/components/`

## Tech Specifics

- **Convex**: Real-time database, queries auto-generated to `convex/_generated`
- **Auth**: Better Auth + Convex plugin (not separate auth tables)
- **Styling**: Tailwind 4 + Radix UI primitives + CVA
- **Schemas**: users (email), todos (text, isCompleted, userId)

## Development Workflow

1. Run `pnpm dev` (starts both Convex dev + Next.js)
2. Convex auto-generates types on schema changes
3. Next.js uses workspace dependency `@acme/database`

## Commands

- `pnpm dev` - Start all services
- `pnpm build` - Build everything
- `pnpm check` - Biome lint+format
- `pnpm typecheck` - Biome lint+format
