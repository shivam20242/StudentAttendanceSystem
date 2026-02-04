
# 🎓 Student Attendance System

A full-stack **Student Attendance Management System** where teachers/admins can manage students and track attendance date-wise.

Built using **React JS, Node.js, Express, MongoDB, and JWT Authentication**.

---

## 🚀 Features

### 👩‍🏫 Teacher/Admin

* Register & Login (JWT Authentication)
* Add new students
* View all students
* Mark attendance (Present / Absent)
* Track attendance **date-wise**
* View attendance summary:

  * Total Students
  * Present Count
  * Absent Count

---

## 🛠 Tech Stack

### Frontend

* React JS
* Fetch API
* useState & useEffect
* Controlled Forms
* Basic CSS

### Backend

* Node.js
* Express.js
* MongoDB + Mongoose
* JWT Authentication
* REST APIs

---

## 📁 Project Structure

```
student_attendance_system
│
├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── middleware
│   ├── server.js
│   └── .env
│
└── frontend
    ├── src
    │   ├── components
    │   ├── pages
    │   ├── api.js
    │   └── App.js
```

---

## 🔐 Authentication

JWT-based authentication is used.

After login, a token is returned and must be sent in headers for protected routes:

```
Authorization: Bearer <your_token>
```

---

## ⚙️ Backend Setup

### 1️⃣ Go to backend folder

```bash
cd backend
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Create `.env` file

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4️⃣ Start server

```bash
node server.js
```

Server runs on:

```
http://localhost:5000
```

---

## 🌐 API Endpoints

### 🔑 Auth Routes

| Method | Endpoint             | Description      |
| ------ | -------------------- | ---------------- |
| POST   | `/api/auth/register` | Register teacher |
| POST   | `/api/auth/login`    | Login teacher    |

---

### 👨‍🎓 Student Routes (Protected)

| Method | Endpoint                       | Description      |
| ------ | ------------------------------ | ---------------- |
| POST   | `/api/students`                | Add student      |
| GET    | `/api/students`                | Get all students |
| PUT    | `/api/students/:id/attendance` | Mark attendance  |
| DELETE | `/api/students/:id`            | Delete student   |

---
🔗 Live App: https://attendance1232.netlify.app/
---

## 💻 Frontend Setup

### 1️⃣ Go to frontend

```bash
cd frontend
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Update API Base URL

In `src/api.js`

```js
const BASE_URL = "https://your-backend-url/api";
// or
const BASE_URL = "http://localhost:5000/api";
```

### 4️⃣ Start React App

```bash
npm start
```

Runs on:

```
http://localhost:3000
```

---

## ☁️ Deployment Guide

You can deploy frontend and backend separately.

### Backend (Render / Railway)

* Root directory: `backend`
* Add environment variables in dashboard
* Start command:

  ```
  node server.js
  ```

### Frontend (Vercel / Netlify)

* Root directory: `frontend`
* Set production API URL in `api.js`

---

## 🧠 Concepts Covered

✔ REST API Design
✔ JWT Authentication
✔ MongoDB Schema Design
✔ React State Management
✔ Protected Routes
✔ Date-wise Data Tracking

---

## 📸 Future Improvements

* Role-based login (Admin/Teacher)
* Monthly attendance reports
* CSV export
* Student search & filters

---

## 👨‍💻 Author

**Shivam Mishra**
Full Stack Developer (Learning & Building 🚀)
