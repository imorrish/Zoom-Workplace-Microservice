"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const app_1 = __importDefault(require("./app"));
const logger_1 = require("./infra/logger");
const config_1 = require("./infra/config");
const bootstrap_1 = require("./infra/bootstrap");
async function main() {
    await (0, bootstrap_1.bootstrap)();
    const server = http_1.default.createServer(app_1.default);
    server.listen(config_1.config.port, () => {
        logger_1.logger.info(`Server listening on port: ${config_1.config.port}`);
    });
}
main().catch((err) => {
    // eslint-disable-next-line no-console
    console.error('Fatal error starting service', err);
    process.exit(1);
});
//# sourceMappingURL=server.js.map