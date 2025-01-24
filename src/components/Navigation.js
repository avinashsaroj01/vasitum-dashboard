import React, { useState } from "react";
import "./Navigation.css";
import {
  FaHome,
  FaCalendarAlt,
  FaUsers,
  FaBuilding,
  FaCog,
  FaLifeRing,
  FaBars, // Icon for the hamburger menu
  FaTimes, // Icon for closing the menu
} from "react-icons/fa";

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close menu when clicking outside
  const handleClickOutside = (e) => {
    if (
      menuOpen &&
      !e.target.closest(".navigation") &&
      !e.target.closest(".menu-toggle")
    ) {
      setMenuOpen(false);
    }
  };

  // Add click outside listener
  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <>
      {/* Hamburger Menu Toggle Button */}
      <div className="menu-toggle" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navigation Menu */}
      <nav className={`navigation ${menuOpen ? "menu-open" : ""}`}>
        <h1 className="logo">Vasitum</h1>
        <div className="navHeading">MAIN MENU</div>
        <ul className="ul-1">
          <li>
            <FaHome className="nav-icon" /> Dashboard
          </li>
          <li>
            <FaUsers className="nav-icon" /> Recruitment
          </li>
          <li>
            <FaCalendarAlt className="nav-icon" /> Schedule
          </li>
          <li>
            <FaBuilding className="nav-icon" /> Employee
          </li>
          <li>
            <FaBuilding className="nav-icon" /> Department
          </li>
        </ul>
        <div className="navHeading">OTHER</div>
        <ul className="ul-2">
          <li>
            <FaLifeRing className="nav-icon" /> Support
          </li>
          <li>
            <FaCog className="nav-icon" /> Setting
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
