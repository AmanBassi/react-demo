import React, { useState } from 'react';
import Basket from './Basket';
import Product from './Product';

function BasketManager() {

    const [basket, setBasket] = useState([]);

    const addToBasket = (product) => {
        setBasket((basket) => [...basket, product])
    }

    return (
        <div>
            <h3>Basket Manager</h3>
            <Product addToBasket={addToBasket} />
            <Basket info={basket} />
        </div>
    )
}

export default BasketManager