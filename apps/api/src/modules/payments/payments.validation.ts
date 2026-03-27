import { z } from 'zod';

const objectIdRegex = /^[a-f\d]{24}$/i;

const objectId = z.string().regex(/^[a-f\d]{24}$/i, 'Invalid ObjectId');

export const createPaymentSchema = z.object({
  intentId:    z.string().min(1),
  amount:      z.string().regex(/^\d+(\.\d+)?$/, 'amount must be a positive numeric string').refine(
    (v) => parseFloat(v) > 0,
    'amount must be greater than 0'
  ),
  destination: z.string().min(1),
  memo:        z.string().optional(),
  clinicId:    z.string().optional(),
  patientId:   objectId,
});

export const paymentIdParamSchema = z.object({
  id: objectId,
});
export const createPaymentIntentSchema = z.object({
  patientId: z.string().regex(objectIdRegex, 'Invalid patientId'),
  amount:    z.string().regex(/^\d+(\.\d{1,2})?$/, 'amount must be a positive numeric string'),
});

export const listPaymentsQuerySchema = z.object({
  patientId: z.string().regex(objectIdRegex, 'Invalid patientId').optional(),
  status:    z.enum(['pending', 'confirmed', 'failed']).optional(),
  page:      z.coerce.number().int().min(1).default(1),
  limit:     z.coerce.number().int().min(1).max(100).default(20),
});

export type CreatePaymentIntentDto = z.infer<typeof createPaymentIntentSchema>;
export type ListPaymentsQuery      = z.infer<typeof listPaymentsQuerySchema>;
