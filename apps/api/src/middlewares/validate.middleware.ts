import { Request, Response, NextFunction } from 'express';
import { ZodSchema } from 'zod';

interface ValidateSchemas {
  body?: ZodSchema;
  params?: ZodSchema;
}

export function validateRequest(schemas: ValidateSchemas) {
  return (req: Request, res: Response, next: NextFunction): void => {
    for (const [key, schema] of Object.entries(schemas) as [keyof ValidateSchemas, ZodSchema][]) {
      const result = schema.safeParse(req[key]);
      if (!result.success) {
        res.status(400).json({ error: 'ValidationError', issues: result.error.issues });
        return;
      }
      req[key] = result.data;
    }
    next();
  };
}
