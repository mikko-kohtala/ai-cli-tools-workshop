import Link from "next/link";

export default function Task3Page() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <div className="space-y-4">
        <h1 className="font-bold text-4xl">Task 3: Refine Code and Tests with Codex CLI</h1>
        <p className="text-lg">
          Learn how to steer Codex CLI through refactoring an existing script, adding tests, and validating the results
          with higher reasoning depth.
        </p>
      </div>

      <div className="space-y-6">
        <div className="space-y-4">
          <h2 className="font-semibold text-2xl">Objective</h2>
          <p>
            Start from a rough Python temperature converter, use Codex CLI with high reasoning to improve the
            implementation, generate tests, and run them end-to-end inside the same session.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="font-semibold text-2xl">Starter File</h2>
          <p>Place this file in your workspace before launching Codex CLI:</p>
          <div className="rounded-lg border bg-white p-4 font-mono text-sm dark:bg-slate-950">
            <div># converter.py</div>
            <div className="h-2" />
            <div>def to_fahrenheit(celsius):</div>
            <div> return celsius * 9 / 5 + 32</div>
            <div className="h-2" />
            <div>def to_celsius(fahrenheit):</div>
            <div> return (fahrenheit - 32) * 5 / 9</div>
            <div className="h-2" />
            <div>if __name__ == "__main__":</div>
            <div> mode = input("Mode (c2f/f2c): ")</div>
            <div> value = float(input("Value: "))</div>
            <div> if mode == "c2f":</div>
            <div> print(to_fahrenheit(value))</div>
            <div> elif mode == "f2c":</div>
            <div> print(to_celsius(value))</div>
            <div> else:</div>
            <div> print("unknown mode")</div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="font-semibold text-2xl">Instructions</h2>
          <div className="space-y-4">
            <ol className="list-decimal space-y-4 pl-6">
              <li>
                <p>
                  Create a clean workspace such as
                  <code className="mx-1 rounded bg-muted px-1 py-0.5 text-sm">
                    ~/codex-workshop/task-03-quality-pass
                  </code>
                  and add <code>converter.py</code> using the starter code above.
                </p>
              </li>
              <li>
                <p>
                  Launch Codex CLI inside the directory and elevate reasoning depth by running the
                  <code className="mx-1 rounded bg-muted px-1 py-0.5 text-sm">/model reasoning high</code> command at
                  the start of the session.
                </p>
              </li>
              <li>
                <p>
                  Ask for a plan that improves input validation, adds docstrings, and introduces automated tests using
                  <code>pytest</code>.
                </p>
              </li>
              <li>
                <p>
                  Approve the plan, review the proposed edits, and let Codex refactor <code>converter.py</code> plus add
                  a new
                  <code>test_converter.py</code> file.
                </p>
              </li>
              <li>
                <p>
                  Run <code>codex exec "python -m pytest"</code> to execute the generated tests. If <code>pytest</code>{" "}
                  is not installed, ask Codex for the recommended installation command.
                </p>
              </li>
              <li>
                <p>
                  Request a wrap-up summary covering key improvements, remaining risks, and suggested follow-up tasks.
                </p>
              </li>
            </ol>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="font-semibold text-2xl">Key Concepts</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Reasoning levels help Codex tackle more nuanced refactors</li>
              <li>Providing starter code keeps the model grounded in your context</li>
              <li>Plan-first workflows prevent unexpected edits</li>
              <li>Automated tests verify that changes behave as expected</li>
              <li>Summaries capture lessons learned for future sessions</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-semibold text-2xl">Expected Outcome</h2>
            <div className="rounded-lg border bg-neutral-50 p-4 dark:bg-neutral-900/30">
              <p className="mb-2">
                <strong>By the end of this task, you should:</strong>
              </p>
              <ul className="list-disc space-y-1 pl-6 text-sm">
                <li>Maintain a tidy workspace with improved converter code and tests</li>
                <li>Understand when to use higher reasoning modes</li>
                <li>Feel confident guiding Codex through refactors and reviews</li>
                <li>Run automated tests from within the Codex session</li>
                <li>Document next steps based on Codex feedback</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="font-semibold text-2xl">Workshop Navigation</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-lg border p-4">
              <h3 className="mb-2 font-semibold text-lg">Work Area</h3>
              <p className="mb-3 text-muted-foreground text-sm">Your workspace for this task</p>
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-3 font-medium text-primary-foreground text-sm hover:bg-primary/90"
                href="/tasks/3/work"
              >
                Open Work Area
              </Link>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="mb-2 font-semibold text-lg">Solution</h3>
              <p className="mb-3 text-muted-foreground text-sm">Reference solution and guidance</p>
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-3 font-medium text-sm hover:bg-accent hover:text-accent-foreground"
                href="/tasks/3/solution"
              >
                View Solution
              </Link>
            </div>
          </div>
        </div>

        <div className="flex justify-between pt-6">
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 font-medium text-sm ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground"
            href="/tasks/2"
          >
            Previous Task
          </Link>
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 font-medium text-primary-foreground text-sm ring-offset-background transition-colors hover:bg-primary/90"
            href="/tasks/5"
          >
            Next Task
          </Link>
        </div>
      </div>
    </div>
  );
}
