export class AuthError extends Error {
  description?: string;
  constructor(message: string, description?: string) {
    super(message);
    this.name = "AuthError";
    this.description = description || "An error occurred during authentication";
  }
}

export class FetchError extends Error {
  description?: string;
  constructor(message: string, description?: string) {
    super(message);
    this.name = "FetchError";
    this.description =
      description ||
      "An probable network error occurred. If the problem persists, please contact support";
  }
}
