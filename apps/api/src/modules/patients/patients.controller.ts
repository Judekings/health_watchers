import { Router, Request, Response, NextFunction } from 'express';
import { PatientModel } from './models/patient.model';
import { PatientCounterModel } from './models/patient-counter.model';
import { toPatientResponse } from './patients.transformer';
import { asyncHandler } from '../../utils/asyncHandler';
import { paginate, parsePagination } from '../../utils/paginate';

const router = Router();

async function nextSystemId(clinicId: string): Promise<string> {
  const counter = await PatientCounterModel.findOneAndUpdate(
    { _id: `patient_${clinicId}` },
    { $inc: { value: 1 } },
    { new: true, upsert: true }
  );
  return `P-${counter!.value}`;
}

// GET /patients?page=1&limit=20&clinicId=
router.get('/', asyncHandler(async (req: Request, res: Response) => {
  const pagination = parsePagination(req.query as Record<string, any>);
  if (!pagination) {
    return res.status(400).json({ error: 'ValidationError', message: 'limit must not exceed 100' });
  }
  const { page, limit } = pagination;
  const filter: Record<string, any> = { isActive: true };
  if (req.query.clinicId) filter.clinicId = req.query.clinicId;

  const result = await paginate(PatientModel, filter, page, limit);
  return res.json({ status: 'success', data: result.data.map(toPatientResponse), meta: result.meta });
}));

// GET /patients/search?q=
router.get('/search', asyncHandler(async (req: Request, res: Response) => {
  const pagination = parsePagination(req.query as Record<string, any>);
  if (!pagination) {
    return res.status(400).json({ error: 'ValidationError', message: 'limit must not exceed 100' });
  }
  const { page, limit } = pagination;
  const q = String(req.query.q || '').trim();
  const filter: Record<string, any> = { isActive: true };
  if (q) filter.searchName = { $regex: q, $options: 'i' };

  const result = await paginate(PatientModel, filter, page, limit);
  return res.json({ status: 'success', data: result.data.map(toPatientResponse), meta: result.meta });
}));

// GET /patients/:id
router.get('/:id', asyncHandler(async (req: Request, res: Response) => {
  const doc = await PatientModel.findById(req.params.id);
  if (!doc) return res.status(404).json({ error: 'NotFound', message: 'Patient not found' });
  return res.json({ status: 'success', data: toPatientResponse(doc) });
}));

// POST /patients
router.post('/', asyncHandler(async (req: Request, res: Response) => {
  const { firstName, lastName, dateOfBirth, sex, contactNumber, address, clinicId } = req.body;
  const searchName = `${firstName} ${lastName}`.toLowerCase();
  const systemId = await nextSystemId(clinicId || 'default');
  const doc = await PatientModel.create({
    systemId, firstName, lastName,
    dateOfBirth: new Date(dateOfBirth),
    sex, contactNumber, address,
    clinicId: clinicId || 'default',
    isActive: true,
    searchName,
  });
  return res.status(201).json({ status: 'success', data: toPatientResponse(doc) });
}));

// PUT /patients/:id
router.put('/:id', asyncHandler(async (req: Request, res: Response) => {
  const { firstName, lastName, dateOfBirth, sex, contactNumber, address } = req.body;
  const update: Record<string, any> = { contactNumber, address, sex };
  if (firstName) { update.firstName = firstName; }
  if (lastName)  { update.lastName  = lastName;  }
  if (firstName || lastName) {
    update.searchName = `${firstName || ''} ${lastName || ''}`.toLowerCase().trim();
  }
  if (dateOfBirth) update.dateOfBirth = new Date(dateOfBirth);

  const doc = await PatientModel.findByIdAndUpdate(req.params.id, update, { new: true });
  if (!doc) return res.status(404).json({ error: 'NotFound', message: 'Patient not found' });
  return res.json({ status: 'success', data: toPatientResponse(doc) });
}));

export const patientRoutes = router;
