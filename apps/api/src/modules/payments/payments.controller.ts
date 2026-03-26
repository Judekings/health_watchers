import { Request, Response, Router } from 'express';
import { authenticate } from '../../middlewares/auth.middleware';
import { auditLog } from '../audit/audit.service';

const router = Router();

router.use(authenticate);

/**
 * @swagger
 * /payments:
 *   post:
 *     summary: Create a payment
 *     tags: [Payments]
 *     security:
 *       - bearerAuth: []
 */
router.post('/', async (req: Request, res: Response) => {
  const paymentId = 'new-payment-id';

  await auditLog(
    {
      action: 'PAYMENT_CREATE',
      resourceType: 'Payment',
      resourceId: paymentId,
      userId: req.user?.userId,
      clinicId: req.user?.clinicId,
      outcome: 'SUCCESS',
      metadata: {
        amount: req.body.amount,
        currency: req.body.currency,
      },
    },
    req
  );

  res.status(201).json({
    status: 'success',
    data: { id: paymentId, message: 'Payment created' },
  });
});

export const paymentRoutes = router;
