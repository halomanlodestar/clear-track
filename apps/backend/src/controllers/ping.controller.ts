/** @format */
import { HttpResponse } from "@cleartrack/http-utils";
import { controller } from "@/utils/asyncHandler";
import { HttpError } from "@cleartrack/http-utils/errors";

export const pingController = controller(async (req, res) => {
  throw new HttpError(400, "Bad Request");
});
