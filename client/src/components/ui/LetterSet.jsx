import React from 'react';
import "./letter_set.css";

function LetterSet({ letters, onLetterClick }) {
	return (
		<div className="letter-set">
			{letters.map((letter, index) => (
				<button
					id = {"button" + index}
					key={index} 
					className="letter-button" 
					onClick={() => onLetterClick(index, letter)}
				>
					{letter}
				</button>
			))}
		</div>
	);
}

export default LetterSet;
