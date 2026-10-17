import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Home from "./components/Home";

function App() {
  const [checking, setChecking] = useState(true);

  // Ask the backend if the user is logged in. If not, send them to Sign In.
  useEffect(() => {
    axios
      .get("http://localhost:3002/me", { withCredentials: true })
      .then(() => setChecking(false))
      .catch(() => {
        window.location.href = "http://localhost:5173/signin";
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
