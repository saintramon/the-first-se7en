import React, { useState, useEffect } from 'react';
import BGContainer from '../../components/ui/BGContainer';
import Navbar from '../../components/ui/Navbar';
import QuestImageGrid from '../../components/ui/QuestImageHolder';
import AnswerHolder from '../../components/ui/AnswerHolder';
import LetterSet from '../../components/ui/LetterSet';
import RevealBtn from '../../components/ui/RevealBtn';
import RemoveBtn from '../../components/ui/RemoveBtn';
import SubmitBtn from '../../components/ui/SubmitBtn';

function Quest() {
  const [quest, setQuest] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8080/api/quest') 
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setError(data.error);
        } else {
          setQuest(data);
        }
      })
      .catch(() => setError("Failed to load quest"));
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (!quest) return <div>Loading...</div>;

  return (
    <BGContainer difficulty={quest.difficulty}>
      <Navbar />
      <h2 className="difficulty-title">{quest.difficulty} <span className="quest-label">Quest</span></h2>
      <div className="quest-container">
        <div className="quest-content">
          <div className="quest-left">
            <QuestImageGrid images={quest.images} />
          </div>
          <div className="quest-right">
            <AnswerHolder words={quest.answer.split(" ")} />
            <LetterSet letters={quest.letterSet} onLetterClick={() => {}} />
            <div className="buttons-container">
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