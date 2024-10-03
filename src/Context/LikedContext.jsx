import React, { createContext, useState, useEffect } from "react";

const LikedContext = createContext();

const likedItemsFromLocalStorage = JSON.parse(localStorage.getItem("liked")) || [];

export const LikedProvider = ({ children }) => {
  const [liked, setLiked] = useState(likedItemsFromLocalStorage);

  // Add item to liked
  const handleAddToLiked = (product) => {
    const productSelected = liked.find(
      (singleCart) => singleCart._id === product._id
    );
    if (productSelected) {
      setLiked(
        liked.map((oneItem) =>
          oneItem._id === product._id
            ? {
                ...productSelected,
                quantity: productSelected.quantity + 1, // Assuming you want to track quantities in liked items
              }
            : oneItem
        )
      );
    } else {
      setLiked([...liked, { ...product, quantity: 1 }]);
    }
  };

  // Remove item from the liked
  const removeLiked = (id) => {
    const updatedLiked = liked.filter((cartItem) => cartItem._id !== id);
    setLiked(updatedLiked);
  };

  // Persist liked in localStorage
  useEffect(() => {
    localStorage.setItem("liked", JSON.stringify(liked));
  }, [liked]);

  return (
    <LikedContext.Provider
      value={{
        handleAddToLiked,
        liked,
        setLiked,
        removeLiked,
      }}
    >
      {children}
    </LikedContext.Provider>
  );
};

export default LikedContext;
