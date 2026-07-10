import React from "react";
import zerodhaFundhouse from "../../assets/images/zerodhaFundhouse.png";
import sensibullLogo from "../../assets/images/sensibullLogo.svg";
import tijoriLogo from "../../assets/images/tijoriLogo.svg";
import streakLogo from "../../assets/images/streakLogo.png";
import smallcaseLogo from "../../assets/images/smallcaseLogo.png";
import dittoLogo from "../../assets/images/dittoLogo.png";

function Universe() {
  return (
    <div className="container p-5 text-center">
      <div>
        <p className="fs-5">
          Want to know more about our technology stack? Check out the
          Zerodha.tech blog.
        </p>
      </div>
      <div className="universe-top-space">
        <h3>The Zerodha Universe</h3>
        <p className="fs-6 mt-4">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>

      <div className="mb-5">
        <div className="row mt-5">
          <div className="col-4">
            <img src={zerodhaFundhouse} alt="" className="logo" />
            <br />
            <span className="universe-text">
              Our asset management venture
              <br />
              that is creating simple and transparent index
              <br />
              funds to help you save for your goals.
            </span>
          </div>
          <div className="col-4">
            <img src={sensibullLogo} alt="" className="logo" />
            <br />
            <span className="universe-text">
              Options trading platform that lets you
              <br />
              create strategies, analyze positions, and examine
              <br />
              data points like open interest, FII/DII, and more.
            </span>
          </div>
          <div className="col-4">
            <img src={tijoriLogo} alt="" className="logo" />
            <br />
            <span className="universe-text">
              Investment research platform
              <br />
              that offers detailed insights on stocks,
              <br />
              sectors, supply chains, and more.
            </span>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-4">
            <img src={streakLogo} alt="" className="logo" />
            <br />
            <span className="universe-text">
              Systematic trading platform
              <br />
              that allows you to create and backtest
              <br />
              strategies without coding.
            </span>
          </div>
          <div className="col-4">
            <img src={smallcaseLogo} alt="" className="logo" />
            <br />
            <span className="universe-text">
              Thematic investing platform
              <br />
              that helps you invest in diversified
              <br />
              baskets of stocks on ETFs.
            </span>
          </div>
          <div className="col-4">
            <img src={dittoLogo} alt="" className="logo" />
            <br />
            <span className="universe-text">
              Personalized advice on life
              <br />
              and health insurance. No spam
              <br />
              and no mis-selling.
            </span>
          </div>
        </div>
      </div>
      <button className="col-2 m-auto btn btn-primary fs-5">Sign up for free</button>
    </div>
  );
}

export default Universe;
