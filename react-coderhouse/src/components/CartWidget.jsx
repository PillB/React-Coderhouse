// src/components/CartWidget.jsx
import React, { useContext } from 'react';
import { CartContext } from '../context/cartContext';

export const CartWidget = () => {
    const context = useContext(CartContext);

    if (!context) {
        console.error('CartWidget must be used within a CartProvider');
        return null;
    }

    const { cartItems } = context;
    const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    const itemDetails = cartItems.map(item => `${item.quantity} x ${item.name}`).join(', ');

    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Ic_shopping_cart_48px.svg/48px-Ic_shopping_cart_48px.svg.png" alt="Cart"/>
            {itemCount > 0 && (
                <>
                    <span>{itemCount} items</span>
                    <span>({itemDetails})</span>
                </>
            )}
        </div>
    );
};

export default CartWidget;
