import React from 'react';
import BonusQuestForm from '../../components/form/BonusQuestForm';
import QuestDifficulty from '../../components/ui/QuestDifficulty';
import Navbar from '../../components/ui/Navbar';
import BGContainer from '../../components/ui/BGContainer';
import XPBar from '../../components/ui/XPbar';

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