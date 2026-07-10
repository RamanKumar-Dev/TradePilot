import React, { useState } from "react";
import PricingData from "./PricingData";

function Brokerage() {
  let [activeTab, setActiveTab] = useState("equity");
  const selectedData = PricingData[activeTab];
  console.log(selectedData);
  return (
    <div className="container mt-5 mb-5">
      <ul className="nav nav-tabs border-bottom mb-4">
        <li className="nav-item">
          <button
            className={`btn nav-link ${activeTab === "equity" ? "active" : ""}`}
            onClick={() => setActiveTab("equity")}
          >
            Equity
          </button>
        </li>

        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "currency" ? "active" : ""}`}
            onClick={() => setActiveTab("currency")}
          >
            Currency
          </button>
        </li>

        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "commodity" ? "active" : ""}`}
            onClick={() => setActiveTab("commodity")}
          >
            Commodity
          </button>
        </li>
      </ul>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th></th>

            {selectedData.headers.map((header, index) => (
              <th key={index} className="Brokerage-text">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {selectedData.rows.map((row, index) => (
            <tr key={index} className="Brokerage-text">
              <td>{row.charge}</td>

              {row.values.map((value, i) => (
                <td key={i}>
                  {Array.isArray(value) ? (
                    <ul className="mb-0 ps-3">
                      {value.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    value.split("\n").map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Brokerage;
