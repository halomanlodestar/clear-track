/** @format */

import * as express from "express";

declare global {
	namespace Express {
		interface Request {
			user?: { id: number; name: string; email: string }; // Extend this to match your structure
		}
	}

	namespace NodeJS {
		interface ProcessEnv {
			JWT_SECRET: string;
			DATABASE_URL: string;
		}
	}
}
