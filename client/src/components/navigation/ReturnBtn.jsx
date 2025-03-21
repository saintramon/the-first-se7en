import React, { useState } from 'react';
import '../styles/return.css';
import { Link } from "react-router-dom";
import rtn from '../../assets/icon/return-icon-white.png';
import rtnHover from '../../assets/icon/return-icon-orange.png';

function ReturnBtn() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to="/home"
      className="return-btn"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={isHovered ? rtnHover : rtn} alt="Return" />
    </Link>
  );
}

export default ReturnBtn;
