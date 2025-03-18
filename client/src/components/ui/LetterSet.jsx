import React from 'react';
import "./letter_set.css";

function LetterSet({ letters, onLetterClick }) {
	return (
		<div className="letter-set">
			{letters.map((letter, index) => (
				<button 
					key={index} 
					className="letter-button" 
					onClick={() => onLetterClick(letter)}
				>
					{letter}
				</button>
			))}
		</div>
	);
}

export default LetterSet;
