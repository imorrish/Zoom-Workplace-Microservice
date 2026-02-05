"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getController = getController;
const ZoomController_1 = require("../core/ZoomController");
const MockAdapter_1 = require("../core/adapters/MockAdapter");
const PluginIpcAdapter_1 = require("../core/adapters/PluginIpcAdapter");
const RestApiAdapter_1 = require("../core/adapters/RestApiAdapter");
const AppSdkAdapter_1 = require("../core/adapters/AppSdkAdapter");
const config_1 = require("./config");
let controller;
function getController() {
    if (controller)
        return controller;
    let adapter;
    switch (config_1.config.adapter) {
        case 'plugin_ipc':
            adapter = new PluginIpcAdapter_1.PluginIpcAdapter();
            break;
        case 'rest_api':
            adapter = new RestApiAdapter_1.RestApiAdapter();
            break;
        case 'app_sdk':
            adapter = new AppSdkAdapter_1.AppSdkAdapter();
            break;
        default:
            adapter = new MockAdapter_1.MockAdapter();
    }
    controller = new ZoomController_1.ZoomController(adapter);
    return controller;
}
//# sourceMappingURL=controllerFactory.js.map