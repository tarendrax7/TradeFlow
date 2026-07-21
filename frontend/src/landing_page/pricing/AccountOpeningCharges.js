import React from "react";

function AccountOpeningCharges() {
  return (
    <div className="container mt-5">
      <h3 className="mb-4">Charges for account opening</h3>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Type of account</th>
            <th>Charges</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Individual account</td>
            <td>Free</td>
          </tr>

          <tr>
            <td>Minor account</td>
            <td>Free</td>
          </tr>

          <tr>
            <td>NRI account</td>
            <td>₹500</td>
          </tr>

          <tr>
            <td>HUF account</td>
            <td>Free (online) / ₹500 (offline)</td>
          </tr>

          <tr>
            <td>Partnership, LLP & Corporate account</td>
            <td>₹500</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AccountOpeningCharges;