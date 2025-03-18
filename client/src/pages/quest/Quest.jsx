import React from 'react';
import BGContainer from '../../components/ui/BGContainer';
import Navbar from '../../components/ui/Navbar';
import QuestImageHolder from '../../components/ui/QuestImageHolder';
import AnswerHolder from '../../components/ui/AnswerHolder';
import LetterSet from '../../components/ui/LetterSet';

function Quest() {
  return (
    <BGContainer>
      <Navbar />
      <div className="quest-content">
        <div className="quest-left">
          <QuestImageHolder />
        </div>
        <div className="quest-right">
          <AnswerHolder />
          <LetterSet />
        </div>
      </div>
    </BGContainer>
  );
}

export default Quest;
