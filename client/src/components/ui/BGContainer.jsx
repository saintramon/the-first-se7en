import React from "react";
import easyBg from "../../assets/bg-img/easy-bg.png";
import mediumBg from "../../assets/bg-img/medium-bg.png";
import hardBg from "../../assets/bg-img/hard-bg.png";
import "../styles/bg_container.css";

const difficultyBackgrounds = {
	easy: easyBg,
	medium: mediumBg,
	hard: hardBg,
};

function BackgroundContainer({ difficulty, children }) {
	const backgroundImage = difficultyBackgrounds[difficulty];

	return (
		<div
			className="background-container"
			style={{ backgroundImage: `url(${backgroundImage})` }}
		>
			{children}
		</div>
	);
}

export default BackgroundContainer;
