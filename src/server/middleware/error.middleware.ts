import { type ErrorRequestHandler } from 'express';
import stringify from 'json-stringify-safe';

import type { AxiosError } from 'axios';
import { getContext } from './context.middleware';
import { env } from '../env';

export const errorMiddleware: ErrorRequestHandler = (
  error: Error | AxiosError,
  request,
  response,
  next,
) => {
  if (!error) return next();

  if (env.DEBUG === 'true') {
    // return response.status(500).send('SHIT');
    return response.status(500).render('debug', {
      message: error.message,
      details: stringify(
        {
          error: error.stack?.split('\n').map((line) => line.trim()),
          env,
          request,
        },
        undefined,
        2,
      ),
    });
  }

  return response.status(500).render('500');
};
