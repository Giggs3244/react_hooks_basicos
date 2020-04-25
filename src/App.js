import React, { Fragment, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Product from "./Product";
import ShopCart from "./ShopCart";
import "./App.css";

function App() {

  const [products, setProducts] = useState([
    { id: 1, name: "Soap", price: 25.2, quantity: 2 },
    { id: 2, name: "T-Shirt", price: 35.2, quantity: 3 },
  ]);

  const [shopCart, setShopCart] = useState([]);

  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <Header titulo="Basicos" />
      <h1>Lista de Productos</h1>
      {products.map(product => (
        <Product 
          key={product.id} 
          product={product}
          products={products}
          shopCart={shopCart}
          setShopCart={setShopCart}
        />
      ))}
      <ShopCart shopCart={shopCart} setShopCart={setShopCart}></ShopCart>
      <Footer fecha={fecha} />
    </Fragment>
  );
}

export default App;
