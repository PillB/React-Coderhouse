// src/context/CartContext.jsx
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState(0);

    const addToCart = (item) => {
        setCartItems(prevItems => [...prevItems, item]);
        setTotal(prevTotal => prevTotal + item.price * item.quantity);
    };

    const clearCart = () => {
        setCartItems([]);
        setTotal(0);
    };

    const value = {
        cartItems,
        total,
        addToCart,
        clearCart
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};
