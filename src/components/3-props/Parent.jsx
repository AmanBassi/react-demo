import ChildManager from './complex/ChildManager';

const Parent = () => {

    const numVal = 5;

    const colourList = ["orange", "blue", "purple", "yellow", "black", "white", "red", "green"];

    const penguinVal = {
        name: "Tony",
        happyFeet: true,
        age: 7
    }

    const pengiunList = [
        {
            name: "Skipper",
            happyFeet: false,
            age: 8
        },
        {
            name: "Kowalski",
            happyFeet: false,
            age: 7
        },
        {
            name: "Rico",
            happyFeet: true,
            age: 5
        },
        {
            name: "Private",
            happyFeet: true,
            age: 4
        }
    ];

    return (
        <div>
            <h1>Parent</h1>
            <ChildManager numProp={numVal} arrayProp={colourList} objectProp={penguinVal} objectList={pengiunList} />
        </div>
    )
}

export default Parent
