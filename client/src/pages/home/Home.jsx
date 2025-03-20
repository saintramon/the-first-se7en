import React from 'react';
import NavbarHome from '../../components/ui/NavbarHome';
import PlayBtn from '../../components/ui/PlayBtn';
import HowtoBtn from '../../components/ui/HowtoBtn';
import "./home.css";

function Home() {
  return (
  <div className="home-container">

    <div className="navbar-container">
    <NavbarHome />
    </div>

    <div className="main-container">
      <PlayBtn />
      <HowtoBtn />
    </div>

  </div>
  )
}

export default Home;