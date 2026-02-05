import http from 'http';
import app from './app';
import { logger } from './infra/logger';
import { config } from './infra/config';
import { bootstrap } from './infra/bootstrap';

async function main() {
  await bootstrap();
  const server = http.createServer(app);
  server.listen(config.port, () => {
    logger.info(`Server listening on port: ${config.port}`);
  });
}

main().catch((err) => {
  // eslint-disable-next-line no-console
  console.error('Fatal error starting service', err);
  process.exit(1);
});
