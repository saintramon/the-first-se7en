import React from 'react';
import "./answer_holder.css";

function AnswerHolder({ words }) {
	const renderAnswerRows = () => {
		if (words.length === 1) {
			return (
				<div className="answer-row" style={{ justifyContent: "center" }}>
					{words[0].split("").map((_, index) => (
						<div key={index} className="answer-holder"></div>
					))}
				</div>
			);
		} else if (words.length === 2) {
			return (
				<>
					<div className="answer-row" style={{ justifyContent: "center" }}>
						{words[0].split("").map((_, index) => (
							<div key={index} className="answer-holder"></div>
						))}
					</div>
					<div className="answer-row" style={{ justifyContent: "center" }}>
						{words[1].split("").map((_, index) => (
							<div key={index} className="answer-holder"></div>
						))}
					</div>
				</>
			);
		}
	};

	return <div className="answer-container">{renderAnswerRows()}</div>;
}

export default AnswerHolder;
