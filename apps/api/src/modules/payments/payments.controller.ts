import { Router, Request, Response } from 'express';
import { config } from '@health-watchers/config';
import { PaymentRecordModel } from './models/payment-record.model';
import { authenticate } from '@api/middlewares/auth.middleware';
import { validateRequest } from '@api/middlewares/validate.middleware';
import { objectIdSchema } from '@api/middlewares/objectid.schema';
import { asyncHandler } from '@api/middlewares/async.handler';
import { createPaymentIntentSchema, listPaymentsQuerySchema, ListPaymentsQuery } from './payments.validation';
import { toPaymentResponse } from './payments.transformer';
import { AppRole } from '@api/types/express';
import { config } from '@health-watchers/config';

const router = Router();
router.use(authenticate);

// Roles permitted to view payment records
const PAYMENT_READ_ROLES: AppRole[] = ['SUPER_ADMIN', 'CLINIC_ADMIN'];

function canReadPayments(role: AppRole): boolean {
  return PAYMENT_READ_ROLES.includes(role);
}

// GET /payments — paginated list scoped to the authenticated clinic
router.get(
  '/',
  validateRequest({ query: listPaymentsQuerySchema }),
  asyncHandler(async (req: Request, res: Response) => {
    if (!canReadPayments(req.user!.role)) {
      return res.status(403).json({ error: 'Forbidden', message: 'Insufficient permissions to view payments' });
    }

    const { patientId, status, page, limit } = req.query as unknown as ListPaymentsQuery;

    const filter: Record<string, unknown> = { clinicId: req.user!.clinicId };
    if (patientId) filter.patientId = patientId;
    if (status)    filter.status    = status;

    const skip = (page - 1) * limit;
    const [payments, total] = await Promise.all([
      PaymentRecordModel.find(filter).sort({ createdAt: -1 }).skip(skip).limit(limit).lean(),
      PaymentRecordModel.countDocuments(filter),
    ]);

    res.json({
      status: 'success',
      data: payments.map(toPaymentResponse),
      meta: { total, page, limit },
    });
  }),
);

router.post(
  '/intent',
  validateRequest({ body: createPaymentIntentSchema }),
  asyncHandler(async (req: Request, res: Response) => {
    const { intentId, amount, destination, memo, patientId } = req.body;
    const record = await PaymentRecordModel.create({
      intentId, amount, destination, memo,
      clinicId: req.user!.clinicId,
    const {
      intentId, amount, destination, memo, clinicId, patientId,
      assetCode = 'XLM',
      issuer,
    } = req.body;

    const normalizedAsset = String(assetCode).toUpperCase().trim();

    // XLM is always supported natively; other assets must be in the allow-list
    if (normalizedAsset !== 'XLM' && !config.supportedAssets.includes(normalizedAsset)) {
      return res.status(400).json({
        error: 'UnsupportedAsset',
        message: `Asset '${normalizedAsset}' is not supported. Supported assets: ${config.supportedAssets.join(', ')}`,
      });
    }

    // Non-native assets require an issuer account
    if (normalizedAsset !== 'XLM' && !issuer) {
      return res.status(400).json({
        error: 'BadRequest',
        message: `An issuer address is required for non-native asset '${normalizedAsset}'`,
      });
    }

    const record = await PaymentRecordModel.create({
      intentId,
      amount,
      destination,
      memo,
      clinicId: clinicId || 'default',
      patientId,
      status: 'pending',
      assetCode: normalizedAsset,
      assetIssuer: normalizedAsset === 'XLM' ? null : issuer,
    });

    res.status(201).json({
      status: 'success',
      data: { ...toPaymentResponse(record), platformPublicKey: config.stellar.platformPublicKey },
    });
  }),
);

router.get(
  '/:id',
  validateRequest({ params: objectIdSchema }),
  asyncHandler(async (req: Request, res: Response) => {
    const payment = await PaymentRecordModel.findOne({ _id: req.params.id, clinicId: req.user!.clinicId }).lean();
    if (!payment) return res.status(404).json({ error: 'NotFound', message: 'Payment not found' });
    res.json({ status: 'success', data: toPaymentResponse(payment) });
  }),
);

export const paymentRoutes = router;
