import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// 5 checkout attempts per user per 10 minutes.
// Uses a sliding window so bursts are smoothed out.
export const checkoutRatelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(5, "10 m"),
  analytics: false,
  prefix: "ratelimit:checkout",
});
