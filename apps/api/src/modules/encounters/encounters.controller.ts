import { Router, Request, Response } from "express";
import { EncounterModel } from "./encounter.model";
import { emitToClinic } from "../../realtime/socket";
import { authenticate } from "../../middlewares/auth.middleware";

export const encounterRoutes = Router();

// GET /api/v1/encounters
encounterRoutes.get("/", authenticate, async (req: Request, res: Response) => {
  try {
    const { clinicId } = (req as any).user;
    const encounters = await EncounterModel.find({ clinicId }).sort({ createdAt: -1 }).lean();
    return res.json({ status: "success", data: encounters });
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
});

// GET /api/v1/encounters/:id
encounterRoutes.get("/:id", authenticate, async (req: Request, res: Response) => {
  try {
    const { clinicId } = (req as any).user;
    const encounter = await EncounterModel.findOne({ _id: req.params.id, clinicId }).lean();
    if (!encounter) return res.status(404).json({ error: "Not found" });
    return res.json({ status: "success", data: encounter });
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
});

// POST /api/v1/encounters
encounterRoutes.post("/", authenticate, async (req: Request, res: Response) => {
  try {
    const { clinicId } = (req as any).user;
    const encounter = await EncounterModel.create({ ...req.body, clinicId });
    emitToClinic(clinicId, "encounter:created", encounter);
    return res.status(201).json({ status: "success", data: encounter });
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
});

// PATCH /api/v1/encounters/:id
encounterRoutes.patch("/:id", authenticate, async (req: Request, res: Response) => {
  try {
    const { clinicId } = (req as any).user;
    const encounter = await EncounterModel.findOneAndUpdate(
      { _id: req.params.id, clinicId },
      req.body,
      { new: true }
    ).lean();
    if (!encounter) return res.status(404).json({ error: "Not found" });
    emitToClinic(clinicId, "encounter:updated", encounter);
    return res.json({ status: "success", data: encounter });
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
});
