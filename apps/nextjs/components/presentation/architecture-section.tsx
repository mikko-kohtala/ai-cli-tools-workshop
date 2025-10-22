import { Info, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function ArchitectureSection() {
  return (
    <section className="space-y-6">
      <h2 className="font-bold text-3xl">Harness Architecture</h2>

      <div className="space-y-6">
        <Card className="border-l-4 border-l-blue-500">
          <CardHeader>
            <CardTitle className="text-blue-900 dark:text-blue-100">CLI Frontend</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-blue-800 dark:text-blue-200">
              The CLI frontend wraps prompts, agent replies, and inline diffs for a seamless experience. It handles user
              interaction, command parsing, and output formatting.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h4 className="mb-2 font-semibold">Features:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Interactive command interface</li>
                  <li>• Real-time diff display</li>
                  <li>• Progress indicators</li>
                  <li>• Error handling and recovery</li>
                </ul>
              </div>
              <div>
                <h4 className="mb-2 font-semibold">Benefits:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Consistent user experience</li>
                  <li>• Clear visual feedback</li>
                  <li>• Easy error diagnosis</li>
                  <li>• Seamless integration</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-green-500">
          <CardHeader>
            <CardTitle className="text-green-900 dark:text-green-100">Sandbox Layer</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-green-800 dark:text-green-200">
              Enforces filesystem and network policies to ensure safe execution of AI-generated commands. Multiple
              sandbox modes provide different levels of protection.
            </p>
            <Tabs className="w-full" defaultValue="modes">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="modes">Sandbox Modes</TabsTrigger>
                <TabsTrigger value="policies">Policies</TabsTrigger>
                <TabsTrigger value="examples">Examples</TabsTrigger>
              </TabsList>
              <TabsContent className="mt-4" value="modes">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">read-only</Badge>
                    <span className="text-sm">Exploration and analysis only</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">workspace-write</Badge>
                    <span className="text-sm">Safe modifications within project</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="destructive">danger</Badge>
                    <span className="text-sm">Full system access (use with caution)</span>
                  </div>
                </div>
              </TabsContent>
              <TabsContent className="mt-4" value="policies">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-green-500" />
                    <span className="text-sm">File system access control</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Network request filtering</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Process execution limits</span>
                  </div>
                </div>
              </TabsContent>
              <TabsContent className="mt-4" value="examples">
                <div className="rounded-lg bg-muted p-4">
                  <code className="text-sm">
                    $ codex --sandbox=workspace-write "add new feature"
                    <br />$ codex --sandbox=read-only "analyze code quality"
                    <br />$ codex --sandbox=danger "system maintenance"
                  </code>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-purple-500">
          <CardHeader>
            <CardTitle className="text-purple-900 dark:text-purple-100">Approval Flow</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-purple-800 dark:text-purple-200">
              Controls escalations and permissions through configurable approval policies, ensuring you maintain control
              over potentially risky operations.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h4 className="mb-3 font-semibold">Approval Policies:</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="destructive">never</Badge>
                    <span className="text-sm">No escalation requests</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">on-request</Badge>
                    <span className="text-sm">Ask for permission</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">on-failure</Badge>
                    <span className="text-sm">Retry after failure</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="default">untrusted</Badge>
                    <span className="text-sm">Always confirm</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="mb-3 font-semibold">Use Cases:</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <Info className="mt-0.5 h-4 w-4 text-blue-500" />
                    <span>
                      Production environments: <code>never</code>
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Info className="mt-0.5 h-4 w-4 text-yellow-500" />
                    <span>
                      Development: <code>on-request</code>
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Info className="mt-0.5 h-4 w-4 text-green-500" />
                    <span>
                      Personal projects: <code>untrusted</code>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-orange-500">
          <CardHeader>
            <CardTitle className="text-orange-900 dark:text-orange-100">Agent Runtime</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-orange-800 dark:text-orange-200">
              Delivers instructions, templates, and formatting for reliable output. The runtime ensures consistent
              behavior and high-quality results across different tasks.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h4 className="mb-2 font-semibold">Runtime Features:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Context-aware instruction generation</li>
                  <li>• Template-based output formatting</li>
                  <li>• Error recovery mechanisms</li>
                  <li>• Performance optimization</li>
                </ul>
              </div>
              <div>
                <h4 className="mb-2 font-semibold">Quality Assurance:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Consistent output format</li>
                  <li>• Reliable error handling</li>
                  <li>• Context preservation</li>
                  <li>• User feedback integration</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
