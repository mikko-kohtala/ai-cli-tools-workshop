import Link from "next/link";

export default function Task4WorkPage() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <div className="space-y-4">
        <h1 className="font-bold text-4xl">Task 4: Work Area</h1>
        <p className="text-lg text-muted-foreground">Build your retro arcade game and share it with the workshop!</p>
      </div>

      <div className="space-y-6">
        <div className="rounded-lg border bg-white p-6 dark:bg-slate-900">
          <h2 className="mb-4 font-semibold text-2xl">Quick Reference</h2>

          <div className="space-y-6">
            <div>
              <h3 className="mb-3 font-medium text-lg">Development Workflow</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <span className="font-bold text-purple-600 dark:text-purple-400">1.</span>
                  <div>
                    <strong>Setup:</strong> Create workspace, init git, write AGENTS.md with constraints
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-purple-600 dark:text-purple-400">2.</span>
                  <div>
                    <strong>Static Scene:</strong> Get basic rendering working (canvas/terminal display)
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-purple-600 dark:text-purple-400">3.</span>
                  <div>
                    <strong>Core Mechanic:</strong> Add primary interaction (movement/jumping/shooting)
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-purple-600 dark:text-purple-400">4.</span>
                  <div>
                    <strong>Game Logic:</strong> Collision detection, scoring, win/lose conditions
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-purple-600 dark:text-purple-400">5.</span>
                  <div>
                    <strong>Polish:</strong> Restart, high scores, one visual/audio enhancement
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-3 font-medium text-lg">AI CLI Commands</h3>
              <pre className="overflow-x-auto rounded bg-slate-950 p-3 text-xs">
                <code className="text-slate-50">
                  {`# Start Codex CLI
codex

# Use custom prompts (if you created them in Task 3)
/review game.js
/explain main.py

# Non-interactive mode for automation
codex exec "Run the game and describe any console errors"

# Adjust reasoning level mid-session
/model high  # For complex collision detection
/model default  # Return to normal`}
                </code>
              </pre>
            </div>

            <div>
              <h3 className="mb-3 font-medium text-lg">Sample AGENTS.md</h3>
              <pre className="overflow-x-auto rounded bg-slate-950 p-3 text-xs">
                <code className="text-slate-50">
                  {`# Snake Game

## Tech Stack
- HTML5 Canvas
- Vanilla JavaScript
- No external libraries

## Constraints
- Single index.html file with inline CSS/JS
- Keep total code under 200 lines
- Use only rectangles (no image assets)
- Add code comments for key functions

## Game Features
- Arrow key controls
- Grid-based movement
- Food spawning
- Collision detection (walls & self)
- Score tracking with localStorage
- Restart on game over`}
                </code>
              </pre>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-green-200 bg-green-50 p-6 dark:border-green-900 dark:bg-green-950/30">
          <h2 className="mb-3 font-semibold text-xl">📸 Sharing Your Work</h2>
          <div className="space-y-4">
            <div>
              <h3 className="mb-2 font-medium text-sm">Option 1: Screenshot</h3>
              <div className="space-y-1 text-sm">
                <p>
                  <strong>macOS:</strong> Press <kbd className="rounded bg-white px-1.5 py-0.5 text-xs dark:bg-slate-950">Cmd</kbd> +{" "}
                  <kbd className="rounded bg-white px-1.5 py-0.5 text-xs dark:bg-slate-950">Shift</kbd> +{" "}
                  <kbd className="rounded bg-white px-1.5 py-0.5 text-xs dark:bg-slate-950">4</kbd>, then click and drag to
                  capture
                </p>
                <p>
                  <strong>Windows:</strong> Press <kbd className="rounded bg-white px-1.5 py-0.5 text-xs dark:bg-slate-950">Win</kbd> +{" "}
                  <kbd className="rounded bg-white px-1.5 py-0.5 text-xs dark:bg-slate-950">Shift</kbd> +{" "}
                  <kbd className="rounded bg-white px-1.5 py-0.5 text-xs dark:bg-slate-950">S</kbd>, then select area
                </p>
                <p>
                  <strong>Linux:</strong> Install Flameshot:{" "}
                  <code className="rounded bg-white px-1 py-0.5 text-xs dark:bg-slate-950">sudo apt install flameshot</code>
                </p>
              </div>
            </div>

            <div>
              <h3 className="mb-2 font-medium text-sm">Option 2: Screen Recording</h3>
              <div className="space-y-1 text-sm">
                <p>
                  <strong>Loom (All platforms):</strong>{" "}
                  <a
                    className="text-blue-600 hover:underline dark:text-blue-400"
                    href="https://loom.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    loom.com
                  </a>{" "}
                  - Free, easy screen recording
                </p>
                <p>
                  <strong>macOS:</strong> QuickTime Player &rarr; File &rarr; New Screen Recording
                </p>
                <p>
                  <strong>Windows:</strong> Xbox Game Bar (
                  <kbd className="rounded bg-white px-1.5 py-0.5 text-xs dark:bg-slate-950">Win</kbd> +{" "}
                  <kbd className="rounded bg-white px-1.5 py-0.5 text-xs dark:bg-slate-950">G</kbd>)
                </p>
                <p>
                  <strong>OBS Studio:</strong> Free, powerful for all platforms -{" "}
                  <a
                    className="text-blue-600 hover:underline dark:text-blue-400"
                    href="https://obsproject.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    obsproject.com
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h3 className="mb-2 font-medium text-sm">Option 3: GitHub Repository</h3>
              <pre className="overflow-x-auto rounded bg-slate-950 p-3 text-xs">
                <code className="text-slate-50">
                  {`# Create repo on GitHub, then:
git remote add origin https://github.com/yourusername/your-game.git
git add .
git commit -m "Add retro arcade game"
git push -u origin main

# Optional: Host on GitHub Pages
# Go to repo Settings > Pages > Source: main branch`}
                </code>
              </pre>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-blue-200 bg-blue-50 p-6 dark:border-blue-900 dark:bg-blue-950/30">
          <h2 className="mb-3 font-semibold text-xl">💭 Document Your Journey</h2>
          <p className="mb-3 text-sm">Keep notes as you build. This helps with sharing and reflection:</p>
          <div className="space-y-2 text-sm">
            <div className="rounded bg-white p-3 dark:bg-slate-900">
              <p className="mb-1 font-medium">Game Choice:</p>
              <p className="text-muted-foreground text-xs">Which game did you pick and why?</p>
            </div>
            <div className="rounded bg-white p-3 dark:bg-slate-900">
              <p className="mb-1 font-medium">AI Tool Used:</p>
              <p className="text-muted-foreground text-xs">
                Codex CLI, Claude Code, Gemini CLI, Amp, or combination?
              </p>
            </div>
            <div className="rounded bg-white p-3 dark:bg-slate-900">
              <p className="mb-1 font-medium">Challenges & Solutions:</p>
              <p className="text-muted-foreground text-xs">
                What was tricky? How did the AI help you solve it?
              </p>
            </div>
            <div className="rounded bg-white p-3 dark:bg-slate-900">
              <p className="mb-1 font-medium">Features Implemented:</p>
              <p className="text-muted-foreground text-xs">Core mechanics + polish you added</p>
            </div>
            <div className="rounded bg-white p-3 dark:bg-slate-900">
              <p className="mb-1 font-medium">Favorite Moment:</p>
              <p className="text-muted-foreground text-xs">What surprised or delighted you during development?</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-amber-200 bg-amber-50 p-6 dark:border-amber-900 dark:bg-amber-950/30">
          <h2 className="mb-3 font-semibold text-xl">⏱️ Time Management Tips</h2>
          <ul className="list-disc space-y-2 pl-6 text-sm">
            <li>
              <strong>Minute 0-5:</strong> Setup, AGENTS.md, choose game, start AI session
            </li>
            <li>
              <strong>Minute 5-10:</strong> Get static scene + basic rendering working
            </li>
            <li>
              <strong>Minute 10-15:</strong> Implement core mechanic + basic game loop
            </li>
            <li>
              <strong>Minute 15-20:</strong> Add collision, scoring, win/lose states
            </li>
            <li>
              <strong>Minute 20-25:</strong> Polish feature + test thoroughly
            </li>
            <li>
              <strong>Minute 25-30:</strong> Create README, capture screenshot/video, share!
            </li>
          </ul>
        </div>

        <div className="flex justify-between pt-6">
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 font-medium text-sm ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground"
            href="/tasks/4"
          >
            Back to Task 4
          </Link>
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 font-medium text-primary-foreground text-sm ring-offset-background transition-colors hover:bg-primary/90"
            href="/tasks/4/solution"
          >
            View Solution
          </Link>
        </div>
      </div>
    </div>
  );
}
