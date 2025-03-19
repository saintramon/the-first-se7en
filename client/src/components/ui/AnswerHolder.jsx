import React from 'react';
import "./answer_holder.css";

function AnswerHolder({ words }) {
	const renderAnswerRows = () => {
		if (words.length === 1) {
			return (
				<div className="answer-row" style={{ justifyContent: "center" }}>
					{words[0].split("").map((word, index) => (
						<div id={"div-" + index }key={index} className="answer-holder">
							<h2 id={"h2-" + index}> 
							</h2>
						</div>
					))}
				</div>
			);
		} else if (words.length === 2) {
			return (
				<>
					<div className="answer-row" style={{ justifyContent: "center" }}>
						{words[0].split("").map((word, index) => (
						<div id={"div-" + index }key={index} className="answer-holder">
							<h2 id={"h2-" + index}> </h2>
						</div>
						))}
					</div>
					<div className="answer-row" style={{ justifyContent: "center" }}>
						{words[1].split("").map((word, index) => (
						<div id={"div-" + index }key={index} className="answer-holder">
							<h2 id={"h2-" + index}> 
							</h2>
						</div>
						))}
					</div>
				</>
			);
		}
	};

	return <div className="answer-container">{renderAnswerRows()}</div>;
}

export default AnswerHolder;
