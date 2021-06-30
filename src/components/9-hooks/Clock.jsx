import { useState, useEffect } from "react";

const Clock = () => {

    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        setTimeout(tick, 1000);
    }, [time]);

    const tick = () => {
        setTime(new Date().toLocaleTimeString());
    }

    return (
        <div>
            <h3>Clock</h3>
            <p>time: {time}</p>
        </div>
    )
}

export default Clock
