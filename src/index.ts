import express, { Request, Response } from 'express';
import 'dotenv/config';

import routes from './routes';
import { isDevelopment, logger } from './utils';
import { server } from './__tests__/mocks/node';

const app = express();
const port = process.env.API_PORT;

if (isDevelopment) server.listen();

app.get('/', (request: Request, response: Response) => {
  response.send('Hello, world!');
});

app.listen(port, () => {
  if (isDevelopment)
    logger.info(
      `Server is running on ${process.env.NODE_ENV} mode at http://localhost:${port}`,
    );

  routes(app);
});
