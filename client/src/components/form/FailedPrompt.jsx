import React from "react";
import FailedBanner from '../../assets/icon/failed.png';    
import Next from '../../components/buttons/NextBtn';
import "./failed.css";

function FailedPrompt({ onNext }) {
  return (
    <div className="failed-container">
      <div className="failed-banner-container">
        <img src={FailedBanner} alt="Failed Banner" />
      </div>
      <div className="failed-btn-container">
        <Next onClick={onNext} />
      </div>
    </div>
  );
}

export default FailedPrompt;