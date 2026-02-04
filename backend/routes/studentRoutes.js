import express from "express";
import {
  addStudent,
  getStudents,
  markAttendance,
  deleteStudent
} from "../controllers/studentController.js";
import authMiddleware from "../middleware/authMiddleWare.js";

const router = express.Router();

router.post("/", authMiddleware, addStudent);
router.get("/", authMiddleware, getStudents);
router.put("/:id/attendance", authMiddleware, markAttendance);
router.delete("/:id", authMiddleware, deleteStudent);

export default router;
