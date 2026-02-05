import { CorsOptions } from 'cors';
import { config } from '../../infra/config';

export const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    if (!origin || config.allowedOrigins.length === 0 || config.allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    return callback(new Error('CORS not allowed'), false);
  }
};
