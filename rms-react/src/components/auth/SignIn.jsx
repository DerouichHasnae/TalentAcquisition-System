import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simule une connexion sans backend
    if (email === "admin@example.com" && password === "admin123") {
      navigate("/admin-dashboard");
    } else if (email === "recruiter@example.com" && password === "recruiter123") {
      navigate("/recruiter-dashboard");
    } else if (email === "candidate@example.com" && password === "candidate123") {
      navigate("/candidates-dashboard");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="auth-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
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

        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <a href="/sign-up">Sign Up</a></p>
    </div>
  );
};

export default SignIn;
