import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="nav-container">
      <div className="navbar">
        <Link to="/home">
          <div className="nav-link">Home</div>
        </Link>
        <Link to="/form">
          <div className="nav-link">Sign Up</div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
