/** biome-ignore-all lint/suspicious/noArrayIndexKey: shadcn */
import { Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const LAST_BEST_PRACTICE_INDEX = 3;

const proTips = [
  {
    title: "Prefer rg for fast searches",
    description: "Specify workdir on every shell call",
    detail:
      "ripgrep (rg) is much faster than grep for large codebases. Many agents and power users prefer rg. Always specify the working directory to avoid searching node_modules or build directories.",
    example: "rg 'API_KEY' --glob '!node_modules' --glob '!dist'",
  },
  {
    title: "Use ASCII and add comments only when clarity demands it",
    description: "Keep the terminal output clean and focused",
    detail:
      "Avoid decorative elements like emoji or ASCII art in production outputs. Add comments to generated code only when they genuinely help understanding, not as boilerplate.",
    example: "// Retry up to 3 times with exponential backoff\nconst result = await retryWithBackoff(fetchData);",
  },
  {
    title: "Monitor for unexpected file changes",
    description: "Pause if they appear",
    detail:
      "If you notice files being modified that shouldn't be, stop the session immediately. This could indicate a misunderstanding or configuration issue. Use 'git diff' to review changes before committing.",
    example: "git diff --name-only  # Quick check of modified files",
  },
  {
    title: "The CLI styles text",
    description: "Keep formatting minimal but intentional",
    detail:
      "Most CLIs handle terminal styling—you don't need extra formatting in requests. Focus on clear content, and the CLI will present it cleanly.",
    example: "You: 'Show me a summary'\nAgent: [formatted summary with colors and structure]",
  },
];

const workflowOptimizations = [
  {
    title: "Use session checkpoints",
    description: "Save your progress at logical milestones so you can revert if needed.",
    command: '<cli> checkpoint create "before-refactor"  # if supported',
  },
  {
    title: "Chain related tasks",
    description: "Complete one task, then immediately ask for the next logical step.",
    example:
      'You: "Add the feature"\nAgent: [implements feature]\nYou: "Now add tests for it"\nAgent: [adds tests]\nYou: "Create a commit"',
  },
  {
    title: "Use an ignore file",
    description: "Exclude large or irrelevant files from the agent's context (e.g., .codexignore, .claudeignore).",
    command: "# .agentignore (example)\ndist/\nbuild/\n*.log\ncoverage/",
  },
];

const debuggingTips = [
  {
    title: "Use verbose mode for troubleshooting",
    command: "<cli> --verbose",
  },
  {
    title: "Check the agent's understanding",
    description: "If results aren't what you expected, ask the agent to explain its reasoning.",
    example:
      'You: "Why did you choose that approach?"\nAgent: "I used React Query because I saw it\'s already used in UserList.tsx..."',
  },
  {
    title: "View the context window",
    description: "See what files the agent has loaded into its context.",
    command: "<cli> context show  # if supported",
  },
];

const shortcuts = [
  { key: "Ctrl+C", description: "Cancel current operation" },
  { key: "Ctrl+D", description: "Exit session" },
  { key: "↑ / ↓", description: "Navigate command history" },
  { key: "Tab", description: "Autocomplete file paths" },
  { key: "/help", description: "Show available commands" },
  { key: "/undo", description: "Revert last change" },
  { key: "/diff", description: "Show uncommitted changes" },
  { key: "/commit", description: "Create git commit" },
];

export function TipsSection() {
  return (
    <section className="mb-16 scroll-mt-16" id="tips">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-100 dark:bg-cyan-900/30">
          <Zap className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
        </div>
        <h2 className="font-bold text-4xl">Pro Tips</h2>
      </div>

      <div className="mb-8 space-y-6">
        <Card>
          <CardContent className="p-6">
            <p className="text-lg leading-relaxed">
              Once you're comfortable with the basics, these techniques will help you work even faster. These are
              lessons learned from developers who use AI CLIs daily.
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8 border-2 border-cyan-200 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/30">
        <CardContent className="p-8">
          <div className="space-y-6">
            {proTips.map((item, index) => (
              <div key={`tip-${item.title}`}>
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-cyan-600">
                    <Zap className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-lg">{item.title}</p>
                    <p className="text-foreground/70 text-sm italic">{item.description}</p>
                    <p className="mt-2 text-sm">{item.detail}</p>
                    {item.example && (
                      <pre className="mt-3 rounded border bg-white p-3 text-xs dark:bg-slate-950">
                        <code>{item.example}</code>
                      </pre>
                    )}
                  </div>
                </div>
                {index < LAST_BEST_PRACTICE_INDEX && <Separator className="my-6" />}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="workflow">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="workflow">Workflow Optimization</TabsTrigger>
          <TabsTrigger value="debugging">Debugging</TabsTrigger>
          <TabsTrigger value="shortcuts">Shortcuts</TabsTrigger>
        </TabsList>
        <TabsContent className="mt-4" value="workflow">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                {workflowOptimizations.map((opt, index) => (
                  <div key={`workflow-${index}`}>
                    <p className="mb-2 font-semibold">{opt.title}</p>
                    <p className="text-foreground/70 text-sm">{opt.description}</p>
                    {opt.command && (
                      <pre className="mt-2 rounded bg-slate-950 p-3 text-slate-50 text-sm">
                        <code>{opt.command}</code>
                      </pre>
                    )}
                    {opt.example && (
                      <pre className="mt-2 rounded border bg-white p-3 text-sm dark:bg-slate-950">
                        <code>{opt.example}</code>
                      </pre>
                    )}
                    {index < workflowOptimizations.length - 1 && <Separator className="my-4" />}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent className="mt-4" value="debugging">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                {debuggingTips.map((tip, index) => (
                  <div key={`debug-${index}`}>
                    <p className="mb-2 font-semibold">{tip.title}</p>
                    {tip.description && <p className="mt-2 text-foreground/70 text-sm">{tip.description}</p>}
                    {tip.command && (
                      <pre className="mt-2 rounded bg-slate-950 p-3 text-slate-50 text-sm">
                        <code>{tip.command}</code>
                      </pre>
                    )}
                    {tip.example && (
                      <pre className="mt-2 rounded border bg-white p-3 text-sm dark:bg-slate-950">
                        <code>{tip.example}</code>
                      </pre>
                    )}
                    {index < debuggingTips.length - 1 && <Separator className="my-4" />}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent className="mt-4" value="shortcuts">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-3 text-sm">
                <div className="grid grid-cols-2 gap-4">
                  {shortcuts.map((shortcut) => (
                    <div key={`shortcut-${shortcut.key}`}>
                      <p className="font-semibold">{shortcut.key}</p>
                      <p className="text-foreground/70 text-xs">{shortcut.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  );
}
