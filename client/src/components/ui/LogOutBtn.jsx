import React, { useState } from 'react';
import './LogOut.css';
import logoutBtn from '../../assets/icon/logout-icon-white.png';
import logoutHover from '../../assets/icon/logout-icon-orange.png';

function LogOutBtn() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className="logout-btn"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={isHovered ? logoutHover : logoutBtn} alt="Log out" />
    </button>
  );
}

export default LogOutBtn;
