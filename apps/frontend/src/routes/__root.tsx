/** @format */

import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Navbar from "../components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/hooks/use-auth";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <div className="px-5 md:px-10 lg:px-20 p-4">
          <Toaster />
          <Outlet />
        </div>
        <TanStackRouterDevtools position="bottom-right" />
      </AuthProvider>
    </>
  );
}
