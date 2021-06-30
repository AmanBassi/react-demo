import React from 'react'

const Form = (props) => {

    const { textProp, submitProp, updateProp } = props;

    return (
        <div>
            <h2>Form</h2>
            <form onSubmit={submitProp}>
                <label htmlFor="displayText">Text to display: </label>
                <input type="text" value={textProp} onChange={updateProp} name="displayText" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form
