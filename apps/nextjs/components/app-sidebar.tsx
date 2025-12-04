/** biome-ignore-all lint/a11y/useValidAnchor: TODO: Fix this */
"use client";

import { IconCheckbox, IconGitBranch, IconHome, IconInnerShadowTop, IconPresentation } from "@tabler/icons-react";
import Link from "next/link";
import type * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";

const data = {
  navMain: [
    {
      title: "Home",
      url: "/",
      icon: IconHome,
    },
    {
      title: "Curriculum",
      url: "/curriculum",
      icon: IconPresentation,
    },
    {
      title: "Learning Paths",
      url: "/curriculum/learning-paths",
      icon: IconGitBranch,
    },
    {
      title: "Presentation",
      url: "/presentation",
      icon: IconPresentation,
    },
    {
      title: "Tasks",
      url: "/tasks",
      icon: IconCheckbox,
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
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="data-[slot=sidebar-menu-button]:!p-1.5">
              <Link href="/">
                <IconInnerShadowTop className="!size-5" />
                <span className="font-semibold text-base">AI CLI Workshop</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.navMain.map((item) => {
                const Icon = item.icon;
                return (
                  <SidebarMenuItem key={item.title}>
                    {item.items ? (
                      <>
                        <SidebarMenuButton asChild tooltip={item.title}>
                          <Link href={item.url}>
                            {Icon && <Icon />}
                            <span>{item.title}</span>
                          </Link>
                        </SidebarMenuButton>
                        <SidebarMenuSub>
                          {item.items.map((subItem) => (
                            <SidebarMenuSubItem key={subItem.title}>
                              <SidebarMenuSubButton asChild>
                                <Link href={subItem.url}>
                                  <span>{subItem.title}</span>
                                </Link>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </>
                    ) : (
                      <SidebarMenuButton asChild tooltip={item.title}>
                        <Link href={item.url}>
                          {Icon && <Icon />}
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    )}
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
