import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="nav-logo">
      <div className="container py-3">
        <img src='/src/assets/imgs/airbnb-logo.png' alt="Navbar logo" />
      </div>
    </nav>
  );
}

export default Navbar;
