import { Router, Request, Response } from "express";
import { PaymentRecordModel } from "./models/payment-record.model";
import { emitToClinic } from "../../realtime/socket";
import { authenticate } from "../../middlewares/auth.middleware";

export const paymentRoutes = Router();

// GET /api/v1/payments
paymentRoutes.get("/", authenticate, async (req: Request, res: Response) => {
  try {
    const { clinicId } = (req as any).user;
    const payments = await PaymentRecordModel.find({ clinicId }).sort({ createdAt: -1 }).lean();
    return res.json({ status: "success", data: payments });
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
});

// POST /api/v1/payments
paymentRoutes.post("/", authenticate, async (req: Request, res: Response) => {
  try {
    const { clinicId } = (req as any).user;
    const payment = await PaymentRecordModel.create({ ...req.body, clinicId });
    return res.status(201).json({ status: "success", data: payment });
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
});

// PATCH /api/v1/payments/:id/confirm
paymentRoutes.patch("/:id/confirm", authenticate, async (req: Request, res: Response) => {
  try {
    const { clinicId } = (req as any).user;
    const payment = await PaymentRecordModel.findOneAndUpdate(
      { _id: req.params.id, clinicId },
      { status: "confirmed", txHash: req.body.txHash },
      { new: true }
    ).lean();
    if (!payment) return res.status(404).json({ error: "Not found" });
    emitToClinic(clinicId, "payment:confirmed", payment);
    return res.json({ status: "success", data: payment });
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
});
