/** @format */

import { createFileRoute } from "@tanstack/react-router";
import Dashboard from "@/components/Dashboard";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div className={"flex flex-col h-full space-y-5"}>
      <h1 className={"text-3xl"}>Welcome Home!</h1>
      <Dashboard />
    </div>
  );
}
