/** @format */

import { z } from "zod";

export const createTransactionSchema = z.object({
  amount: z.number(),
  recieverId: z.number(),
  expirationTime: z.preprocess((arg) => {
    if (typeof arg === "string" || arg instanceof Date) {
      const date = new Date(arg);
      if (!isNaN(date.getTime())) {
        return date;
      }
    }
    return undefined;
  }, z.date()),
});
