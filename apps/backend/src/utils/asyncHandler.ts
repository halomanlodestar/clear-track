import { NextFunction, Request, Response } from "express";
import { Controller } from "@/types";
import { HttpError } from "@cleartrack/http-utils/errors";
import { HttpResponse } from "@cleartrack/http-utils";

export const controller = (fn: Controller): Controller => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const response: HttpResponse = await fn(req, res, next);
      res.status(response.status).json(response.data);
    } catch (error) {
      if (error instanceof HttpError) {
        return res.status(error.status).json({ message: error.message });
      }

      return res.status(500).json({ message: "Internal Server Error" });
    }
  };
};
