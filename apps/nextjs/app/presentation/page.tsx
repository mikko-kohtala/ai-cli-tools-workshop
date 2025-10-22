import { AppSidebar } from "@/components/app-sidebar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function PresentationPage() {
  return (
    <SidebarProvider>
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbPage>Presentation</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <SidebarTrigger className="-mr-1 ml-auto rotate-180" />
        </header>
        <div className="flex flex-1 flex-col gap-8 p-8">
          <div className="space-y-4">
            <h1 className="font-bold text-4xl">AI CLI Tools Workshop</h1>
            <p className="text-lg">Empowering collaborative coding assistance from your terminal</p>
          </div>

          <div className="space-y-6">
            <div className="rounded-lg border p-6">
              <h2 className="mb-4 font-semibold text-2xl">Presentation Content</h2>
              <p className="text-muted-foreground">
                The presentation slides will be displayed here. This is a placeholder for the 25-minute presentation
                covering AI CLI tools landscape and Codex CLI.
              </p>
            </div>

            <div className="rounded-lg border bg-neutral-50 p-6">
              <h2 className="mb-4 font-semibold text-2xl">📋 Agenda</h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>Why Codex CLI matters</li>
                <li>How the CLI harness works</li>
                <li>Working with sandboxing and approvals</li>
                <li>Building effective workflows</li>
                <li>Pro tips and next steps</li>
              </ul>
            </div>
          </div>
        </div>
      </SidebarInset>
      <AppSidebar side="right" />
    </SidebarProvider>
  );
}
