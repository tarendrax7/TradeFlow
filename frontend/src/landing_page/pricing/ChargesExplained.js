import React from "react";

function ChargesExplained() {
  return (
    <div className="container mt-5 mb-5">
      <h3 className="mb-5">Charges explained</h3>

      <section className="mb-5">
        <h5>Securities/Commodities transaction tax</h5>
        <p>
          Tax by the government when transacting on the exchanges. Charged as
          above on both buy and sell sides when trading equity delivery.
          Charged only on selling side when trading intraday or on F&O.
        </p>

        <p>
          When trading at Zerodha, STT/CTT can be a lot more than the
          brokerage we charge. Important to keep a tab.
        </p>
      </section>

      <section className="mb-5">
        <h5>Transaction/Turnover Charges</h5>

        <p>
          Charged by exchanges (NSE, BSE, MCX) on the value of your
          transactions.
        </p>

        <p>
          BSE has revised transaction charges in XC, XD, XT, Z and ZP groups
          to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been
          merged into a new group X w.e.f 01.12.2017)
        </p>

        <p>
          BSE has revised transaction charges in SS and ST groups to
          ₹1,00,000 per crore of gross turnover.
        </p>

        <p>
          BSE has revised transaction charges for group A, B and other
          non-exclusive scrips (non-exclusive scrips from group E, F, FC, G,
          GC, W, T) at ₹375 per crore of turnover on flat rate basis w.e.f.
          December 1, 2022.
        </p>

        <p>
          BSE has revised transaction charges in M, MT, TS and MS groups to
          ₹275 per crore of gross turnover.
        </p>
      </section>

      <section className="mb-5">
        <h5>Call & Trade</h5>

        <p>
          Additional charges of ₹50 per order for orders placed through a
          dealer at Zerodha including auto square off orders.
        </p>
      </section>

      <section className="mb-5">
        <h5>Stamp charges</h5>

        <p>
          Stamp charges by the Government of India as per the Indian Stamp
          Act of 1899 for transacting in instruments on the stock exchanges
          and depositories.
        </p>
      </section>

      <section className="mb-5">
        <h5>NRI brokerage charges</h5>

        <ul>
          <li>
            For a non-PIS account, 0.5% or ₹50 per executed order for equity
            and F&O (whichever is lower).
          </li>

          <li>
            For a PIS account, 0.5% or ₹200 per executed order for equity
            (whichever is lower).
          </li>

          <li>
            ₹500 + GST as yearly account maintenance charges (AMC) charges.
          </li>
        </ul>
      </section>

      <section className="mb-5">
        <h5>Account with debit balance</h5>

        <p>
          If the account is in debit balance, any order placed will be charged
          ₹40 per executed order instead of ₹20 per executed order.
        </p>
      </section>

      <section className="mb-5">
        <h5>Charges for Investor's Protection Fund Trust (IPFT) by NSE</h5>

        <ul>
          <li>
            Equity and Futures - ₹0.01 per crore + GST of the traded value.
          </li>

          <li>
            Options - ₹0.01 per crore + GST traded value (premium value).
          </li>

          <li>
            Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2
            per lakh + GST of premium for Options.
          </li>
        </ul>
      </section>

      <section className="mb-5">
        <h5>Margin Trading Facility (MTF)</h5>

        <ul>
          <li>
            MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount.
          </li>

          <li>
            MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is lower.
          </li>

          <li>
            MTF pledge charge: ₹15 + GST per pledge and unpledge request per
            ISIN.
          </li>
        </ul>
      </section>

      <section className="mb-5">
        <h5>GST</h5>

        <p>
          Tax levied by the government on the services rendered. 18% of
          (brokerage + SEBI charges + transaction charges).
        </p>
      </section>

      <section className="mb-5">
        <h5>SEBI Charges</h5>

        <p>
          Charged at ₹10 per crore + GST by Securities and Exchange Board of
          India for regulating the markets.
        </p>
      </section>

      <section className="mb-5">
        <h5>DP (Depository participant) charges</h5>

        <p>
          ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST)
          is charged on the trading account ledger when stocks are sold,
          irrespective of quantity.
        </p>

        <p>
          Female demat account holders (as first holder) will enjoy a
          discount of ₹0.25 per transaction on the CDSL fee.
        </p>

        <p>
          Debit transactions of mutual funds & bonds get an additional
          discount of ₹0.25 on the CDSL fee.
        </p>
      </section>

      <section className="mb-5">
        <h5>Pledging charges</h5>

        <p>₹30 + GST per pledge request per ISIN.</p>
      </section>

      <section className="mb-5">
        <h5>AMC (Account maintenance charges)</h5>

        <p>
          Free for the first year on all new resident individual accounts.
        </p>

        <p>
          For BSDA demat account: Zero charges if the holding value is less
          than ₹4,00,000.
        </p>

        <p>
          For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly
          (90 days).
        </p>
      </section>

      <section className="mb-5">
        <h5>Corporate action order charges</h5>

        <p>
          ₹20 plus GST will be charged for OFS / buyback / takeover /
          delisting orders placed through Console.
        </p>
      </section>

      <section className="mb-5">
        <h5>Off-market transfer charges</h5>

        <p>₹25 per transaction.</p>
      </section>

      <section className="mb-5">
        <h5>Physical CMR request</h5>

        <p>
          First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST
          for subsequent requests.
        </p>
      </section>

      <section className="mb-5">
        <h5>Payment gateway charges</h5>

        <p>₹9 + GST (Not levied on transfers done via UPI).</p>
      </section>

      <section className="mb-5">
        <h5>Delayed Payment Charges</h5>

        <p>
          Interest is levied at 18% a year or 0.05% per day on the debit
          balance in your trading account.
        </p>
      </section>

      <section className="mb-5">
        <h5>Trading using 3-in-1 account with block functionality</h5>

        <ul>
          <li>Delivery & MTF Brokerage: 0.5% per executed order.</li>
          <li>Intraday Brokerage: 0.05% per executed order.</li>
        </ul>
      </section>

      <div className="border rounded p-4 bg-light mt-5">
        <h5>Disclaimer</h5>

        <p className="mb-0">
          For Delivery based trades, a minimum of ₹0.01 will be charged per
          contract note. Clients who opt to receive physical contract notes
          will be charged ₹20 per contract note plus courier charges.
          Brokerage will not exceed the rates specified by SEBI and the
          exchanges. All statutory and regulatory charges will be levied at
          actuals. Brokerage is also charged on expired, exercised, and
          assigned options contracts.
        </p>
      </div>
    </div>
  );
}

export default ChargesExplained;