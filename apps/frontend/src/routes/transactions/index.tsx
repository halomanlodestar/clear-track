/** @format */

import { createFileRoute } from "@tanstack/react-router";
import { getTransactions } from "@/lib/mock";
import TransactionCard from "@/components/TransactionCard";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
} from "@/components/ui/pagination-tanstack";

export const Route = createFileRoute("/transactions/")({
  component: RouteComponent,
  validateSearch: (search) => ({
    start: (search.start as number) || 0,
    limit: (search.limit as number) || 5,
  }),
  loaderDeps: ({ search: { start, limit } }) => ({ start, limit }),
  loader: async ({ deps: { start, limit } }) => {
    const transactions = await getTransactions({ start, limit });
    return {
      transactions,
    };
  },
});

function RouteComponent() {
  const { limit, start } = Route.useSearch();
  const { transactions } = Route.useLoaderData();

  return (
    <div className="flex flex-col space-y-3">
      <h1 className="text-4xl">Past Transactions</h1>

      <div className="space-y-2">
        {transactions.map((transaction) => (
          <TransactionCard key={transaction.id} transaction={transaction} />
        ))}
      </div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              disabled={start === 0}
              to="/transactions"
              search={{
                start: start - limit,
                limit,
              }}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink>{start}</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              to="/transactions"
              search={{
                start: start + limit,
                limit,
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
