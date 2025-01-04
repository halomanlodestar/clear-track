/** @format */

import { createFileRoute, notFound } from "@tanstack/react-router";
import api from "@/lib/api";

export const Route = createFileRoute("/transactions/$id/")({
  component: RouteComponent,
  loader: async ({ params: { id } }) => {
    const transactions = await api.transactions.get(id);
    if (!transactions || transactions.length === 0) throw notFound();

    return transactions;
  },
});

function RouteComponent() {
  const data = Route.useLoaderData();

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <div>
            <span>Sender</span>
            <span>{item.sender.name}</span>
          </div>
          <div>
            <span>Reciever</span>
            <span>{item.reciever.name}</span>
          </div>
          <div>
            <span>Amount</span>
            <span>{item.amount}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
