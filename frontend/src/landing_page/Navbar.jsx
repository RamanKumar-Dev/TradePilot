import React from "react";
import logo from "../assets/images/logo.svg";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-light border-bottom">
      <div className="container-fluid ">
        <div className="navbar-logo">
          <a className="navbar-brand" href="#">
            <img
              src={logo}
              alt="logo"
              style={{ width: "130px", height: "17px" }}
            />
          </a>
        </div>
        <div className="margin-auto"></div>
        <div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item me-4">
                <a className="nav-link" aria-current="page" href="/signup">
                  Signup
                </a>
              </li>
              <li className="nav-item me-4">
                <a className="nav-link" href="/about">
                  About
                </a>
              </li>
              <li className="nav-item me-4">
                <a className="nav-link" href="/products">
                  Products
                </a>
              </li>

              <li className="nav-item me-4">
                <a className="nav-link" href="/pricing">
                  Pricing
                </a>
              </li>

              <li className="nav-item me-4">
                <a className="nav-link" href="/support">
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
