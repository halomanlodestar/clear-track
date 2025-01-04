import { NextFunction, Request, Response } from "express";

/** @format */
export type Controller = (
  req: Request,
  res: Response,
  next: NextFunction,
) => HttpResponse | Promise<HttpResponse>;
