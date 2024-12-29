import express from "express";
import { mainRouter } from "@/routes";
import { env } from "./config/env";
import { prisma } from "@cleartrack/prisma";

env();

const app = express();

console.log("🚀 Starting server...");
console.log("🔌 Connecting to database...");

await prisma.$connect().then(() => console.log("✅ Connected to database"));

app.use("/api/v1", mainRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`✅ Running app at ${PORT}`));
