import React from 'react';
import Product from './Product';
import './shopCart.css';

const ShopCart = ({ shopCart }) => (
    <div className="shopCart">
        <h2>Shop Cart</h2>
        {shopCart.map(product => (
            <Product key={product.id} product={product}></Product>
        ))}
    </div>
);  

export default ShopCart;