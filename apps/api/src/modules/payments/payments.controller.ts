import { Router, Request, Response } from 'express';
import { config } from '@health-watchers/config';
import { PaymentRecordModel } from './models/payment-record.model';
import { validateRequest } from '@api/middlewares/validate.middleware';
import { objectIdSchema } from '@api/middlewares/objectid.schema';
import { createPaymentIntentSchema } from './payments.validation';
import { asyncHandler } from '@api/middlewares/async.handler';

const router = Router();

router.post(
  '/intent',
  validateRequest({ body: createPaymentIntentSchema }),
  asyncHandler(async (req: Request, res: Response) => {
    const { patientId, amount } = req.body;
    const record = await PaymentRecordModel.create({ patientId, amount, status: 'pending' });
    res.status(201).json({
      status: 'success',
      data: { recordId: record._id, platformPublicKey: config.stellar.platformPublicKey },
    });
  }),
);

router.get(
  '/',
  asyncHandler(async (_req: Request, res: Response) => {
    const payments = await PaymentRecordModel.find().lean();
    res.json({ status: 'success', data: payments });
  }),
);

router.get(
  '/:id',
  validateRequest({ params: objectIdSchema }),
  asyncHandler(async (req: Request, res: Response) => {
    const payment = await PaymentRecordModel.findById(req.params.id).lean();
    if (!payment) return res.status(404).json({ error: 'NotFound', message: 'Payment not found' });
    res.json({ status: 'success', data: payment });
  }),
);

export const paymentRoutes = router;
