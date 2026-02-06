"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../middleware/auth");
const controllerFactory_1 = require("../../infra/controllerFactory");
const router = (0, express_1.Router)();
router.use(auth_1.apiKeyAuth);
router.post('/on', async (_req, res, next) => { try {
    await (0, controllerFactory_1.getController)().videoOn();
    res.status(204).end();
}
catch (e) {
    next(e);
} });
router.post('/off', async (_req, res, next) => { try {
    await (0, controllerFactory_1.getController)().videoOff();
    res.status(204).end();
}
catch (e) {
    next(e);
} });
router.post('/toggle', async (_req, res, next) => { try {
    await (0, controllerFactory_1.getController)().toggleVideo();
    res.status(204).end();
}
catch (e) {
    next(e);
} });
exports.default = router;
//# sourceMappingURL=video.routes.js.map