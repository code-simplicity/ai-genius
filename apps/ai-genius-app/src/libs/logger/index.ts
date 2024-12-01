import Pino from 'pino';

/**
 * 创建日志记录器
 */
export const pinoLogger = Pino({
  level: process.env.LOG_LEVEL ? process.env.LOG_LEVEL : 'info',
});
