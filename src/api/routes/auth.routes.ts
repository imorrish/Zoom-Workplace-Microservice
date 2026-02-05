import { Router } from 'express';
const router = Router();

router.get('/login', (_req, res) => { res.status(501).json({ error: { code: 'NOT_IMPLEMENTED', message: 'OAuth login not implemented' } }); });
router.get('/callback', (_req, res) => { res.status(501).json({ error: { code: 'NOT_IMPLEMENTED', message: 'OAuth callback not implemented' } }); });
router.post('/logout', (_req, res) => { res.status(501).json({ error: { code: 'NOT_IMPLEMENTED', message: 'OAuth logout not implemented' } }); });

export default router;
