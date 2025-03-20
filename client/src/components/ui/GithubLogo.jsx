import { Link } from "react-router-dom";
import githubLogo from "../../assets/icon/github-logo.png";
import "../styles/github_logo.css";

function GithubLogo() {
  return (
    <Link to="https://github.com/saintramon/the-first-se7en" target="_blank" rel="noopener noreferrer">
      <button className="github-btn">
        <img src={githubLogo} alt="GitHub" />
      </button>
    </Link>
  );
}

export default GithubLogo;
