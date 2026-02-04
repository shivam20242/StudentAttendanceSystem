import { useState } from "react";
import { loginTeacher } from "../api";

export default function Login({ setToken, switchToRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const data = await loginTeacher(email, password);
    if (data.token) {
      localStorage.setItem("token", data.token);
      setToken(data.token);
    } else {
      alert(data.msg || "Login failed");
    }
  };

  return (
  <div className="container">
    <h2>Teacher Login</h2>
    <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
    <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
    <br />
    <button onClick={handleLogin}>Login</button>

    <p>
      New teacher?{" "}
      <button className="secondary" onClick={switchToRegister}>Register</button>
    </p>
  </div>
);

}
