import React, { useEffect, useState } from "react";
import "../styles/lives.css";
import heartFilled from "../../assets/icon/heart-filled.png";
import heartOutline from "../../assets/icon/heart-outline.png";

const Lives = ({ attemptsLeft }) => {
  const [shake, setShake] = useState(false);

  useEffect(() => {
    if (attemptsLeft < 3) { // Trigger shake only when a life is lost
      setShake(true);
      setTimeout(() => setShake(false), 500); 
    }
  }, [attemptsLeft]);

  return (
    <div className={`lives-box ${shake ? "shake" : ""}`}>
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
