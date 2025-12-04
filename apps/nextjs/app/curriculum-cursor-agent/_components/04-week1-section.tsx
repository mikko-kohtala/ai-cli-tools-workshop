import { BookOpen, Code, Shield, Terminal, Workflow } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const topics = [
  {
    icon: BookOpen,
    title: "What is an LLM?",
    description:
      "Capabilities & limitations for coding. Understanding when AI excels (boilerplate generation, documentation, code refactoring, test generation) and when human judgment is essential (architectural decisions, security-critical code, complex domain logic, performance optimization). Learn to recognize AI's strengths and weaknesses in different contexts.",
  },
  {
    icon: Code,
    title: "AI as Pair Programmer",
    description:
      "When to trust, when to verify, how to review AI code. Building the right mental model: treat AI as a capable but fallible pair programmer. Learn review techniques: understand every line, check for edge cases, verify security implications, ensure code aligns with your architecture. Never blindly accept AI suggestions.",
  },
  {
    icon: Terminal,
    title: "Tooling Setup",
    description:
      "CLI tools: Claude Code, Codex CLI. Editor/IDE integration (VS Code, JetBrains, etc.). Installation, authentication setup, basic command structure, configuration files, and understanding tool-specific features. Learn the differences between tools and when to use each.",
  },
  {
    icon: BookOpen,
    title: "Prompting Basics",
    description:
      "Giving clear instructions, constraints, and examples. Supplying context: repo summaries, file snippets, error logs. Learn prompt engineering techniques: be specific, provide examples, set constraints, include relevant context. Understand token limits and how to manage context windows effectively.",
  },
  {
    icon: Workflow,
    title: "Agents & Agentic Workflows",
    description:
      "Creating specialized subagents for specific tasks (code-reviewer, test-runner, debugger). Understanding the agentic workflow pattern: plan → execute → observe → iterate. Learn how agents operate independently, maintain separate context, and can be chained together for complex workflows. Build your first reusable agent.",
  },
  {
    icon: Shield,
    title: "Safety Basics",
    description:
      "No secrets in prompts, no production credentials, IP awareness. Security best practices from day one: understand what data you're sending to AI services, recognize sensitive information, use environment variables, implement approval flows for risky operations. Learn to work safely with AI tools.",
  },
];

const projectFocus = [
  "Pick a small greenfield service or CLI app",
  "Use AI to scaffold repo (basic structure, README, starter code)",
  "Use AI to generate initial boilerplate, simple functions, and tests",
  "Create your first specialized agent (e.g., code-reviewer or test-runner agent)",
  "Practice the review cycle: generate → review → refine",
  "Understand agentic workflows: plan → execute → observe → iterate",
];

export function Week1Section() {
  return (
    <section className="mb-16 scroll-mt-16" id="week1">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/30">
          <Terminal className="h-5 w-5 text-green-600 dark:text-green-400" />
        </div>
        <div>
          <h2 className="font-bold text-4xl">Week 1: Foundations & Tools</h2>
          <p className="font-medium text-foreground/70 text-sm">Theme: Mindset + core AI dev tools</p>
        </div>
      </div>

      <div className="mb-8 space-y-6">
        <Card>
          <CardContent className="p-6">
            <p className="mb-4 text-base text-foreground/80 leading-relaxed">
              Week 1 establishes the foundation for everything that follows. You'll learn not just how to use AI tools,
              but how to think about them—understanding their capabilities, limitations, and the mental models that lead
              to effective use. This week is crucial because it sets the tone for how you'll interact with AI throughout
              your development career.
            </p>
            <h3 className="mb-4 font-semibold text-xl">Week 1 Objectives</h3>
            <p className="mb-4 text-foreground/70 text-sm leading-relaxed">
              By the end of this week, you should be able to:
            </p>
            <ul className="space-y-3 text-base">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-600 dark:bg-green-400" />
                <div>
                  <span className="font-medium">Understand what LLMs are and are not good at:</span>
                  <span className="text-foreground/70">
                    {" "}
                    Recognize when AI excels (boilerplate, documentation, refactoring) and when human judgment is
                    essential (architecture decisions, security-critical code, domain-specific logic). Develop realistic
                    expectations about AI capabilities.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-600 dark:bg-green-400" />
                <div>
                  <span className="font-medium">Install and set up core tools:</span>
                  <span className="text-foreground/70">
                    {" "}
                    Get Claude Code, Codex CLI, and editor integrations (VS Code, JetBrains) running on your machine.
                    Configure authentication, understand basic commands, and set up your development environment for
                    AI-assisted workflows.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-600 dark:bg-green-400" />
                <div>
                  <span className="font-medium">Learn basic prompting and context management:</span>
                  <span className="text-foreground/70">
                    {" "}
                    Master the art of giving clear instructions, providing appropriate context (repo summaries, file
                    snippets, error logs), and structuring prompts for effective results. Understand token limits and
                    context window management.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-600 dark:bg-green-400" />
                <div>
                  <span className="font-medium">Create your first specialized agent:</span>
                  <span className="text-foreground/70">
                    {" "}
                    Build a simple agent (like a code-reviewer or test-runner) and understand the agentic workflow
                    pattern: plan → execute → observe → iterate. Learn how agents can be specialized for specific tasks
                    and reused across projects.
                  </span>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="mb-12">
        <h3 className="mb-6 font-semibold text-2xl">Key Topics</h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => {
            const Icon = topic.icon;
            return (
              <Card key={`topic-${topic.title}`}>
                <CardHeader>
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800">
                    <Icon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                  </div>
                  <CardTitle className="text-lg">{topic.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 text-sm leading-relaxed">{topic.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      <div className="mb-12">
        <h3 className="mb-6 font-semibold text-2xl">Week 1 Project Focus</h3>
        <Card className="bg-green-50 dark:bg-green-950/30">
          <CardContent className="p-6">
            <p className="mb-4 text-base leading-relaxed">
              This week, you'll start a simple but real project to practice the fundamentals. Choose something small
              enough to complete in a week but complex enough to require multiple files and some structure. Examples:
              CLI tool, simple REST API, data processing script, or a small web application.
            </p>
            <p className="mb-4 text-foreground/70 text-sm leading-relaxed">
              <strong>Why this approach:</strong> Working on a real project (even a small one) helps you understand how
              AI tools work in practice, not just in isolation. You'll encounter real challenges and learn how to solve
              them with AI assistance.
            </p>
            <h4 className="mb-3 font-semibold text-base">Project Tasks:</h4>
            <ul className="space-y-3">
              {projectFocus.map((item) => (
                <li className="flex items-start gap-3 text-sm" key={item}>
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-600 dark:bg-green-400" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-lg bg-green-100 p-4 dark:bg-green-900/30">
              <p className="mb-2 font-semibold text-sm">💡 Pro Tip:</p>
              <p className="text-foreground/80 text-sm leading-relaxed">
                Don't try to build something perfect. The goal is to practice using AI tools effectively. Make mistakes,
                iterate, and learn. Document what works and what doesn't—this becomes your personal playbook for future
                projects.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
