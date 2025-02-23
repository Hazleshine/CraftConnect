// src/components/Header.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../auth";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(navigate);
  };

  return (
    <header className="header">
      <div className="logo">
        <a href="/dashboard">CareerCraft AI</a>
        </div>
      <nav className="nav">
        <ul>
          <li><a href="/user-details">Profile</a></li>
          <li><a href="/career-guidance">Career Guidance</a></li>
          <li><a href="/job-market-analytics">Job Market Analytics</a></li>
          <li><a href="/emotional-intelligence-hub">Emotional Intelligence Hub</a></li>
          <li><button onClick={handleLogout}>Logout</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;