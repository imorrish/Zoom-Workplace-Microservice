"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdapterNotReadyError = exports.UnsupportedActionError = void 0;
class UnsupportedActionError extends Error {
    code = 'UNSUPPORTED_ACTION';
    statusCode = 400;
    constructor(message = 'Action not supported by adapter') { super(message); }
}
exports.UnsupportedActionError = UnsupportedActionError;
class AdapterNotReadyError extends Error {
    code = 'ADAPTER_NOT_READY';
    statusCode = 503;
    constructor(message = 'Adapter not initialized') { super(message); }
}
exports.AdapterNotReadyError = AdapterNotReadyError;
//# sourceMappingURL=Errors.js.map