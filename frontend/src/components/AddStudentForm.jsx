import { useState } from "react";
import { addStudent } from "../api";

export default function AddStudentForm({ refresh }) {
  const [name, setName] = useState("");
  const [rollNo, setRollNo] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    await addStudent(name, rollNo);
    setName("");
    setRollNo("");
    refresh();
  };

  return (
  <form onSubmit={handleSubmit} style={{ marginTop: 15 }}>
    <h3>Add Student</h3>
    <input value={name} onChange={e => setName(e.target.value)} placeholder="Student Name" />
    <input value={rollNo} onChange={e => setRollNo(e.target.value)} placeholder="Roll No" />
    <button>Add Student</button>
  </form>
);

}
