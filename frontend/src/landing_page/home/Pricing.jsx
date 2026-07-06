import React from "react";
import pricingMF from "../../assets/images/pricingMF.svg";
import intradayTrades from "../../assets/images/intradayTrades.svg";

function Pricing() {
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-5">
          <h3 className="mb-4">Unbeatable pricing</h3>
          <p className="mb-4">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="/pricing" className="pricing-link">
            See Pricing <i className="fa-solid fa-arrow-right text-primary"></i>
          </a>
        </div>
        <div className="col-7 text-center">
          <div className="row">
            <div className="col-4">
              <img src={pricingMF} alt="pricingMF" />
              <p>Free account openings</p>
            </div>
            <div className="col-4">
              <img src={pricingMF} alt="Pricing" />
              <p>Free equity delivery and mutual funds</p>
            </div>
            <div className="col-4">
              <img src={intradayTrades} alt="Intra day Trading" />
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
