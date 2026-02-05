import { Request, Response, NextFunction } from 'express';
import { config } from '../../infra/config';

export function apiKeyAuth(req: Request, res: Response, next: NextFunction) {
  const key = req.header('x-api-key');
  if (!key || key !== config.apiKey) {
    return res.status(401).json({ error: { code: 'UNAUTHORIZED', message: 'Invalid API key' } });
  }
  next();
}
