import React from "react";
import ecosystem from "../../assets/images/ecosystem.png";

function Stats() {
  return (
    <div className="container p-5">
      <div className="row ">
        <div className="col-6">
          <h3 className="mb-5">Trust with confidence</h3>
          <h4>Customer-first always </h4>
          <p>
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments, making us India’s largest broker;
            contributing to 15% of daily retail exchange volumes in India.
          </p>
          <h4 className="mt-5">No spam or gimmicks </h4>
          <p>
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like. Our
            philosophies.
          </p>
          <h4 className="mt-5">The Zerodha universe </h4>
          <p>
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h4 className="mt-5">Do better with money </h4>
          <p>
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col-6 text-center">
          <img src={ecosystem} alt="ecosystem" style={{ width: "100%", height: "95%"}} />
          <a href="/product" className="stats-link me-5">
            Explore our products <i className="fa-solid fa-arrow-right text-primary"></i>
          </a>
          <a href="/product" className="stats-link">
            Try Kite demo <i className="fa-solid fa-arrow-right text-primary"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Stats;
