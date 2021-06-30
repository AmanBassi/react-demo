import { useParams } from "react-router-dom";

const Product = () => {
    const { id } = useParams();

    return (
        <div>
            <h3>Product page</h3>
            <p>product id: {id}</p>
        </div>
    )
}

export default Product
