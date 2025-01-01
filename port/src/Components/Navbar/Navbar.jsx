import React from 'react'
import "./Navbar.css"
const Navbar = () => {
  return (
    <>
   <div className="main">
      <div className="navbar-container">
        <nav className="navbar">
          <div className="logo">
            <a href="#home">logo</a>
          </div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#developers">Developers</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </div>
    </>
  )
}

export default Navbar
