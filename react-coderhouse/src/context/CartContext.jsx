// src/context/CartContext.jsx
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        console.log("Cart input product:",product)
        setCartItems(prevItems => {
            const itemIndex = prevItems.findIndex(item => item.title === product.title);
            if (itemIndex !== -1) {
                // Update the quantity for existing product
                const newItems = [...prevItems];
                newItems[itemIndex] = {
                    ...newItems[itemIndex],
                    quantity: newItems[itemIndex].quantity + product.quantity
                };
                return newItems;
            } else {
                // Add new product with the provided quantity
                return [...prevItems, { ...product, quantity: product.quantity }];
            }
        });
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const total = cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);

    return (
        <CartContext.Provider value={{ cartItems, total, addToCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
