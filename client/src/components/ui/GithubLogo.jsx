import React from 'react';
import githubLogo from '../../assets/icon/github-logo.png';
import "../styles/github_logo.css";

function GithubLogo() {
  return (
    <div>
            <button class = "btn">
             <img src={githubLogo} alt="GitHub"/> 
            </button>
    </div>
  )
}

export default GithubLogo;
