import Link from "next/link";
import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

const TOTAL_TASKS = 4;

export default function TasksPage() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-8 p-8">
              <div className="space-y-4">
                <h1 className="font-bold text-4xl">Workshop Tasks</h1>
                <p className="text-lg">Hands-on exercises to learn Codex CLI through practical application.</p>
              </div>

              <div className="grid gap-6">
                {Array.from({ length: TOTAL_TASKS }, (_, i) => i + 1).map((taskNumber) => (
                  <Link
                    className="group relative rounded-lg border p-6 transition-colors hover:border-foreground/50"
                    href={`/tasks/${taskNumber}`}
                    key={taskNumber}
                  >
                    <div className="space-y-2">
                      <h2 className="font-semibold text-2xl tracking-tight">Task {taskNumber}</h2>
                      <p className="text-muted-foreground">
                        Learn and practice key Codex CLI features in this hands-on exercise.
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
