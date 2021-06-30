

const Beer = ({ beer }) => {
    return (
        <div>
            <h4>{beer.name}</h4>
            <img src={beer.image_url} alt={beer.name} width="100" />
            <h5>ABV: {beer.abv}</h5>
            {beer.food_pairing.map((food) => (
                <p>{food}</p>
            ))}
        </div>
    )
}

export default Beer
