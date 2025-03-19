import React, { useState, useEffect } from 'react';
import BGContainer from '../../components/ui/BGContainer';
import Navbar from '../../components/ui/Navbar';
import QuestDifficulty from '../../components/ui/QuestDifficulty';
import QuestImageHolder from '../../components/ui/QuestImageHolder';
import AnswerHolder from '../../components/ui/AnswerHolder';
import LetterSet from '../../components/ui/LetterSet';
import Lives from "../../components/ui/Lives"; 
import RevealBtn from '../../components/ui/RevealBtn';
import RemoveBtn from '../../components/ui/RemoveBtn';
import SubmitBtn from '../../components/ui/SubmitBtn';
import './quest.css';

function Quest() {
  const [quest, setQuest] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8080/api/quest')
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched Quest Data:", data); // For debugging
        if (data?.error) {
          setError(data.error);
        } else {
          setQuest(data);
        }
      })
      .catch((err) => {
        console.error("Failed to load quest:", err);
        setError("Failed to load quest");
      });
  }, []);

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
            <QuestImageHolder images={quest.images || []} />
          </div>

          <div className="quest-right">
            <AnswerHolder words={quest.answer.replace(/_/g, " ").split(" ")} />
            
            <div className="letter-set-wrapper">
              <div className="letter-set-container">
                <LetterSet letters={quest.letterSet} onLetterClick={() => {}} />
              </div>
            </div>

            <div className="lives-container">
            <Lives attemptsLeft={quest.playerAttempts} />
            </div>

            <div className="action-buttons">
              <RevealBtn />
              <RemoveBtn />
              <SubmitBtn />
            </div>
          </div>
        </div>
      </div>
    </BGContainer>
  );
}

export default Quest;
