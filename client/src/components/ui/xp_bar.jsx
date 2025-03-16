import React from 'react';
import "./xp_bar.css";

function xp_bar({ xp }) {
  return (
    <div className="xp-bar">
      {/* XP Star Icon */}
      <div className="xp-star">
        <img src="/xp-star.png" alt="XP Star" />
      </div>

      {/* XP Value */}
      <span className="xp-value">{xp}</span>
    </div>
  );
}

export default xp_bar;