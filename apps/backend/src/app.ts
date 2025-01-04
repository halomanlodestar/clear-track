import express from "express";
import { mainRouter } from "@/routes";
import { env } from "./config/env";
import { prisma } from "@cleartrack/prisma";
import cors from "cors";
import morgan from "morgan";
import { responseHandlerMiddleware } from "@/middlewares/responseHandler.middlewares";

env();

const app = express();

console.log("🚀 Starting server...");
console.log("🔌 Connecting to database...");

await prisma.$connect().then(() => console.log("✅ Connected to database"));

app.use(
  cors({
    origin: ["http://localhost:3001"],
  }),
);
app.use(morgan("dev"));
app.use("/api/v1", mainRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`✅ Running app at ${PORT}`));
