import React from "react";
import { useCart } from "react-use-cart";
import "./Cart.css";

const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  if (isEmpty)
    return <div className="cart-wrapper empty-cart">Cart is empty</div>;

  return (
    <section className="cart-wrapper">
        <div>
          <h5>
            Cart({totalUniqueItems} total Items:({totalItems}))
          </h5>
          {items.map((productList) => {
            return (
              <section  className="cart-card" key={productList.id}>
                <img src={productList.image} alt={productList.name} style={{ height: "6rem" }} />
                <h3>{productList.title}</h3>
                <div className="main-info">
                  <p>Price: {productList.price} sek</p>
                  <p>In cart: ({productList.quantity})</p>
                </div>
                <div>
                  <button
                    onClick={() =>
                      updateItemQuantity(
                        productList.id,
                        productList.quantity - 1
                      )
                    }
                  >
                    -
                  </button>
                  <button
                    onClick={() =>
                      updateItemQuantity(
                        productList.id,
                        productList.quantity + 1
                      )
                    }
                  >
                    +
                  </button>
                  <button onClick={() => removeItem(productList.id)}>
                    Remove Item
                  </button>
                </div>
              </section>
            );
          })}
        </div>
        <div>
          <h2>Total Price: {cartTotal} SEK</h2>
        </div>
        <div>
          <button onClick={() => emptyCart()}>Clear cart</button>
        </div>
    </section>
  );
};

export default Cart;
