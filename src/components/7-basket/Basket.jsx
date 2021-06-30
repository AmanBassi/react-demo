
function Basket({ info }) {
    return (
        <div>
            <h3>Basket</h3>
            {info.map((product) => (
                <div>
                    <p>
                        Product name: {product.productName} <br />
                        Quanitiy: {product.quantity}
                    </p>
                </div>
            ))}
        </div>
    )
}

export default Basket
