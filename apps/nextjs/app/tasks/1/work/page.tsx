import Link from "next/link";
import { SiteHeader } from "@/components/site-header";

export default function Task1WorkPage() {
  return (
    <>
      <SiteHeader />
      <div className="flex flex-1 flex-col gap-8 p-8">
        <div className="space-y-4">
          <h1 className="font-bold text-4xl">Task 1: Work Area</h1>
          <p className="text-lg">Your workspace for completing the task.</p>
        </div>

        <div className="rounded-lg border bg-amber-50 p-6">
          <h2 className="mb-3 font-semibold text-xl">📝 Task Instructions</h2>
          <p className="mb-4">Follow these steps in your local terminal with Codex CLI:</p>
          <ol className="list-decimal space-y-2 pl-6">
            <li>Install Codex CLI if you haven't already</li>
            <li>Run the version check command to verify installation</li>
            <li>Start a new session and explore basic interactions</li>
            <li>Practice asking questions and requesting code assistance</li>
            <li>Learn how to end sessions properly</li>
          </ol>
        </div>

        <div className="rounded-lg border p-6">
          <h2 className="mb-3 font-semibold text-xl">💡 Notes</h2>
          <p className="text-muted-foreground text-sm">
            This is your work area where you can take notes and track your progress while working through the task in
            your local terminal.
          </p>
        </div>

        <div className="flex justify-between pt-6">
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 font-medium text-sm hover:bg-accent hover:text-accent-foreground"
            href="/tasks/1"
          >
            Back to Instructions
          </Link>
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 font-medium text-sm hover:bg-accent hover:text-accent-foreground"
            href="/tasks/1/solution"
          >
            View Solution
          </Link>
        </div>
      </div>
    </>
  );
}
