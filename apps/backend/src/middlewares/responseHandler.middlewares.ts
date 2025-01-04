import { Request, Response, NextFunction } from "express";
import { HttpResponse } from "@cleartrack/http-utils";
import { HttpError } from "@cleartrack/http-utils/errors";

export const responseHandlerMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {};
