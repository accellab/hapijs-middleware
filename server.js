const Config = require('./config');
const Compose = require('./manifest');
const Logger = require('./src/utils/Logger');

const initServer = async () => {
  const server = await Compose();
  await server.start();
  Logger.info(`[SERVER] running on host ${server.info.host} port ${server.info.port} environment ${process.env.NODE_ENV || 'local'}`);
  Logger.info('[STATIC-FILE] connection to host', Config.get('/staticFile'));
};

initServer();
