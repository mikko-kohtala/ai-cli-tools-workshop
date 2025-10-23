import Link from "next/link";

export default function Task1SolutionPage() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <div className="space-y-4">
        <h1 className="font-bold text-4xl">Task 1: Solution</h1>
        <p className="text-lg">Reference solution and guidance for completing the task.</p>
      </div>

      <div className="rounded-lg border bg-green-50 p-6">
        <h2 className="mb-3 font-semibold text-xl">✅ Solution Steps</h2>
        <div className="space-y-4">
          <div>
            <h3 className="mb-2 font-semibold">1. Installation</h3>
            <div className="rounded bg-white p-3 font-mono text-sm">
              <div># Follow the official installation guide</div>
              <div># Visit: https://developers.openai.com/codex/cli</div>
            </div>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">2. Verify Installation</h3>
            <div className="rounded bg-white p-3 font-mono text-sm">
              <div>codex --version</div>
            </div>
            <p className="mt-2 text-muted-foreground text-sm">
              This should display the installed version of Codex CLI.
            </p>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">3. Start a Session</h3>
            <div className="rounded bg-white p-3 font-mono text-sm">
              <div>codex</div>
            </div>
            <p className="mt-2 text-muted-foreground text-sm">
              This opens an interactive session where you can start communicating with the AI assistant.
            </p>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">4. First Interaction</h3>
            <div className="rounded bg-white p-3 text-sm">
              <p className="mb-2">
                <strong>Example prompt:</strong>
              </p>
              <p className="text-muted-foreground">"Can you explain what you can help me with?"</p>
            </div>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">5. End Session</h3>
            <div className="rounded bg-white p-3 text-sm">
              <p>Type "exit" or press Ctrl+C to end the session.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-lg border p-6">
        <h2 className="mb-3 font-semibold text-xl">📚 Key Takeaways</h2>
        <ul className="list-disc space-y-2 pl-6 text-sm">
          <li>Codex CLI is easy to install and set up</li>
          <li>Sessions are interactive and context-aware</li>
          <li>You can ask questions naturally in plain English</li>
          <li>The AI understands your codebase context</li>
          <li>Always review suggested changes before applying them</li>
        </ul>
      </div>

      <div className="flex justify-between pt-6">
        <Link
          className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 font-medium text-sm hover:bg-accent hover:text-accent-foreground"
          href="/tasks/1/work"
        >
          Back to Work Area
        </Link>
        <Link
          className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 font-medium text-primary-foreground text-sm hover:bg-primary/90"
          href="/tasks/2"
        >
          Next Task
        </Link>
      </div>
    </div>
  );
}
