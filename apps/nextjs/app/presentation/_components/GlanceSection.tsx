import { CheckCircle, Code, Lightbulb, Terminal, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const features = [
  {
    icon: Terminal,
    title: "Terminal-first interface",
    description: "GPT-5-based coding agents accessible directly from your command line",
    details: "No context switching between tools. Work in the environment you know best—your terminal.",
  },
  {
    icon: Code,
    title: "Natural language bridge",
    description: "Connects your requests with local tooling seamlessly",
    details: "Describe what you want in plain English, and Codex translates it into precise code changes.",
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
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100">
          <Zap className="h-5 w-5 text-purple-600" />
        </div>
        <h2 className="font-bold text-4xl">Codex CLI at a Glance</h2>
      </div>

      <div className="mb-8 space-y-6">
        <Card>
          <CardContent className="p-6">
            <p className="text-lg leading-relaxed">
              <strong>Codex CLI</strong> represents a new generation of development tools that understand natural
              language, execute complex tasks autonomously, and integrate seamlessly with your existing workflow. Unlike
              traditional IDE plugins or web-based assistants, Codex CLI runs directly in your terminal, giving you the
              flexibility to work however you prefer while maintaining complete control over your codebase.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mb-8 grid gap-6 md:grid-cols-2">
        {features.map((item) => (
          <Card className="border-2 transition-colors hover:border-purple-200" key={`feature-${item.title}`}>
            <CardHeader>
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                <item.icon className="h-6 w-6 text-purple-600" />
              </div>
              <CardTitle className="text-xl">{item.title}</CardTitle>
              <CardDescription className="text-base">{item.description}</CardDescription>
              <p className="pt-2 text-foreground/70 text-sm">{item.details}</p>
            </CardHeader>
          </Card>
        ))}
      </div>

      <Card className="bg-linear-to-br from-purple-50 to-blue-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-purple-600" />
            Quick Example: Getting Started
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="install">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="install">Installation</TabsTrigger>
              <TabsTrigger value="first">First Command</TabsTrigger>
              <TabsTrigger value="example">Example Task</TabsTrigger>
            </TabsList>
            <TabsContent className="mt-4" value="install">
              <div className="space-y-3">
                <p className="text-foreground/70 text-sm">Install Codex CLI globally with npm:</p>
                <pre className="overflow-x-auto rounded-lg bg-slate-950 p-4 text-slate-50">
                  <code>npm install -g @openai/codex-cli</code>
                </pre>
                <p className="mt-3 text-foreground/70 text-sm">Or with Homebrew on macOS:</p>
                <pre className="overflow-x-auto rounded-lg bg-slate-950 p-4 text-slate-50">
                  <code>brew install openai/tap/codex</code>
                </pre>
              </div>
            </TabsContent>
            <TabsContent className="mt-4" value="first">
              <div className="space-y-3">
                <p className="text-foreground/70 text-sm">Start a session in your project directory:</p>
                <pre className="overflow-x-auto rounded-lg bg-slate-950 p-4 text-slate-50">
                  <code>cd my-project{"\n"}codex</code>
                </pre>
                <p className="mt-3 text-foreground/70 text-sm">
                  The CLI will initialize and present an interactive prompt where you can type requests.
                </p>
              </div>
            </TabsContent>
            <TabsContent className="mt-4" value="example">
              <div className="space-y-3">
                <p className="text-foreground/70 text-sm">Example conversation:</p>
                <pre className="overflow-x-auto rounded-lg bg-slate-950 p-4 text-slate-50 text-sm">
                  <code className="text-green-400">You:</code> <code>Add input validation to the login form{"\n"}</code>
                  <code className="text-blue-400">Codex:</code>{" "}
                  <code>
                    {" "}
                    I'll add email and password validation.{"\n"} Creating validationUtils.ts...{"\n"} Updating
                    LoginForm.tsx...{"\n"} Done! Added email format and password strength checks.
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
