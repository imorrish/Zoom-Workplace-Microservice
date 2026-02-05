import { Router } from 'express';
import { apiKeyAuth } from '../middleware/auth';
import { getController } from '../../infra/controllerFactory';

const router = Router();
router.use(apiKeyAuth);

router.post('/leave', async (_req, res, next) => { try { await getController().leaveMeeting(); res.status(204).end(); } catch (e) { next(e); } });
router.post('/recording/start', async (_req, res, next) => { try { await getController().startRecording(); res.status(204).end(); } catch (e) { next(e); } });
router.post('/recording/stop', async (_req, res, next) => { try { await getController().stopRecording(); res.status(204).end(); } catch (e) { next(e); } });

export default router;
