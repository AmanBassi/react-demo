
const Penguin = ({ name, happyFeet, age }) => {
    return (
        <div>
            <h4>Penguin Child Component</h4>
            <p>
                Penguin name is - {name.toString()} <br />
                Penguin has happy feet - {happyFeet.toString()} <br />
                Penguin age is - {age.toString()}
            </p>
        </div>
    )
}

export default Penguin
