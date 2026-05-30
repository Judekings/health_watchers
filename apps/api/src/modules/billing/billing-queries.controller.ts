import { Request, Response } from 'express';
import { buildAgingReport } from './billing-aging';

export async function getUnbilledEncounters(req: Request, res: Response) {
  // TODO: await EncounterModel.find({ 'billing.billingStatus': 'unbilled' }).sort({ 'billing.serviceDate': 1 })
  return res.json({ success: true, data: [], message: 'Wire to EncounterModel query' });
}

export async function getDeniedEncounters(req: Request, res: Response) {
  // TODO: await EncounterModel.find({ 'billing.billingStatus': 'denied' })
  return res.json({ success: true, data: [], message: 'Wire to EncounterModel query' });
}

export async function getAgingReport(req: Request, res: Response) {
  const entries: any[] = []; // TODO: fetch unbilled from DB
  return res.json({ success: true, data: buildAgingReport(entries) });
}
