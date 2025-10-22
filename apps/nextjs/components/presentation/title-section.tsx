import { Terminal } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function TitleSection() {
  return (
    <div className="space-y-6 text-center">
      <div className="flex items-center justify-center gap-4">
        <Terminal className="h-16 w-16 text-primary" />
        <div>
          <h1 className="font-bold text-5xl">Codex CLI Tool</h1>
          <p className="mt-2 text-2xl text-muted-foreground">
            Empowering collaborative coding assistance from your terminal
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 text-lg">
        <Badge className="px-4 py-2 text-lg" variant="outline">
          AI CLI Tools Workshop
        </Badge>
        <Badge className="px-4 py-2 text-lg" variant="secondary">
          October 28, 2025
        </Badge>
        <Badge className="px-4 py-2 text-lg" variant="default">
          14:00–15:30
        </Badge>
      </div>

      <div className="mx-auto max-w-2xl rounded-lg bg-muted/50 p-6">
        <p className="text-lg">
          <strong>25 minutes</strong> presentation + <strong>1 hour</strong> hands-on workshop
        </p>
        <p className="mt-2 text-muted-foreground">
          Interactive workshop exploring AI Command Line tools with focus on OpenAI's Codex CLI
        </p>
      </div>
    </div>
  );
}
