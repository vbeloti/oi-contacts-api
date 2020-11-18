import { Request, Response, NextFunction } from 'express';
import { RateLimiterMemory } from 'rate-limiter-flexible';
import AppError from '../errors/AppError';

const limiter = new RateLimiterMemory({
  keyPrefix: 'rateLimit',
  points: 50,
  duration: 5,
});

export default async function (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    await limiter.consume(req.ip);

    return next();
  } catch (error) {
    throw new AppError('Too many requests', 429);
  }
}
