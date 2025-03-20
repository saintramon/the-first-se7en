import React from "react";
import GithubLogo from "../ui/GithubLogo";
import Logo from "../ui/Logo";
import LogOutBtn from "../navigation/LogOutBtn";
import XPbar from "../navigation/XPBar";
import "../styles/navbar_home.css";

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

export default NavbarHome;