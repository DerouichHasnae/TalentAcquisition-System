import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("candidate"); // Définir un rôle par défaut
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔹 Simule une inscription (Backend sera ajouté plus tard avec Laravel)
    if (role === "admin") {
      navigate("/admin-dashboard");
    } else if (role === "recruiter") {
      navigate("/recruiter-dashboard");
    } else {
      navigate("/candidates-dashboard");
    }
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>Full Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <label>Role:</label>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="candidate">Candidate</option>
          <option value="recruiter">Recruiter</option>
          <option value="admin">Admin</option>
        </select>

        <button type="submit">Register</button>
      </form>
      <p>Already have an account? <a href="/sign-in">Sign In</a></p>
    </div>
  );
};

export default SignUp;
