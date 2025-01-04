/** @format */
import { HttpResponse } from "@cleartrack/http-utils";
import { controller } from "@/utils/asyncHandler";

export const pingController = controller(async (req, res) => {
  return new HttpResponse(200, { message: "pong" });
});
