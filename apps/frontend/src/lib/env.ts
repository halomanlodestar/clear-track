/** @format */

import z from "zod";

const envSchema = z.object({
  API_URL: z.string(),
});

export const config = () => {
  return envSchema.parse(process.env);
};
