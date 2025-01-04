export class HttpResponse {
  public readonly status: number;
  public readonly data?: Object;
  public headers?: Record<string, string>;

  constructor(
    status: HttpStatus,
    data?: Object,
    headers?: Record<string, string>,
  ) {
    this.status = status;
    this.data = data;
    this.headers = headers;
  }
}

export enum HttpStatus {
  // 2xx
  OK = 200,
  CREATED = 201,
  NO_CONTENT = 204,

  // 4xx
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  CONFLICT = 409,

  // 5xx
  INTERNAL_SERVER_ERROR = 500,
  NOT_IMPLEMENTED = 501,
  BAD_GATEWAY = 502,
}
