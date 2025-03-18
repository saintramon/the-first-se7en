import React from "react";
import ReturnBtn from "./ReturnBtn";
import Logo from "./Logo";
import LogOutBtn from "./LogOutBtn";
import XPbar from "./XPbar";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <ReturnBtn />
      <Logo />
      <div className="navbar-content">
        <XPbar />
        <LogOutBtn />
      </div>
    </div>
  );
};

export default Navbar;