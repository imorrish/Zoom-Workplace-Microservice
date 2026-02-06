"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.metricsRouter = void 0;
exports.metricsMiddleware = metricsMiddleware;
const prom_client_1 = __importDefault(require("prom-client"));
const express_1 = require("express");
const register = new prom_client_1.default.Registry();
prom_client_1.default.collectDefaultMetrics({ register });
const httpRequestDuration = new prom_client_1.default.Histogram({
    name: 'http_request_duration_seconds',
    help: 'Duration of HTTP requests in seconds',
    labelNames: ['method', 'route', 'status_code'],
    buckets: [0.005, 0.01, 0.025, 0.05, 0.1, 0.25, 0.5, 1, 2]
});
register.registerMetric(httpRequestDuration);
function metricsMiddleware(req, res, next) {
    const end = httpRequestDuration.startTimer({ method: req.method, route: req.path });
    res.on('finish', () => {
        end({ status_code: String(res.statusCode) });
    });
    next();
}
exports.metricsRouter = (0, express_1.Router)();
exports.metricsRouter.get('/', async (_req, res) => {
    res.set('Content-Type', register.contentType);
    res.end(await register.metrics());
});
//# sourceMappingURL=metrics.js.map