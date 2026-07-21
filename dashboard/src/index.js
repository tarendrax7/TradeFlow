import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";

// ---------------------------
// Get JWT token from URL
// ---------------------------
const params = new URLSearchParams(window.location.search);
const token = params.get("token");

if (token) {
  // Save token in Dashboard localStorage
  localStorage.setItem("token", token);

  console.log("Token Saved:", localStorage.getItem("token"));

  // Remove ?token=... from URL
  window.history.replaceState({}, document.title, "/");
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);