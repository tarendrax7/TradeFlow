import React, { useState } from "react";
import axios from "axios";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 const handleSignup = async () => {
  if (!name || !email || !password) {
    alert("Please fill all the fields.");
    return;
  }

  try {
    const response = await axios.post("https://tradeflow-2-gkl1.onrender.com/signup",  {
      name,
      email,
      password,
    });

    alert(response.data.message);

    setName("");
    setEmail("");
    setPassword("");
  } catch (error) {
    alert(error.response?.data?.message || "Signup Failed");
  }
};

  return (
  <div className="container mt-5">
    <div className="row justify-content-center">
      <div className="col-md-5">
        <div className="card shadow p-4">
          <h2 className="text-center mb-4">Create Account</h2>

          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            className="btn btn-primary w-100"
            onClick={handleSignup}
          >
            Signup
          </button>
        </div>
      </div>
    </div>
  </div>
);
}

 
export default Signup;

