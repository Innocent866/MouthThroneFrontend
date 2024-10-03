import React, { createContext, useState, useEffect } from "react";

const CartContext = createContext();

const cartItemsFromLocalStorage = JSON.parse(localStorage.getItem("cart")) || [];

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(cartItemsFromLocalStorage);

  // Add item to cart
  const handleAddToCart = (product) => {
    const productSelected = cart.find(
      (singleCart) => singleCart._id === product._id
    );
    if (productSelected) {
      setCart(
        cart.map((oneItem) =>
          oneItem._id === product._id
            ? {
                ...productSelected,
                quantity: productSelected.quantity + 1,
              }
            : oneItem
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]); // Spread cart inside an array
    }
  };

  // Increase quantity in the cart
  const handleIncrease = (product) => {
    const productSelected = cart.find(
      (singleCartItem) => singleCartItem._id === product._id
    );
    if (productSelected) {
      setCart(
        cart.map((oneItem) =>
          oneItem._id === product._id
            ? { ...productSelected, quantity: productSelected.quantity + 1 }
            : oneItem
        )
      );
    }
  };

  // Decrease quantity in the cart
  const handleDecrease = (product) => {
    const productSelected = cart.find(
      (singleCartItem) => singleCartItem._id === product._id
    );
    if (productSelected && productSelected.quantity > 1) {
      setCart(
        cart.map((dd) =>
          dd._id === product._id
            ? { ...productSelected, quantity: productSelected.quantity - 1 }
            : dd
        )
      );
    }
  };

  // Remove item from the cart
  const removeItem = (id) => {
    const updatedCart = cart.filter((cartItem) => cartItem._id !== id);
    setCart(updatedCart);
  };

  // Calculate total price
  const totalPrice = cart.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );

  // Persist cart in localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        handleAddToCart,
        cart,
        setCart,
        handleIncrease,
        handleDecrease,
        totalPrice,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
