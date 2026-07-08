import React from "react";
import nithinKamath from "../../assets/images/RamanKumar.png";

function Team() {
  return (
    <div className="container mt-5">
      <div className="row m-5">
        <div className="col-6"></div>
        <div className="col-6">
          <h3>People</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <img
            src={nithinKamath}
            alt="team leader image"
            className="rounded-circle offset-5"
          />
          <div className="text-center mt-3 author">
            <h5>Raman Kumar</h5>
            <p>Founder, CEO</p>
          </div>
        </div>
        <div className="col-6">
          <p>
            {" "}
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            {" "}
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>{" "}
          <p>Playing basketball is his zen.</p>{" "}
          <p>
            Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> /{" "}
            <a href="">Twitter</a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
