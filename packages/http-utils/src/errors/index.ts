export * from "./4xx-error";
export * from "./5xx-error";

export class HttpError extends Error {
  public readonly name: string;
  public readonly status: number;

  constructor(status: number, message: string) {
    super(message);

    this.name = "HttpError";
    this.status = status;

    Object.setPrototypeOf(this, HttpError.prototype);
  }
}
