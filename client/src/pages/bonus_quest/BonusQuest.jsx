import React from 'react';
import BonusQuestForm from '../../components/form/BonusQuestForm';
import QuestDifficulty from '../../components/quest/QuestDifficulty';
import Navbar from '../../components/navigation/Navbar';
import BGContainer from '../../components/ui/BGContainer';
import './bonus_quest.css';

function BonusQuest() {
  return (
    <BGContainer difficulty={''}>
      <div className='quest-page'>
        <Navbar />
        <div className='quest-heading'>
          <QuestDifficulty level={''} />
        </div>

        <div className='question'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</p>
        </div>

        <BonusQuestForm />
      </div>
    </BGContainer>
  );
}

export default BonusQuest