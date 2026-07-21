import React from "react";

function CreateTicket() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">

        {/* LEFT SECTION */}
        <div className="col-lg-8">

          <div className="accordion" id="ticketAccordion">

            {/* Account Opening */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#accountOpening"
                >
                  <i className="fa fa-plus-circle me-3"></i>
                  Account Opening
                </button>
              </h2>

              <div
                id="accountOpening"
                className="accordion-collapse collapse"
                data-bs-parent="#ticketAccordion"
              >
                <div className="accordion-body">
                  <a href="#"style={{textDecoration:"none"}}>Resident Individual</a><br />
                  <a href="#"style={{textDecoration:"none"}}>Minor</a><br />
                  <a href="#"style={{textDecoration:"none"}}>NRI</a><br />
                  <a href="#"style={{textDecoration:"none"}}>Company, Partnership, HUF and LLP</a><br />
                  <a href="#"style={{textDecoration:"none"}}>Glossary</a>
                </div>
              </div>
            </div>

            {/* Your Account */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#account"
                >
                  <i className="fa fa-user-circle me-3"></i>
                  Your Zerodha Account
                </button>
              </h2>

              <div
                id="account"
                className="accordion-collapse collapse"
                data-bs-parent="#ticketAccordion"
              >
                <div className="accordion-body">
                  <a href="#" style={{textDecoration:"none"}}>Your Profile</a><br />
                  <a href="#" style={{textDecoration:"none"}}>Account Modification</a><br />
                  <a href="#" style={{textDecoration:"none"}}>CMR & DP</a><br />
                  <a href="#" style={{textDecoration:"none"}}>Nomination</a><br />
                  <a href="#" style={{textDecoration:"none"}}>Transfer Securities</a>
                </div>
              </div>
            </div>

            {/* Kite */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#kite"
                >
                  <i className="fa fa-line-chart me-3"></i>
                  Kite
                </button>
              </h2>

              <div
                id="kite"
                className="accordion-collapse collapse"
                data-bs-parent="#ticketAccordion"
              >
                <div className="accordion-body">
                  <a href="#" style={{textDecoration:"none"}}>IPO</a><br />
                  <a href="#" style={{textDecoration:"none"}}>Trading FAQ</a><br />
                  <a href="#" style={{textDecoration:"none"}}>MTF & Margins</a><br />
                  <a href="#" style={{textDecoration:"none"}}>Orders & Trades</a><br />
                  <a href="#" style={{textDecoration:"none"}}>Alerts & Nudges</a><br />
                  <a href="#" style={{textDecoration:"none"}}>General</a>
                </div>
              </div>
            </div>

            {/* Funds */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#funds"
                >
                  <i className="fa fa-inr me-3"></i>
                  Funds
                </button>
              </h2>

              <div
                id="funds"
                className="accordion-collapse collapse"
                data-bs-parent="#ticketAccordion"
              >
                <div className="accordion-body">
                  <a href="#"style={{textDecoration:"none"}}>Add Money</a><br />
                  <a href="#" style={{textDecoration:"none"}}>Withdraw Money</a><br />
                  <a href="#" style={{textDecoration:"none"}}>Bank Account</a><br />
                  <a href="#" style={{textDecoration:"none"}}>eMandates</a>
                </div>
              </div>
            </div>

            {/* Console */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#console"
                >
                  <i className="fa fa-circle-o-notch me-3"></i>
                  Console
                </button>
              </h2>

              <div
                id="console"
                className="accordion-collapse collapse"
                data-bs-parent="#ticketAccordion"
              >
                <div className="accordion-body">
                  <a href="#"style={{textDecoration:"none"}}>Portfolio</a><br />
                  <a href="#" style={{textDecoration:"none"}}>Corporate Actions</a><br />
                  <a href="#" style={{textDecoration:"none"}}>Reports</a><br />
                  <a href="#" style={{textDecoration:"none"}}>Funds Statement</a><br />
                  <a href="#" style={{textDecoration:"none"}}>Segments</a>
                </div>
              </div>
            </div>

            {/* Coin */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#coin"
                >
                  <i className="fa fa-dot-circle-o me-3"></i>
                  Coin
                </button>
              </h2>

              <div
                id="coin"
                className="accordion-collapse collapse"
                data-bs-parent="#ticketAccordion"
              >
                <div className="accordion-body">
                  <a href="#" style={{textDecoration:"none"}}>Mutual Funds</a><br />
                  <a href="#"style={{textDecoration:"none"}}>NPS</a><br />
                  <a href="#" style={{textDecoration:"none"}}>Fixed Deposits</a><br />
                  <a href="#" style={{textDecoration:"none"}}>Features on Coin</a><br />
                  <a href="#" style={{textDecoration:"none"}}>Payments & Orders</a>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="col-lg-4">

          <div
            className="p-4 mb-4"
            style={{
              background: "#fff8e7",
              borderLeft: "4px solid orange",
            }}
          >
            <ul>
              <li>
                Scheduled maintenance downtime for Coin
              </li>
              <li>
                Surveillance measure on scrips - June 2026
              </li>
            </ul>
          </div>

          <div className="border">
            <h4 className="p-3 bg-light">Quick Links</h4>

            <div className="list-group list-group-flush">
              <a href="#" className="list-group-item">
                1. Track account opening
              </a>

              <a href="#" className="list-group-item">
                2. Track segment activation
              </a>

              <a href="#" className="list-group-item">
                3. Intraday margins
              </a>

              <a href="#" className="list-group-item">
                4. Kite user manual
              </a>

              <a href="#" className="list-group-item">
                5. Learn how to create a ticket
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default CreateTicket;