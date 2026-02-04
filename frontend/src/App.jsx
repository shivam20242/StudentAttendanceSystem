import { useEffect, useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import AddStudentForm from "./components/AddStudentForm";
import StudentList from "./components/StudentList";
import AttendanceSummary from "./components/AttendanceSummary";
import { getStudents } from "./api";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [students, setStudents] = useState([]);
  const [showRegister, setShowRegister] = useState(false);

  const loadStudents = async () => {
    const data = await getStudents();
    setStudents(data);
  };

  useEffect(() => {
    if (token) loadStudents();
  }, [token]);

  if (!token) {
    return showRegister ? (
      <Register switchToLogin={() => setShowRegister(false)} />
    ) : (
      <Login
        setToken={setToken}
        switchToRegister={() => setShowRegister(true)}
      />
    );
  }

  return (
  <div className="container">
    <h2>Student Attendance System</h2>
    <button
      className="secondary"
      onClick={() => { localStorage.removeItem("token"); setToken(null); }}
    >
      Logout
    </button>

    <AddStudentForm refresh={loadStudents} />
    <StudentList students={students} refresh={loadStudents} />
    <AttendanceSummary students={students} />
  </div>
);

}

export default App;
