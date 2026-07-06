import React from "react";
import education from "../../assets/images/education.svg";

function Education() {
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-6">
          <img src={education} style={{width: "80%"}} alt="Education" />
        </div>
        <div className="col-6">
          <h4 className="mb-4 fs-4">Free and open market education</h4>
          <p className="mb-4">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.{" "}
          </p>
          <a href="/product" className="stats-link">
            Varsity <i className="fa-solid fa-arrow-right text-primary"></i>
          </a>
          <p className="mb-4 mt-4">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.{" "}
          </p>
          <a href="/product" className="stats-link">
            TradingQ&A <i className="fa-solid fa-arrow-right text-primary"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
