import React, { useState, useEffect } from "react";
import axios from 'axios';
import { API_URL } from "../config";
import { VerticalGraph } from "./VerticalGraph";
// import { holdings } from "../data/data";

function Holdings() {

  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/allHoldings`).then((res) => {
      // console.log("Holdings API response:", res.data);
      setAllHoldings(res.data);
    })
      .catch((err) => {
        console.error("Failed to fetch holdings:", err);
      });
  }, []);


  // const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  const labels = allHoldings.map((subArray) => subArray['name']);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ]
  }

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>

          <tbody>
            {allHoldings.map((stock) => {
              const qty = Number(stock.qty ?? 0);
              const avg = Number(stock.avg ?? 0);
              const price = Number(stock.price ?? 0);
              const currVal = price * qty;
              const pnl = currVal - avg * qty;

              return (
                <tr key={stock._id}>
                  <td>{stock.name}</td>
                  <td>{qty}</td>
                  <td>{avg.toFixed(2)}</td>
                  <td>{price.toFixed(2)}</td>
                  <td>{currVal.toFixed(2)}</td>
                  <td className={pnl >= 0 ? "profit" : "loss"}>
                    {pnl.toFixed(2)}
                  </td>
                  <td>{stock.net}</td>
                  <td>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
      <VerticalGraph data={data} />
    </>
  );
}

export default Holdings;
