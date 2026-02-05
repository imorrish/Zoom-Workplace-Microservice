import { Router } from 'express';
import { apiKeyAuth } from '../middleware/auth';
import { getController } from '../../infra/controllerFactory';

const router = Router();
router.use(apiKeyAuth);

router.post('/mute', async (_req, res, next) => { try { await getController().mute(); res.status(204).end(); } catch (e) { next(e); } });
router.post('/unmute', async (_req, res, next) => { try { await getController().unmute(); res.status(204).end(); } catch (e) { next(e); } });
router.post('/toggle', async (_req, res, next) => { try { await getController().toggleAudio(); res.status(204).end(); } catch (e) { next(e); } });

export default router;
