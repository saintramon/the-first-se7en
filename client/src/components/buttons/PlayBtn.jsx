import React from "react";
import { Link } from "react-router-dom";
import "../styles/Play.css";

function PlayBtn() {
  return (
    <div>
      <Link to="/quest" className="play-btn">
        PLAY
      </Link>
    </div>
  );
}

export default PlayBtn;
