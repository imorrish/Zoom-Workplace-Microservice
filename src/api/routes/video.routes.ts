import { Router } from 'express';
import { apiKeyAuth } from '../middleware/auth';
import { getController } from '../../infra/controllerFactory';

const router = Router();
router.use(apiKeyAuth);

router.post('/on', async (_req, res, next) => { try { await getController().videoOn(); res.status(204).end(); } catch (e) { next(e); } });
router.post('/off', async (_req, res, next) => { try { await getController().videoOff(); res.status(204).end(); } catch (e) { next(e); } });
router.post('/toggle', async (_req, res, next) => { try { await getController().toggleVideo(); res.status(204).end(); } catch (e) { next(e); } });

export default router;
