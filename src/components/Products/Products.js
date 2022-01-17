import React from "react";
import "./Products.css";
import { useCart } from "react-use-cart";

const Products = ({ productList }) => {
  const { addItem } = useCart();

  return (
    <div className="products">
      {productList.map((productList) => (
        <div className="product-card">
          <div>
            <img
              className="product-image"
              src={productList.image}
              alt={productList.name}
            ></img>
          </div>
          <div>
            <h3 className="product-name">{productList.name}</h3>
          </div>
          <div>
            <h3 className="product-price">Price: {productList.price} sek</h3>
          </div>

          <div>
            <button
              className="product-add-button"
              onClick={() => addItem(productList)}
            >
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
