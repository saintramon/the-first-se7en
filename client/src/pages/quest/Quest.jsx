import React, { useState, useEffect } from 'react';
import axios from '../../../axios.config';
import BGContainer from '../../components/ui/BGContainer';
import Navbar from '../../components/navigation/Navbar';
import QuestDifficulty from '../../components/quest/QuestDifficulty';
import QuestImageHolder from '../../components/quest/QuestImageHolder';
import AnswerHolder from '../../components/quest/AnswerHolder';
import LetterSet from '../../components/quest/LetterSet';
import Lives from "../../components/quest/Lives"; 
import RevealBtn from '../../components/quest/RevealBtn';
import RemoveBtn from '../../components/quest/RemoveBtn';
import SubmitBtn from '../../components/buttons/SubmitBtn';
import './quest.css';

function Quest() {
  const [quest, setQuest] = useState(null);
  const [error, setError] = useState(null);

  const [currLetter, setCurrLetter] = useState(0);
  const [hintIndex, setHintIndex] = useState(-1);
  const [removedLetter, setRemovedLetter] = useState(false);
  const [attemptsLeft, setAttemptsLeft] = useState(3);
  
  // Tracks which letter button corresponds to each position in the answer
  const [letterMapping, setLetterMapping] = useState({});

  useEffect(() => {
    axios.get('/api/quest')
      .then((response) => {
        console.log("Fetched Quest Data:", response.data);
        setQuest(response.data);
      })
      .catch((err) => {
        console.error("Failed to load quest:", err);
        setError("Failed to load quest");
      });
  }, []);

  const handleLetterClick = (id, letter) => {
    if (currLetter !== quest.answer.length) {
      if (currLetter === hintIndex) {
        setCurrLetter(prevPos => prevPos + 1);
        return;
      }
      
      let specAnsHolderH2 = document.getElementById("h2-" + currLetter);
      let selectedIndex = document.getElementById("button" + id);
      selectedIndex.disabled = true;
      
      // Update the answer holder with the selected letter
      specAnsHolderH2.innerHTML = letter;
      
      // Store which letter button was used for this position
      setLetterMapping(prevMapping => ({
        ...prevMapping,
        [currLetter]: { id, letter }
      }));
      
      // Move to the next position
      setCurrLetter(prevPos => prevPos + 1);
    }
  };

  const handleLetterReturn = (position) => {
    if (position === hintIndex) {
      return;
    }
    const letterH2 = document.getElementById("h2-" + position);
    
    if (!letterH2 || !letterH2.innerHTML.trim()) {
      return;
    }
    
    const mapping = letterMapping[position];
    if (mapping) {
      // Activate the letter button in letter set again
      const originalButton = document.getElementById("button" + mapping.id);
      if (originalButton) {
        originalButton.disabled = false;
      }
      
      letterH2.innerHTML = '';
      
      const newMapping = {...letterMapping};
      delete newMapping[position];
      setLetterMapping(newMapping);
      
      // Update current position if needed
      if (position < currLetter) {
        setCurrLetter(position);
      }
    }
  };

  // Handler for reveal button
  const handleReveal = () => {
    if (hintIndex === -1) {
      axios.post('/api/quest/revealLetter', {
        answer: quest.answer
      })
      .then((response) => {
        const data = response.data;
        if (data?.error) {
          setError(data.error);
        } else {
          let hintHolderH2 = document.getElementById("h2-" + data.index);
          hintHolderH2.innerHTML = data.reveleadLetter;
          setHintIndex(data.index);
          
          // If current position is at hint index, move it forward
          if (currLetter === data.index) {
            setCurrLetter(prevPos => prevPos + 1);
          }
        }
      })
      .catch((err) => {
        setError(err.message);
      });
    }
  };

  const handleRemove = () => {
    if (!removedLetter) {
      axios.post('/api/quest/removeLetter', {
        answer: quest.answer,
        letterList: quest.letterSet
      })
      .then((response) => {
        const data = response.data;
        if (data?.error) {
          setError(data.error);
        } else {
          let selectedIndex = document.getElementById("button" + data.index);
          selectedIndex.disabled = true;
          setRemovedLetter(true);
        }
      })
      .catch((err) => {
        setError(err.message);
      });
    }
  };

  const handleSubmit = () => {
    let childDivs = document.getElementById('answerHolder').childNodes;
    let word = "";
    
    if (childDivs.length === 2) {
      childDivs.forEach(function(childChildDiv) {
        let childChildDivNodes = childChildDiv.childNodes;
        childChildDivNodes.forEach(function(divChild) {
          let h2Node = divChild.childNodes[0];
          if (h2Node.innerHTML.trim() !== "") {
            word += h2Node.innerHTML.trim();
          }
        });
        if (!word.includes("_")) 
          word += "_";
      });
    } else {
      childDivs.forEach(function(divChild) {
        let h2Node = divChild.childNodes[0];
        if (h2Node.innerHTML.trim() !== "") {
          word += h2Node.innerHTML.trim();
        }
      });
    }

    if (quest.answer.toUpperCase() === word) {
      console.log("Correct!");
      // TODO: PLUS XP
      window.location.reload();
      setAttempts(0);
    } else {
      setAttemptsLeft(prev => {
        const newAttempts = prev - 1;
        if (newAttempts <= 0) {
          // TODO: MINUS XP

          // Reload the page
          window.location.reload();
        }
        return newAttempts;
      });
    }
  };

  if (error) return <div>Error: {error}</div>;
  if (!quest) return <div>Loading...</div>;

  return (
    <BGContainer difficulty={quest.difficulty}>
      <div className="quest-page">
        <Navbar />

        <div className="quest-heading">
          <QuestDifficulty level={quest.difficulty.toUpperCase()} />
        </div>

        <div className="quest-content">
          <div className="quest-left">
            <QuestImageHolder images={quest.images || []} answer={quest.answer}/>
          </div>

          <div className="quest-right">
            <AnswerHolder 
              words={quest.answer.replace(/_/g, " ").split(" ")} 
              onLetterReturn={handleLetterReturn}  
            />
            
            <div className="letter-set-wrapper">
              <div className="letter-set-container">
                <LetterSet 
                  letters={quest.letterSet} 
                  onLetterClick={handleLetterClick} 
                />
              </div>
            </div>

            <div className="lives-container">
              <Lives attemptsLeft={attemptsLeft} />
            </div>

            <div className="action-buttons">
              <RevealBtn onRevealClick={handleReveal} />
              <RemoveBtn onRemoveClick={handleRemove} />
              <SubmitBtn onSubmitClick={handleSubmit} />
            </div>
          </div>
        </div>
      </div>
    </BGContainer>
  );
}

export default Quest;