"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = errorHandler;
const logger_1 = require("../../infra/logger");
function errorHandler(err, req, res, _next) {
    const status = err.statusCode || 500;
    const code = err.code || 'INTERNAL_ERROR';
    const message = err.message || 'Unexpected error';
    logger_1.logger.error({ err, code, status, path: req.path, correlationId: req.correlationId });
    res.status(status).json({ error: { code, message } });
}
//# sourceMappingURL=error.js.map