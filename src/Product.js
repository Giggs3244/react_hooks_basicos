import React from "react";

const Product = ({ product, products, shopCart, setShopCart }) => {
  const { id, name, price, quantity } = product;

  const addProduct = (id) => {
    const productFiltered = products.filter((product) => product.id === id);
    setShopCart([...shopCart, productFiltered[0]]);
  };

  const deleteProduct = (id) => {
    const productsFiltered = shopCart.filter((product) => product.id !== id);
    setShopCart(productsFiltered);
  };

  return (
    <div>
      <p>{`${name} - ${price} - ${quantity}`}</p>
      {products ? (
        <button type="button" onClick={() => addProduct(id)}>
          Comprar
        </button>
      ) : (
        <button type="button" onClick={() => deleteProduct(id)}>Eliminar</button>
      )}
    </div>
  );
};

export default Product;
