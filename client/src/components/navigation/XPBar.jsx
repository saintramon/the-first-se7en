import React from 'react';
import "../ui/xp_bar.css";
import xpStar from '../../assets/icon/xp_bar.png';

function XPBar({ xp }) {
  return (
    <div className="xp-bar">
      {/* XP Star Icon */}
      <div className="xp-star">
        <img src={xpStar} alt="XP Star" />
      </div>

      {/* XP Value */}
      <span className="xp-value">{xp}</span>
    </div>
  );
}

export default XPBar;