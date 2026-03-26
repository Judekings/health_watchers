import { Schema, model, models } from 'mongoose';

export interface PaymentRecord {
  patientId: Schema.Types.ObjectId;
  amount: string;
  status: 'pending' | 'completed' | 'failed';
  stellarTxHash?: string;
}

const paymentRecordSchema = new Schema<PaymentRecord>(
  {
    patientId:      { type: Schema.Types.ObjectId, ref: 'Patient', required: true, index: true },
    amount:         { type: String, required: true },
    status:         { type: String, enum: ['pending', 'completed', 'failed'], default: 'pending' },
    stellarTxHash:  { type: String },
  },
  { timestamps: true, versionKey: false },
);

export const PaymentRecordModel =
  models.PaymentRecord || model<PaymentRecord>('PaymentRecord', paymentRecordSchema);
