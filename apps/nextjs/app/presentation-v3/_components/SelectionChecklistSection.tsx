import { CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const checklist = {
  constraints: [
    "Which model provider(s) do we need (OpenAI, Anthropic, Google, local)?",
    "Do we require offline/on‑prem or air‑gapped modes?",
    "Network restrictions (egress allowlist, proxy, VPN)?",
    "Repository size/monorepo support and performance",
  ],
  safety: [
    "Sandbox levels needed (read‑only, workspace‑write, unrestricted)?",
    "Approval policy defaults (untrusted, on‑request, on‑failure, never)?",
    "Auditability (diff previews, summaries, logs)?",
    "Dry‑run support and easy rollback",
  ],
  workflow: [
    "Primary tasks (explain code, refactor, tests, features)?",
    "Test runners/package managers supported out of the box",
    "Custom scripts/templates (plan → run checks → commit)",
    "Editor/IDE coexistence vs. terminal‑only",
  ],
  integration: [
    "Works with CI (non‑interactive or approval gates)",
    "Fits team’s auth/secrets setup (env vars, vault)",
    "Ignore files support to trim context (e.g., .agentignore)",
    "Extensibility (plugins, hooks, adapters)",
  ],
  adoption: [
    "New‑user friction (install, auth, first task)",
    "Documentation and examples for our stack",
    "Training tips and guardrails for safety",
    "Path to pilot → team rollout",
  ],
};

const quickTips = [
  "Start where your model access already is; pick a CLI that natively supports it.",
  "Default to stricter sandbox/approvals; relax after pilots succeed.",
  "Pilot in a small repo first; measure speed, safety, and review effort.",
];

export function SelectionChecklistSection() {
  return (
    <section className="mb-16 scroll-mt-16" id="selection">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
          <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
        </div>
        <h2 className="font-bold text-4xl">Selection Checklist</h2>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>What to evaluate</CardTitle>
          <CardDescription>Use these prompts when choosing an AI CLI.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <p className="mb-2 font-semibold">Constraints</p>
              <ul className="list-inside list-disc space-y-1 text-sm text-foreground/80">
                {checklist.constraints.map((i, idx) => (
                  <li key={`c-${idx}`}>{i}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-2 font-semibold">Safety</p>
              <ul className="list-inside list-disc space-y-1 text-sm text-foreground/80">
                {checklist.safety.map((i, idx) => (
                  <li key={`s-${idx}`}>{i}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-2 mt-2 font-semibold">Workflow fit</p>
              <ul className="list-inside list-disc space-y-1 text-sm text-foreground/80">
                {checklist.workflow.map((i, idx) => (
                  <li key={`w-${idx}`}>{i}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-2 mt-2 font-semibold">Integration</p>
              <ul className="list-inside list-disc space-y-1 text-sm text-foreground/80">
                {checklist.integration.map((i, idx) => (
                  <li key={`i-${idx}`}>{i}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-2 mt-2 font-semibold">Team adoption</p>
              <ul className="list-inside list-disc space-y-1 text-sm text-foreground/80">
                {checklist.adoption.map((i, idx) => (
                  <li key={`a-${idx}`}>{i}</li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-emerald-200 bg-emerald-50 dark:bg-emerald-950/30">
        <CardHeader>
          <CardTitle>Quick decision tips</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-inside list-disc space-y-2 text-sm text-foreground/80">
            {quickTips.map((tip, idx) => (
              <li key={`tip-${idx}`}>{tip}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </section>
  );
}

