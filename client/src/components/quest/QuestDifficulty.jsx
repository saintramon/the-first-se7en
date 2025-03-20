import React from 'react';
import "./quest_difficulty.css";

function QuestDifficulty({ level }) {
  return (
    <div className={`quest-difficulty ${level}`}>
      <span className="quest-text">QUEST</span>
      <span className="difficulty-text">{level}</span>
    </div>
  );
}

export default QuestDifficulty;
