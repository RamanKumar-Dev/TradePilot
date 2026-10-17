import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Home from "./components/Home";
import { API_URL, FRONTEND_URL } from "./config";

function App() {
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    // 1. After sign in, the frontend sends the token in the URL (#token=...). Save it and clean the URL.
    const match = window.location.hash.match(/token=([^&]+)/);
    if (match) {
      localStorage.setItem("tradepilot_token", decodeURIComponent(match[1]));
      window.history.replaceState(null, "", window.location.pathname);
    }

    // 2. No token saved? Go to Sign In.
    const token = localStorage.getItem("tradepilot_token");
    if (!token) {
      window.location.href = `${FRONTEND_URL}/signin`;
      return;
    }

    // 3. Ask the backend if the token is valid.
    axios
      .get(`${API_URL}/me`, { headers: { Authorization: `Bearer ${token}` } })
      .then(() => setChecking(false))
      .catch(() => {
        localStorage.removeItem("tradepilot_token");
        window.location.href = `${FRONTEND_URL}/signin`;
      });
  }, []);

  if (checking) return null; // show nothing until we know

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
