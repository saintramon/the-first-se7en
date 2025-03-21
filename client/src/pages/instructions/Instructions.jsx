import React, { useState } from 'react';
import Navbar from '../../components/navigation/Navbar';
import "./instructions.css";

const pages = [
  {
    subtitle: "Objectives of the Game",
    content: "A quest displays four images linked to a certain personality, concept, or technology related to the history of programming languages. The player’s goal is to figure out the quest with a given set of letters beside the image. Answering a quest will give the player XP (5XP - Easy, 10 XP - Medium, 20 XP - Hard).\n\nA player is only given three chances to complete a quest. Failure to answer will result in a 5 XP deduction.\n\nThere are a total of 15 quests presented in a randomized order."
  },
  {
    subtitle: "Hints",
    content: "Each quest lets a player obtain hints at the cost of their XP. They can either a) get an input letter (- 5 XP), or b) remove a letter from the letter set (- 3 XP). If the player does not have enough XP, then they cannot avail for further hints. Thus, spend them wisely!"
  },
  {
    subtitle: "Bonus Quests",
    content: "If a quest has been completed, then they are presented with a bonus quest. A bonus quest is a true or false item related to the previously answered quest. A player is only given a single opportunity to successfully answer and gain 15 XP.\n\nNow that you now know the basics of Litra2Code, are you ready to play?\n\nTo start playing, return to the Home page and click \"Play.\""
  }
];

function Instructions() {
  const [pageIndex, setPageIndex] = useState(0);

  const handleNext = () => {
    setPageIndex((prevIndex) => (prevIndex + 1) % pages.length);
  };

  const handlePrev = () => {
    setPageIndex((prevIndex) => (prevIndex - 1 + pages.length) % pages.length);
  };

  return (
    <div className="instructions-container">
      <div className="navbar-container">
        <Navbar />
      </div>

      <div className="title-container">
        <div className="main-title">
          <h1>How to play Litra2Code?</h1>
        </div>
        <div className="subtitle">
          <h2>{pages[pageIndex].subtitle}</h2>
        </div>
      </div>

      <div className="content-container">
        <div className="content">
          {pages[pageIndex].content.split("\n\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>

      <div className="arrows-container">
        <button onClick={handlePrev}>Previous</button>
        <h2>Page {pageIndex + 1} of {pages.length}</h2>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default Instructions;
