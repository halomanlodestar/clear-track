import { Router, Request, Response, NextFunction } from "express";

// Middleware to wrap each controller
export function wrapController(handler: Function) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await handler(req, res, next);
      // Handle response if it's an HttpResponse object
      if (result && !res.headersSent) {
        res.status(result.status || 200).json(result.data || result);
      }
    } catch (err) {
      next(err);
    }
  };
}

// Wrapper for the entire router
export function wrapRouter(router: Router): Router {
  const wrappedRouter = Router();

  router.stack.forEach((layer: any) => {
    if (layer.route) {
      const path = layer.route.path;
      const methods = Object.keys(layer.route.methods);

      methods.forEach((method) => {
        const handler = layer.route.stack[0].handle;

        // Wrap the handler with the response handler middleware
        // @ts-ignore
        wrappedRouter[method](path, wrapController(handler));
      });
    }
    // Handle nested routers
    else if (layer.name === "router") {
      wrappedRouter.use(layer.regexp, wrapRouter(layer.handle));
    }
  });

  return wrappedRouter;
}
