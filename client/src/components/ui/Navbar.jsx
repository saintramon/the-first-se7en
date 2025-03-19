import React from "react";
import ReturnBtn from "./ReturnBtn";
import Logo from "./Logo";
import LogOutBtn from "./LogOutBtn";
import XPbar from "./XPBar";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left-section">
        <ReturnBtn />
      </div>
      <div className="logo-container">
        <Logo />
      </div>
      <div className="right-section">
        <LogOutBtn />
        <XPbar xp="100"/>
      </div>
    </div>
  );
};

export default Navbar;
