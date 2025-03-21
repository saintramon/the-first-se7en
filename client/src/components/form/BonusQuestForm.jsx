import React, { useState, useEffect } from 'react';
import TrueOrFalse from '../buttons/TrueOrFalse';
import SubmitBtn from '../buttons/SubmitBtn';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function BonusQuestForm() {
    const handleSubmit = () =>{
        // IMPLEMENTATION HERE
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                < TrueOrFalse tValue={true} fValue={false} />
            </Form.Group>
        </Form>
    )
}

export default BonusQuestForm