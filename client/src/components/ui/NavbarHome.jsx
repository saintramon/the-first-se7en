import React from "react";
import GithubLogo from "./GithubLogo";
import Logo from "./Logo";
import LogOutBtn from "./LogOutBtn";
import XPbar from "./XPBar";
import "./navbar_home.css";

const NavbarHome = () => {
  return (
    <div className="navbar-home">
      <div className="left-section">
        <GithubLogo />
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
