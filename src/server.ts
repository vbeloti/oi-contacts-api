import cors from 'cors';
import express, { Request, Response, NextFunction } from 'express';
import helmet from 'helmet';
import connection from './database/connection';
import 'express-async-errors';
import 'dotenv/config';
import routes from './routes';
import AppError from './errors/AppError';
import rateLimiter from './middlewares/rateLimiter';

connection();

const app = express();

app.use(rateLimiter);
app.use(cors());
app.use(express.json());
app.use(routes);

app.use(helmet());

app.use((err: Error, req: Request, res: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.error(err);

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

export default app;
