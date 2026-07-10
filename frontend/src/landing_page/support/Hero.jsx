import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="support">
      <div className="row ">
        <div className="col-3">
          <Link to="/support" className="support-link fs-2 m-0">
            <h1>Support Portal</h1>{" "}
          </Link>
        </div>
        <div className="col-7 m-auto"></div>
        <div className="col-2">
          <button className="btn btn-primary ms-5 mt-2">My tickets</button>
        </div>
      </div>
      <div class="input-group mt-4">
        <input
          type="text"
          class="form-control support-input"
          placeholder="🔍 Eg: How do i open my account, How do i activate F&O..."
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
    </div>
  );
}

export default Hero;
