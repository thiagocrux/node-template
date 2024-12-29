import type { Request, Response, NextFunction } from 'express';

import logger from '../utils/logger';
import { STATUS_CODE } from '../constants';

export default function errorHandler(
  error: Error,
  request: Request,
  response: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction,
) {
  logger.error(error);
  response.status(STATUS_CODE.INTERNAL_SERVER_ERROR).send(error);
}
