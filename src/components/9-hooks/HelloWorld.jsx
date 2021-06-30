import { useState, useEffect } from "react";

const HelloWorld = () => {

    const [name, setName] = useState('');
    const [finalName, setFinalName] = useState('');

    const [number, setNumber] = useState('');
    const [finalNumber, setFinalNumber] = useState('');

    const submitNameNumber = () => {
        setFinalName(name);
        setFinalNumber(number);
        setName('');
        setNumber('');
    }

    useEffect(() => {
        console.log(finalName);
        console.log(finalNumber);
    }, [finalName, finalNumber])

    return (
        <div>
            <h3>Hello World</h3>

            <form onSubmit={(event) => (event.preventDefault())}>
                <label htmlFor="nameInput">Name: </label>
                <input type="text" name="nameInput" value={name} onChange={(event) => setName(event.target.value)} />
                <label htmlFor="numberInput">Number: </label>
                <input type="number" name="numberInput" value={number} onChange={(event) => setNumber(event.target.value)} />
                <button type="button" onClick={submitNameNumber}>Print out name</button>
            </form>

            <p>
                name: <b>{name}</b> <br />
                final name: <b>{finalName}</b> <br />
                number: <b>{number}</b> <br />
                final number: <b>{finalNumber}</b>
            </p>

        </div>
    )
}

export default HelloWorld
