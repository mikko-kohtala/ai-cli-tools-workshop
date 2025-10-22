"use client";

import { Terminal } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";

// Navigation data
const navigation = {
  main: [
    {
      title: "Home",
      url: "/",
      items: [],
    },
    {
      title: "Presentation",
      url: "/presentation",
      items: [],
    },
    {
      title: "Workshop Tasks",
      url: "/tasks",
      items: [
        {
          title: "Task 1",
          url: "/tasks/1",
        },
        {
          title: "Task 2",
          url: "/tasks/2",
        },
        {
          title: "Task 3",
          url: "/tasks/3",
        },
        {
          title: "Task 4",
          url: "/tasks/4",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();

  // Check if a URL is active
  const isActive = (url: string) => {
    if (url === "/") {
      return pathname === "/";
    }

    // For hash links, check if the pathname matches the base URL
    if (url.includes("#")) {
      const baseUrl = url.split("#")[0];
      return pathname === baseUrl || pathname.startsWith(`${baseUrl}/`);
    }

    return pathname === url || pathname.startsWith(`${url}/`);
  };

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild size="lg">
              <Link href="/">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Terminal className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">AI CLI Tools</span>
                  <span className="">Workshop</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigation.main.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={isActive(item.url)}>
                    <Link className="font-medium" href={item.url}>
                      {item.title}
                    </Link>
                  </SidebarMenuButton>
                  {item.items?.length > 0 && (
                    <SidebarMenu className="mt-1 ml-4">
                      {item.items.map((subItem) => (
                        <SidebarMenuItem key={subItem.title}>
                          <SidebarMenuButton asChild isActive={isActive(subItem.url)} size="sm">
                            <Link href={subItem.url}>{subItem.title}</Link>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
