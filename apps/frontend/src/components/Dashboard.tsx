import React from "react";
import { transactions } from "@/lib/mock";
import TransactionCard from "@/components/TransactionCard";
import { Transaction } from "../../types";

const Dashboard = () => {
  return (
    <div className={"flex flex-col space-y-2 md:space-y-7"}>
      <div
        className={
          "flex flex-col space-y-2 sm:space-x-3 md:space-x-7 sm:space-y-0 sm:flex-row justify-between items-center"
        }
      >
        <AmountDisplay title={"Total Money Given"} amount={"$1000"} />
        <AmountDisplay title={"Total Money Taken"} amount={"$500"} />
      </div>

      <div
        className={
          "flex flex-col space-y-2 sm:space-x-3 md:space-x-7 sm:space-y-0 sm:flex-row justify-between items-center"
        }
      >
        <TransactionList
          transactions={transactions}
          title={"Top Balance Holders"}
        />
        <TransactionList
          transactions={transactions}
          title={"Top Balance Holders"}
        />
      </div>
    </div>
  );
};

interface AmountDisplayProps {
  title: string;
  amount: string;
}

export const AmountDisplay = ({ title, amount }: AmountDisplayProps) => {
  return (
    <div className={"flex flex-col space-y-1 border rounded-xl p-4 w-full"}>
      <h3 className={"text-secondary-foreground"}>{title}</h3>
      <div>
        <h1 className={"text-3xl font-medium"}>{amount}</h1>
      </div>
    </div>
  );
};

interface TransactionListProps {
  title: string;
  transactions: Transaction[];
}

export const TransactionList = ({
  title,
  transactions,
}: TransactionListProps) => {
  return (
    <div className={"flex flex-col  border rounded-xl p-4 w-full"}>
      <h3 className={"text-secondary-foreground pb-3"}>{title}</h3>
      <hr />
      <div
        className={
          "flex flex-col space-y-1 h-64 overflow-y-scroll scroll-hidden divide-y"
        }
      >
        {transactions.map((transaction) => (
          <TransactionCard
            variant={"compact"}
            transaction={transaction}
            key={transaction.id}
            className={"border-0 rounded-none"}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
