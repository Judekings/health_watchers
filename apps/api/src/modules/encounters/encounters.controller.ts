import { Router, Request, Response } from 'express';
import { EncounterModel } from './encounter.model';
import { validateRequest } from '@api/middlewares/validate.middleware';
import { objectIdSchema } from '@api/middlewares/objectid.schema';
import { createEncounterSchema, updateEncounterSchema } from './encounter.validation';
import { asyncHandler } from '@api/middlewares/async.handler';

const router = Router();

router.post(
  '/',
  validateRequest({ body: createEncounterSchema }),
  asyncHandler(async (req: Request, res: Response) => {
    const encounter = await EncounterModel.create(req.body);
    res.status(201).json({ status: 'success', data: encounter });
  }),
);

router.get(
  '/',
  asyncHandler(async (_req: Request, res: Response) => {
    const encounters = await EncounterModel.find().lean();
    res.json({ status: 'success', data: encounters });
  }),
);

router.get(
  '/:id',
  validateRequest({ params: objectIdSchema }),
  asyncHandler(async (req: Request, res: Response) => {
    const encounter = await EncounterModel.findById(req.params.id).lean();
    if (!encounter) return res.status(404).json({ error: 'NotFound', message: 'Encounter not found' });
    res.json({ status: 'success', data: encounter });
  }),
);

router.patch(
  '/:id',
  validateRequest({ params: objectIdSchema, body: updateEncounterSchema }),
  asyncHandler(async (req: Request, res: Response) => {
    const encounter = await EncounterModel.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }).lean();
    if (!encounter) return res.status(404).json({ error: 'NotFound', message: 'Encounter not found' });
    res.json({ status: 'success', data: encounter });
  }),
);

export const encounterRoutes = router;
