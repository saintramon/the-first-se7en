import React from 'react'
import Navbar from '../../components/navigation/Navbar'
import ArrowsBtn from '../../components/buttons/ArrowsBtn'
import "./instructions.css";

function Instructions() {
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
        <h2>Objective of the game</h2>
      </div>
    </div>

    <div className="content-container">
      <div className = "content">
        <h4>A quest displays four images linked to a certain personality, concept, or technology related to the history of programming languages. 
          The player’s goal is to figure out the quest with a given set of letters beside the image. Answering a quest will give the player XP 
          (5XP - Easy, 10 XP - Medium, 20 XP - Hard).
        </h4>
          <hr />
        <h4>A player is only given three chances to complete a quest. Failure to answer will result in a 5 XP deduction.
        </h4>
        <hr />
        <h4>There are a total of 20 quests presented in a randomized order.
        </h4>
      </div>
    </div>

    <div className="arrows-container">
      <h2>Page 1 of 3</h2>
      <ArrowsBtn />
    </div>

    </div>
  )
}

export default Instructions
