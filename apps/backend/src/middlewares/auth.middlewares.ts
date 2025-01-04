import jwt from "jsonwebtoken";
import { prisma } from "@cleartrack/prisma";
import { HttpResponse } from "@cleartrack/http-utils";
import { Controller } from "@/types";

export const authMiddleware: Controller = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    res.status(401).json({ message: "Unauthorized" });

    return new HttpResponse(401, {});
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
