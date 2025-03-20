import React from 'react';
import NavbarHome from '../../components/navigation/NavbarHome';
import PlayBtn from '../../components/buttons/PlayBtn';
import HowtoBtn from '../../components/buttons/HowtoBtn';
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