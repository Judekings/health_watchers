import { z } from 'zod';

const objectId = z.string().regex(/^[a-f\d]{24}$/i, 'Invalid ObjectId');

export const createEncounterSchema = z.object({
  patientId:      objectId,
  clinicId:       objectId,
  chiefComplaint: z.string().min(3, 'chiefComplaint must be at least 3 characters'),
  notes:          z.string().max(5000).optional(),
});

export const encounterIdParamSchema = z.object({
  id: objectId,
});

export const patientIdParamSchema = z.object({
  patientId: objectId,
});
