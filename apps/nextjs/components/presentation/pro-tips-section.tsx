import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ProTipsSection() {
  return (
    <section className="space-y-6">
      <h2 className="font-bold text-3xl">Pro Tips for Power Users</h2>

      <div className="space-y-6">
        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
          <CardHeader>
            <CardTitle>
              Prefer <code>rg</code> for Fast Searches
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-muted-foreground">
              Ripgrep (<code>rg</code>) is significantly faster than grep and provides better output formatting. Always
              specify <code>workdir</code> on every shell call to ensure consistent behavior.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h4 className="mb-2 font-semibold">Basic Usage:</h4>
                <div className="rounded-lg bg-muted p-4">
                  <code className="text-sm">
                    $ rg "function.*async" --workdir=src
                    <br />$ rg "TODO|FIXME" --workdir=.
                  </code>
                </div>
              </div>
              <div>
                <h4 className="mb-2 font-semibold">Advanced Options:</h4>
                <div className="rounded-lg bg-muted p-4">
                  <code className="text-sm">
                    $ rg -A 3 -B 3 "error" --workdir=src
                    <br />$ rg --type=ts "interface" --workdir=.
                  </code>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20">
          <CardHeader>
            <CardTitle>Use ASCII and Minimal Comments</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-muted-foreground">
              ASCII diagrams and minimal comments provide clear visual context without cluttering the output. Add
              comments only when clarity demands it, not as a default.
            </p>
            <div className="rounded-lg bg-muted p-4">
              <code className="text-sm">
                ┌─────────────────┐
                <br />│ User Input │<br />
                └─────────┬───────┘
                <br />
                │<br />
                ┌─────────▼───────┐
                <br />│ Validation │<br />
                └─────────┬───────┘
                <br />
                │<br />
                ┌─────────▼───────┐
                <br />│ Processing │<br />
                └─────────────────┘
              </code>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
          <CardHeader>
            <CardTitle>Monitor File Changes</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-muted-foreground">
              Watch for unexpected file changes and pause if they appear. This helps catch potential issues early and
              ensures you're aware of all modifications made during the session.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h4 className="mb-2 font-semibold">Monitoring Commands:</h4>
                <div className="rounded-lg bg-muted p-4">
                  <code className="text-sm">
                    $ git status
                    <br />$ find . -name "*.tmp"
                    <br />$ ls -la src/
                  </code>
                </div>
              </div>
              <div>
                <h4 className="mb-2 font-semibold">Warning Signs:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Unexpected new files</li>
                  <li>• Modified system files</li>
                  <li>• Large file deletions</li>
                  <li>• Permission changes</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20">
          <CardHeader>
            <CardTitle>CLI Styles Text</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-muted-foreground">
              Keep formatting minimal but intentional. The CLI handles text styling, so focus on content structure
              rather than complex formatting that might not render properly.
            </p>
            <div className="space-y-3">
              <div>
                <h4 className="mb-1 font-semibold text-sm">Good Formatting:</h4>
                <div className="rounded-lg bg-muted p-4">
                  <code className="text-sm">
                    **Success:** Operation completed
                    <br />
                    *Files:* 3 modified
                    <br />
                    `Code:` Clean and readable
                  </code>
                </div>
              </div>
              <div>
                <h4 className="mb-1 font-semibold text-sm">Avoid:</h4>
                <div className="rounded-lg bg-muted p-4">
                  <code className="text-sm">
                    <span className="text-red-500">❌</span> Complex HTML tags
                    <br />
                    <span className="text-red-500">❌</span> Excessive emojis
                    <br />
                    <span className="text-red-500">❌</span> Overly nested formatting
                  </code>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
