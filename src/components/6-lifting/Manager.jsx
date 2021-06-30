import { useState } from 'react'
import React from 'react'
import Form from './Form'
import Display from './Display'

const Manager = () => {

    const [text, setText] = useState('');
    const [displayText, setDisplayText] = useState('');

    const handleText = (event) => {
        setText(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventdefault();
        setDisplayText(text);
        setText('');
    }

    return (
        <div>
            <h2>Manager</h2>
            <Form textProp={text} submitProp={handleSubmit} updateProp={handleText} />
            <Display text={displayText} />
        </div>
    )
}

export default Manager
