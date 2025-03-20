import React, { useState } from 'react';
import '../styles/return.css';
import rtn from '../../assets/icon/return-icon-white.png';
import rtnHover from '../../assets/icon/return-icon-orange.png';

function ReturnBtn() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className="return-btn"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={isHovered ? rtnHover : rtn} alt="Return" />
    </button>
  );
}

export default ReturnBtn;
