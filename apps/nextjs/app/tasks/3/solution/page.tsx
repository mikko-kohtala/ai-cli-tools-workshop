import Link from "next/link";

export default function Task3SolutionPage() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <div className="space-y-4">
        <h1 className="font-bold text-4xl">Task 3: Solution</h1>
        <p className="text-lg">Reference solution and guidance for completing the task.</p>
      </div>

      <div className="rounded-lg border bg-green-50 p-6 dark:bg-green-950/30">
        <h2 className="mb-3 font-semibold text-xl">✅ Solution Steps</h2>
        <div className="space-y-4">
          <div>
            <h3 className="mb-2 font-semibold">0. Prepare Workspace</h3>
            <div className="rounded bg-white p-3 font-mono text-sm dark:bg-slate-950">
              <div>mkdir -p ~/codex-workshop/task-03-quality-pass</div>
              <div>cd ~/codex-workshop/task-03-quality-pass</div>
              <div>cat &gt; converter.py &lt;&lt;'EOF'</div>
              <div>def to_fahrenheit(celsius):</div>
              <div>    return celsius * 9 / 5 + 32</div>
              <div className="h-2" />
              <div>def to_celsius(fahrenheit):</div>
              <div>    return (fahrenheit - 32) * 5 / 9</div>
              <div className="h-2" />
              <div>if __name__ == "__main__":</div>
              <div>    mode = input("Mode (c2f/f2c): ")</div>
              <div>    value = float(input("Value: "))</div>
              <div>    if mode == "c2f":</div>
              <div>        print(to_fahrenheit(value))</div>
              <div>    elif mode == "f2c":</div>
              <div>        print(to_celsius(value))</div>
              <div>    else:</div>
              <div>        print("unknown mode")</div>
              <div>EOF</div>
            </div>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">1. Launch Codex</h3>
            <div className="rounded bg-white p-3 font-mono text-sm dark:bg-slate-950">
              <div>codex</div>
            </div>
            <p className="mt-2 text-muted-foreground text-sm">
              Start the session from inside the workspace directory.
            </p>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">2. Raise Reasoning Depth</h3>
            <div className="rounded bg-white p-3 font-mono text-sm dark:bg-slate-950">
              <div>/model reasoning high</div>
            </div>
            <p className="mt-2 text-muted-foreground text-sm">
              Higher reasoning gives the agent more room to consider validation and testing nuances.
            </p>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">3. Request a Detailed Plan</h3>
            <div className="rounded bg-white p-3 text-sm dark:bg-slate-900">
              <p className="mb-2 font-semibold">Example prompt:</p>
              <p className="text-muted-foreground">
                /plan Improve converter.py by adding docstrings, validating inputs, handling invalid numbers gracefully, and
                creating pytest tests that cover both conversion functions and CLI behavior.
              </p>
            </div>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">4. Implement Safely</h3>
            <p className="text-muted-foreground text-sm">
              Approve each file change after reviewing the diff. Encourage Codex to explain tricky updates before applying.
            </p>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">5. Install Test Dependency if Needed</h3>
            <div className="rounded bg-white p-3 font-mono text-sm dark:bg-slate-950">
              <div>codex exec "pip install pytest"</div>
            </div>
            <p className="mt-2 text-muted-foreground text-sm">
              Skip this step if <code>pytest</code> is already available in your environment.
            </p>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">6. Run the Tests</h3>
            <div className="rounded bg-white p-3 font-mono text-sm dark:bg-slate-950">
              <div>codex exec "python -m pytest"</div>
            </div>
            <p className="mt-2 text-muted-foreground text-sm">
              Review the output with Codex and ask it to diagnose any failures before iterating.
            </p>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">7. Capture a Retrospective</h3>
            <div className="rounded bg-white p-3 text-sm dark:bg-slate-900">
              <p className="mb-2 font-semibold">Example prompt:</p>
              <p className="text-muted-foreground">
                "Summarize the improvements you made, note any remaining risks, and suggest what we should tackle next."
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-lg border p-6">
        <h2 className="mb-3 font-semibold text-xl">📚 Key Takeaways</h2>
        <ul className="list-disc space-y-2 pl-6 text-sm">
          <li>High reasoning mode is ideal for multi-step refactors and testing workflows</li>
          <li>Providing starter files keeps Codex anchored to your project structure</li>
          <li>Review diffs carefully—Codex relies on your approvals to proceed</li>
          <li><code>codex exec</code> streamlines installing dependencies and running tests</li>
          <li>Retrospectives reinforce learning and create a paper trail for teammates</li>
        </ul>
      </div>

      <div className="flex justify-between pt-6">
        <Link
          className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 font-medium text-sm hover:bg-accent hover:text-accent-foreground"
          href="/tasks/3/work"
        >
          Back to Work Area
        </Link>
        <Link
          className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 font-medium text-sm hover:bg-accent hover:text-accent-foreground"
          href="/tasks"
        >
          Back to Overview
        </Link>
      </div>
    </div>
  );
}
