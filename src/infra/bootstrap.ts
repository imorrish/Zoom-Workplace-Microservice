import { getController } from './controllerFactory';
import { logger } from './logger';

export async function bootstrap() {
  const controller = getController();
  await controller.init();
  logger.info(`Adapter initialized: ${controller.adapterName()}`);
}
