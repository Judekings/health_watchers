import express from 'express';
import pino from 'pino';

const isDev = process.env.NODE_ENV !== 'production';
const logger = pino({
  level: process.env.LOG_LEVEL ?? 'info',
  ...(isDev ? { transport: { target: 'pino-pretty', options: { colorize: true } } } : {}),
});

const app = express();
const PORT = process.env.STELLAR_SERVICE_PORT ?? 3002;

app.get('/health', (_req, res) => res.json({ status: 'ok' }));

app.listen(PORT, () => {
  logger.info(`stellar-service running on port ${PORT}`);
});
