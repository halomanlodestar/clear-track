/** @format */

import { RequestHandler } from "express";
import { z } from "zod";

type Pipe = (a: any) => RequestHandler;

const ValidationPipe: Pipe = (schema: z.Schema) => {
  return async (req, res, next) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof z.ZodError) res.status(400).send(error.issues);
    }
  };
};

export default ValidationPipe;
