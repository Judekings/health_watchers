import { Schema, model, models } from "mongoose";

const encounterSchema = new Schema(
  {
    patientId: { type: Schema.Types.ObjectId, ref: "Patient", required: true },
    clinicId:  { type: Schema.Types.ObjectId, ref: "Clinic", required: true },
    date:      { type: Date, default: Date.now },
    notes:     { type: String, trim: true },
    summary:   { type: String },
  },
  { timestamps: true, versionKey: false }
);

export const EncounterModel = models.Encounter || model("Encounter", encounterSchema);
