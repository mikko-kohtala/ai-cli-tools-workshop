import { Brain, CheckCircle, Lightbulb, Terminal, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const valueProps = [
  {
    icon: Terminal,
    title: "Terminal-native workflow",
    description: "Work in your natural development environment",
    details: "No context switching between tools. Full access to your terminal, git, and local tooling.",
  },
  {
    icon: Brain,
    title: "Deep project understanding",
    description: "Tools that understand your entire codebase",
    details: "AI agents analyze your project structure, dependencies, and patterns to provide contextual assistance.",
  },
  {
    icon: Zap,
    title: "Autonomous task execution",
    description: "From planning to implementation automatically",
    details: "Describe what you want, and watch as the tool plans, implements, and tests changes autonomously.",
  },
  {
    icon: CheckCircle,
    title: "Control and transparency",
    description: "You approve changes, the AI executes them",
    details: "Maintain full control with approval flows, sandboxing, and clear visibility into every action.",
  },
];

const tools = [
  {
    name: "Claude Code",
    provider: "Anthropic",
    model: "Claude 3.5 Sonnet",
    highlights: ["Excellent reasoning", "Strong with complex refactoring", "Built-in safety features"],
  },
  {
    name: "Codex CLI",
    provider: "OpenAI",
    model: "GPT-5",
    highlights: ["Fast execution", "Great for rapid prototyping", "Extensive tool ecosystem"],
  },
  {
    name: "Gemini CLI",
    provider: "Google",
    model: "Gemini 2.0",
    highlights: ["Multimodal capabilities", "Strong code search", "Google Cloud integration"],
  },
  {
    name: "Amp Code",
    provider: "Amp",
    model: "Multiple models",
    highlights: ["Model selection", "Team collaboration", "Custom workflows"],
  },
];

const useCases = [
  {
    title: "Rapid prototyping",
    description: "Quickly scaffold new features or entire applications",
    example: '"Create a REST API with user authentication and rate limiting"',
  },
  {
    title: "Code refactoring",
    description: "Modernize legacy code or apply architectural changes",
    example: '"Refactor this class-based component to use React hooks"',
  },
  {
    title: "Test generation",
    description: "Automatically generate comprehensive test suites",
    example: '"Add unit tests for all functions in src/utils/validation.ts"',
  },
  {
    title: "Bug investigation",
    description: "Analyze errors and implement fixes",
    example: '"Fix the memory leak in the subscription cleanup"',
  },
  {
    title: "Documentation",
    description: "Generate and maintain project documentation",
    example: '"Add JSDoc comments to all exported functions"',
  },
  {
    title: "Migration tasks",
    description: "Upgrade dependencies or migrate to new frameworks",
    example: '"Migrate from Vue 2 to Vue 3 with Composition API"',
  },
];

export function LandscapeSection() {
  return (
    <section className="mb-16 scroll-mt-16" id="landscape">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/30">
          <Zap className="h-5 w-5 text-purple-600 dark:text-purple-400" />
        </div>
        <h2 className="font-bold text-4xl">AI CLI Tools Landscape</h2>
      </div>

      <div className="mb-8 space-y-6">
        <Card>
          <CardContent className="p-6">
            <p className="text-lg leading-relaxed">
              <strong>AI CLI tools</strong> represent a new generation of development assistants that combine the power
              of large language models with direct access to your terminal and codebase. Unlike IDE plugins or web-based
              chat interfaces, these tools work at the command line level, giving them deeper integration with your
              development workflow and the ability to execute complex, multi-step tasks autonomously.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mb-12">
        <h3 className="mb-6 font-semibold text-2xl">Why Choose CLI Over IDE Plugins or Web Chat?</h3>
        <div className="grid gap-6 md:grid-cols-2">
          {valueProps.map((item) => (
            <Card className="border-2 transition-colors hover:border-purple-200" key={`value-${item.title}`}>
              <CardHeader>
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/30">
                  <item.icon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
                <CardDescription className="text-base">{item.description}</CardDescription>
                <p className="pt-2 text-foreground/70 text-sm">{item.details}</p>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h3 className="mb-6 font-semibold text-2xl">Available Tools</h3>
        <div className="grid gap-6 md:grid-cols-2">
          {tools.map((tool) => (
            <Card key={`tool-${tool.name}`}>
              <CardHeader>
                <CardTitle className="text-xl">{tool.name}</CardTitle>
                <CardDescription className="text-base">
                  {tool.provider} • {tool.model}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {tool.highlights.map((highlight, idx) => (
                    <li className="flex items-start gap-2 text-sm" key={`highlight-${idx}`}>
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600 dark:text-green-400" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h3 className="mb-6 font-semibold text-2xl">Common Use Cases</h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase) => (
            <Card key={`usecase-${useCase.title}`}>
              <CardHeader>
                <CardTitle className="text-base">{useCase.title}</CardTitle>
                <CardDescription className="text-sm">{useCase.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg bg-slate-50 p-3 dark:bg-slate-900/30">
                  <p className="text-foreground/70 text-xs italic">{useCase.example}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Card className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/30 dark:to-blue-950/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            Getting Started: A Typical Workflow
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="start">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="start">Starting a Session</TabsTrigger>
              <TabsTrigger value="task">Making a Request</TabsTrigger>
              <TabsTrigger value="review">Review & Approve</TabsTrigger>
            </TabsList>
            <TabsContent className="mt-4" value="start">
              <div className="space-y-3">
                <p className="text-foreground/70 text-sm">Navigate to your project and start the CLI tool:</p>
                <pre className="overflow-x-auto rounded-lg bg-slate-950 p-4 text-slate-50">
                  <code>
                    cd my-project{"\n"}
                    claude code <span className="text-slate-400"># or: codex, gemini, amp</span>
                  </code>
                </pre>
                <p className="mt-3 text-foreground/70 text-sm">
                  The tool will analyze your project structure, git status, and environment before presenting an
                  interactive prompt.
                </p>
              </div>
            </TabsContent>
            <TabsContent className="mt-4" value="task">
              <div className="space-y-3">
                <p className="text-foreground/70 text-sm">Describe your task in natural language:</p>
                <pre className="overflow-x-auto rounded-lg bg-slate-950 p-4 text-slate-50 text-sm">
                  <code className="text-green-400">You:</code>{" "}
                  <code>
                    Add input validation to the user registration form.{"\n"}Make sure to validate email format and
                    password strength.{"\n"}
                  </code>
                  <code className="text-blue-400">{"\n"}AI:</code>{" "}
                  <code>
                    {" "}
                    I'll add comprehensive validation. Here's my plan:{"\n"} 1. Create validation utility functions
                    {"\n"} 2. Update registration form component{"\n"} 3. Add user feedback for validation errors
                    {"\n"} 4. Write tests for validation logic{"\n"}
                    {"\n"}Does this approach work for you?
                  </code>
                </pre>
              </div>
            </TabsContent>
            <TabsContent className="mt-4" value="review">
              <div className="space-y-3">
                <p className="text-foreground/70 text-sm">Review the plan, then approve execution:</p>
                <pre className="overflow-x-auto rounded-lg bg-slate-950 p-4 text-slate-50 text-sm">
                  <code className="text-green-400">You:</code> <code>Yes, proceed{"\n"}</code>
                  <code className="text-blue-400">{"\n"}AI:</code>{" "}
                  <code>
                    {" "}
                    Great! Starting implementation...{"\n"} ✓ Created src/utils/validation.ts{"\n"} ✓ Updated
                    components/RegistrationForm.tsx{"\n"} ✓ Added validation error messages{"\n"} ✓ Created tests in
                    __tests__/validation.test.ts{"\n"} {"\n"}All changes complete. Run tests to verify!
                  </code>
                </pre>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </section>
  );
}
