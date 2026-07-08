import React from "react";
import logo from "../assets/images/logo.svg";

function Footer() {
  return (
    <footer className="border-top mt-5 bg-light">
      <div className="container mt-5">
        <div className="row">
          <div className="col-3">
            <img
              src={logo}
              alt="logo"
              style={{ width: "130px", height: "17px" }}
            />
            <p className="mt-3 fs-6">
              &copy; 2010 - 2026, Zerodha Broking Ltd. All rights reserved.
            </p>
          </div>
          <div className="col-9">
            <div className="row">
              <div className="col-3">
                <h5>Account</h5>
                <a className="footer-link" href="">
                  Open demat account
                </a>
                <a className="footer-link" href="">
                  Minor demat account
                </a>
                <a className="footer-link" href="">
                  NRI demat account
                </a>
                <a className="footer-link" href="">
                  HUF demat account
                </a>
                <a className="footer-link" href="">
                  Commodity
                </a>
                <a className="footer-link" href="">
                  Dematerialisation
                </a>
                <a className="footer-link" href="">
                  Fund transfer
                </a>
                <a className="footer-link" href="">
                  MTF{" "}
                </a>
              </div>
              <div className="col-3">
                <h5>Support</h5>
                <a className="footer-link" href="">
                  Contact us
                </a>
                <a className="footer-link" href="">
                  Support portal
                </a>
                <a className="footer-link" href="">
                  How to file a complaint?
                </a>
                <a className="footer-link" href="">
                  Status of your complaints
                </a>
                <a className="footer-link" href="">
                  Bulletin
                </a>
                <a className="footer-link" href="">
                  Circular
                </a>
                <a className="footer-link" href="">
                  Z-Connect blog
                </a>
                <a className="footer-link" href="">
                  Downloads{" "}
                </a>
              </div>
              <div className="col-3">
                <h5>Company</h5>
                <a className="footer-link" href="">
                  About
                </a>
                <a className="footer-link" href="">
                  Philosophy
                </a>
                <a className="footer-link" href="">
                  Press & media
                </a>
                <a className="footer-link" href="">
                  Careers
                </a>
                <a className="footer-link" href="">
                  Zerodha Cares (CSR)
                </a>
                <a className="footer-link" href="">
                  Zerodha.tech
                </a>
                <a className="footer-link" href="">
                  Open source
                </a>
                <a className="footer-link" href="">
                  Referral program{" "}
                </a>
              </div>
              <div className="col-3">
                <h5>Quick Links</h5>
                <a className="footer-link" href="">
                  {" "}
                  Upcoming IPOs
                </a>
                <a className="footer-link" href="">
                  Brokerage charges
                </a>
                <a className="footer-link" href="">
                  Market holidays
                </a>
                <a className="footer-link" href="">
                  Economic calendar
                </a>
                <a className="footer-link" href="">
                  Calculators
                </a>
                <a className="footer-link" href="">
                  Markets
                </a>
                <a className="footer-link" href="">
                  Sectors
                </a>
                <a className="footer-link" href="">
                  Gift Nifty{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 footer-bottom-text">
          <p  style={{fontSize: "smaller"}}>
            Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI - SEBI
            Registration no.: INZ000031633 CDSL/NSDL: Depository services
            through Zerodha Broking Ltd. - SEBI Registration no.: IN-DP-431-2019
            Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross,
            Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase,
            Bengaluru - 560078, Karnataka, India. For any complaints pertaining
            to securities broking please write to complaints@zerodha.com, for DP
            related to dp@zerodha.com. Please ensure you carefully read the Risk
            Disclosure Document as prescribed by SEBI | ICF
          </p>
          <p  style={{fontSize: "smaller"}}>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances{" "}
          </p>
          <p  style={{fontSize: "smaller"}}>
            Smart Online Dispute Resolution | Grievances Redressal Mechanism
          </p>
          <p  style={{fontSize: "smaller"}}>
            {" "}
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.{" "}
          </p>
          <p style={{fontSize: "smaller"}}>
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>
          <p style={{fontSize: "smaller"}}>
            India's largest broker based on networth as per NSE. NSE broker
            factsheet
          </p>
          <p style={{fontSize: "smaller"}}>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers/depository
            participants. Receive information of your transactions directly from
            Exchange/Depositories on your mobile/email at the end of the day.
            Issued in the interest of investors. KYC is one time exercise while
            dealing in securities markets - once KYC is done through a SEBI
            registered intermediary (broker, DP, Mutual Fund etc.), you need not
            undergo the same process again when you approach another
            intermediary." Dear Investor, if you are subscribing to an IPO,
            there is no need to issue a cheque. Please write the Bank account
            number and sign the IPO application form to authorize your bank to
            make payment in case of allotment. In case of non allotment the
            funds will remain in your bank account. As a business we don't give
            stock tips, and have not authorized anyone to trade on behalf of
            others. If you find anyone claiming to be part of Zerodha and
            offering such services, please create a ticket here.{" "}
          </p>
          <p style={{fontSize: "smaller"}}>
            *Customers availing insurance advisory services offered by Ditto
            (Tacterial Consulting Private Limited | IRDAI Registered Corporate
            Agent (Composite) License No CA0738) will not have access to the
            exchange investor grievance redressal forum, SEBI SCORES/ODR, or
            arbitration mechanism for such products.{" "}
          </p>
          <p style={{fontSize: "smaller"}}>
            Fixed deposit products offered on this platform are third-party
            products (TPP) and are not Exchange traded products. These are
            offered through Blostem Fintech Private Limited. Zerodha Broking
            Limited (SEBI Registration No.: INZ000031633) is acting solely as a
            distributor for these products. Any disputes arising with respect to
            such distribution activity will not have access to SEBI SCORES/ODR,
            Exchange Investor Grievance Redressal Forum, or Arbitration
            mechanism. Fixed deposits are regulated by the Reserve Bank of India
            (RBI).
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
