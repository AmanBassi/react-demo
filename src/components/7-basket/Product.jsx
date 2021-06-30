import React, { useState } from 'react';

const Product = ({ addToBasket }) => {

    const [productName, setProductName] = useState('');
    const [quantity, setQuantity] = useState('');

    const add = (event) => {
        event.preventDefault();
        const product = {
            productName: productName,
            quantity: quantity
        }
        addToBasket(product);
        setProductName('');
        setQuantity('');
    }

    return (
        <div>
            <h3>Product</h3>
            <form onSubmit={add}>
                <label htmlFor="productNameInput">Enter product name: </label>
                <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} name="productNameInput" />

                <label htmlFor="quantityInput">Enter product quantity: </label>
                <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} name="quantityInput" />

                <button type="submit">Add product</button>
            </form>
        </div>
    )
}

export default Product
