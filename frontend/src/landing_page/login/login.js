import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please fill all the fields.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3002/login",
        {
          email,
          password,
        }
      );

      console.log("Login Response:", response.data);

      // Login Successful
      if (response.data.token) {
        const token = response.data.token;

        // Save JWT Token
        localStorage.setItem("token", token);

        console.log("Saved Token:", token);

        // Dashboard URL
        const dashboardURL = `https://trade-flow-n98f-one.vercel.app?token=${token}`;
        console.log("Redirect URL:", dashboardURL);

        alert(response.data.message);

        // Clear Form
        setEmail("");
        setPassword("");

        // Redirect to Dashboard
        window.location.href = dashboardURL;
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Login Error:", error);

      alert(error.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card shadow p-4">
            <h2 className="text-center mb-4">Login</h2>

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
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;