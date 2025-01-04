import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/transactions/new/")({
  component: NewTransaction,
});

function NewTransaction() {
  return <div>Hello "/transactions/new/"!</div>;
}
