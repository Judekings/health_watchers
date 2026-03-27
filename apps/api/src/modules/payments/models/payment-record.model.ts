import { Schema, model, models } from "mongoose";

const paymentRecordSchema = new Schema(
  {
    patientId: { type: Schema.Types.ObjectId, ref: "Patient", required: true },
    clinicId:  { type: Schema.Types.ObjectId, ref: "Clinic", required: true },
    amount:    { type: String, required: true },
    status:    { type: String, enum: ["pending", "confirmed", "failed"], default: "pending" },
    txHash:    { type: String },
  },
  { timestamps: true, versionKey: false }
);

export const PaymentRecordModel =
  models.PaymentRecord || model("PaymentRecord", paymentRecordSchema);
