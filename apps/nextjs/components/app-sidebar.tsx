/** biome-ignore-all lint/a11y/useValidAnchor: TODO: Fix this */
"use client";

import { IconBook, IconCheckbox, IconHome, IconInnerShadowTop, IconPresentation } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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

const navMain = [
  {
    title: "Home",
    url: "/",
    icon: IconHome,
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
      { title: "Task 1", url: "/tasks/1" },
      { title: "Task 2", url: "/tasks/2" },
      { title: "Task 3", url: "/tasks/3" },
      { title: "Task 4", url: "/tasks/4" },
    ],
  },
];

const curriculumTools = [
  { name: "Claude", slug: "curriculum" },
  { name: "Codex", slug: "curriculum-codex" },
  { name: "Codexmax", slug: "curriculum-codexmax" },
  { name: "Copilot", slug: "curriculum-copilot" },
  { name: "Cursor Agent", slug: "curriculum-cursor-agent" },
];

const curriculumNav = {
  title: "Curriculum",
  url: "/curriculum",
  icon: IconBook,
  items: [
    ...curriculumTools.flatMap((tool) => [
      { title: tool.name, url: `/${tool.slug}` },
      { title: `${tool.name} Paths`, url: `/${tool.slug}/learning-paths` },
    ]),
    { title: "Developer Deep Dive", url: "/curriculum/learning-paths/developers" },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  const showCurriculum = pathname.startsWith("/curriculum");

  const navItems = showCurriculum ? [...navMain, curriculumNav] : navMain;

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
              {navItems.map((item) => {
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
