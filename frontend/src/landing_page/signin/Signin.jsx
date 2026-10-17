import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signin() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      setError("Please enter your email and password");
      return;
    }

    try {
      const res = await fetch("http://localhost:3002/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // lets the backend set the login cookie
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.message);
        return;
      }

      // Login worked - go to the dashboard
      window.location.href = "http://localhost:5174";
    } catch (err) {
      setError("Cannot reach the server. Is the backend running?");
    }
  };

  return (
    <div className="container p-5" style={{ maxWidth: "450px" }}>
      <h3 className="text-center mb-4">Sign in to TradePilot</h3>

      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-3"
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <input
          className="form-control mb-3"
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-primary w-100 fs-5">
          Sign In
        </button>
      </form>

      <p className="text-center mt-3">
        New to TradePilot? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
}

export default Signin;
