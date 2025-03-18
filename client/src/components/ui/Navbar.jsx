import React from "react";
import ReturnBtn from "./ReturnBtn";
import Logo from "./Logo";
import LogOutBtn from "./LogOutBtn";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <ReturnBtn />
      <Logo />
      <div className="navbar-content">
        <div className="xp-placeholder"></div>
        <LogOutBtn />
      </div>
    </div>
  );
};

export default Navbar;
