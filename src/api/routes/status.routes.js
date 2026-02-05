"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../middleware/auth");
const controllerFactory_1 = require("../../infra/controllerFactory");
const router = (0, express_1.Router)();
router.use(auth_1.apiKeyAuth);
router.get('/', async (_req, res, next) => {
    try {
        const status = await (0, controllerFactory_1.getController)().status();
        res.json({ ...status, adapter: (0, controllerFactory_1.getController)().adapterName() });
    }
    catch (err) {
        next(err);
    }
});
exports.default = router;
//# sourceMappingURL=status.routes.js.map