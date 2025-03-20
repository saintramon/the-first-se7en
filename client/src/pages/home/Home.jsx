import React from "react";
import NavbarHome from "../../components/navigation/NavbarHome";
import PlayBtn from "../../components/buttons/PlayBtn";
import HowToBtn from "../../components/buttons/HowToBtn";
import logo from "../../assets/icon/logo.png"; 
import "../home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="navbar-container">
        <NavbarHome />
      </div>

      <div className="logo-container">
        <img src={logo} alt="Litra2Code Logo" className="app-logo" />
      </div>

      <div className="button-container">
        <PlayBtn />
        <HowToBtn />
      </div>
    </div>
  );
}

export default Home;