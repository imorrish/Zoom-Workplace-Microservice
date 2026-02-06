"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.corsOptions = void 0;
const config_1 = require("../../infra/config");
exports.corsOptions = {
    origin: (origin, callback) => {
        if (!origin || config_1.config.allowedOrigins.length === 0 || config_1.config.allowedOrigins.includes(origin)) {
            return callback(null, true);
        }
        return callback(new Error('CORS not allowed'), false);
    }
};
//# sourceMappingURL=cors.js.map