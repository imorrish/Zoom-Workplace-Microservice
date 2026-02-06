"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../middleware/auth");
const controllerFactory_1 = require("../../infra/controllerFactory");
const router = (0, express_1.Router)();
router.use(auth_1.apiKeyAuth);
router.post('/leave', async (_req, res, next) => { try {
    await (0, controllerFactory_1.getController)().leaveMeeting();
    res.status(204).end();
}
catch (e) {
    next(e);
} });
router.post('/recording/start', async (_req, res, next) => { try {
    await (0, controllerFactory_1.getController)().startRecording();
    res.status(204).end();
}
catch (e) {
    next(e);
} });
router.post('/recording/stop', async (_req, res, next) => { try {
    await (0, controllerFactory_1.getController)().stopRecording();
    res.status(204).end();
}
catch (e) {
    next(e);
} });
exports.default = router;
//# sourceMappingURL=meeting.routes.js.map