import { formatRFC3339 } from 'date-fns';
import pino from 'pino';

const logger = pino({
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
      translateTime: `${JSON.stringify(formatRFC3339(new Date()))}`,
    },
  },
  base: {
    pid: false,
  },
});

export default logger;
