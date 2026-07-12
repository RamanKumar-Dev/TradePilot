import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Menu = () => {
  let [selectedMenu, setSelectedMenu] = useState(0);
  let [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleMenuClick = (idx) => {
    console.log(idx);
    setSelectedMenu(idx);
  };

  const handleProfileClick = (idx) => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src={logo} style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li onClick={() => handleMenuClick(0)}>
            <Link style={{ textDecoration: "none" }} to={"/"}>
              <p className={selectedMenu===0 ? activeMenuClass : menuClass}>Dashboard</p>
            </Link>
          </li>
          <li onClick={() => handleMenuClick(1)}>
            <Link style={{ textDecoration: "none" }} to={"/orders"}>
              <p className={selectedMenu===1 ? activeMenuClass : menuClass}>Orders</p>
            </Link>
          </li>
          <li onClick={() => handleMenuClick(2)}>
            <Link style={{ textDecoration: "none" }} to={"/holdings"}>
              <p className={selectedMenu===2 ? activeMenuClass : menuClass}>Holdings</p>
            </Link>
          </li>
          <li onClick={() => handleMenuClick(3)}>
            <Link style={{ textDecoration: "none" }} to={"/positions"}>
              <p className={selectedMenu===3 ? activeMenuClass : menuClass}>Positions</p>
            </Link>
          </li>
          <li onClick={() => handleMenuClick(4)}>
            <Link style={{ textDecoration: "none" }} to={"/funds"}>
              <p className={selectedMenu===4 ? activeMenuClass : menuClass}>Funds</p>
            </Link>
          </li>
          <li onClick={() => handleMenuClick(5)}>
            <Link style={{ textDecoration: "none" }} to={"/apps"}>
              <p className={selectedMenu===5 ? activeMenuClass : menuClass}>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile">
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
