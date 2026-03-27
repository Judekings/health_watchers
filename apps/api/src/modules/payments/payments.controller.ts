import { Router, Request, Response } from 'express';
import { PaymentRecordModel } from './models/payment-record.model';
import { toPaymentResponse } from './payments.transformer';
import { asyncHandler } from '../../utils/asyncHandler';
import { validateRequest } from '../../middlewares/validate.middleware';
import { createPaymentSchema, paymentIdParamSchema } from './payments.validation';

const router = Router();

// GET /payments
router.get('/', asyncHandler(async (_req: Request, res: Response) => {
  const docs = await PaymentRecordModel.find().sort({ createdAt: -1 });
  return res.json({ status: 'success', data: docs.map(toPaymentResponse) });
}));

// GET /payments/:id
router.get(
  '/:id',
  validateRequest({ params: paymentIdParamSchema }),
  asyncHandler(async (req: Request, res: Response) => {
    const doc = await PaymentRecordModel.findById(req.params.id);
    if (!doc) return res.status(404).json({ error: 'NotFound', message: 'Payment not found' });
    return res.json({ status: 'success', data: toPaymentResponse(doc) });
  })
);

// POST /payments/intent
router.post(
  '/intent',
  validateRequest({ body: createPaymentSchema }),
  asyncHandler(async (req: Request, res: Response) => {
    const { intentId, amount, destination, memo, clinicId, patientId } = req.body;
    const doc = await PaymentRecordModel.create({
      intentId, amount, destination, memo,
      clinicId: clinicId || 'default',
      patientId,
      status: 'pending',
    });
    return res.status(201).json({ status: 'success', data: toPaymentResponse(doc) });
  })
);

export const paymentRoutes = router;
