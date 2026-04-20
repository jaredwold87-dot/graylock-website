import express, { type Express } from "express";
import cors from "cors";
import pinoHttp from "pino-http";
import router from "./routes";
import { logger } from "./lib/logger";
import path from "node:path";
import { fileURLToPath } from "node:url";

const app: Express = express();

// Trust proxy so req.ip reflects the real client behind our ingress instead of
// any user-supplied X-Forwarded-For value. Configurable via TRUST_PROXY (e.g.
// "loopback", "uniquelocal", a hop count like "1", or a comma-separated list
// of trusted IPs). Defaults to "loopback" which is safe for local dev and for
// deployments where the platform terminates on the loopback interface.
const trustProxyRaw = process.env.TRUST_PROXY ?? "loopback";
const trustProxyValue: number | string | string[] = /^\d+$/.test(trustProxyRaw)
  ? Number(trustProxyRaw)
  : trustProxyRaw.includes(",")
    ? trustProxyRaw.split(",").map((s) => s.trim()).filter(Boolean)
    : trustProxyRaw;
app.set("trust proxy", trustProxyValue);

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
app.use(cors());
app.use(
  express.json({
    verify: (req, _res, buf) => {
      (req as unknown as { rawBody?: Buffer }).rawBody = Buffer.from(buf);
    },
  }),
);
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
