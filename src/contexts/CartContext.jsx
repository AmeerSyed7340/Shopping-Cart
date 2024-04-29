import React, { useContext, createContext, useState } from "react";

//Create the context
export const CartContext = createContext();

//Export the provider as a named export
export const CartProvider = ({ children }) => {
  const [total, setTotal] = useState(0);
  const [products, setProducts] = useState([]);

  //value to be passed to provider consumers
  const value = {
    total,
    setTotal,
    products,
    setProducts,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

//Custom hook to consume the context
export const useCart = () => useContext(CartContext);
