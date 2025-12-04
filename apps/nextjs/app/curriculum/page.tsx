import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Curriculum Comparison | AI CLI Tools Workshop",
  robots: {
    index: false,
    follow: false,
  },
};

const curriculumVariants = [
  { name: "Claude", slug: "curriculum-claude", description: "Generated with Claude Code" },
  { name: "Codex", slug: "curriculum-codex", description: "Generated with Codex CLI" },
  { name: "Codexmax", slug: "curriculum-codexmax", description: "Generated with Codex CLI (max reasoning)" },
  { name: "Copilot", slug: "curriculum-copilot", description: "Generated with GitHub Copilot" },
  { name: "Cursor Agent", slug: "curriculum-cursor-agent", description: "Generated with Cursor Agent" },
];

export default function CurriculumPage() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <div className="space-y-4">
        <h1 className="font-bold text-4xl">Curriculum Comparison</h1>
        <p className="text-lg text-muted-foreground">
          Compare AI-generated curriculum versions created by different tools.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {curriculumVariants.map((variant) => (
          <Link
            className="group relative rounded-lg border p-6 transition-colors hover:border-foreground/50"
            href={`/${variant.slug}`}
            key={variant.slug}
          >
            <div className="space-y-2">
              <h2 className="font-semibold text-2xl tracking-tight">{variant.name}</h2>
              <p className="text-muted-foreground">{variant.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
