import { ZoomController } from '../core/ZoomController';
import { MockAdapter } from '../core/adapters/MockAdapter';
import { PluginIpcAdapter } from '../core/adapters/PluginIpcAdapter';
import { RestApiAdapter } from '../core/adapters/RestApiAdapter';
import { AppSdkAdapter } from '../core/adapters/AppSdkAdapter';
import { config } from './config';

let controller: ZoomController | undefined;

export function getController(): ZoomController {
  if (controller) return controller;
  let adapter;
  switch (config.adapter) {
    case 'plugin_ipc':
      adapter = new PluginIpcAdapter();
      break;
    case 'rest_api':
      adapter = new RestApiAdapter();
      break;
    case 'app_sdk':
      adapter = new AppSdkAdapter();
      break;
    default:
      adapter = new MockAdapter();
  }
  controller = new ZoomController(adapter);
  return controller;
}
