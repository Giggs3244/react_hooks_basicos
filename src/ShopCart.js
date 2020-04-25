import React from "react";
import Product from "./Product";
import "./shopCart.css";

const ShopCart = ({ shopCart, setShopCart }) => (
  <div className="shopCart">
    <h2>Shop Cart</h2>
    {shopCart.length === 0 ? (
      <p>No hay productos en el carro de compras</p>
    ) : (
      shopCart.map((product) => (
        <Product key={product.id} product={product} shopCart={shopCart} setShopCart={setShopCart}></Product>
      ))
    )}
  </div>
);

export default ShopCart;
