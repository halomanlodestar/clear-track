/** @format */

import { envSchema } from "@/schemas/env.schema";
import { config } from "dotenv";
import { z } from "zod";

export const env = (): z.infer<typeof envSchema> => {
	config({
		path: [".env", ".env.local"],
	});

	envSchema.parse(process.env);

	console.log("✅ Environment variables loaded successfully");
	return envSchema.parse(process.env);
};
