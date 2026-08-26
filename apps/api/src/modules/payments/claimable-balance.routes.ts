import { Router } from 'express';
import { authenticate, requireRoles } from '@api/middlewares/auth.middleware';
import { validateRequest } from '@api/middlewares/validate.middleware';
import { z } from 'zod';
import { asyncHandler } from '@api/middlewares/async.handler';
import logger from '@api/utils/logger';
import {
  createClaimableBalance,
  claimBalance,
  reclaimBalance,
  getClaimableBalanceStatus,
} from './claimable-balance.controller';

const router = Router();
router.use(authenticate);

const createClaimableBalanceSchema = z.object({
  amount: z.string().min(1),
  claimantPublicKey: z.string().min(1),
  claimableAfter: z.string().datetime(),
  claimableUntil: z.string().datetime(),
  encounterId: z.string().optional(),
  patientId: z.string().optional(),
});

// POST /api/v1/payments/claimable — create claimable balance (escrow)
router.post(
  '/claimable',
  validateRequest({ body: createClaimableBalanceSchema }),
  asyncHandler(async (req: any, res: any) => {
    await createClaimableBalance(req, res);
  })
);

// POST /api/v1/payments/claim/:balanceId — claim a claimable balance
router.post(
  '/claim/:balanceId',
  asyncHandler(async (req: any, res: any) => {
    await claimBalance(req, res);
  })
);

// POST /api/v1/payments/reclaim/:balanceId — reclaim an expired claimable balance
router.post(
  '/reclaim/:balanceId',
  asyncHandler(async (req: any, res: any) => {
    await reclaimBalance(req, res);
  })
);

// GET /api/v1/payments/claimable/:balanceId — get claimable balance status
router.get(
  '/claimable/:balanceId',
  asyncHandler(async (req: any, res: any) => {
    await getClaimableBalanceStatus(req, res);
  })
);

export const claimableBalanceRoutes = router;
