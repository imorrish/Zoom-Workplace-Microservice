import { Router } from 'express';
import { apiKeyAuth } from '../middleware/auth';
import { getController } from '../../infra/controllerFactory';

const router = Router();
router.use(apiKeyAuth);

router.get('/', async (_req, res, next) => {
  try {
    const status = await getController().status();
    res.json({ ...status, adapter: getController().adapterName() });
  } catch (err) { next(err); }
});

export default router;
