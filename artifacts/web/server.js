import express from "express";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;
const DIST = path.join(__dirname, "dist", "public");

app.use("/assets", express.static(path.join(DIST, "assets"), {
  maxAge: "1y",
  immutable: true,
}));

app.use(express.static(DIST, {
  index: false,
  redirect: false,
  setHeaders: (res, filePath) => {
    if (filePath.endsWith(".html") || !path.extname(filePath)) {
      res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate");
      res.setHeader("Pragma", "no-cache");
      res.setHeader("Expires", "0");
    }
  },
}));

const fallback = path.join(DIST, "index.html");

app.get(/.*/, (req, res) => {
  res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate");
  res.setHeader("Pragma", "no-cache");
  res.setHeader("Expires", "0");

  // Strip trailing slash (except root) so /pricing/ and /pricing both match.
  const reqPath = req.path.replace(/\/+$/, "") || "/";

  // Reject path traversal attempts.
  if (reqPath.includes("..")) {
    return res.sendFile(fallback);
  }

  const candidate =
    reqPath === "/"
      ? fallback
      : path.join(DIST, reqPath, "index.html");

  // Ensure the resolved path stays inside DIST.
  const resolved = path.resolve(candidate);
  if (!resolved.startsWith(path.resolve(DIST)) || !fs.existsSync(resolved)) {
    return res.sendFile(fallback);
  }

  res.sendFile(resolved);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
