import mongoose, { Schema, Document } from 'mongoose';

export interface IEncounter extends Document {
  patientId: mongoose.Types.ObjectId;
  clinicId: string;
  chiefComplaint: string;
  notes?: string;
  aiSummary?: string;
}

const EncounterSchema = new Schema<IEncounter>(
  {
    patientId: { type: Schema.Types.ObjectId, ref: 'Patient', required: true },
    clinicId: { type: String, required: true, index: true },
    chiefComplaint: { type: String, required: true },
    notes: { type: String },
    aiSummary: { type: String },
  },
  { timestamps: true }
);

export const EncounterModel = mongoose.model<IEncounter>('Encounter', EncounterSchema);
