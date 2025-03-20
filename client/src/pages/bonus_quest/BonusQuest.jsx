import React from 'react';
import BonusQuestForm from '../../components/form/BonusQuestForm';
import QuestDifficulty from '../../components/quest/QuestDifficulty';
import Navbar from '../../components/navigation/Navbar';
import BGContainer from '../../components/ui/BGContainer';
import XPBar from '../../components/navigation/XPBar';

function BonusQuest() {
  return (
    <BGContainer>
      <Navbar />
      <XPBar />
    </BGContainer>
    
    // <BonusQuestForm />
  );
}

export default BonusQuest