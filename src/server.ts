import cors from 'cors';
import express, { Request, Response, NextFunction } from 'express';
import swaggerUi from 'swagger-ui-express';
import { OpenApiValidator } from 'express-openapi-validator';
import { OpenAPIV3 } from 'express-openapi-validator/dist/framework/types';
import connection from './database/connection';
import 'express-async-errors';
import 'dotenv/config';
import routes from './routes';
import AppError from './errors/AppError';
import apiSchema from './api.schema.json';

connection();

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

const docsSetup = async () => {
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(apiSchema));

  await new OpenApiValidator({
    apiSpec: apiSchema as any,
    validateRequests: true,
    validateResponses: true,
  });
};

docsSetup();

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
