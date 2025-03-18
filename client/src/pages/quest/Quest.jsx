import React from 'react';
import BGContainer from './ui/BGContainer';
import Navbar from './ui/Navbar';
import QuestImageGrid from './ui/QuestImageGrid';
import AnswerHolder from './ui/AnswerHolder';
import LetterSet from './ui/LetterSet';
import XPBar from './ui/XPBar';

function Quest() {
  return (
    <BGContainer>
      <Nav />
      <XPBar />
      <div className="quest-content">
        <div className="quest-left">
          <QuestImageGrid />
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
