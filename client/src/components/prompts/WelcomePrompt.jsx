import React from "react";
import xpIcon from "../../assets/icon/xp_bar.png";
import ContinueBtn from "../../components/buttons/ContinueBtn"; 
import "../styles/welcome_prompt.css";

const WelcomePrompt = ({ name, xp, onContinue }) => {
    return (
      <div className="welcome-prompt">
        <div className="welcome-card">
          <h2 className="welcome-text">Welcome, {name}!</h2>
          <p className="message">Your account was created,</p>
          <p className="message-two">
            and you've earned {xp} <img src={xpIcon} alt="XP Icon" className="xp-icon" />
          </p>
          <ContinueBtn onClick={onContinue} />
        </div>
      </div>
    );
  };
  


export default WelcomePrompt;
