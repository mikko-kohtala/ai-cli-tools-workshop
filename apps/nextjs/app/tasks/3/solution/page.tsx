import Link from "next/link";

const todoCode = `#!/usr/bin/env node
import { readFileSync, writeFileSync, existsSync } from "node:fs";

const storePath = new URL("./tasks.json", import.meta.url);

function loadTasks() {
  if (!existsSync(storePath)) return [];
  return JSON.parse(readFileSync(storePath, "utf8"));
}

function saveTasks(tasks) {
  writeFileSync(storePath, JSON.stringify(tasks, null, 2));
}

const [command, ...args] = process.argv.slice(2);
const tasks = loadTasks();

switch (command) {
  case "add": {
    const title = args.join(" ").trim();
    if (!title) {
      console.log("Provide a title to add");
      process.exit(1);
    }
    tasks.push({ title, done: false });
    saveTasks(tasks);
    console.log(\`Added: \${title}\`);
    break;
  }
  case "list": {
    tasks.forEach((task, index) => {
      console.log(\`\${index + 1}. \${task.done ? "[x]" : "[ ]"} \${task.title}\`);
    });
    break;
  }
  case "complete": {
    const index = Number.parseInt(args[0] ?? "", 10) - 1;
    if (Number.isNaN(index) || !tasks[index]) {
      console.log("Provide a valid task number");
      process.exit(1);
    }
    tasks[index].done = true;
    saveTasks(tasks);
    console.log(\`Completed: \${tasks[index].title}\`);
    break;
  }
  default:
    console.log("Usage: node todo.js [add|list|complete]");
    break;
}
`;

export default function Task3SolutionPage() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <div className="space-y-4">
        <h1 className="font-bold text-4xl">Task 3: Solution</h1>
        <p className="text-lg">Reference solution and guidance for completing the task.</p>
      </div>

      <div className="rounded-lg border bg-green-50 p-6 dark:bg-green-950/30">
        <h2 className="mb-3 font-semibold text-xl">✅ Example Session Outline</h2>
        <div className="space-y-4">
          <div>
            <h3 className="mb-2 font-semibold">1. Workspace setup</h3>
            <div className="rounded bg-white p-3 font-mono text-sm dark:bg-slate-950">
              <div>mkdir -p ~/codex-workshop/task-03-cli</div>
              <div>cd ~/codex-workshop/task-03-cli</div>
              <div>codex --cd ~/codex-workshop/task-03-cli --ask-for-approval</div>
            </div>
            <p className="mt-2 text-muted-foreground text-sm">
              Launching Codex from the new directory keeps the prototype isolated from other projects.
            </p>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">2. Plan request</h3>
            <div className="rounded bg-white p-3 text-sm dark:bg-slate-900">
              <p className="mb-1 font-semibold">Example prompt:</p>
              <p className="text-muted-foreground">
                "Plan a Node.js CLI called todo.js that stores tasks in tasks.json. Include steps for add/list/complete
                commands and basic tests."
              </p>
            </div>
            <p className="mt-2 text-muted-foreground text-sm">
              Approve the planning response so Codex can proceed with the agreed sequence of changes.
            </p>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">3. Scaffold files</h3>
            <div className="rounded bg-white p-3 font-mono text-sm dark:bg-slate-950">
              <div>npm init -y</div>
              <div>touch tasks.json</div>
            </div>
            <p className="mt-2 text-muted-foreground text-sm">
              Codex can run these commands for you after you approve them in the terminal panel.
            </p>
            <div className="mt-3 rounded bg-white p-3 text-sm dark:bg-slate-900">
              <p className="mb-2 font-semibold">
                Example <code>todo.js</code> snippet Codex might produce:
              </p>
              <pre className="overflow-x-auto text-xs">{todoCode}</pre>
            </div>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">4. Run sample commands</h3>
            <div className="rounded bg-white p-3 font-mono text-sm dark:bg-slate-950">
              <div>node todo.js add "Buy snacks"</div>
              <div>node todo.js list</div>
              <div>node todo.js complete 1</div>
            </div>
            <p className="mt-2 text-muted-foreground text-sm">
              Let Codex execute each command so you can inspect the output and make adjustments if necessary.
            </p>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">5. Add a quick test</h3>
            <div className="rounded bg-white p-3 font-mono text-sm dark:bg-slate-950">
              <div>{"cat <<'JS' > test/todo.test.js"}</div>
              <div>import assert from "node:assert";</div>
              <div>import {"{execSync}"} from "node:child_process";</div>
              <div>import {"{readFileSync}"} from "node:fs";</div>
              <div />
              <div>execSync("rm -f tasks.json");</div>
              <div>execSync("node todo.js add 'Test task'");</div>
              <div>const tasks = JSON.parse(readFileSync("tasks.json", "utf8"));</div>
              <div>assert.equal(tasks.length, 1);</div>
              <div>assert.equal(tasks[0].title, "Test task");</div>
              <div>JS</div>
            </div>
            <div className="rounded bg-white p-3 font-mono text-sm dark:bg-slate-950">
              <div>{"cat <<'JSON' > package.json"}</div>
              <div>{`{
  "name": "codex-task-03",
  "type": "module",
  "version": "1.0.0",
  "scripts": {
    "test": "node test/todo.test.js"
  }
}`}</div>
              <div>JSON</div>
            </div>
            <div className="rounded bg-white p-3 font-mono text-sm dark:bg-slate-950">
              <div>npm test</div>
            </div>
            <p className="mt-2 text-muted-foreground text-sm">
              Codex can assemble these files automatically; approving the diff will write them to disk and run the test
              script.
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-lg border p-6">
        <h2 className="mb-3 font-semibold text-xl">📚 Key Takeaways</h2>
        <ul className="list-disc space-y-2 pl-6 text-sm">
          <li>Planning with Codex produces a clear execution trail you can reference</li>
          <li>Approving command executions lets you capture output for demos</li>
          <li>Even lightweight tests give Codex feedback to catch regressions</li>
          <li>You can always refine prompts and re-run steps before merging diffs</li>
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
          className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 font-medium text-primary-foreground text-sm hover:bg-primary/90"
          href="/tasks/4"
        >
          Next Task
        </Link>
      </div>
    </div>
  );
}
