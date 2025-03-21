import React from "react";
import NavbarHome from "../../components/navigation/NavbarHome";
import PlayBtn from "../../components/buttons/PlayBtn";
import HowToBtn from "../../components/buttons/HowToBtn";
import logoVideo from "../../assets/video/l2c-video.mp4"; 
import "./home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="navbar-container">
        <NavbarHome />
      </div>

      <div className="logo-container">
        {/* Replace the image with a video */}
        <video 
          src={logoVideo} 
          alt="Litra2Code Logo" 
          className="app-logo" 
          autoPlay 
          loop 
          muted 
          playsInline 
          style={{ background: "none" }} 
        />
      </div>

      <div className="button-container">
        <PlayBtn />
        <HowToBtn />
      </div>
    </div>
  );
}

export default Home;