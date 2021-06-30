import Child from './Child';
import Penguin from './Penguin';

const ChildManager = ({ numProp, arrayProp, objectProp, objectList }) => {
    return (
        <div>
            <h2>Child Manager</h2>
            <p>Number passed in - {numProp}</p>
            {/* <p>Array passed in - {arrayProp}</p> */}
            {arrayProp.map((colour) => (
                <Child stringProp={colour} />
            ))}

            <h3>Penguin Object Property</h3>
            <p>
                Penguin name is - {objectProp.name.toString()} <br />
                Penguin has happy feet - {objectProp.happyFeet.toString()} <br />
                Penguin age is - {objectProp.age.toString()}
            </p>

            {objectList.map((penguin) => (
                <Penguin name={penguin.name} happyFeet={penguin.happyFeet} age={penguin.age} />
            ))}
        </div>
    )
}

export default ChildManager
