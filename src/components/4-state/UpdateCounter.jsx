import { useState } from 'react';
import Child from './Child';

const Counter = () => {

    const [count, setCount] = useState(7);

    const addTwo = () => {
        console.log("Increment function called");
        setCount((num) => num + 2);
    }

    const subTwo = () => {
        console.log("Subtract function called");
        setCount((num) => num - 2);
    }

    const multipleByTwo = () => {
        console.log("Multiplication function called");
        setCount((num) => num * 2);
    }

    const divideByTwo = () => {
        console.log("Division function called");
        setCount((num) => num / 2);
    }

    return (
        <div>
            <h1>Counter</h1>
            <button onClick={addTwo}>Increment Counter</button>
            <button onClick={subTwo}>Subtract Counter</button>
            <button onClick={multipleByTwo}>Multiple Counter</button>
            <button onClick={divideByTwo}>Divide Counter</button>
            <Child count={count} />
        </div>
    )
}

export default Counter
