import { Router, Request, Response } from 'express';
import { config } from '@health-watchers/config';
import { PaymentRecordModel } from './models/payment-record.model';
import { validateRequest } from '@api/middlewares/validate.middleware';
import { objectIdSchema } from '@api/middlewares/objectid.schema';
import { createPaymentIntentSchema } from './payments.validation';
import { asyncHandler } from '@api/middlewares/async.handler';
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
router.post(
  '/intent',
  validateRequest({ body: createPaymentIntentSchema }),
  asyncHandler(async (req: Request, res: Response) => {
    const { intentId, amount, destination, memo, clinicId, patientId } = req.body;
    const record = await PaymentRecordModel.create({
      intentId, amount, destination, memo,
      clinicId: clinicId || 'default',
      patientId,
      status: 'pending',
    });
    return res.status(201).json({ status: 'success', data: toPaymentResponse(doc) });
  })
    res.status(201).json({
      status: 'success',
      data: { ...toPaymentResponse(record), platformPublicKey: config.stellar.platformPublicKey },
    });
  }),
);

router.get(
  '/',
  asyncHandler(async (_req: Request, res: Response) => {
    const payments = await PaymentRecordModel.find().sort({ createdAt: -1 }).lean();
    res.json({ status: 'success', data: payments.map(toPaymentResponse) });
  }),
);

router.get(
  '/:id',
  validateRequest({ params: objectIdSchema }),
  asyncHandler(async (req: Request, res: Response) => {
    const payment = await PaymentRecordModel.findById(req.params.id).lean();
    if (!payment) return res.status(404).json({ error: 'NotFound', message: 'Payment not found' });
    res.json({ status: 'success', data: toPaymentResponse(payment) });
  }),
);

export const paymentRoutes = router;
