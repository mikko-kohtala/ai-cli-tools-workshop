"use client";

import { IconChevronRight } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function SiteHeader() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Generate breadcrumb segments from pathname
  const generateBreadcrumbs = () => {
    const segments = pathname.split("/").filter(Boolean);

    // Map route segments to readable titles
    const titleMap: Record<string, string> = {
      presentation: "Presentation",
      tasks: "Tasks",
      "1": "Task 1",
      "2": "Task 2",
      "3": "Task 3",
      "4": "Task 4",
    };

    if (segments.length === 0) {
      return [{ label: "Home", href: "/" }];
    }

    const breadcrumbs = [{ label: "Home", href: "/" }];
    let currentPath = "";

    for (const segment of segments) {
      currentPath += `/${segment}`;
      breadcrumbs.push({
        label: titleMap[segment] || segment.charAt(0).toUpperCase() + segment.slice(1),
        href: currentPath,
      });
    }

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  return (
    <>
      {/* Floating trigger that shows when scrolled */}
      <div
        className={`fixed top-4 left-4 z-50 transition-all duration-300 ${
          isScrolled ? "translate-y-0 opacity-100" : "-translate-y-4 pointer-events-none opacity-0"
        }`}
      >
        <SidebarTrigger className="border bg-background/80 shadow-lg backdrop-blur-sm hover:bg-accent" />
      </div>

      <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
        <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
          <SidebarTrigger
            className={`-ml-1 transition-opacity duration-300 ${isScrolled ? "pointer-events-none opacity-0" : "opacity-100"}`}
          />
          <Separator className="mx-2 data-[orientation=vertical]:h-4" orientation="vertical" />
          <nav className="flex items-center gap-1 text-sm">
            {breadcrumbs.map((crumb, index) => {
              const isLast = index === breadcrumbs.length - 1;
              return (
                <div className="flex items-center gap-1" key={crumb.href}>
                  {isLast ? (
                    <span className="font-medium text-foreground">{crumb.label}</span>
                  ) : (
                    <>
                      <Link className="text-muted-foreground transition-colors hover:text-foreground" href={crumb.href}>
                        {crumb.label}
                      </Link>
                      <IconChevronRight className="size-4 text-muted-foreground" />
                    </>
                  )}
                </div>
              );
            })}
          </nav>
          <div className="ml-auto flex items-center gap-2">
            <ThemeToggle />
          </div>
        </div>
      </header>
    </>
  );
}
