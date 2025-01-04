import "@cleartrack/shared/types";
import jwt from "jsonwebtoken";
import { RequestHandler } from "express";
import { createTransactionSchema } from "@/schemas/transactions.schema";
import { z } from "zod";
import { prisma } from "@cleartrack/prisma";
import { HttpResponse, HttpStatus } from "@cleartrack/http-utils";
import { controller } from "@/utils/asyncHandler";
import {
  InternalServerError,
  NotFoundError,
  UnauthorizedError,
} from "@cleartrack/http-utils/errors";

export const getTransactions = controller(async (req, res) => {
  const id = Number(req.params.id);

  const transactions = await prisma.transaction.findMany({
    where: {
      id,
    },
    omit: {
      senderId: true,
      recieverId: true,
    },
    include: {
      sender: {
        select: {
          email: true,
          name: true,
          id: true,
        },
      },
      reciever: {
        select: {
          email: true,
          name: true,
          id: true,
        },
      },
    },
  });

  // res.status(200).json({ transactions });
  return new HttpResponse(HttpStatus.OK, { transactions });
});

export const getTransactionsFrom = controller(async (req, res) => {
  const id = Number(req.params.id);

  const transactions = await prisma.transaction.findMany({
    where: {
      senderId: id,
    },
  });

  // res.status(200).json({
  //   transactions,
  // });

  return new HttpResponse(HttpStatus.OK, { transactions });
});

export const getPendingTransactionsFrom = controller(async (req, res) => {
  const id = Number(req.params.id);

  const transactions = await prisma.pendingTransaction.findMany({
    where: {
      senderId: id,
    },
  });

  res.status(200).json({
    transactions,
  });
});

export const createTransaction = controller(async (req, res) => {
  const { amount, expirationTime, recieverId } = req.body as z.infer<
    typeof createTransactionSchema
  >;

  const { id: senderId } = req?.user!;

  // Find last transaction made by the user
  const { signature: previousHash } = (await prisma.transaction.findFirst({
    where: {
      senderId,
      recieverId,
    },
    orderBy: {
      initialisedAt: "desc",
    },
    select: {
      signature: true,
    },
  })) ?? { signature: (Math.random() * 1_000_000).toString() };

  const signature = jwt.sign(
    { amount, expirationTime, recieverId, senderId, previousHash },
    process.env.JWT_SECRET!,
  );

  try {
    await prisma.pendingTransaction.create({
      data: {
        amount,
        expirationTime,
        recieverId,
        senderId,
        signature,
        previousHash,
      },
    });
  } catch (error) {
    console.error(error);
    // res.status(500).json({ message: "Internal server error" });
    throw new InternalServerError("Internal server error");
  }

  res.status(201).json({});
});

export const acceptTransaction = controller(async (req, res) => {
  const id = Number(req.params.id);

  const pendingTransaction = await prisma.pendingTransaction.findUnique({
    where: {
      id,
    },
  });

  if (!pendingTransaction) {
    // res.status(404).json({ message: "Transaction not found" });
    throw new NotFoundError("Transaction not found");
  }

  const { amount, expirationTime, recieverId, senderId, previousHash } =
    jwt.verify(pendingTransaction.signature, process.env.JWT_SECRET!) as {
      amount: number;
      expirationTime: string;
      recieverId: number;
      senderId: number;
      previousHash: string;
    };

  const { id: userId } = req?.user!;

  // console.log(userId, recieverId);

  if (userId !== recieverId) {
    // res.status(401).json({ message: "Unauthorized" });
    // return;
    throw new UnauthorizedError("Unauthorized");
  }

  const transaction = await prisma.transaction.create({
    data: {
      amount,
      expirationTime,
      acceptedAt: new Date().toISOString(),
      recieverId,
      senderId,
      signature: pendingTransaction.signature,
      previousHash,
      status: "SUCCESSFUL",
    },
  });

  await prisma.pendingTransaction.delete({
    where: {
      id,
    },
  });

  // res.status(201).json({ transaction });
  return new HttpResponse(HttpStatus.CREATED, { transaction });
});

export const rejectTransaction = controller(async (req, res) => {
  const id = Number(req.params.id);

  const pendingTransaction = await prisma.pendingTransaction.findUnique({
    where: {
      id,
    },
  });

  if (!pendingTransaction) {
    // res.status(404).json({ message: "Transaction not found" });
    throw new NotFoundError("Transaction not found");
  }

  const { recieverId } = jwt.verify(
    pendingTransaction.signature,
    process.env.JWT_SECRET!,
  ) as {
    recieverId: number;
  };

  const { id: userId } = req?.user!;

  if (userId !== recieverId) {
    // res.status(401).json({ message: "Unauthorized" });
    // return;
    throw new UnauthorizedError("Unauthorized");
  }

  await prisma.pendingTransaction.delete({
    where: {
      id,
    },
  });

  prisma.rejectedTransaction.create({
    data: {
      ...pendingTransaction,
      status: "REJECTED",
    },
  });

  // res.status(204).json({});
  return new HttpResponse(HttpStatus.NO_CONTENT);
});
