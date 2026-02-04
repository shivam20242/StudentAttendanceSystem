import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rollNo: { type: String, required: true, unique: true },
  isPresent: { type: Boolean, default: false }
});

export const Student = mongoose.model("Student", studentSchema);
