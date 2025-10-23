import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <main>
      <Outlet />
      {import.meta.env.DEV && <TanStackRouterDevtools />}
    </main>
  ),
});
