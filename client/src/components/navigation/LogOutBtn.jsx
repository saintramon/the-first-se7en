import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/logout.css';
import logoutBtn from '../../assets/icon/logout-icon-white.png';
import logoutHover from '../../assets/icon/logout-icon-orange.png';

function LogOutBtn() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to="/logout">
      <button
      className="logout-btn"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={isHovered ? logoutHover : logoutBtn} alt="Log out" />
    </button>
    </Link>
    
  );
}

export default LogOutBtn;
