import React from 'react';
import { Link } from "react-router-dom";
import '../styles/how_to_play.css';

function HowToBtn() {
  return (
    <div>
      <Link to="/instructions" className="how-to-btn">
        HOW TO PLAY
      </Link>
    </div>
  );
}

export default HowToBtn;
