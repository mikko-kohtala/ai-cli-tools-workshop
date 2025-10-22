import Link from "next/link";
import { AppSidebar } from "@/components/app-sidebar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

const TOTAL_TASKS = 4;

export default function TasksPage() {
  return (
    <SidebarProvider>
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbPage>Workshop Tasks</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <SidebarTrigger className="-mr-1 ml-auto rotate-180" />
        </header>
        <div className="flex flex-1 flex-col gap-8 p-8">
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
      </SidebarInset>
      <AppSidebar side="right" />
    </SidebarProvider>
  );
}
