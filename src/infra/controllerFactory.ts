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
  console.log(`Selected adapter: ${config.adapter}`);
  switch (config.adapter) {
    case 'plugin_ipc':
      console.log('Initializing PluginIpcAdapter');
      adapter = new PluginIpcAdapter();
      break;
    case 'rest_api':
      console.log('Initializing RestApiAdapter');
      adapter = new RestApiAdapter();
      break;
    case 'app_sdk':
      console.log('Initializing AppSdkAdapter');
      adapter = new AppSdkAdapter();
      break;
    default:
      console.log('Initializing MockAdapter');
      adapter = new MockAdapter();
  }
  controller = new ZoomController(adapter);
  return controller;
}
