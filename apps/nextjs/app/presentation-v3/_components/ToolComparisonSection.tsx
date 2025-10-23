import { Layers } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type Tool = {
  name: string;
  ecosystem: string;
  focus: string;
  safety: string;
  extensibility: string;
  notes: string;
};

const tools: Tool[] = [
  {
    name: "Codex CLI",
    ecosystem: "OpenAI",
    focus: "Terminal coding agent; plan + execute",
    safety: "Sandbox + approvals (names vary by policy)",
    extensibility: "High (open source; scripts/patterns)",
    notes: "Model access via OpenAI; check docs for config",
  },
  {
    name: "Claude Code",
    ecosystem: "Anthropic",
    focus: "Terminal coding agent; code editing & reasoning",
    safety: "Sandbox/permissions patterns (vendor-specific)",
    extensibility: "Varies by version",
    notes: "Model access via Anthropic; confirm features",
  },
  {
    name: "Gemini CLI",
    ecosystem: "Google",
    focus: "Terminal assistant; tasks & code workflows",
    safety: "Sandbox/approvals patterns (vendor-specific)",
    extensibility: "Varies by version",
    notes: "Model access via Google; confirm setup",
  },
  {
    name: "Amp Code",
    ecosystem: "Amp",
    focus: "Terminal-first agent workflows",
    safety: "Sandbox/permissions patterns (vendor-specific)",
    extensibility: "Varies by version",
    notes: "Check vendor docs for capabilities",
  },
  {
    name: "Opencode",
    ecosystem: "Open-source / community",
    focus: "Terminal coding agent; configurable",
    safety: "Typically supports sandbox/approvals",
    extensibility: "High (community-driven)",
    notes: "Features vary by fork/release; review repo",
  },
];

export function ToolComparisonSection() {
  return (
    <section className="mb-16 scroll-mt-16" id="comparison">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-900/30">
          <Layers className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
        </div>
        <h2 className="font-bold text-4xl">Tool Comparison</h2>
      </div>

      <Card className="mb-6 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/30 dark:to-blue-950/30">
        <CardHeader>
          <CardTitle>How to read this grid</CardTitle>
          <CardDescription>Details vary by version; always check vendor docs.</CardDescription>
        </CardHeader>
      </Card>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {tools.map((t) => (
          <Card className="border-2 hover:border-indigo-200" key={`tool-${t.name}`}>
            <CardHeader>
              <CardTitle>{t.name}</CardTitle>
              <CardDescription>{t.ecosystem}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-inside list-disc space-y-1 text-foreground/80 text-sm">
                <li>
                  <span className="font-semibold">Focus:</span> {t.focus}
                </li>
                <li>
                  <span className="font-semibold">Safety:</span> {t.safety}
                </li>
                <li>
                  <span className="font-semibold">Extensibility:</span> {t.extensibility}
                </li>
                <li>
                  <span className="font-semibold">Notes:</span> {t.notes}
                </li>
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
