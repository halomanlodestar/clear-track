/** @format */
import { type RequestHandler } from "express";

export const pingController: RequestHandler = (req, res) => {
	res.json({ message: "pong" }).status(200);
};
