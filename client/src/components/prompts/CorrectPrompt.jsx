import React from 'react';
import Next from '../../components/buttons/NextBtn';
import XpIcon from '../../assets/icon/xp_bar.png';
import SuccessBanner from '../../assets/icon/success.png';
import '../styles/success.css';

function CorrectPrompt({ xp }) {
  return (
    <div className="success-container">
      <div className="xp-container">
        <span>+{xp}</span>  
        <img src={XpIcon} alt="XP Icon" />
      </div> 

      <div className="banner-container">
        
        <img src={SuccessBanner} alt="Success Banner" />
      </div>

      <div className="btn-container">
        <Next />
      </div>
    </div>
    
  );
}

export default CorrectPrompt;