
import { useState } from 'react'
import Child from './Child'

function Manager() {

    const [username, setUsername] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        //const dataToSend = JSON.stringify({ username });
        setUsername('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit} action="">
                <label htmlFor="username">Username: </label>
                <input type="text" id="username" name="username" value={username} onChange={(event) => setUsername(event.target.value)} />
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>

            <h1>Manager</h1>
            <Child username={username} />
        </div>
    )
}

export default Manager
