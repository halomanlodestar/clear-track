import { prisma } from "@cleartrack/prisma";
import { Prisma } from "@cleartrack/prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { controller } from "@/utils/asyncHandler";
import { HttpResponse } from "@cleartrack/http-utils";
import {
  BadRequestError,
  InternalServerError,
  NotFoundError,
} from "@cleartrack/http-utils/errors";

const ACCESS_TOKEN_EXPIRY = 1000 * 60 * 15;
const REFRESH_TOKEN_EXPIRY = 1000 * 60 * 60 * 24 * 7;

export const login = controller(async (req, res, next) => {
  const { email, password } = req.body;

  const loggedIn = req.cookies.refresh_token;

  if (loggedIn) {
    // res.status(200).json({ message: "Already Logged In" });
    // return next();
    return new HttpResponse(200, { message: "Already Logged In" });
  }

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    // res.status(404).json({ message: "Invalid credentials" });
    // return next();
    throw new NotFoundError("Invalid credentials");
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    // res.status(401).json({ message: "Invalid credentials" });
    // return next();
    return new HttpResponse(401, { message: "Invalid credentials" });
  }

  const refreshToken = jwt.sign(
    { id: user.id, name: user.name, email: user.email },
    process.env.JWT_SECRET!,
  );

  try {
    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        token: refreshToken,
      },
    });
  } catch (error) {
    // res.status(500).json({ message: "Internal Server Error" });
    // return next();
    throw new InternalServerError("Internal Server Error");
  }

  res.cookie("refresh_token", refreshToken, {
    expires: new Date(Date.now() + REFRESH_TOKEN_EXPIRY),
    httpOnly: true,
  });

  res.status(200).json({ message: "Logged in" });
});

export const register = controller(async (req, res, next) => {
  const { name, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    res.status(201).json({ user });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      // res.status(400).json({ message: "Already Registered" });
      // return next();
      throw new BadRequestError("Already Registered");
    }
  }
});

export const logout = controller((req, res, next) => {
  // res.clearCookie("access_token");
  res.clearCookie("refresh_token");

  res.status(200).json({ message: "Logged out" });
});

export const refresh = controller(async (req, res, next) => {
  const refreshToken = req.cookies.refresh_token;

  if (!refreshToken) {
    res.status(401).json({ message: "Unauthorized" });
    return next();
  }

  let payload: any;

  try {
    payload = jwt.verify(refreshToken, process.env.JWT_SECRET!);
  } catch (error) {
    res.status(401).json({ message: "Unauthorized" });
    return next();
  }

  const user = await prisma.user.findUnique({
    where: {
      id: payload.id,
    },
  });

  if (!user) {
    res.status(401).json({ message: "Unauthorized" });
    return next();
  }

  const accessToken = jwt.sign(
    { id: user.id, exp: Date.now() + ACCESS_TOKEN_EXPIRY },
    process.env.JWT_SECRET!,
    {},
  );

  // res.cookie("access_token", accessToken, {
  // 	expires: new Date(Date.now() + ACCESS_TOKEN_EXPIRY),
  // });

  res.status(200).json({ accessToken });
});

export const me = controller(async (req, res, next) => {
  const accessToken = req.headers.authorization?.split(" ")[1];

  if (!accessToken) {
    res.status(401).json({ message: "Unauthorized" });
    return next();
  }

  let payload: any;

  try {
    payload = jwt.verify(accessToken, process.env.JWT_SECRET!);
  } catch (error) {
    res.status(401).json({ message: "Unauthorized" });
    return next();
  }

  console.log(payload);

  const user = await prisma.user.findUnique({
    where: {
      id: payload.id,
    },
    select: {
      name: true,
      email: true,
    },
  });

  if (!user) {
    res.status(401).json({ message: "Unauthorized" });
    return next();
  }

  res.status(200).json({ user });
});
