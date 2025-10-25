import { BracesIcon, LinkIcon } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Separator } from "./ui/separator";
import ModeToggle from "./ModeToggle";
import { Link, useLocation } from "@tanstack/react-router";

// Menu items.
const items = [
  {
    url: "/json-formatter",
    title: "JSON Formatter",
    icon: BracesIcon,
  },
  {
    url: "/url-decoder-encoder",
    title: "URL Encoder/Decoder",
    icon: LinkIcon,
  },
];

export function AppSidebar() {
  const { pathname } = useLocation();

  return (
    <Sidebar collapsible="icon" variant="floating">
      <SidebarHeader>
        <SidebarMenuButton asChild>
          <ModeToggle />
        </SidebarMenuButton>
        <Separator />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="gap-3">
              {items.map((item) => (
                <SidebarMenuItem
                  key={item.title}
                  className="hover:cursor-pointer"
                >
                  <SidebarMenuButton
                    asChild
                    tooltip={item.title}
                    isActive={
                      pathname === item.url ||
                      (pathname === "/" && item.url === "/json-formatter")
                    }
                  >
                    <Link to={item.url} target="_blank">
                      <item.icon />
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
