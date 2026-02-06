"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestId = requestId;
const crypto_1 = require("crypto");
function requestId(req, res, next) {
    const id = req.header('x-correlation-id') || (0, crypto_1.randomUUID)();
    res.setHeader('x-correlation-id', id);
    req.correlationId = id;
    next();
}
//# sourceMappingURL=requestId.js.map