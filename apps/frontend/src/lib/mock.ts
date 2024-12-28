/** @format */

import { Transaction } from "../../types";

interface GetTransactionsProps {
  id: string | number | undefined;
  start: number | undefined;
  limit: number | undefined;
}

export const getTransactions = async ({
  id,
  limit = 10,
  start = 0,
}: Partial<GetTransactionsProps>): Promise<Transaction[]> => {
  if (!id) return transactions.slice(start, start + limit);

  const out = transactions
    .filter((item) => item.id === id)
    .slice(start, start + limit);

  return new Promise<Transaction[]>((resolve) => resolve(out));
};

export const transactions: Transaction[] = [
  {
    id: "txn1",
    sender: "Alice",
    recipient: "Bob",
    amount: 150.75,
    createdAt: "2024-12-13T10:15:30Z",
  },
  {
    id: "txn2",
    sender: "Charlie",
    recipient: "Diana",
    amount: 320.5,
    createdAt: "2024-12-12T14:20:45Z",
  },
  {
    id: "txn3",
    sender: "Eve",
    recipient: "Frank",
    amount: 45.0,
    createdAt: "2024-12-11T18:00:00Z",
  },
  {
    id: "txn4",
    sender: "George",
    recipient: "Helen",
    amount: 999.99,
    createdAt: "2024-12-10T08:30:15Z",
  },
  {
    id: "txn5",
    sender: "Ivy",
    recipient: "Jack",
    amount: 25.5,
    createdAt: "2024-12-13T12:45:00Z",
  },
  {
    id: "txn6",
    sender: "Alice",
    recipient: "Bob",
    amount: 100.0,
    createdAt: "2024-12-14T09:30:00Z",
  },
  {
    id: "txn7",
    sender: "Charlie",
    recipient: "Dave",
    amount: 75.25,
    createdAt: "2024-12-15T14:20:00Z",
  },
  {
    id: "txn8",
    sender: "Eve",
    recipient: "Frank",
    amount: 50.0,
    createdAt: "2024-12-16T16:45:00Z",
  },
  {
    id: "txn9",
    sender: "Grace",
    recipient: "Heidi",
    amount: 200.0,
    createdAt: "2024-12-17T11:00:00Z",
  },
  {
    id: "txn10",
    sender: "Judy",
    recipient: "Mallory",
    amount: 150.75,
    createdAt: "2024-12-18T13:30:00Z",
  },
];
