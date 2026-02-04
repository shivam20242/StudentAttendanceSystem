import { useState } from "react";
import { registerTeacher } from "../api";

export default function Register({ switchToLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    const data = await registerTeacher(email, password);
    if (data.msg) {
      alert("Registered successfully! Please login.");
      switchToLogin();
    } else {
      alert(data.msg || "Registration failed");
    }
  };

  return (
  <div className="container">
    <h2>Teacher Register</h2>
    <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
    <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
    <br />
    <button onClick={handleRegister}>Register</button>

    <p>
      Already have an account?{" "}
      <button className="secondary" onClick={switchToLogin}>Login</button>
    </p>
  </div>
);

}
