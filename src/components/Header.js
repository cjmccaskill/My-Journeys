/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 840) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <div className="nav-container">
      <div className={navbar ? "navbar active" : "navbar"}>
        <Link to="/home">
          <div className={navbar ? "nav-link active" : "nav-link"}>Home</div>
        </Link>
        <Link to="/form">
          <div className="nav-link">Sign Up</div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
