import { Schema, model, models } from "mongoose";

const patientSchema = new Schema(
  {
    fullName:  { type: String, required: true, trim: true },
    dateOfBirth: { type: Date, required: true },
    sex:       { type: String, enum: ["male", "female", "other"], required: true },
    contact:   { type: String, trim: true },
    clinicId:  { type: Schema.Types.ObjectId, ref: "Clinic", required: true },
  },
  { timestamps: true, versionKey: false }
);

export const PatientModel = models.Patient || model("Patient", patientSchema);
