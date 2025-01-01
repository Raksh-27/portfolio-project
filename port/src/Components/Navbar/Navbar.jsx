import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [sidebarActive, setSidebarActive] = useState(false);

  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  return (
    <nav>
      <div className="navbar-container">
        <div className="logo">
          <a href="#home">Logo</a>
        </div>
        <div className={`nav-links ${sidebarActive ? "show" : ""}`}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#pricing">Pricing</a>
          <a href="#developers">Developers</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="hamburger" onClick={toggleSidebar}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        {sidebarActive && <div className="overlay" onClick={toggleSidebar}></div>}
      </div>
    </nav>
  );
};

export default Navbar;
