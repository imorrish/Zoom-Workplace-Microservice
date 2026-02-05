import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { corsOptions } from './api/middleware/cors';
import { errorHandler } from './api/middleware/error';
import { requestId } from './api/middleware/requestId';
import { rateLimiter } from './api/middleware/rateLimit';
import statusRoutes from './api/routes/status.routes';
import audioRoutes from './api/routes/audio.routes';
import videoRoutes from './api/routes/video.routes';
import meetingRoutes from './api/routes/meeting.routes';
import authRoutes from './api/routes/auth.routes';
import { metricsMiddleware, metricsRouter } from './infra/metrics';

const app = express();
app.use(helmet());
app.use(express.json());
app.use(requestId);
app.use(cors(corsOptions));
app.use(rateLimiter);
app.use(metricsMiddleware);

app.get('/healthz', (_req, res) => res.send('ok'));
app.get('/readyz', (_req, res) => res.send('ready'));
app.use('/metrics', metricsRouter);

app.use('/api/status', statusRoutes);
app.use('/api/audio', audioRoutes);
app.use('/api/video', videoRoutes);
app.use('/api/meeting', meetingRoutes);
app.use('/auth', authRoutes);

app.use(errorHandler);
export default app;
