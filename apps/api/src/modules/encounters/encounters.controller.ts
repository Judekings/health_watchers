import { Router, Request, Response } from 'express';
import { EncounterModel } from './encounter.model';
import { validateRequest } from '@api/middlewares/validate.middleware';
import {
  createEncounterSchema,
  updateEncounterSchema,
  encounterIdParamSchema,
  patientIdParamSchema,
} from './encounter.validation';
import { asyncHandler } from '@api/middlewares/async.handler';
import { toEncounterResponse } from './encounters.transformer';
import { paginate, parsePagination } from '@api/utils/paginate';

const router = Router();

// GET /encounters
router.get(
  '/',
  asyncHandler(async (_req: Request, res: Response) => {
    const docs = await EncounterModel.find().sort({ createdAt: -1 }).lean();
    return res.json({ status: 'success', data: docs.map(toEncounterResponse) });
  }),
);

// GET /encounters/patient/:patientId
router.get(
  '/patient/:patientId',
  validateRequest({ params: patientIdParamSchema }),
  asyncHandler(async (req: Request, res: Response) => {
    const pagination = parsePagination(req.query as Record<string, any>);
    if (!pagination) {
      return res
        .status(400)
        .json({ error: 'ValidationError', message: 'limit must not exceed 100' });
    }
    const { page, limit } = pagination;
    const result = await paginate(EncounterModel, { patientId: req.params.patientId }, page, limit);
    return res.json({
      status: 'success',
      data: result.data.map(toEncounterResponse),
      meta: result.meta,
    });
  }),
);

// GET /encounters/:id
router.get(
  '/:id',
  validateRequest({ params: encounterIdParamSchema }),
  asyncHandler(async (req: Request, res: Response) => {
    const doc = await EncounterModel.findById(req.params.id).lean();
    if (!doc) return res.status(404).json({ error: 'NotFound', message: 'Encounter not found' });
    return res.json({ status: 'success', data: toEncounterResponse(doc) });
  }),
);

// POST /encounters
router.post(
  '/',
  validateRequest({ body: createEncounterSchema }),
  asyncHandler(async (req: Request, res: Response) => {
    const { patientId, clinicId, chiefComplaint, notes } = req.body;
    const doc = await EncounterModel.create({ patientId, clinicId, chiefComplaint, notes });
    return res.status(201).json({ status: 'success', data: toEncounterResponse(doc) });
  }),
);

// PATCH /encounters/:id
router.patch(
  '/:id',
  validateRequest({ params: encounterIdParamSchema, body: updateEncounterSchema }),
  asyncHandler(async (req: Request, res: Response) => {
    const { notes, diagnosis, treatmentPlan, aiSummary } = req.body;
    const update: Record<string, any> = {};
    if (notes !== undefined) update.notes = notes;
    if (diagnosis !== undefined) update.diagnosis = diagnosis;
    if (treatmentPlan !== undefined) update.treatmentPlan = treatmentPlan;
    if (aiSummary !== undefined) update.aiSummary = aiSummary;

    const doc = await EncounterModel.findByIdAndUpdate(req.params.id, update, {
      new: true,
      runValidators: true,
    });
    if (!doc) return res.status(404).json({ error: 'NotFound', message: 'Encounter not found' });
    return res.json({ status: 'success', data: toEncounterResponse(doc) });
  }),
);

export const encounterRoutes = router;
