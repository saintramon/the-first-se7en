import React from "react";
import XPBar from "../../components/navigation/XPBar";
import "../styles/reveal_prompt.css";

const RevealPrompt = ({ onConfirm, onCancel }) => {
  return (
    <div className="reveal-prompt">
      <div className="reveal-card">
        <XPBar className="reveal-xp-bar" />

        <h2 className="reveal-text">Reveal a Letter</h2>
        <p className="reveal-message">Do you want to reveal a letter</p>
        <p className="reveal-message-two">for only 5 XP?</p>

        <div className="reveal-button-group">
          <button className="reveal-yes-btn" onClick={onConfirm}>YES</button>
          <button className="reveal-no-btn" onClick={onCancel}>NO</button>
        </div>
      </div>
    </div>
  );
};

export default RevealPrompt;
