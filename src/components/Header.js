import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h2>Dashboard</h2>
      <input type="text" placeholder="Search..." className="search-bar" />
    </header>
  );
}

export default Header;
