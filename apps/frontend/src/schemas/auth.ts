/** @format */

import { z } from "zod";

export const signUpFormSchema = z.object({
  name: z
    .string()
    .min(5, { message: "Name must be at least 5 characters long" })
    .max(32, { message: "Size limit exceeded" }),
  email: z.string().email().min(3),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(32, { message: "Size limit exceeded" }),
});

export const signInFormSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});
