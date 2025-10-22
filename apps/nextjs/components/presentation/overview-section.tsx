import { ArrowRight, Code, Shield, Terminal, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function OverviewSection() {
  return (
    <section className="space-y-6">
      <h2 className="flex items-center gap-3 font-bold text-3xl">
        <Terminal className="h-8 w-8" />
        Codex CLI at a Glance
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5" />
              Terminal-First Interface
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-muted-foreground">
              Codex CLI provides a GPT-5-based coding agent that works directly from your command line, bringing AI
              assistance to your existing terminal workflow without requiring context switching.
            </p>
            <div className="rounded-lg bg-muted p-4">
              <code className="text-sm">$ codex "refactor the logging module for structured output"</code>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ArrowRight className="h-5 w-5" />
              Natural Language Bridge
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-muted-foreground">
              Seamlessly connects natural language requests with local tooling, allowing you to express complex coding
              tasks in plain English while maintaining full control over execution.
            </p>
            <div className="rounded-lg bg-muted p-4">
              <code className="text-sm">$ codex "add error handling to the API endpoints"</code>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5" />
              Developer Velocity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-muted-foreground">
              Hyper-focused on speed and reproducibility in development workflows, helping you automate routine tasks
              while maintaining code quality and project constraints.
            </p>
            <div className="rounded-lg bg-muted p-4">
              <code className="text-sm">$ codex "optimize database queries in the user service"</code>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Project Constraints
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-muted-foreground">
              Respects project boundaries and coding standards while automating routine tasks, ensuring AI assistance
              enhances rather than disrupts your existing development practices.
            </p>
            <div className="rounded-lg bg-muted p-4">
              <code className="text-sm">$ codex "add TypeScript types for the new API response"</code>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
