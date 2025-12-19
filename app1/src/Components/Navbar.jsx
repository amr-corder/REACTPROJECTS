import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
    <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? "active" : ""} 
            onClick={() => setIsOpen(false)}
          >
          <h2>START FRAMEWORK</h2> 
          </NavLink>
      <div className="nav-links">
        <div className={`links ${isOpen ? "open" : ""}`}>
          <NavLink 
            to="/about" 
            className={({ isActive }) => isActive ? "active" : ""} 
            onClick={() => setIsOpen(false)}
          >
            About
          </NavLink>
          <NavLink 
            to="/portfolio" 
            className={({ isActive }) => isActive ? "active" : ""} 
            onClick={() => setIsOpen(false)}
          >
            Portfolio
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => isActive ? "active" : ""} 
            onClick={() => setIsOpen(false)}
          >
            Contact
          </NavLink>
        </div>
        <button 
          className="hamburger" 
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>
    </nav>
  );
}