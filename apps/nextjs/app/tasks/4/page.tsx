import { Camera, Gamepad2, Github, Video } from "lucide-react";
import Link from "next/link";

export default function Task4Page() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <div className="space-y-4">
        <h1 className="font-bold text-4xl">Task 4: Build & Share Your Retro Arcade Game</h1>
        <p className="text-lg">
          Put everything you've learned together! Build a retro arcade game of your choice using AI CLI tools, then
          share your creation with the workshop.
        </p>
      </div>

      <div className="space-y-6">
        <div className="space-y-4">
          <h2 className="font-semibold text-2xl">Objective</h2>
          <p>
            Create a playable retro arcade game using iterative AI-assisted development. Apply the techniques you've
            learned—AGENTS.md for context, custom prompts for workflows, reasoning levels for complex logic—then{" "}
            <strong>share your game</strong> via screenshot, video recording, or GitHub repository.
          </p>
        </div>

        <div className="rounded-lg border-2 border-amber-200 bg-amber-50 p-6 dark:border-amber-900 dark:bg-amber-950/30">
          <h3 className="mb-3 flex items-center gap-2 font-semibold text-xl">
            <Gamepad2 className="h-6 w-6" />
            Choose Your Game
          </h3>
          <p className="mb-4 text-sm">Pick any classic arcade game that interests you! Here are some ideas:</p>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-amber-200 bg-white p-3 dark:border-amber-800 dark:bg-slate-900">
              <p className="mb-1 font-semibold text-sm">🐍 Snake</p>
              <p className="text-muted-foreground text-xs">Grow longer, don't hit walls or yourself</p>
            </div>
            <div className="rounded-lg border border-amber-200 bg-white p-3 dark:border-amber-800 dark:bg-slate-900">
              <p className="mb-1 font-semibold text-sm">🧱 Breakout</p>
              <p className="text-muted-foreground text-xs">Paddle, ball, and bricks to destroy</p>
            </div>
            <div className="rounded-lg border border-amber-200 bg-white p-3 dark:border-amber-800 dark:bg-slate-900">
              <p className="mb-1 font-semibold text-sm">👾 Space Invaders</p>
              <p className="text-muted-foreground text-xs">Shoot descending aliens before they land</p>
            </div>
            <div className="rounded-lg border border-amber-200 bg-white p-3 dark:border-amber-800 dark:bg-slate-900">
              <p className="mb-1 font-semibold text-sm">🦖 Dino Runner</p>
              <p className="text-muted-foreground text-xs">Jump over obstacles, Chrome-style</p>
            </div>
            <div className="rounded-lg border border-amber-200 bg-white p-3 dark:border-amber-800 dark:bg-slate-900">
              <p className="mb-1 font-semibold text-sm">🎮 Pong</p>
              <p className="text-muted-foreground text-xs">Classic paddle tennis for two players</p>
            </div>
            <div className="rounded-lg border border-amber-200 bg-white p-3 dark:border-amber-800 dark:bg-slate-900">
              <p className="mb-1 font-semibold text-sm">🚀 Asteroids</p>
              <p className="text-muted-foreground text-xs">Rotate, thrust, shoot space rocks</p>
            </div>
            <div className="rounded-lg border border-amber-200 bg-white p-3 dark:border-amber-800 dark:bg-slate-900">
              <p className="mb-1 font-semibold text-sm">🐦 Flappy Bird</p>
              <p className="text-muted-foreground text-xs">Tap to fly through pipe gaps</p>
            </div>
            <div className="rounded-lg border border-amber-200 bg-white p-3 dark:border-amber-800 dark:bg-slate-900">
              <p className="mb-1 font-semibold text-sm">🟦 Tetris</p>
              <p className="text-muted-foreground text-xs">Rotate and drop falling blocks</p>
            </div>
            <div className="rounded-lg border border-amber-200 bg-white p-3 dark:border-amber-800 dark:bg-slate-900">
              <p className="mb-1 font-semibold text-sm">💡 Your Idea!</p>
              <p className="text-muted-foreground text-xs">Invent your own twist on a classic</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="font-semibold text-2xl">Instructions</h2>
          <div className="space-y-4">
            <div className="rounded-lg border-2 border-purple-200 bg-purple-50 p-6 dark:border-purple-900 dark:bg-purple-950/30">
              <h3 className="mb-4 font-semibold text-xl">Phase 1: Setup & Planning (3-5 min)</h3>
              <ol className="list-decimal space-y-3 pl-6">
                <li>
                  <p>
                    Create workspace:
                    <code className="ml-2 rounded bg-white px-2 py-1 font-mono text-sm dark:bg-slate-950">
                      mkdir -p ~/codex-workshop/task-04-arcade && cd ~/codex-workshop/task-04-arcade
                    </code>
                  </p>
                </li>
                <li>
                  <p>Initialize git repository for version control</p>
                </li>
                <li>
                  <p>
                    Create <code className="rounded bg-white px-1 py-0.5 text-xs dark:bg-slate-950">AGENTS.md</code>{" "}
                    with your game constraints:
                  </p>
                  <ul className="mt-2 ml-6 list-disc space-y-1 text-sm">
                    <li>Technology choice (HTML5 Canvas, terminal game, etc.)</li>
                    <li>No external libraries (vanilla JS/Python/etc.)</li>
                    <li>Keep files under 200 lines</li>
                    <li>Add clear code comments</li>
                  </ul>
                </li>
                <li>
                  <p>
                    Start your AI CLI tool of choice (Codex CLI recommended, but Claude Code, Gemini CLI, or Amp also
                    work)
                  </p>
                </li>
              </ol>
            </div>

            <div className="rounded-lg border-2 border-blue-200 bg-blue-50 p-6 dark:border-blue-900 dark:bg-blue-950/30">
              <h3 className="mb-4 font-semibold text-xl">Phase 2: Iterative Development (15-20 min)</h3>
              <p className="mb-3 text-sm">Build your game in small, testable increments:</p>
              <ol className="list-decimal space-y-3 pl-6">
                <li>
                  <p>
                    <strong>Milestone 1 - Static Scene:</strong> Get the basic layout rendering (canvas, game area,
                    placeholder elements)
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Milestone 2 - Core Mechanic:</strong> Add the primary game mechanic (movement, jumping,
                    shooting, etc.)
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Milestone 3 - Game Logic:</strong> Implement collision detection, win/lose conditions,
                    scoring
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Milestone 4 - Game Loop:</strong> Add restart functionality, game states (menu, playing,
                    game over)
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Milestone 5 - Polish:</strong> Add one enhancement (high score tracking, sound effects,
                    visual effects, difficulty progression)
                  </p>
                </li>
              </ol>
              <div className="mt-4 rounded border border-blue-300 bg-white p-3 dark:border-blue-700 dark:bg-slate-900">
                <p className="mb-2 font-medium text-sm">💡 Pro Tips:</p>
                <ul className="space-y-1 text-sm">
                  <li>• Test after each milestone—don't wait until the end!</li>
                  <li>• Use higher reasoning levels for complex logic (collision, AI)</li>
                  <li>• Create custom prompts for repetitive tasks</li>
                  <li>
                    • Use <code className="rounded bg-muted px-1 py-0.5 text-xs">codex exec</code> for automated testing
                  </li>
                </ul>
              </div>
            </div>

            <div className="rounded-lg border-2 border-green-200 bg-green-50 p-6 dark:border-green-900 dark:bg-green-950/30">
              <h3 className="mb-4 font-semibold text-xl">Phase 3: Share Your Work (5 min)</h3>
              <p className="mb-3 text-sm">
                <strong>Important:</strong> Choose at least one way to share your game with the workshop!
              </p>

              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-lg border border-green-300 bg-white p-4 dark:border-green-700 dark:bg-slate-900">
                  <div className="mb-2 flex items-center gap-2">
                    <Camera className="h-5 w-5 text-green-600 dark:text-green-400" />
                    <h4 className="font-semibold text-sm">Screenshot</h4>
                  </div>
                  <p className="mb-3 text-muted-foreground text-xs">Quick and easy—capture gameplay</p>
                  <div className="space-y-1 text-xs">
                    <p>
                      <strong>macOS:</strong> Cmd+Shift+4
                    </p>
                    <p>
                      <strong>Windows:</strong> Win+Shift+S
                    </p>
                    <p>
                      <strong>Linux:</strong> Flameshot
                    </p>
                  </div>
                </div>

                <div className="rounded-lg border border-green-300 bg-white p-4 dark:border-green-700 dark:bg-slate-900">
                  <div className="mb-2 flex items-center gap-2">
                    <Video className="h-5 w-5 text-green-600 dark:text-green-400" />
                    <h4 className="font-semibold text-sm">Video Demo</h4>
                  </div>
                  <p className="mb-3 text-muted-foreground text-xs">Show your game in action</p>
                  <div className="space-y-1 text-xs">
                    <p>
                      <strong>Loom:</strong> loom.com (free)
                    </p>
                    <p>
                      <strong>macOS:</strong> QuickTime
                    </p>
                    <p>
                      <strong>Windows:</strong> Xbox Game Bar
                    </p>
                  </div>
                </div>

                <div className="rounded-lg border border-green-300 bg-white p-4 dark:border-green-700 dark:bg-slate-900">
                  <div className="mb-2 flex items-center gap-2">
                    <Github className="h-5 w-5 text-green-600 dark:text-green-400" />
                    <h4 className="font-semibold text-sm">GitHub Repo</h4>
                  </div>
                  <p className="mb-3 text-muted-foreground text-xs">Share code and host it live</p>
                  <div className="space-y-1 text-xs">
                    <p>1. Push to GitHub</p>
                    <p>2. Enable GitHub Pages</p>
                    <p>3. Share the live link!</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 rounded border border-green-300 bg-white p-3 dark:border-green-700 dark:bg-slate-900">
                <p className="mb-2 font-medium text-sm">📋 Create a README.md</p>
                <p className="text-muted-foreground text-xs">
                  Document: game name, controls, how to run it, and features you implemented
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="font-semibold text-2xl">Apply What You've Learned</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Task 1:</strong> Use Codex CLI basics—sessions, file operations, approvals
              </li>
              <li>
                <strong>Task 2:</strong> Create AGENTS.md to guide your AI assistant
              </li>
              <li>
                <strong>Task 3:</strong> Use custom prompts, codex exec, and control reasoning levels
              </li>
              <li>
                <strong>Bonus:</strong> Try different AI CLI tools and compare the experience
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-semibold text-2xl">Expected Outcome</h2>
            <div className="rounded-lg border bg-neutral-50 p-4 dark:bg-neutral-900/30">
              <p className="mb-2">
                <strong>By the end of this task, you should have:</strong>
              </p>
              <ul className="list-disc space-y-1 pl-6 text-sm">
                <li>A playable retro arcade game built with AI assistance</li>
                <li>AGENTS.md documenting your project constraints</li>
                <li>Clean git history showing iterative development</li>
                <li>README.md with game info and instructions</li>
                <li>Shared work: screenshot, video, or GitHub repo</li>
                <li>Experience with creative AI pair programming</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-cyan-200 bg-cyan-50 p-6 dark:border-cyan-900 dark:bg-cyan-950/30">
          <h2 className="mb-3 font-semibold text-xl">🎯 Keep It Simple</h2>
          <div className="space-y-2 text-sm">
            <p>
              <strong>Time Management:</strong> You have ~25 minutes. Prioritize a working core mechanic over fancy
              graphics.
            </p>
            <p>
              <strong>Scope Control:</strong> Use rectangles/circles instead of sprites. One feature well-done beats
              five half-finished.
            </p>
            <p>
              <strong>Debug Smart:</strong> If stuck for &gt;3 minutes on one issue, ask AI to simplify or try a
              different approach.
            </p>
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
                href="/tasks/4/work"
              >
                Open Work Area
              </Link>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="mb-2 font-semibold text-lg">Solution</h3>
              <p className="mb-3 text-muted-foreground text-sm">Reference solution and guidance</p>
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-3 font-medium text-sm hover:bg-accent hover:text-accent-foreground"
                href="/tasks/4/solution"
              >
                View Solution
              </Link>
            </div>
          </div>
        </div>

        <div className="flex justify-between pt-6">
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 font-medium text-sm ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground"
            href="/tasks/3"
          >
            Previous Task
          </Link>
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 font-medium text-sm ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground"
            href="/tasks"
          >
            Back to Tasks
          </Link>
        </div>
      </div>
    </div>
  );
}
