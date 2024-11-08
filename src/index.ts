import express, { Express } from 'express';
import 'dotenv/config';

const app: Express = express();
const port = process.env.APP_PORT;

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});