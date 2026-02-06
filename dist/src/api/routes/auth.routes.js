"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/login', (_req, res) => { res.status(501).json({ error: { code: 'NOT_IMPLEMENTED', message: 'OAuth login not implemented' } }); });
router.get('/callback', (_req, res) => { res.status(501).json({ error: { code: 'NOT_IMPLEMENTED', message: 'OAuth callback not implemented' } }); });
router.post('/logout', (_req, res) => { res.status(501).json({ error: { code: 'NOT_IMPLEMENTED', message: 'OAuth logout not implemented' } }); });
exports.default = router;
//# sourceMappingURL=auth.routes.js.map