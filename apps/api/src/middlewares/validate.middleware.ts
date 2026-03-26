import { Request, Response, NextFunction } from 'express';
import { ZodSchema } from 'zod';

interface ValidateOptions {
  body?: ZodSchema;
  query?: ZodSchema;
  params?: ZodSchema;
}

export function validateRequest(schemas: ValidateOptions) {
  return (req: Request, res: Response, next: NextFunction) => {
    for (const [key, schema] of Object.entries(schemas)) {
      const result = schema.safeParse(req[key as keyof Request]);
      if (!result.success) {
        return res.status(400).json({
          error: 'ValidationError',
          message: result.error.errors[0]?.message ?? 'Invalid request',
          details: result.error.errors,
        });
      }
      (req as Record<string, unknown>)[key] = result.data;
    }
    next();
  };
}
