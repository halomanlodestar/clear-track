/** @format */

import prisma from "@/config/database";
import { RequestHandler } from "express";
import jwt from "jsonwebtoken";

export const authMiddleware: RequestHandler = async (req, res, next) => {
	const token = req.headers.authorization?.split(" ")[1];

	if (!token) {
		res.status(401).json({ message: "Unauthorized" });
		return;
	}

	const payload = jwt.verify(token, process.env.JWT_SECRET!) as {
		id: string;
		exp: number;
	};

	if (Date.now() >= payload.exp) {
		res.status(401).json({ message: "Unauthorized" });
		return;
	}

	req.user =
		(await prisma.user.findUnique({
			where: {
				id: Number(payload.id),
			},
			select: {
				id: true,
				name: true,
				email: true,
			},
		})) ?? undefined;

	next();
};
