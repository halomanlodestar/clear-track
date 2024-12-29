/** @format */

import { Router } from "express";
import ValidationPipe from "@/pipes/validation.pipes";
import { loginSchema, registerSchema } from "@/schemas/auth.schema";
import {
  login,
  logout,
  me,
  refresh,
  register,
} from "@/controllers/auth.controller";
import { authMiddleware } from "@/middlewares/auth.middlewares";

const authRouter = Router();

authRouter.post("/register", ValidationPipe(registerSchema), register);
authRouter.post("/login", ValidationPipe(loginSchema), login);
authRouter.post("/refresh", refresh);
authRouter.post("/logout", logout);
authRouter.get("/me", authMiddleware, me);

export default authRouter;
