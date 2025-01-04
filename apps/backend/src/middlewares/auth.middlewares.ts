import jwt from "jsonwebtoken";
import { prisma } from "@cleartrack/prisma";
import { Controller } from "@/types";
import { UnauthorizedError } from "@cleartrack/http-utils/error/4xx";
import { controller } from "@/utils/asyncHandler";

export const authMiddleware: Controller = controller(async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    // res.status(401).json({ message: "Unauthorized" });

    // return new HttpResponse(401, {});
    throw new UnauthorizedError("Unauthorized by middleware");
  }

  const payload = jwt.verify(token, process.env.JWT_SECRET!) as {
    id: string;
    exp: number;
  };

  if (Date.now() >= payload.exp) {
    // res.status(401).json({ message: "Unauthorized" });
    // return;
    throw new UnauthorizedError("Unauthorized by middleware");
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
});
