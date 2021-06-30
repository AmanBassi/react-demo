import { useState } from 'react';
import Child from './Child';

const Counter = () => {

    const [count, setCount] = useState(7);

    console.log(count);
    console.log(setCount);

    // setCount(4);
    // console.log(`Count is ${count}`)

    return (
        <div>
            <h1>Counter</h1>
            <Child count={count} />
        </div>
    )
}

export default Counter
