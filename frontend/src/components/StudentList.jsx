import { toggleAttendance, deleteStudent } from "../api";

export default function StudentList({ students, refresh }) {
  return (
    <table border="1" cellPadding="5" style={{ marginTop: 20 }}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Roll No</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {students.map((s) => (
          <tr key={s._id}>
            <td>{s.name}</td>
            <td>{s.rollNo}</td>
            <td>{s.isPresent ? "Present" : "Absent"}</td>
            <td>
              <button
                onClick={() =>
                  toggleAttendance(s._id, !s.isPresent).then(refresh)
                }
              >
                {s.isPresent ? "Mark Absent" : "Mark Present"}
              </button>
              <button
                className="danger"
                onClick={() => deleteStudent(s._id).then(refresh)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
