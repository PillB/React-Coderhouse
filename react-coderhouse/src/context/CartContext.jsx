// src/context/CartContext.jsx
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems(prevItems => {
            const existingIndex = prevItems.findIndex(item => item.id === product.id);
            if (existingIndex >= 0) {
                // Deep copy and update the item if it exists
                const updatedItems = [...prevItems];
                updatedItems[existingIndex] = {
                    ...updatedItems[existingIndex],
                    quantity: updatedItems[existingIndex].quantity + 1
                };
                console.log(`Updated quantity for ${product.title}:`, updatedItems);
                return updatedItems;
            } else {
                // Add as new item
                const newItems = [...prevItems, { ...product, quantity: 1 }];
                console.log(`Added new product ${product.title}:`, newItems);
                return newItems;
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
