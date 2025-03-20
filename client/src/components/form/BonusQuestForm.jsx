import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton'; 

function BonusQuestForm() {
    const [answer, setAnswer] = useState('');
    const [checked, setChecked] = useState(false);

    const choices = [
        { name: 'True', value: 'true'} ,
        { name: 'False', value: 'false'}
    ];

    // TODO: Implementation here

  return (
    <ButtonGroup className="mb-2">
        { choices.map((choice, idx) => {
            <ToggleButton 
                key={idx}
                id={'choice-${idx}'}
                type="radio"
                variant="secondary"
                name="radio"
                value={choice.value}
                checked={choiceValue ===choice.value}
                onChange={(e) => setChecked(e.currentTarget.value)}
            >
            {choice.name}
            </ToggleButton>
        })
    }
    </ButtonGroup>
  )
}

export default BonusQuestForm;