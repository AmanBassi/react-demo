const Car = ({ model, power, convertable }) => {
    return (
        <div>
            <h4>Car</h4>
            <p>model: {model}</p>
            <p>power: {power}</p>
            <p>convertable: {convertable.toString()}</p>
        </div>
    );
}

export default Car;