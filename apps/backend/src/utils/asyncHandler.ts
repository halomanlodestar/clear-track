import { NextFunction, Request, Response } from "express";
import { Controller } from "@/types";
import { HttpError } from "@cleartrack/http-utils/errors";

const asyncHandler = (fn: Function) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((err: HttpError) => {
      res.json({ message: err.message }).status(err.status);
    });
  };
};

export const controller = (fn: Controller): Controller => {
  return asyncHandler(fn);
};
