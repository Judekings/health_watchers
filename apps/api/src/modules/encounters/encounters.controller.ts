import { Router, Request, Response } from 'express';
import { EncounterModel } from './encounter.model';
import { toEncounterResponse } from './encounters.transformer';
import { asyncHandler } from '../../utils/asyncHandler';
import { validateRequest } from '../../middlewares/validate.middleware';
import { paginate, parsePagination } from '../../utils/paginate';
import {
  createEncounterSchema,
  encounterIdParamSchema,
  patientIdParamSchema,
} from './encounter.validation';

const router = Router();

// GET /encounters
router.get('/', asyncHandler(async (_req: Request, res: Response) => {
  const docs = await EncounterModel.find().sort({ createdAt: -1 });
  return res.json({ status: 'success', data: docs.map(toEncounterResponse) });
}));

// GET /encounters/patient/:patientId
router.get(
  '/patient/:patientId',
  validateRequest({ params: patientIdParamSchema }),
  asyncHandler(async (req: Request, res: Response) => {
    const pagination = parsePagination(req.query as Record<string, any>);
    if (!pagination) {
      return res.status(400).json({ error: 'ValidationError', message: 'limit must not exceed 100' });
    }
    const { page, limit } = pagination;
    const result = await paginate(EncounterModel, { patientId: req.params.patientId }, page, limit);
    return res.json({ status: 'success', data: result.data.map(toEncounterResponse), meta: result.meta });
  })
);

// GET /encounters/:id
router.get(
  '/:id',
  validateRequest({ params: encounterIdParamSchema }),
  asyncHandler(async (req: Request, res: Response) => {
    const doc = await EncounterModel.findById(req.params.id);
    if (!doc) return res.status(404).json({ error: 'NotFound', message: 'Encounter not found' });
    return res.json({ status: 'success', data: toEncounterResponse(doc) });
  })
);

// POST /encounters
router.post(
  '/',
  validateRequest({ body: createEncounterSchema }),
  asyncHandler(async (req: Request, res: Response) => {
    const { patientId, clinicId, chiefComplaint, notes } = req.body;
    const doc = await EncounterModel.create({ patientId, clinicId, chiefComplaint, notes });
    return res.status(201).json({ status: 'success', data: toEncounterResponse(doc) });
  })
);

export const encounterRoutes = router;
