import React from "react";

import Menu from "./Menu";

function TopBar() {
  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:3002/logout", {}, { withCredentials: true });
    } finally {
      window.location.href = "http://localhost:5173/signin";
    }
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
