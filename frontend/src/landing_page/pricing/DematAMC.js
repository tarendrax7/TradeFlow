import React from "react";

function DematAMC() {
  return (
    <div className="container mt-5">
      <h3>Demat AMC (Annual Maintenance Charge)</h3>

      <p>Free for first year *</p>

      <h5 className="mt-4">
        From second year onwards, for BSDA accounts:
      </h5>

      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            <th>Value of holdings</th>
            <th>AMC</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Up to ₹4 lakh</td>
            <td>Free</td>
          </tr>

          <tr>
            <td>₹4 lakh – ₹10 lakh</td>
            <td>₹100/year + 18% GST</td>
          </tr>

          <tr>
            <td>Above ₹10 lakh</td>
            <td>₹300/year + 18% GST</td>
          </tr>
        </tbody>
      </table>

      <p>
        For a non-BSDA account, AMC is ₹300 per year + 18% GST,
        regardless of holdings value, charged quarterly.
      </p>
    </div>
  );
}

export default DematAMC;