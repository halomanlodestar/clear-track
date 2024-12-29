/** @format */

import { z } from "zod";

/** @format */
export const envSchema = z.object({
  DATABASE_URL: z.string().nonempty(),
  JWT_SECRET: z.string().nonempty(),
});
