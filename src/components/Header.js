import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Link to="/home">
      <div className="nav-container">
        <div className="navbar">
          <div className="nav-link">Blog</div>
          <div className="nav-link">Follow</div>
        </div>
      </div>
    </Link>
  );
};

export default Header;
