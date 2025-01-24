import React, { useState } from "react";
import "./Login.css";

const Login = ({ setToken }) => {
  const [activeTab, setActiveTab] = useState("ADSW");
  const [isVisible, setIsVisible] = useState(true);

  const tabs = ["Care Taker", "Warden", "ADSW", "DSW"];

  const handleTabChange = (tab) => {
    setIsVisible(false); // Start hiding
    setTimeout(() => {
      setActiveTab(tab); // Change the active tab after hiding
      setIsVisible(true); // Show the new tab
    }, 300); // Match this duration to the animation duration in CSS
  };

  const handleLogin = (event) => {
    event.preventDefault(); // Prevent page reload
    setToken("a"); // Simulate successful login
  };

  return (
    <div className="a">
      <div className="tab-buttons">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? "active" : ""}`}
            onClick={() => handleTabChange(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className={`login-container ${isVisible ? "fade-in" : "fade-out"}`}>
        <h2>OLMS</h2>
        <h2>{activeTab} Login</h2>
        <div className="login-form">
          <form className="hi" onSubmit={handleLogin}>
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" placeholder="user id" />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="password" />
            </div>
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
