import { CheckCircle, Code, Lightbulb, Terminal, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const features = [
  {
    icon: Terminal,
    title: "Terminal-first interface",
    description: "LLM-powered coding agents accessible directly from your command line",
    details: "No context switching. Stay in the environment you know best — your terminal.",
  },
  {
    icon: Code,
    title: "Natural language bridge",
    description: "Connects your requests with local tooling seamlessly",
    details: "Describe what you want in plain English, and the agent translates it into precise code changes.",
  },
  {
    icon: Zap,
    title: "Developer velocity",
    description: "Hyper-focused on speed and reproducibility",
    details: "Automate repetitive tasks, generate boilerplate, and maintain consistency across your codebase.",
  },
  {
    icon: CheckCircle,
    title: "Project-aware",
    description: "Respects constraints while automating routine tasks",
    details: "Understands your project structure, dependencies, and coding patterns automatically.",
  },
];

export function GlanceSection() {
  return (
    <section className="mb-16 scroll-mt-16" id="glance">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/30">
          <Zap className="h-5 w-5 text-purple-600 dark:text-purple-400" />
        </div>
        <h2 className="font-bold text-4xl">AI CLI Tools at a Glance</h2>
      </div>

      <div className="mb-8 space-y-6">
        <Card>
          <CardContent className="p-6">
            <p className="text-lg leading-relaxed">
              AI CLI tools like Codex CLI, Claude Code, Gemini CLI, Amp Code, and Opencode represent a new generation of
              development helpers. They understand natural language, execute complex tasks, and integrate with your
              local toolchain. Unlike IDE plugins or web-based assistants, these tools run in your terminal, letting you
              keep your normal workflow while maintaining control over your codebase and environment.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mb-8 grid gap-6 md:grid-cols-2">
        {features.map((item) => (
          <Card className="border-2 transition-colors hover:border-purple-200" key={`feature-${item.title}`}>
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

      <Card className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/30 dark:to-blue-950/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            Quick Start Pattern (Tool-Agnostic)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="install">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="install">Setup</TabsTrigger>
              <TabsTrigger value="first">Start Session</TabsTrigger>
              <TabsTrigger value="example">Example Task</TabsTrigger>
            </TabsList>
            <TabsContent className="mt-4" value="install">
              <div className="space-y-3">
                <p className="text-foreground/70 text-sm">Common steps across tools:</p>
                <ul className="list-inside list-disc space-y-1 text-sm">
                  <li>Install the CLI via npm, brew, or vendor installer</li>
                  <li>Authenticate with your API key or account</li>
                  <li>Run in a project folder to capture context</li>
                </ul>
                <p className="mt-3 text-foreground/70 text-xs">Note: Exact commands vary by tool. See vendor docs.</p>
              </div>
            </TabsContent>
            <TabsContent className="mt-4" value="first">
              <div className="space-y-3">
                <p className="text-foreground/70 text-sm">Start a session in your project directory:</p>
                <pre className="overflow-x-auto rounded-lg bg-slate-950 p-4 text-slate-50">
                  <code>{"cd my-project\n<cli>"}</code>
                </pre>
                <p className="mt-3 text-foreground/70 text-sm">
                  The CLI initializes and presents an interactive prompt for natural-language requests.
                </p>
              </div>
            </TabsContent>
            <TabsContent className="mt-4" value="example">
              <div className="space-y-3">
                <p className="text-foreground/70 text-sm">Example conversation:</p>
                <pre className="overflow-x-auto rounded-lg bg-slate-950 p-4 text-slate-50 text-sm">
                  <code className="text-green-400">You:</code> <code>{"Add input validation to the login form\n"}</code>
                  <code className="text-blue-400">Agent:</code>{" "}
                  <code>
                    {" "}
                    {`I'll add email and password validation.\n`}
                    {"Creating validationUtils.ts...\n"}
                    {"Updating LoginForm.tsx...\n"}
                    {"Done! Added email format and password strength checks."}
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
