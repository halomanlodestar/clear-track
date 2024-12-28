/** @format */
import { Link } from "@tanstack/react-router";
import { Transaction } from "../../types";
import { cn } from "@/lib/utils";

interface Props {
  transaction: Transaction;
  variant?: "compact" | "full";
  className?: string;
}

const TransactionCard = ({ transaction, variant, className }: Props) => {
  if (variant === "compact") {
    return (
      <Link
        to="/transactions/$id"
        className={cn(
          "flex justify-between items-center p-1 px-2 border rounded",
          className,
        )}
        params={{ id: transaction.id }}
      >
        <div className="flex items-center space-x-5">
          <span>{transaction.sender}</span>
          <span className="text-2xl">&rarr;</span>
          <span>{transaction.recipient}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className={"font-medium"}>{transaction.amount}</span>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to="/transactions/$id"
      className="flex flex-col p-2 border rounded space-y-2"
      params={{ id: transaction.id }}
    >
      <div className="flex items-center space-x-5">
        <span>{transaction.sender}</span>
        <span className="text-2xl">&rarr;</span>
        <span>{transaction.recipient}</span>
      </div>
      <hr />
      <div className="flex items-center justify-between">
        <strong>{transaction.amount}</strong>
        <span>{transaction.createdAt}</span>
      </div>
    </Link>
  );
};

export default TransactionCard;
