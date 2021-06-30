const HelloWorld = () => {

    let name = "Amandeep";
    let favouriteMovie = "John Wick";
    let pineappleOnPizza = "No pineapple on pizza";
    let date = new Date();

    return (
        <div className="App-logo">
            <h2>Hello everyone, this is my profile</h2>
            <h4>My name is {name}</h4>
            <p>My favourite movie is {favouriteMovie}</p>
            <p>{pineappleOnPizza}</p>
            <p>The current date is {date.toLocaleDateString()}</p>
        </div>
    );
}

export default HelloWorld;