"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../middleware/auth");
const controllerFactory_1 = require("../../infra/controllerFactory");
const router = (0, express_1.Router)();
router.use(auth_1.apiKeyAuth);
router.post('/mute', async (_req, res, next) => { try {
    await (0, controllerFactory_1.getController)().mute();
    res.status(204).end();
}
catch (e) {
    next(e);
} });
router.post('/unmute', async (_req, res, next) => { try {
    await (0, controllerFactory_1.getController)().unmute();
    res.status(204).end();
}
catch (e) {
    next(e);
} });
router.post('/toggle', async (_req, res, next) => { try {
    await (0, controllerFactory_1.getController)().toggleAudio();
    res.status(204).end();
}
catch (e) {
    next(e);
} });
router.get('/state', async (_req, res, next) => {
    try {
        const state = await (0, controllerFactory_1.getController)().status();
        res.json({ audioMuted: state.audioMuted });
    }
    catch (err) {
        next(err);
    }
});
exports.default = router;
//# sourceMappingURL=audio.routes.js.map