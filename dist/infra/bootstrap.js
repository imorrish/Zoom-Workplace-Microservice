"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bootstrap = bootstrap;
const controllerFactory_1 = require("./controllerFactory");
const logger_1 = require("./logger");
async function bootstrap() {
    const controller = (0, controllerFactory_1.getController)();
    await controller.init();
    logger_1.logger.info(`Adapter initialized: ${controller.adapterName()}`);
}
//# sourceMappingURL=bootstrap.js.map