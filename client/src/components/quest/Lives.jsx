import React from "react";
import "../styles/lives.css";
import heartFilled from "../../assets/icon/heart-filled.png"; // Filled heart image
import heartOutline from "../../assets/icon/heart-outline.png"; // Outlined heart image

const Lives = ({ attemptsLeft }) => {
  return (
    <div className="lives-box">
      <p className="lives-text">LIVES</p>
      <div className="lives-container">
        {[...Array(3)].map((_, index) => (
          <img
            key={index}
            src={index < attemptsLeft ? heartFilled : heartOutline}
            alt="Life"
            className="heart-icon"
          />
        ))}
      </div>
    </div>
  );
};

export default Lives;
