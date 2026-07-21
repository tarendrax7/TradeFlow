import React, { useState } from "react";

function Brokerage() {
  const [activeTab, setActiveTab] = useState("equity");

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Brokerage Charges</h2>

      {/* Tabs */}
      <ul className="nav nav-tabs justify-content-center">
        <li className="nav-item">
          <button
            className={`nav-link ${
              activeTab === "equity" ? "active" : ""
            }`}
            onClick={() => setActiveTab("equity")}
          >
            Equity
          </button>
        </li>

        <li className="nav-item">
          <button
            className={`nav-link ${
              activeTab === "currency" ? "active" : ""
            }`}
            onClick={() => setActiveTab("currency")}
          >
            Currency
          </button>
        </li>

        <li className="nav-item">
          <button
            className={`nav-link ${
              activeTab === "commodity" ? "active" : ""
            }`}
            onClick={() => setActiveTab("commodity")}
          >
            Commodity
          </button>
        </li>
      </ul>

      {/* EQUITY */}
      {activeTab === "equity" && (
        <>
          <table className="table table-bordered mt-4">
            <thead>
              <tr>
                <th></th>
                <th>Equity Delivery</th>
                <th>Equity Intraday</th>
                <th>F&O Futures</th>
                <th>F&O Options</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Brokerage</td>
                <td>Zero Brokerage</td>
                <td>0.03% or ₹20</td>
                <td>0.03% or ₹20</td>
                <td>₹20 per order</td>
              </tr>

              <tr>
                <td>STT/CTT</td>
                <td>0.1%</td>
                <td>0.025%</td>
                <td>0.02%</td>
                <td>0.1%</td>
              </tr>

              <tr>
                <td>Transaction charges</td>
                <td>0.00322%</td>
                <td>0.00322%</td>
                <td>0.00188%</td>
                <td>0.0495%</td>
              </tr>

              <tr>
                <td>GST</td>
                <td>18%</td>
                <td>18%</td>
                <td>18%</td>
                <td>18%</td>
              </tr>

              <tr>
                <td>SEBI charges</td>
                <td>₹10/crore</td>
                <td>₹10/crore</td>
                <td>₹10/crore</td>
                <td>₹10/crore</td>
              </tr>

              <tr>
                <td>Stamp charges</td>
                <td>0.015%</td>
                <td>0.003%</td>
                <td>0.002%</td>
                <td>0.003%</td>
              </tr>
            </tbody>
          </table>

          <div className="text-center mt-4">
            <a href="/">Calculate your costs upfront using our brokerage calculator</a>
          </div>
        </>
      )}

      {/* CURRENCY */}
      {activeTab === "currency" && (
        <>
          <table className="table table-bordered mt-4">
            <thead>
              <tr>
                <th></th>
                <th>Currency Futures</th>
                <th>Currency Options</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Brokerage</td>
                <td>0.03% or ₹20/executed order whichever is lower</td>
                <td>₹20/executed order</td>
              </tr>

              <tr>
                <td>STT/CTT</td>
                <td>No STT</td>
                <td>No STT</td>
              </tr>

              <tr>
                <td>Transaction Charges</td>
                <td>
                  NSE: 0.00035%
                  <br />
                  BSE: 0.00045%
                </td>
                <td>
                  NSE: 0.0311%
                  <br />
                  BSE: 0.001%
                </td>
              </tr>

              <tr>
                <td>GST</td>
                <td>
                  18% on (brokerage + SEBI charges + transaction charges)
                </td>
                <td>
                  18% on (brokerage + SEBI charges + transaction charges)
                </td>
              </tr>

              <tr>
                <td>SEBI Charges</td>
                <td>₹10 / crore</td>
                <td>₹10 / crore</td>
              </tr>

              <tr>
                <td>Stamp Charges</td>
                <td>0.0001% or ₹10 / crore on buy side</td>
                <td>0.0001% or ₹10 / crore on buy side</td>
              </tr>
            </tbody>
          </table>

          <div className="text-center mt-4">
            <a href="/">Calculate your costs upfront using our brokerage calculator</a>
          </div>
        </>
      )}

      {/* COMMODITY */}
      {activeTab === "commodity" && (
        <>
          <table className="table table-bordered mt-4">
            <thead>
              <tr>
                <th></th>
                <th>Commodity Futures</th>
                <th>Commodity Options</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Brokerage</td>
                <td>0.03% or ₹20/executed order whichever is lower</td>
                <td>₹20/executed order</td>
              </tr>

              <tr>
                <td>STT/CTT</td>
                <td>0.01% on sell side (Non-Agri)</td>
                <td>0.05% on sell side</td>
              </tr>

              <tr>
                <td>Transaction Charges</td>
                <td>
                  MCX: 0.0021%
                  <br />
                  NSE: 0.0001%
                </td>
                <td>
                  MCX: 0.0418%
                  <br />
                  NSE: 0.001%
                </td>
              </tr>

              <tr>
                <td>GST</td>
                <td>
                  18% on (brokerage + SEBI charges + transaction charges)
                </td>
                <td>
                  18% on (brokerage + SEBI charges + transaction charges)
                </td>
              </tr>

              <tr>
                <td>SEBI Charges</td>
                <td>
                  Agri: ₹1 / crore
                  <br />
                  Non-agri: ₹10 / crore
                </td>
                <td>₹10 / crore</td>
              </tr>

              <tr>
                <td>Stamp Charges</td>
                <td>0.002% or ₹200 / crore on buy side</td>
                <td>0.003% or ₹300 / crore on buy side</td>
              </tr>
            </tbody>
          </table>

          <div className="text-center mt-4" style={{ textDecoration: "none" }}>
            <a href="/" ><h3>Calculate your costs upfront using our brokerage calculator</h3></a>
          </div>
        </>
      )}
    </div>
  );
}

export default Brokerage;