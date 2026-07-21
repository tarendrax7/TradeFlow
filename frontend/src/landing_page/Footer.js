import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(240,240,240)" }}>
      <div className="container border-top mt-5">
        
        {/* Top Footer */}
        <div className="row mt-5">
          
          <div className="col">
            <img
              src="media/images/logo.svg"
              style={{ width: "50%" }}
              alt="logo"
            />

            <p className="mt-3">
              &copy; 2010 - 2026, Zerodha Broking Ltd.
              <br />
              All rights reserved.
            </p>
          </div>

          {/* Company */}
          <div className="col">
            <p style={{ fontWeight: "600", fontSize: "18px" }}>Company</p>

            <a href="#" style={linkStyle}>About</a><br />
            <a href="#" style={linkStyle}>Philosophy</a><br />
            <a href="#" style={linkStyle}>Press & media</a><br />
            <a href="#" style={linkStyle}>Careers</a><br />
            <a href="#" style={linkStyle}>Zerodha Cares (CSR)</a><br />
            <a href="#" style={linkStyle}>Zerodha.tech</a><br />
            <a href="#" style={linkStyle}>Open source</a><br />
            <a href="#" style={linkStyle}>Referral program</a>
          </div>

          {/* Support */}
          <div className="col">
            <p style={{ fontWeight: "600", fontSize: "18px" }}>Support</p>

            <a href="#" style={linkStyle}>Contact us</a><br />
            <a href="#" style={linkStyle}>Support portal</a><br />
            <a href="#" style={linkStyle}>How to file a complaint?</a><br />
            <a href="#" style={linkStyle}>Status of your complaints</a><br />
            <a href="#" style={linkStyle}>Bulletin</a><br />
            <a href="#" style={linkStyle}>Circular</a><br />
            <a href="#" style={linkStyle}>Z-Connect blog</a><br />
            <a href="#" style={linkStyle}>Downloads</a>
          </div>

          {/* Account */}
          <div className="col">
            <p style={{ fontWeight: "600", fontSize: "18px" }}>Account</p>

            <a href="#" style={linkStyle}>Open demat account</a><br />
            <a href="#" style={linkStyle}>Minor demat account</a><br />
            <a href="#" style={linkStyle}>NRI demat account</a><br />
            <a href="#" style={linkStyle}>HUF demat account</a><br />
            <a href="#" style={linkStyle}>Commodity</a><br />
            <a href="#" style={linkStyle}>Dematerialisation</a><br />
            <a href="#" style={linkStyle}>Fund transfer</a><br />
            <a href="#" style={linkStyle}>MTF</a>
          </div>

          {/* Quick Links */}
          <div className="col">
            <p style={{ fontWeight: "600", fontSize: "18px" }}>
              Quick links
            </p>

            <a href="#" style={linkStyle}>Upcoming IPOs</a><br />
            <a href="#" style={linkStyle}>Brokerage charges</a><br />
            <a href="#" style={linkStyle}>Market holidays</a><br />
            <a href="#" style={linkStyle}>Economic calendar</a><br />
            <a href="#" style={linkStyle}>Calculators</a><br />
            <a href="#" style={linkStyle}>Markets</a><br />
            <a href="#" style={linkStyle}>Sectors</a><br />
            <a href="#" style={linkStyle}>Gift Nifty</a>
          </div>
        </div>

        {/* Large Text */}
        <div
          className="mt-5 text-muted"
          style={{ fontSize: "14px", lineHeight: "1.8" }}
        >
          <p>Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>

          <p>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>

          <p>Smart Online Dispute Resolution | Grievances Redressal Mechanism</p>

          <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>

          <p>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>

          <p>India's largest broker based on networth as per NSE. NSE broker factsheet</p>

          <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers/depository participants. Receive information of your transactions directly from Exchange/Depositories on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>

          <p>*Customers availing insurance advisory services offered by Ditto (Tacterial Consulting Private Limited | IRDAI Registered Corporate Agent (Composite) License No CA0738) will not have access to the exchange investor grievance redressal forum, SEBI SCORES/ODR, or arbitration mechanism for such products.</p>

          <p>Fixed deposit products offered on this platform are third-party products (TPP) and are not Exchange traded products. These are offered through Blostem Fintech Private Limited. Zerodha Broking Limited (SEBI Registration No.: INZ000031633) is acting solely as a distributor for these products. Any disputes arising with respect to such distribution activity will not have access to SEBI SCORES/ODR, Exchange Investor Grievance Redressal Forum, or Arbitration mechanism. Fixed deposits are regulated by the Reserve Bank of India (RBI).</p>
        </div>

        {/* Bottom Links */}
        <div className="footer-graveyard-links text-center mt-4 pb-4">
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "20px",
            }}
          >
            <li>
              <a
                rel="nofollow"
                href="https://nseindia.com"
                style={bottomLink}
              >
                NSE
              </a>
            </li>

            <li>
              <a
                rel="nofollow"
                href="https://bseindia.com"
                style={bottomLink}
              >
                BSE
              </a>
            </li>

            <li>
              <a
                rel="nofollow"
                href="https://mcxindia.com"
                style={bottomLink}
              >
                MCX
              </a>
            </li>

            <li>
              <a href="#" style={bottomLink}>
                Terms & conditions
              </a>
            </li>

            <li>
              <a href="#" style={bottomLink}>
                Policies & procedures
              </a>
            </li>

            <li>
              <a href="#" style={bottomLink}>
                Privacy policy
              </a>
            </li>

            <li>
              <a href="#" style={bottomLink}>
                Disclosure
              </a>
            </li>

            <li>
              <a href="#" style={bottomLink}>
                For investor's attention
              </a>
            </li>

            <li>
              <a href="#" style={bottomLink}>
                Investor charter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

/* Styles */

const linkStyle = {
  textDecoration: "none",
  color: "#424242",
  lineHeight: "2",
  fontSize: "16px",
};

const bottomLink = {
  textDecoration: "none",
  color: "#387ed1",
  fontSize: "14px",
};

export default Footer;