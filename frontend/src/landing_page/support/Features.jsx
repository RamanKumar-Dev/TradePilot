import React from "react";

function Features() {
  return (
    <div className="features-container">
      <div className="row">
        <div className="col-3">
          <h5>
            <i class="fa-solid fa-circle-plus fs-6"></i> Account Opening
          </h5>
          <ul>
            <li>
              <a href="">Resident Individual</a>
            </li>
            <li>
              <a href="">Minor</a>
            </li>
            <li>
              <a href="">Non Resident Indian (NRI)</a>
            </li>
            <li>
              <a href="">Company, Partnership, HUF and LLP</a>
            </li>
            <li>
              <a href="">Glossary</a>
            </li>
          </ul>
        </div>
        <div className="col-5">
          <h5>
            <i class="fa-regular fa-circle-user"></i> Your Zerodha Account
          </h5>
          <ul>
            <li>
              <a href="">Your Profile</a>
            </li>
            <li>
              <a href="">Account modification</a>
            </li>
            <li>
              <a href="">
                Client Master Report (CMR) and Depository Participant (DP)
              </a>
            </li>
            <li>
              <a href="">Nomination</a>
            </li>
            <li>
              <a href="">Transfer and conversion of securities</a>
            </li>
          </ul>
        </div>
        <div className="col-4">
          <h5>
            <i class="fa-brands fa-xing"></i> Kite
          </h5>
          <ul>
            <li>
              <a href="">IPO</a>
            </li>
            <li>
              <a href="">Trading FAQs</a>
            </li>
            <li>
              <a href="">Margin Trading Facility (MTF) and Margins</a>
            </li>
            <li>
              <a href="">Charts and orders</a>
            </li>
            <li>
              <a href="">Alerts and Nudges</a>
            </li>
            <li>
              <a href="">General</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="row">
        <div className="col-3">
          <h5>
            <i class="fa-solid fa-indian-rupee-sign"></i> Funds
          </h5>
          <ul>
            <li>
              <a href="">Add Money</a>
            </li>
            <li>
              <a href="">Withdraw Money</a>
            </li>
            <li>
              <a href="">Add Bank Accounts</a>
            </li>
            <li>
              <a href="">eMandates</a>
            </li>
          </ul>
        </div>
        <div className="col-5">
          <h5>
            <i class="fa-solid fa-terminal"></i> Console
          </h5>
          <ul>
            <li>
              <a href="">Portfolio</a>
            </li>
            <li>
              <a href="">Corporate actions</a>
            </li>
            <li>
              <a href="">Funds statements</a>
            </li>
            <li>
              <a href="">Reports </a>
            </li>
            <li>
              <a href="">Profile</a>
            </li>
            <li>
              <a href="">Segments</a>
            </li>
          </ul>
        </div>
        <div className="col-4">
          <h5>
            <i class="fa-solid fa-coins"></i> Coin
          </h5>
          <ul>
            <li>
              <a href="">Mutual funds</a>
            </li>
            <li>
              <a href="">National Pension Scheme (NPS)</a>
            </li>
            <li>
              <a href="">Fixed Deposit(FD)</a>
            </li>
            <li>
              <a href="">Features on coin</a>
            </li>
            <li>
              <a href="">Payments and Orders</a>
            </li>
            <li>
              <a href="">General</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Features;
