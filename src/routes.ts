import type { Express } from 'express';
import { STATUS_CODE } from './constants';

export default function routes(app: Express) {
  app.get('/', (request, response) => {
    response.status(STATUS_CODE.OK).json('Hello, world!');
  });
}
