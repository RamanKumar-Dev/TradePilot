import React from "react";
import pricingMF from "../../assets/images/pricingMF.svg";
import intradayTrades from "../../assets/images/intradayTrades.svg";

function Hero() {
  return (
    <div className="container p-5 text-center mt-5">
      <div className="mb-5 pb-5">
        <h2>Charges</h2>
        <p className="fs-5 mt-3" style={{ opacity: "0.7" }}>
          List of all charges and taxes
        </p>
      </div>

      <div className="row">
        <div className="col-4">
          <img src={pricingMF} alt="" className="card-img-top" />
          <h2 className="fs-3">Free equity delivery</h2>
          <p className="mt-4" style={{ opacity: "0.8" }}>
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.{" "}
          </p>
        </div>

        <div className="col-4">
          <img src={intradayTrades} alt="" className="card-img-top" />
          <h2 className="fs-3">Intraday and F&O trades</h2>
          <p className="mt-4" style={{ opacity: "0.8" }}>
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.{" "}
          </p>
        </div>

        <div className="col-4">
          <img src={pricingMF} alt="" className="card-img-top" />
          <h2 className="fs-3">Free direct MF</h2>
          <p className="mt-4" style={{ opacity: "0.8" }}>
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
