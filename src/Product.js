import React from 'react';

const Product = ({ product, products, shopCart, setShopCart }) => {
    const {
        id,
        name,
        price,
        quantity
    } = product;

    const addProduct = id => {
        const productFiltered = products.filter(product => product.id === id);
        setShopCart([
            ...shopCart,
            productFiltered[0]
        ]);
    }

    return (
        <div>
            <p>{`${name} - ${price} - ${quantity}`}</p>
            <button type="button" onClick={() => addProduct(id)}>
                Comprar
            </button>
        </div>
    );
};

export default Product;