import { Request, Response, NextFunction } from 'express';
import { logger } from '../../infra/logger';

export function errorHandler(err: any, req: Request, res: Response, _next: NextFunction) {
  const status = err.statusCode || 500;
  const code = err.code || 'INTERNAL_ERROR';
  const message = err.message || 'Unexpected error';
  logger.error({ err, code, status, path: req.path, correlationId: (req as any).correlationId });
  res.status(status).json({ error: { code, message } });
}
