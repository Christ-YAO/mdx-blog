import { Redis } from "@upstash/redis";

export const redis = new Redis({
  url: "https://rich-seal-15827.upstash.io",
  token: process.env.UPSTASH_REDIS_TOKEN,
});
