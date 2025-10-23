import { FileCode } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function CommunicationSection() {
  return (
    <section className="mb-16 scroll-mt-16" id="communication">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-pink-100">
          <FileCode className="h-5 w-5 text-pink-600" />
        </div>
        <h2 className="font-bold text-4xl">Communication Guidelines</h2>
      </div>

      <div className="mb-8 space-y-6">
        <Card>
          <CardContent className="p-6">
            <p className="text-lg leading-relaxed">
              Codex CLI's responses are designed to be concise, scannable, and action-oriented. Understanding how it
              communicates helps you work faster and reduces cognitive load during development sessions.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Be concise, friendly, and structured</CardTitle>
            <CardDescription>Format output for quick scanning and comprehension</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-muted-foreground text-sm">
              Codex avoids long-winded explanations unless you ask for details. Responses are structured with headers,
              bullet points, and clear sections so you can quickly understand what happened.
            </p>
            <Tabs defaultValue="good">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="good">✅ Good Response</TabsTrigger>
                <TabsTrigger value="bad">❌ Poor Response</TabsTrigger>
              </TabsList>
              <TabsContent className="mt-4" value="good">
                <div className="rounded bg-slate-50 p-4 text-sm">
                  <p className="mb-2 font-semibold">✓ Added pagination</p>
                  <p className="mb-2 text-muted-foreground">Modified 2 files:</p>
                  <ul className="ml-2 list-inside list-disc text-muted-foreground">
                    <li>ProductList.tsx - Added Pagination component</li>
                    <li>useProducts.ts - Added page and limit params</li>
                  </ul>
                  <p className="mt-3 text-muted-foreground">Next: Run 'npm test' to verify</p>
                </div>
              </TabsContent>
              <TabsContent className="mt-4" value="bad">
                <div className="rounded bg-red-50 p-4 text-sm">
                  <p className="text-muted-foreground">
                    So I looked at your code and I think what you're trying to do is add pagination which is a really
                    common pattern in web development where you split large datasets into smaller pages so users don't
                    have to load everything at once which is better for performance and UX and I decided to implement it
                    using the standard approach with page numbers and a limit parameter...
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Reference files with clickable paths</CardTitle>
            <CardDescription>Include precise line numbers for easy navigation</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-muted-foreground text-sm">
              When Codex references files, it includes the full path and often specific line numbers. Many terminals
              make these clickable, allowing you to jump directly to the relevant code.
            </p>
            <div className="rounded bg-slate-50 p-4">
              <p className="mb-2 text-sm">Example references:</p>
              <pre className="text-sm">
                <code className="text-blue-600">src/components/UserList.tsx:47</code> - Added loading state
                {"\n"}
                <code className="text-blue-600">src/api/users.ts:12-18</code> - Updated fetch function{"\n"}
                <code className="text-blue-600">tests/UserList.test.tsx:23</code> - Added test case
              </pre>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Avoid raw command outputs</CardTitle>
            <CardDescription>Summarize key findings instead of dumping logs</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-muted-foreground text-sm">
              Instead of showing you hundreds of lines of npm output or test logs, Codex summarizes what matters: Did it
              succeed? Were there errors? What changed?
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <p className="mb-2 font-semibold text-sm">❌ Raw output (200 lines)</p>
                <div className="h-32 overflow-hidden rounded bg-slate-950 p-3 text-slate-50 text-xs">
                  <code>
                    npm WARN deprecated pkg1@1.0.0{"\n"}
                    npm WARN deprecated pkg2@2.1.0{"\n"}
                    downloading packages...{"\n"}
                    extracting: pkg1{"\n"}
                    extracting: pkg2{"\n"}
                    [... 195 more lines ...]
                  </code>
                </div>
              </div>
              <div>
                <p className="mb-2 font-semibold text-sm">✅ Codex summary</p>
                <div className="rounded bg-slate-50 p-3 text-sm">
                  <p className="font-semibold text-green-600">✓ Installed 3 packages</p>
                  <p className="mt-2 text-muted-foreground">Added: axios, lodash, date-fns</p>
                  <p className="mt-2 text-amber-600 text-xs">⚠ 2 deprecated dependencies (non-critical)</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Use code fences and inline backticks</CardTitle>
            <CardDescription>Format code snippets and literals properly</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-muted-foreground text-sm">
              Codex uses Markdown-style formatting to make code stand out from prose. Code blocks use syntax
              highlighting, and inline code uses backticks for clarity.
            </p>
            <div className="space-y-3 rounded bg-slate-50 p-4 text-sm">
              <p>
                Inline code: Updated the <code className="rounded bg-white px-1 py-0.5">API_URL</code> constant
              </p>
              <p className="mt-3">Code block:</p>
              <pre className="rounded border bg-white p-3">
                <code>{`const fetchUsers = async () => {
  const response = await fetch(API_URL);
  return response.json();
};`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
