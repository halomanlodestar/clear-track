import { HttpError } from "./index";
import { HttpStatus } from "../index";

/**
 * Represents a 400 Bad Request error.
 */

export class BadRequestError extends HttpError {
  constructor(message: string) {
    super(HttpStatus.BAD_REQUEST, message);
  }
}

export class UnauthorizedError extends HttpError {
  constructor(message: string) {
    super(HttpStatus.UNAUTHORIZED, message);
  }
}

export class ForbiddenError extends HttpError {
  constructor(message: string) {
    super(HttpStatus.FORBIDDEN, message);
  }
}

export class NotFoundError extends HttpError {
  constructor(message: string) {
    super(HttpStatus.NOT_FOUND, message);
  }
}

export class ConflictError extends HttpError {
  constructor(message: string) {
    super(HttpStatus.CONFLICT, message);
  }
}
