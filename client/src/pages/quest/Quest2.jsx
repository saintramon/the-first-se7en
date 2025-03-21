import React from 'react';
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

function Quest2() {
    return (
        <BGContainer difficulty={''}> 
            <div className='quest-page'>
                <Navbar />

                <div className='quest-heading'>
                    <QuestDifficulty level={''} />
                </div>

                <div className='quest-content'>
                    <div className='quest-left'>
                        <QuestImageHolder images={ '' || []} answer={''} />
                    </div>

                    <div className='quest-right'>
                        <AnswerHolder words={''} />

                        <div className='letter-set-wrapper'>
                            <div className='letter-set-container'>
                                <LetterSet letters={''} onLetterClick={''} />
                            </div>
                        </div>

                        <div className='lives-container'>
                            <Lives attemptsLeft={attemptsLeft} />
                        </div>

                        <div className='action-buttons'>
                            <RevealBtn onRevealClick={''} />
                            <RemoveBtn onRemoveClick={''} />
                            <SubmitBtn onSubmitClick={''} />
                        </div>
                    </div>
                </div>
            </div>
        </BGContainer>
    )
}

export default Quest2