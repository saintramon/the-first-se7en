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
import RevealPrompt from '../../components/prompts/RevealPrompt';
import RemovePrompt from '../../components/prompts/RemovePrompt';
import FailedPrompt from '../../components/prompts/FailedPrompt';
import './quest.css';

function Quest({ user, updateUser }) {
  const [quest, setQuest] = useState(null);
  const [error, setError] = useState(null);
  const [userState, setUserState] = useState(user);

  const [currLetter, setCurrLetter] = useState(0);
  const [hintIndex, setHintIndex] = useState(-1);
  const [removedLetter, setRemovedLetter] = useState(false);
  const [attemptsLeft, setAttemptsLeft] = useState(3);
  const [isComplete, setIsComplete] = useState(false);
  const [showFailedPrompt, setShowFailedPrompt] = useState(false);
  const [isUpdatingXP, setIsUpdatingXP] = useState(false);
  
  const [showRevealPrompt, setShowRevealPrompt] = useState(false);
  const [showRemovePrompt, setShowRemovePrompt] = useState(false);

  // Tracks which letter button corresponds to each position in the answer
  const [letterMapping, setLetterMapping] = useState({});

  // Sync user state whenever the user prop changes
  useEffect(() => {
    if (user) {
      setUserState(user);
    }
  }, [user]);

  // Fetch quest data when component mounts
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

  // Handle a letter being clicked in the letter set
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

      // Check if the answer is complete
      setTimeout(() => setIsComplete(checkCompleteness()), 0);
    }
  };

  // Handle removing a letter from the answer
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

      // Check if the answer is still complete
      setTimeout(() => setIsComplete(checkCompleteness()), 0);
    }
  };

  // Handler for reveal button - get a hint letter
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

  // Handler for remove button - remove an incorrect letter
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

  // Check if the answer is completely filled in
  const checkCompleteness = () => {
    const answerHolder = document.getElementById('answerHolder');
    if (!answerHolder) {
      return false; 
    }
  
    const filledLetters = Array.from(answerHolder.children); 
  
    return filledLetters.every((div) => {
      const h2 = div.querySelector("h2"); 
      return h2 && h2.innerHTML.trim().length > 0; 
    });
  };
  
  // Update the user's XP on the server and in local state
  const updateServerXp = async (decision) => {
    if (!userState || isUpdatingXP) return;

    try {
        setIsUpdatingXP(true);
        
        console.log("Updating XP for user:", userState.id, "Decision:", decision);
        
        const res = await axios.post('/api/quest/updateXP', {
            playerID: userState.id,
            questID: quest?.id || 1,
            decision,
        });

        console.log("XP update response:", res.data);

        if (res.data.updatedXP !== undefined) {
            const updatedUser = { 
                ...userState, 
                xp: res.data.updatedXP,
                xp_level: res.data.updatedXP
            };
            
            console.log("Updated user state:", updatedUser);
            setUserState(updatedUser);
            
            if (typeof updateUser === 'function') {
                updateUser(updatedUser);
            }
            
            // Optional localStorage update if your app uses it
            if (window.localStorage) {
                const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
                storedUser.xp = res.data.updatedXP;
                storedUser.xp_level = res.data.updatedXP;
                localStorage.setItem('user', JSON.stringify(storedUser));
            }
            
            return true;
        } else {
            console.warn("Warning: updatedXP not found in response:", res.data);
            return false;
        }
    } catch (err) {
        console.error("Failed to update XP on server:", err);
        return false;
    } finally {
        setIsUpdatingXP(false);
    }
};

  // Handle submit button click
  const handleSubmit = async () => {
    let childDivs = document.getElementById('answerHolder').childNodes;
    let word = "";
    
    // Extract the user's answer from the DOM
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
    // Check if the answer is correct
    if (quest.answer.toUpperCase() === word) {
      console.log("Correct answer provided!");
      
      // Update XP on the server - correct answer
      const success = await updateServerXp('up');
      
      if (success) {
        // Give a small delay before reloading to ensure XP update is processed
        setTimeout(() => {
          console.log("Reloading page after successful XP update");
          window.location.reload();
        }, 300);
      } else {
        // If XP update failed, still reload but log a warning
        console.warn("XP update may not have been processed correctly");
        window.location.reload();
      }
    } else {
      // Incorrect answer - add shake and red effect
      answerHolder.classList.add("shake", "wrong");

      setTimeout(() => {
          answerHolder.classList.remove("shake", "wrong");
      }, 480);
      
      // Incorrect answer - reduce attempts
      setAttemptsLeft(prev => {
        const newAttempts = prev - 1;
        if (newAttempts <= 0) {
          // Update XP on the server - incorrect answer
          updateServerXp('down').then(success => {
            console.log("XP updated after failed attempts:", success);
            setShowFailedPrompt(true);
          });
        }
        return newAttempts;
      });
    }
  };

  // Handle moving to the next quest after failure
  const handleNextAfterFailure = () => {
    window.location.reload();
  };

  // Handle remove and reveal prompts
  const handleRevealPrompt = () => {
    setShowRevealPrompt(true);
  };

  const handleRemovePrompt = () => {
    setShowRemovePrompt(true);
  };

  const confirmReveal = () => {
    setShowRevealPrompt(false);
    handleReveal();
  };

  const confirmRemove = () => {
    setShowRemovePrompt(false);
    handleRemove();
  };
  

  // Render loading or error states
  if (error) return <div>Error: {error}</div>;
  if (!quest) return <div>Loading...</div>;

  return (
    <BGContainer difficulty={quest.difficulty}>
      <div className="quest-page">
        
        {showRevealPrompt && <RevealPrompt onConfirm={confirmReveal} onCancel={() => setShowRevealPrompt(false)} />}
        {showRemovePrompt && <RemovePrompt onConfirm={confirmRemove} onCancel={() => setShowRemovePrompt(false)} />}

        {showFailedPrompt ? (
          <FailedPrompt onNext={handleNextAfterFailure} />
        ) : (
          <>
        <Navbar xp={userState.xp || userState.xp_level || 0} />

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
              <RevealBtn onRevealClick={handleRevealPrompt} />
              <RemoveBtn onRemoveClick={handleRemovePrompt} />
              <SubmitBtn onSubmitClick={handleSubmit} disabled={!isComplete} />
            </div>
          </div>
        </div>
        </>
        )}
      </div>
    </BGContainer>
  );
}

export default Quest;