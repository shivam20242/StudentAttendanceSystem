import { Student } from "../models/Student.js";


export const addStudent = async (req, res) => {
  try {
    const { name, rollNo } = req.body;
    if (!name || !rollNo)
      return res.status(400).json({ msg: "Name & Roll No required" });

    const exists = await Student.findOne({ rollNo });
    if (exists)
      return res.status(400).json({ msg: "Duplicate roll number not allowed" });

    const student = await Student.create({ name, rollNo });
    res.status(201).json(student);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getStudents = async (req, res) => {
  const students = await Student.find();
  res.json(students);
};

export const markAttendance = async (req, res) => {
  const { isPresent } = req.body;

  const student = await Student.findByIdAndUpdate(
    req.params.id,
    { isPresent },
    { new: true }
  );

  if (!student) return res.status(404).json({ msg: "Student not found" });

  res.json(student);
};

export const deleteStudent = async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.json({ msg: "Student deleted" });
};
