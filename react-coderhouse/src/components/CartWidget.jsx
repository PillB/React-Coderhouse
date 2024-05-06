// src/components/CartWidget.jsx
import React, { useContext } from 'react';
import { CartContext } from '../context/cartContext';

export const CartWidget = () => {
    const { cartItems } = useContext(CartContext);
    const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    const itemDetails = cartItems.reduce((acc, item) => {
        const title = item.title || 'Unknown Item';
        acc[title] = (acc[title] || 0) + item.quantity;
        return acc;
    }, {});

    const formattedItemDetails = Object.entries(itemDetails)
        .map(([title, qty]) => `${qty} x ${title}`)
        .join(', ');

    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Ic_shopping_cart_48px.svg/48px-Ic_shopping_cart_48px.svg.png" alt="Cart"/>
            {itemCount > 0 && (
                <>
                    <span>{itemCount} items</span>
                    <span>({formattedItemDetails})</span>
                </>
            )}
        </div>
    );
};

export default CartWidget;
