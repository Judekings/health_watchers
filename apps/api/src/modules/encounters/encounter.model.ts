import { Schema, Types, model, models } from 'mongoose';

const encounterSchema = new Schema(
  {
    patientId:      { type: Types.ObjectId, ref: 'Patient', required: true, index: true },
    clinicId:       { type: Types.ObjectId, required: true, index: true },
    chiefComplaint: { type: String, required: true },
    notes:          { type: String },
  },
  { timestamps: true }
);

export const EncounterModel = models.Encounter || model('Encounter', encounterSchema);
