import React from "react";
import ReturnBtn from "../navigation//ReturnBtn";
import Logo from "../ui/Logo";
import LogOutBtn from "../navigation/LogOutBtn";
import XPbar from "./XPBar";
import "../styles/navbar.css";

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
