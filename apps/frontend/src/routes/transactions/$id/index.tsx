/** @format */

import { createFileRoute, notFound } from "@tanstack/react-router";
import { getTransactions } from "@/lib/mock";

export const Route = createFileRoute("/transactions/$id/")({
	component: RouteComponent,
	loader: async ({ params: { id } }) => {
		const transactions = await getTransactions(id);
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
					<div>{item.sender}</div>
					<div>{item.recipient}</div>
				</div>
			))}
		</div>
	);
}
