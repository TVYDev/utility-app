import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export const Route = createRootRoute({
  component: () => (
    <SidebarProvider defaultOpen={false} open={false} className="bg-sidebar-border">
      <AppSidebar />
      <main className="w-full grow">
        <Outlet />
        {import.meta.env.DEV && <TanStackRouterDevtools />}
      </main>
    </SidebarProvider>
  ),
});
