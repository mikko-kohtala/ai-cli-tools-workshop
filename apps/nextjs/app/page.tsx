import Link from "next/link";
import { Calendar, ExternalLink, Github, Presentation, Code2, Sparkles, Zap, Gamepad2 } from "lucide-react";

export default function Page() {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-8 p-8">
          {/* Hero Section */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h1 className="font-bold text-4xl md:text-5xl">AI CLI Tools Workshop</h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                Explore AI-powered command line tools through hands-on exercises
              </p>
            </div>

            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-5 w-5" />
              <span className="font-medium">October 28, 2025</span>
              <span>•</span>
              <span>14:00–15:30</span>
              <span>•</span>
              <span>90 minutes</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid gap-4 md:grid-cols-2">
            <a
              className="group flex items-center gap-3 rounded-lg border-2 border-slate-200 bg-slate-50 p-4 transition-all hover:border-slate-300 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-900/30 dark:hover:border-slate-700 dark:hover:bg-slate-900/50"
              href="https://github.com/mikko-kohtala/ai-cli-tools-workshop"
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 text-white dark:bg-slate-700">
                <Github className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">View on GitHub</h3>
                <p className="font-mono text-muted-foreground text-sm">github.com/mikko-kohtala/ai-cli-tools-workshop</p>
              </div>
              <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
            </a>

            <a
              className="group flex items-center gap-3 rounded-lg border-2 border-blue-200 bg-blue-50 p-4 transition-all hover:border-blue-300 hover:bg-blue-100 dark:border-blue-900 dark:bg-blue-950/30 dark:hover:border-blue-800 dark:hover:bg-blue-950/50"
              href="https://ai-cli-tools-workshop.vercel.app"
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white dark:bg-blue-500">
                <ExternalLink className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">Workshop URL</h3>
                <p className="font-mono text-muted-foreground text-sm">ai-cli-tools-workshop.vercel.app</p>
              </div>
              <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
            </a>
          </div>

          {/* What You'll Build */}
          <div className="space-y-4">
            <h2 className="font-semibold text-2xl">What You'll Build</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-lg border bg-white p-4 dark:bg-slate-900">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/30">
                  <Code2 className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="mb-2 font-semibold text-sm">Task 1: CLI Basics</h3>
                <p className="text-muted-foreground text-xs">
                  Get started with Codex CLI and learn essential commands
                </p>
              </div>

              <div className="rounded-lg border bg-white p-4 dark:bg-slate-900">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30">
                  <Sparkles className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="mb-2 font-semibold text-sm">Task 2: Your Project</h3>
                <p className="text-muted-foreground text-xs">
                  Build any project using AGENTS.md and constraints
                </p>
              </div>

              <div className="rounded-lg border bg-white p-4 dark:bg-slate-900">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-100 dark:bg-cyan-900/30">
                  <Zap className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
                </div>
                <h3 className="mb-2 font-semibold text-sm">Task 3: Power Tools</h3>
                <p className="text-muted-foreground text-xs">
                  Custom prompts, automation, and MCP servers
                </p>
              </div>

              <div className="rounded-lg border bg-white p-4 dark:bg-slate-900">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/30">
                  <Gamepad2 className="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="mb-2 font-semibold text-sm">Task 4: Arcade Game</h3>
                <p className="text-muted-foreground text-xs">
                  Build a retro game and share with the workshop
                </p>
              </div>
            </div>
          </div>

          {/* What You'll Learn */}
          <div className="rounded-lg border bg-gradient-to-br from-slate-50 to-slate-100 p-6 dark:from-slate-900/50 dark:to-slate-900/30">
            <h2 className="mb-4 font-semibold text-2xl">What You'll Learn</h2>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="flex gap-3">
                <span className="flex-shrink-0 leading-5 text-blue-600 dark:text-blue-400">✓</span>
                <span className="text-sm">Overview of AI CLI tools ecosystem (Codex CLI, Claude Code, Gemini CLI, Amp)</span>
              </div>
              <div className="flex gap-3">
                <span className="flex-shrink-0 leading-5 text-blue-600 dark:text-blue-400">✓</span>
                <span className="text-sm">Planning and executing code changes with AI assistance</span>
              </div>
              <div className="flex gap-3">
                <span className="flex-shrink-0 leading-5 text-blue-600 dark:text-blue-400">✓</span>
                <span className="text-sm">Custom prompts, automation, and workflow integration</span>
              </div>
              <div className="flex gap-3">
                <span className="flex-shrink-0 leading-5 text-blue-600 dark:text-blue-400">✓</span>
                <span className="text-sm">Controlling reasoning depth for different task types</span>
              </div>
              <div className="flex gap-3">
                <span className="flex-shrink-0 leading-5 text-blue-600 dark:text-blue-400">✓</span>
                <span className="text-sm">Extending capabilities with MCP servers</span>
              </div>
              <div className="flex gap-3">
                <span className="flex-shrink-0 leading-5 text-blue-600 dark:text-blue-400">✓</span>
                <span className="text-sm">Best practices for AI-assisted development</span>
              </div>
            </div>
          </div>

          {/* Main Navigation */}
          <div className="grid gap-6 md:grid-cols-2">
            <Link
              className="group relative rounded-lg border-2 p-6 transition-all hover:border-purple-300 hover:bg-purple-50/50 dark:hover:border-purple-800 dark:hover:bg-purple-950/20"
              href="/presentation"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 transition-colors group-hover:bg-purple-200 dark:bg-purple-900/30 dark:group-hover:bg-purple-900/50">
                <Presentation className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="space-y-2">
                <h2 className="font-semibold text-2xl tracking-tight">Presentation</h2>
                <p className="text-muted-foreground">
                  25-minute overview of the AI CLI tools landscape and key concepts
                </p>
              </div>
            </Link>

            <Link
              className="group relative rounded-lg border-2 p-6 transition-all hover:border-blue-300 hover:bg-blue-50/50 dark:hover:border-blue-800 dark:hover:bg-blue-950/20"
              href="/tasks"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 transition-colors group-hover:bg-blue-200 dark:bg-blue-900/30 dark:group-hover:bg-blue-900/50">
                <Code2 className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="space-y-2">
                <h2 className="font-semibold text-2xl tracking-tight">Workshop Tasks</h2>
                <p className="text-muted-foreground">
                  1-hour hands-on exercises with Codex CLI and practical projects
                </p>
              </div>
            </Link>
          </div>
      </div>
    </div>
  );
}
