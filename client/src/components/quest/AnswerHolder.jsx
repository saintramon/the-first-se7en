import React, { useState, useEffect } from "react";
import "../styles/answer_holder.css";

function AnswerHolder({ words, onLetterReturn, isWrong }) {
  const [shake, setShake] = useState(false);

  useEffect(() => {
    if (isWrong) {
      setShake(true);
      setTimeout(() => setShake(false), 500); 
    }
  }, [isWrong]);

  const renderAnswerRows = () => {
    if (words.length === 1) {
      return (
        <div id="answerHolder" className={`answer-row ${shake ? "shake-red" : ""}`} style={{ justifyContent: "center" }}>
          {words[0].split("").map((word, index) => (
            <div 
              id={"div-" + index} 
              key={index} 
              className="answer-holder"
              onClick={() => onLetterReturn(index)}
            >
              <h2 id={"h2-" + index}></h2>
            </div>
          ))}
        </div>
      );
    } else if (words.length === 2) {
      return (
        <div id="answerHolder" className={shake ? "shake-red" : ""}>
          <div className="answer-row" style={{ justifyContent: "center" }}>
            {words[0].split("").map((word, index) => (
              <div 
                id={"div-" + index} 
                key={index} 
                className="answer-holder"
                onClick={() => onLetterReturn(index)}
              >
                <h2 id={"h2-" + index}></h2>
              </div>
            ))}
          </div>
          <div className="answer-row" style={{ justifyContent: "center" }}>
            {words[1].split("").map((word, index) => (
              <div 
                id={"div-" + (words[0].length + index)} 
                key={(words[0].length + index)} 
                className="answer-holder"
                onClick={() => onLetterReturn(words[0].length + index)}
              >
                <h2 id={"h2-" + (words[0].length + index)}></h2>
              </div>
            ))}
          </div>
        </div>
      );
    }
  };
  
  return <div className="answer-container">{renderAnswerRows()}</div>;
}

export default AnswerHolder;