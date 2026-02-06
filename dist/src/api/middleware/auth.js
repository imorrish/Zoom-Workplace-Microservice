"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiKeyAuth = apiKeyAuth;
const config_1 = require("../../infra/config");
function apiKeyAuth(req, res, next) {
    const key = req.header('x-api-key');
    if (!key || key !== config_1.config.apiKey) {
        return res.status(401).json({ error: { code: 'UNAUTHORIZED', message: 'Invalid API key' } });
    }
    next();
}
//# sourceMappingURL=auth.js.map