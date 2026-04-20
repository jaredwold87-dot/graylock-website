import type { Request, Response, NextFunction } from "express";

interface Bucket {
  count: number;
  resetAt: number;
}

interface RateLimitOptions {
  windowMs: number;
  max: number;
  keyPrefix?: string;
}

export function createRateLimiter(opts: RateLimitOptions) {
  const buckets = new Map<string, Bucket>();
  const { windowMs, max, keyPrefix = "" } = opts;

  function getClientIp(req: Request): string {
    // Rely on Express's `trust proxy` setting (configured in app.ts) so req.ip
    // reflects the real client and cannot be spoofed via X-Forwarded-For from
    // an untrusted hop. Fall back to the raw socket address only as a
    // last-resort defensive default.
    return req.ip || req.socket.remoteAddress || "unknown";
  }

  function sweep(now: number) {
    if (buckets.size < 1024) return;
    for (const [key, bucket] of buckets) {
      if (bucket.resetAt <= now) buckets.delete(key);
    }
  }

  return function rateLimitMiddleware(
    req: Request,
    res: Response,
    next: NextFunction,
  ): void {
    const now = Date.now();
    const key = `${keyPrefix}:${getClientIp(req)}`;
    let bucket = buckets.get(key);
    if (!bucket || bucket.resetAt <= now) {
      bucket = { count: 0, resetAt: now + windowMs };
      buckets.set(key, bucket);
    }
    bucket.count += 1;

    const remaining = Math.max(0, max - bucket.count);
    res.setHeader("X-RateLimit-Limit", String(max));
    res.setHeader("X-RateLimit-Remaining", String(remaining));
    res.setHeader("X-RateLimit-Reset", String(Math.ceil(bucket.resetAt / 1000)));

    if (bucket.count > max) {
      const retryAfter = Math.max(1, Math.ceil((bucket.resetAt - now) / 1000));
      res.setHeader("Retry-After", String(retryAfter));
      res.status(429).json({
        success: false,
        error: "Too many requests. Please try again in a few minutes.",
        code: "RATE_LIMITED",
      });
      return;
    }

    sweep(now);
    next();
  };
}
