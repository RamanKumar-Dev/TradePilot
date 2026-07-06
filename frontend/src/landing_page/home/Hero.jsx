import React from "react";
import homeHero from "../../assets/images/homeHero.svg";

function Hero() {
  return (
    <div className="container p-5">
      <div className="row text-center mb-5">
        <img src={homeHero} alt="homeHero" />
        <h3 className="mt-5 fs-2">Invest in everything </h3>
        <p className="fs-5 mb-5">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <button className="col-2 m-auto btn btn-primary fs-5">
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Hero;
