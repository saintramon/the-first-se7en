import React from "react";
import XPBar from "../../components/navigation/XPBar";
import "../styles/remove_prompt.css";

const RemovePrompt = ({ onConfirm, onCancel }) => {
  return (
    <div className="remove-prompt">
      <div className="remove-card">
        <XPBar className="remove-xp-bar" />

        <h2 className="remove-text">Remove a Letter</h2>
        <p className="remove-message">Do you want to remove a letter</p>
        <p className="remove-message-two">from the letter set for only 3 XP?</p>

        <div className="remove-button-group">
          <button className="remove-yes-btn" onClick={onConfirm}>YES</button>
          <button className="remove-no-btn" onClick={onCancel}>NO</button>
        </div>
      </div>
    </div>
  );
};

export default RemovePrompt;
