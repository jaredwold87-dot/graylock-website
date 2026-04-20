import type { Request, Response, NextFunction } from "express";
import crypto from "node:crypto";
import { logger } from "../lib/logger";

function timingSafeEqualStr(a: string, b: string): boolean {
  const bufA = Buffer.from(a, "utf8");
  const bufB = Buffer.from(b, "utf8");
  if (bufA.length !== bufB.length) return false;
  return crypto.timingSafeEqual(bufA, bufB);
}

export function adminAuth(req: Request, res: Response, next: NextFunction): void {
  const expected = process.env.ADMIN_API_TOKEN;
  if (!expected) {
    logger.error("ADMIN_API_TOKEN not set — admin routes are disabled");
    res.status(503).json({ success: false, error: "Admin not configured" });
    return;
  }

  const header = req.header("authorization") || "";
  const match = /^Bearer\s+(.+)$/i.exec(header.trim());
  const provided = match?.[1]?.trim() ?? "";

  if (!provided || !timingSafeEqualStr(provided, expected)) {
    res.status(401).json({ success: false, error: "Unauthorized" });
    return;
  }

  next();
}
