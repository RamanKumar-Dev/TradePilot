import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "../../config";

function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState({ text: "", type: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password) {
      setMessage({ text: "Please fill in all fields", type: "danger" });
      return;
    }

    try {
      const res = await fetch(`${API_URL}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        setMessage({ text: data.message, type: "danger" });
        return;
      }

      setMessage({ text: "Account created! Redirecting to Sign In...", type: "success" });
      setTimeout(() => navigate("/signin"), 1000);
    } catch (err) {
      setMessage({ text: "Cannot reach the server. Is the backend running?", type: "danger" });
    }
  };

  return (
    <div className="container p-5" style={{ maxWidth: "450px" }}>
      <h3 className="text-center mb-4">Sign up for TradePilot</h3>

      {message.text && (
        <div className={`alert alert-${message.type}`}>{message.text}</div>
      )}

      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-3"
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />
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
          placeholder="Password (min 6 characters)"
          value={form.password}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-primary w-100 fs-5">
          Sign Up
        </button>
      </form>

      <p className="text-center mt-3">
        Already have an account? <Link to="/signin">Sign In</Link>
      </p>
    </div>
  );
}

export default Signup;
