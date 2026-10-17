import React from "react";

import Menu from "./Menu";
import { FRONTEND_URL } from "../config";

function TopBar() {
  const handleLogout = () => {
    localStorage.removeItem("tradepilot_token");
    window.location.href = `${FRONTEND_URL}/signin`;
  };

  return (
    <div className="topbar-container">
      <div className="indices-container">
        <div className="nifty">
          <p className="index">NIFTY 50</p>
          <p className="index-points">{100.2} </p>
          <p className="percent"> </p>
        </div>
        <div className="sensex">
          <p className="index">SENSEX</p>
          <p className="index-points">{100.2}</p>
          <p className="percent"></p>
        </div>
      </div>

      <Menu />

      <button
        className="btn btn-outline-secondary btn-sm"
        style={{ marginLeft: "auto", marginRight: "20px" }}
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default TopBar;
