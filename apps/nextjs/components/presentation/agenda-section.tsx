import { Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AgendaSection() {
  return (
    <section className="space-y-6">
      <h2 className="flex items-center gap-3 font-bold text-3xl">
        <Users className="h-8 w-8" />
        Workshop Agenda
      </h2>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span className="text-2xl">🎯</span>
              Why Codex CLI Matters
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Understanding the value proposition and use cases for AI-powered CLI tools in modern development
              workflows.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span className="text-2xl">⚙️</span>
              CLI Harness Architecture
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Deep dive into how the CLI harness works, including sandboxing, approval flows, and agent runtime.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span className="text-2xl">🔒</span>
              Sandboxing & Approvals
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Working with different sandbox modes and approval policies to ensure safe and controlled AI assistance.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span className="text-2xl">🚀</span>
              Building Workflows
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Creating effective development workflows and integrating AI assistance into your daily coding routine.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span className="text-2xl">💡</span>
              Pro Tips & Next Steps
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Advanced techniques, best practices, and how to get started with Codex CLI in your organization.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
