import { randomUUID } from 'crypto';
import { Request, Response, NextFunction } from 'express';

export function requestId(req: Request, res: Response, next: NextFunction) {
  const id = req.header('x-correlation-id') || randomUUID();
  res.setHeader('x-correlation-id', id);
  (req as any).correlationId = id;
  next();
}
