import { HttpError } from "./index";
import { HttpStatus } from "../index";

export class InternalServerError extends HttpError {
  constructor(message: string) {
    super(HttpStatus.INTERNAL_SERVER_ERROR, message);
  }
}

export class NotImplemented extends HttpError {
  constructor(message: string) {
    super(HttpStatus.NOT_IMPLEMENTED, message);
  }
}

export class BadGateway extends HttpError {
  constructor(message: string) {
    super(HttpStatus.BAD_GATEWAY, message);
  }
}
