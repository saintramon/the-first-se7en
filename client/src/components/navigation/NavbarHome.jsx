import React from "react";
import GithubBtn from "../ui/GithubLogo";
import LogOutBtn from "../navigation/LogOutBtn";
import XPbar from "./XPBar";
import "../styles/navbar_home.css";

const NavbarHome = () => {
  return (
    <div className="navbar">
      <div className="left-icons">
        <GithubBtn />
      </div>
      <div className="right-icons">
        <LogOutBtn />
        <XPbar xp="10"/>
      </div>
    </div>
  );
};

export default NavbarHome;