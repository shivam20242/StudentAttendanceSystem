const BASE_URL = "https://studentattendancesystem-tge3.onrender.com/api";

const getToken = () => localStorage.getItem("token");

const headers = () => ({
  "Content-Type": "application/json",
  Authorization: `Bearer ${getToken()}`
});

// 🔐 AUTH
export const loginTeacher = async (email, password) => {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });
  return res.json();
};

export const registerTeacher = async (email, password) => {
  const res = await fetch(`${BASE_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });
  return res.json();
};

// 🎓 STUDENTS
export const getStudents = async () => {
  const res = await fetch(`${BASE_URL}/students`, {
    headers: headers()
  });
  return res.json();
};

export const addStudent = async (name, rollNo) => {
  const res = await fetch(`${BASE_URL}/students`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({ name, rollNo })
  });
  return res.json();
};

export const toggleAttendance = async (id, isPresent) => {
  const res = await fetch(`${BASE_URL}/students/${id}/attendance`, {
    method: "PUT",
    headers: headers(),
    body: JSON.stringify({ isPresent })
  });
  return res.json();
};

export const deleteStudent = async (id) => {
  const res = await fetch(`${BASE_URL}/students/${id}`, {
    method: "DELETE",
    headers: headers()
  });
  return res.json();
};
