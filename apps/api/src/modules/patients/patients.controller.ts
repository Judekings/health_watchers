import { Router, Request, Response } from "express";
import { PatientModel } from "./patient.model";
import { emitToClinic } from "../../realtime/socket";
import { authenticate } from "../../middlewares/auth.middleware";

export const patientRoutes = Router();

// GET /api/v1/patients
patientRoutes.get("/", authenticate, async (req: Request, res: Response) => {
  try {
    const { clinicId } = (req as any).user;
    const patients = await PatientModel.find({ clinicId }).sort({ createdAt: -1 }).lean();
    return res.json({ status: "success", data: patients });
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
});

// GET /api/v1/patients/search
patientRoutes.get("/search", authenticate, async (req: Request, res: Response) => {
  try {
    const { clinicId } = (req as any).user;
    const q = String(req.query.q || "");
    const patients = await PatientModel.find({
      clinicId,
      fullName: { $regex: q, $options: "i" },
    }).lean();
    return res.json({ status: "success", data: patients });
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
});

// GET /api/v1/patients/:id
patientRoutes.get("/:id", authenticate, async (req: Request, res: Response) => {
  try {
    const { clinicId } = (req as any).user;
    const patient = await PatientModel.findOne({ _id: req.params.id, clinicId }).lean();
    if (!patient) return res.status(404).json({ error: "Not found" });
    return res.json({ status: "success", data: patient });
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
});

// POST /api/v1/patients
patientRoutes.post("/", authenticate, async (req: Request, res: Response) => {
  try {
    const { clinicId } = (req as any).user;
    const patient = await PatientModel.create({ ...req.body, clinicId });
    emitToClinic(clinicId, "patient:created", patient);
    return res.status(201).json({ status: "success", data: patient });
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
});

// PATCH /api/v1/patients/:id
patientRoutes.patch("/:id", authenticate, async (req: Request, res: Response) => {
  try {
    const { clinicId } = (req as any).user;
    const patient = await PatientModel.findOneAndUpdate(
      { _id: req.params.id, clinicId },
      req.body,
      { new: true }
    ).lean();
    if (!patient) return res.status(404).json({ error: "Not found" });
    emitToClinic(clinicId, "patient:updated", patient);
    return res.json({ status: "success", data: patient });
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
});
