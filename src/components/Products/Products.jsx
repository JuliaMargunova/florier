import React from 'react';
import Product from './Product';

const Products = () => {
    //console.log("answer ", productsAPI.getProducts());
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const products = data.map((i) => <li key={i}><Product /></li>);
    return (
        <ul className="popular-items-list">
            {products}
        </ul>
    )
}

export default Products;