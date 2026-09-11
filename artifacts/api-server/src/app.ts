import express, { type Express } from "express";
import pinoHttp from "pino-http";
import router from "./routes";
import { logger } from "./lib/logger";
import path from "node:path";
import { fileURLToPath } from "node:url";

const app: Express = express();

app.use(
  pinoHttp({
    logger,
    serializers: {
      req(req) {
        return {
          id: req.id,
          method: req.method,
          url: req.url?.split("?")[0],
        };
      },
      res(res) {
        return {
          statusCode: res.statusCode,
        };
      },
    },
  }),
);
// The public API is same-origin.  Do not install permissive CORS here: the
// promotion admin cookie and CSRF protections must never be exposed to an
// arbitrary origin.  Deployments needing a cross-origin public client should
// set an explicit reverse-proxy allowlist rather than enabling `*`.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

if (process.env.NODE_ENV === "production") {
  const currentDir = typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

  const frontendDist = path.resolve(currentDir, "..", "..", "web", "dist", "public");

  app.use(express.static(frontendDist));

  app.get("{*path}", (_req, res) => {
    res.sendFile(path.join(frontendDist, "index.html"));
  });
}

export default app;
