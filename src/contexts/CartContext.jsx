import React, { useContext, createContext, useState } from "react";

//Create the context
export const CartContext = createContext();

//Export the provider as a named export
export const CartProvider = ({children}) => {
    const [total, setTotal] = useState(0);

    //value to be passed to provider consumers
    const value = {total, setTotal};

    return(
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

//Custom hook to consume the context
export const useCart = () => useContext(CartContext);
