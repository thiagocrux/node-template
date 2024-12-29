import { Router } from 'express';
import { STATUS_CODE } from './constants';

const router = Router();

router.get('/', (_request, response) => {
  response.status(STATUS_CODE.OK).json('Hello, world!');
});

export default router;
