import Link from "next/link";

export default function Task4SolutionPage() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <div className="space-y-4">
        <h1 className="font-bold text-4xl">Task 4: Solution & Reference</h1>
        <p className="text-lg text-muted-foreground">
          Complete walkthrough, example prompts, and sharing best practices for your arcade game
        </p>
      </div>

      <div className="space-y-6">
        <div className="rounded-lg border-2 border-purple-200 bg-purple-50 p-6 dark:border-purple-900 dark:bg-purple-950/30">
          <h2 className="mb-4 font-semibold text-2xl">Example: Building Snake Game</h2>
          <p className="mb-4 text-sm">A complete walkthrough of building a classic Snake game with Codex CLI.</p>

          <div className="space-y-4">
            <div>
              <h3 className="mb-2 font-semibold text-lg">Setup</h3>
              <pre className="overflow-x-auto rounded bg-slate-950 p-3 text-xs">
                <code className="text-slate-50">
                  {`# Create workspace
mkdir -p ~/codex-workshop/task-04-arcade
cd ~/codex-workshop/task-04-arcade

# Initialize git
git init

# Create AGENTS.md
cat > AGENTS.md << 'EOF'
# Snake Game

## Tech Stack
- HTML5 Canvas
- Vanilla JavaScript (no libraries)
- Single index.html file

## Constraints
- Keep code under 250 lines total
- Use grid-based movement (20x20 cells)
- Rectangle graphics only (no images)
- Clear code comments
- 60 FPS game loop

## Features
- Arrow key controls
- Food spawning at random positions
- Snake growth on food consumption
- Wall collision = game over
- Self collision = game over
- Score tracking with localStorage
- Press Space to restart
EOF

# Start Codex
codex`}
                </code>
              </pre>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-lg">Milestone 1: Static Scene</h3>
              <div className="mb-2 rounded bg-white p-3 dark:bg-slate-900">
                <p className="mb-2 font-medium text-sm">Prompt to use:</p>
                <p className="font-mono text-xs">
                  &quot;Create index.html with a 400x400 Canvas showing a 20x20 grid. Draw a snake (3 segments) starting
                  at center and one food item. Use inline CSS for centering and inline JS. Include
                  requestAnimationFrame scaffold. No movement yet—just static rendering. Use retro green-on-black
                  colors.&quot;
                </p>
              </div>
              <pre className="overflow-x-auto rounded bg-slate-950 p-3 text-xs">
                <code className="text-slate-50">
                  {`# Expected file structure after this milestone:
index.html  # Contains everything: HTML, CSS, JS`}
                </code>
              </pre>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-lg">Milestone 2: Movement & Controls</h3>
              <div className="mb-2 rounded bg-white p-3 dark:bg-slate-900">
                <p className="mb-2 font-medium text-sm">Prompt to use:</p>
                <p className="font-mono text-xs">
                  &quot;Add arrow key controls to change snake direction. Move snake forward one cell every 150ms. Prevent
                  180-degree turns (can't go directly from up to down). Update head position and remove tail segment each
                  frame to maintain length.&quot;
                </p>
              </div>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-lg">Milestone 3: Food & Growth</h3>
              <div className="mb-2 rounded bg-white p-3 dark:bg-slate-900">
                <p className="mb-2 font-medium text-sm">Prompt to use:</p>
                <p className="font-mono text-xs">
                  &quot;When snake head reaches food position, increment score and grow snake by 1 segment (don't remove
                  tail on that frame). Spawn new food at random empty position. Display score in top-left corner.&quot;
                </p>
              </div>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-lg">Milestone 4: Collision Detection</h3>
              <div className="mb-2 rounded bg-white p-3 dark:bg-slate-900">
                <p className="mb-2 font-medium text-sm">Prompt to use:</p>
                <p className="font-mono text-xs">
                  &quot;Add collision detection: if snake head hits walls (x&lt;0, x&gt;=20, y&lt;0, y&gt;=20) or any body
                  segment, set gameOver=true and stop movement. Show 'Game Over - Press Space to Restart' message.&quot;
                </p>
              </div>
              <div className="mt-2 rounded border border-purple-300 bg-white p-3 dark:border-purple-700 dark:bg-slate-900">
                <p className="mb-1 font-medium text-sm">💡 If collision is buggy:</p>
                <p className="text-xs">
                  Switch to higher reasoning: <code className="rounded bg-muted px-1 py-0.5">/model high</code> then ask:
                  &quot;Debug the collision detection—snake is dying unexpectedly. Add console logging to show head
                  position and body positions each frame.&quot;
                </p>
              </div>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-lg">Milestone 5: Polish</h3>
              <div className="mb-2 rounded bg-white p-3 dark:bg-slate-900">
                <p className="mb-2 font-medium text-sm">Prompt to use:</p>
                <p className="font-mono text-xs">
                  &quot;Add restart on Space key press: reset snake to 3 segments at center, clear score (but keep high
                  score in localStorage), spawn new food, resume game. Track and display high score that persists across
                  sessions.&quot;
                </p>
              </div>
              <div className="mt-2 rounded bg-white p-3 dark:bg-slate-900">
                <p className="mb-2 font-medium text-sm">Optional enhancements (pick one):</p>
                <ul className="list-disc space-y-1 pl-6 text-xs">
                  <li>&quot;Gradually increase speed every 5 points scored&quot;</li>
                  <li>&quot;Add simple beep sound on food consumption using Web Audio API&quot;</li>
                  <li>&quot;Alternate snake segment colors for visual effect&quot;</li>
                  <li>&quot;Add pause/resume with P key&quot;</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border-2 border-blue-200 bg-blue-50 p-6 dark:border-blue-900 dark:bg-blue-950/30">
          <h2 className="mb-4 font-semibold text-2xl">Other Game Examples</h2>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-blue-300 bg-white p-4 dark:border-blue-700 dark:bg-slate-900">
              <h3 className="mb-2 font-semibold">🧱 Breakout</h3>
              <div className="space-y-2 text-xs">
                <p>
                  <strong>M1:</strong> Canvas with paddle, ball, brick grid
                </p>
                <p>
                  <strong>M2:</strong> Ball physics and wall bounces
                </p>
                <p>
                  <strong>M3:</strong> Paddle movement (mouse or keys)
                </p>
                <p>
                  <strong>M4:</strong> Paddle-ball collision, brick destruction
                </p>
                <p>
                  <strong>M5:</strong> Lives system, level progression
                </p>
              </div>
            </div>

            <div className="rounded-lg border border-blue-300 bg-white p-4 dark:border-blue-700 dark:bg-slate-900">
              <h3 className="mb-2 font-semibold">👾 Space Invaders</h3>
              <div className="space-y-2 text-xs">
                <p>
                  <strong>M1:</strong> Player ship, alien grid, barriers
                </p>
                <p>
                  <strong>M2:</strong> Player movement and shooting
                </p>
                <p>
                  <strong>M3:</strong> Aliens move side-to-side, descend
                </p>
                <p>
                  <strong>M4:</strong> Collision detection all around
                </p>
                <p>
                  <strong>M5:</strong> Alien shooting, difficulty increase
                </p>
              </div>
            </div>

            <div className="rounded-lg border border-blue-300 bg-white p-4 dark:border-blue-700 dark:bg-slate-900">
              <h3 className="mb-2 font-semibold">🎮 Pong</h3>
              <div className="space-y-2 text-xs">
                <p>
                  <strong>M1:</strong> Two paddles, ball, center line
                </p>
                <p>
                  <strong>M2:</strong> Ball movement and wall bounces
                </p>
                <p>
                  <strong>M3:</strong> Player controls + basic AI
                </p>
                <p>
                  <strong>M4:</strong> Paddle collision, scoring
                </p>
                <p>
                  <strong>M5:</strong> Speed increase, game-to-5 logic
                </p>
              </div>
            </div>

            <div className="rounded-lg border border-blue-300 bg-white p-4 dark:border-blue-700 dark:bg-slate-900">
              <h3 className="mb-2 font-semibold">🦖 Dino Runner</h3>
              <div className="space-y-2 text-xs">
                <p>
                  <strong>M1:</strong> Ground, player rectangle
                </p>
                <p>
                  <strong>M2:</strong> Gravity, spacebar jump
                </p>
                <p>
                  <strong>M3:</strong> Spawning obstacles moving left
                </p>
                <p>
                  <strong>M4:</strong> AABB collision, game over
                </p>
                <p>
                  <strong>M5:</strong> Score, speed ramping, restart
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border-2 border-green-200 bg-green-50 p-6 dark:border-green-900 dark:bg-green-950/30">
          <h2 className="mb-4 font-semibold text-2xl">Sharing Your Work: Best Practices</h2>

          <div className="space-y-4">
            <div>
              <h3 className="mb-2 font-semibold text-lg">Creating an Effective Screenshot</h3>
              <ul className="list-disc space-y-1 pl-6 text-sm">
                <li>Capture during active gameplay (not just the start screen)</li>
                <li>Show the score/UI elements clearly</li>
                <li>Include browser window for context (optional)</li>
                <li>Ensure good contrast—avoid washed-out colors</li>
              </ul>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-lg">Recording a Great Video Demo</h3>
              <ul className="list-disc space-y-1 pl-6 text-sm">
                <li>Keep it short: 15-30 seconds is perfect</li>
                <li>Show 1-2 complete game rounds</li>
                <li>Demonstrate the core mechanic clearly</li>
                <li>Include a game over and restart if possible</li>
                <li>No audio needed—visual gameplay is enough</li>
              </ul>
              <div className="mt-3 rounded border border-green-300 bg-white p-3 dark:border-green-700 dark:bg-slate-900">
                <p className="mb-1 font-medium text-sm">🎥 Loom Quick Start:</p>
                <ol className="list-decimal space-y-1 pl-6 text-xs">
                  <li>Go to loom.com and sign up (free)</li>
                  <li>Install browser extension or desktop app</li>
                  <li>Click Loom icon, select "Screen Only"</li>
                  <li>Select your game window or full screen</li>
                  <li>Click "Start Recording" and play your game</li>
                  <li>Stop recording and get instant shareable link</li>
                </ol>
              </div>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-lg">GitHub Repository Tips</h3>
              <div className="space-y-3">
                <div>
                  <p className="mb-1 font-medium text-sm">📄 Essential README.md Template:</p>
                  <pre className="overflow-x-auto rounded bg-slate-950 p-3 text-xs">
                    <code className="text-slate-50">
                      {`# [Your Game Name]

A retro [game type] built with AI assistance during AI CLI Tools Workshop.

## 🎮 Play the Game

[Live Demo](https://yourusername.github.io/your-game) _(if using GitHub Pages)_

## 🕹️ Controls

- **Arrow Keys / WASD**: [Describe controls]
- **Space**: [Describe action]
- **R**: Restart game

## ✨ Features

- [Feature 1]
- [Feature 2]
- [Feature 3]
- High score tracking with localStorage
- Responsive game loop at 60 FPS

## 🛠️ Built With

- HTML5 Canvas
- Vanilla JavaScript
- AI Pair Programming with [Codex CLI / Claude Code / etc.]

## 🚀 How to Run

1. Clone this repository
2. Open \`index.html\` in a modern browser
3. Play!

## 📸 Screenshot

![Gameplay Screenshot](./screenshot.png)

## 💭 Development Notes

[Brief description of what you learned, challenges faced, how AI helped]

## 🏗️ Development Process

Built iteratively with AI assistance:
1. Static scene rendering
2. Core mechanic implementation
3. Game logic and collision
4. Scoring and game states
5. Polish and refinements`}
                    </code>
                  </pre>
                </div>

                <div>
                  <p className="mb-1 font-medium text-sm">🌐 Hosting on GitHub Pages:</p>
                  <pre className="overflow-x-auto rounded bg-slate-950 p-3 text-xs">
                    <code className="text-slate-50">
                      {`# After pushing your code to GitHub:

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll to "Pages" section in left sidebar
4. Under "Source", select "main" branch
5. Click "Save"
6. Wait 1-2 minutes for deployment
7. Your game will be live at:
   https://yourusername.github.io/repository-name/

# For single index.html, you're done!
# For multiple files, make sure index.html is in root.`}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-white p-6 dark:bg-slate-900">
          <h2 className="mb-4 font-semibold text-2xl">Debugging Common Issues</h2>

          <div className="space-y-3">
            <div className="rounded border border-red-200 bg-red-50 p-3 dark:border-red-900 dark:bg-red-950/30">
              <p className="mb-2 font-medium text-sm">❌ Game is too slow / laggy</p>
              <p className="text-xs">
                <strong>Fix:</strong> &quot;Optimize the game loop. Move constant calculations outside the loop. Only
                redraw what changed. Reduce collision checks to necessary objects only.&quot;
              </p>
            </div>

            <div className="rounded border border-red-200 bg-red-50 p-3 dark:border-red-900 dark:bg-red-950/30">
              <p className="mb-2 font-medium text-sm">❌ Collision detection is buggy</p>
              <p className="text-xs">
                <strong>Fix:</strong> Switch to <code className="rounded bg-muted px-1 py-0.5">/model high</code> and
                prompt: &quot;Debug collision detection. Add visual hitboxes (draw rectangles around collision bounds in
                red). Log exact positions when collision is detected.&quot;
              </p>
            </div>

            <div className="rounded border border-red-200 bg-red-50 p-3 dark:border-red-900 dark:bg-red-950/30">
              <p className="mb-2 font-medium text-sm">❌ Controls feel unresponsive</p>
              <p className="text-xs">
                <strong>Fix:</strong> &quot;Change keyboard event from 'keydown' to track key states in an object. Update
                movement based on key states in the game loop instead of event handlers.&quot;
              </p>
            </div>

            <div className="rounded border border-red-200 bg-red-50 p-3 dark:border-red-900 dark:bg-red-950/30">
              <p className="mb-2 font-medium text-sm">❌ Game restarts but state isn't fully reset</p>
              <p className="text-xs">
                <strong>Fix:</strong> &quot;Create a resetGame() function that reinitializes ALL game variables to their
                starting values. Call this on game start and restart. Don't forget to clear any arrays or spawned
                objects.&quot;
              </p>
            </div>

            <div className="rounded border border-red-200 bg-red-50 p-3 dark:border-red-900 dark:bg-red-950/30">
              <p className="mb-2 font-medium text-sm">❌ Canvas is blank / not showing</p>
              <p className="text-xs">
                <strong>Fix:</strong> Check browser console for errors. Verify canvas.getContext('2d') succeeds. Ensure
                draw functions are called. Check if background color matches canvas color.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-cyan-200 bg-cyan-50 p-6 dark:border-cyan-900 dark:bg-cyan-950/30">
          <h2 className="mb-3 font-semibold text-xl">🎯 Presentation Tips</h2>
          <p className="mb-3 text-sm">
            When sharing your game with the workshop, be ready to talk about:
          </p>
          <ul className="list-disc space-y-2 pl-6 text-sm">
            <li>
              <strong>What you built:</strong> Quick game description and core mechanic
            </li>
            <li>
              <strong>AI collaboration:</strong> Which tool(s) you used and how they helped
            </li>
            <li>
              <strong>One interesting challenge:</strong> A problem you solved with AI assistance
            </li>
            <li>
              <strong>Favorite feature:</strong> What are you most proud of?
            </li>
            <li>
              <strong>Lessons learned:</strong> One key takeaway about AI pair programming
            </li>
          </ul>
        </div>

        <div className="rounded-lg border border-green-200 bg-green-50 p-6 dark:border-green-900 dark:bg-green-950/30">
          <h2 className="mb-3 font-semibold text-xl">✅ Completion Checklist</h2>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-green-600 dark:text-green-400">☐</span>
              <span>Game is playable from start to finish</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 dark:text-green-400">☐</span>
              <span>Core mechanic works reliably</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 dark:text-green-400">☐</span>
              <span>Win/lose conditions and restart function correctly</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 dark:text-green-400">☐</span>
              <span>AGENTS.md documents project constraints</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 dark:text-green-400">☐</span>
              <span>README.md with game info and controls</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 dark:text-green-400">☐</span>
              <span>Git repository with clear commit history</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 dark:text-green-400">☐</span>
              <span>
                <strong>Shared work via:</strong> Screenshot ✓ OR Video ✓ OR GitHub repo ✓
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 dark:text-green-400">☐</span>
              <span>Ready to present game to workshop!</span>
            </li>
          </ul>
        </div>

        <div className="flex justify-between pt-6">
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 font-medium text-sm ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground"
            href="/tasks/4/work"
          >
            Back to Work Area
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
