/** @format */
import express from "express";
import { mainRouter } from "@/routes";
import prisma from "@/config/database";
import { env } from "./config/env";

env();

const app = express();

await prisma.$connect().then(() => console.log("✅ Connected to database"));

app.use("/api/v1", mainRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`✅ Running app at ${PORT}`));
