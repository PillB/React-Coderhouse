// src/components/CartWidget.jsx
import React, { useContext, useMemo } from 'react';
import { CartContext } from '../context/cartContext';

export const CartWidget = () => {
  const { cartItems } = useContext(CartContext);
  console.log("Received cartItems:",cartItems)
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const itemDetails = useMemo(() => cartItems.reduce((acc, item) => {
    console.log("From cartItem got item:",item)
    console.log("From cartItem got acc:",acc)
      acc[item.title] = (acc[item.title] || 0) + item.quantity;
      console.log("From cartItem got acc after:",acc)
      return acc;
  }, {}), [cartItems]);

  const formattedItemDetails = Object.entries(itemDetails)
      .map(([title, qty]) => `${qty} x ${title}`)
      .join(', ');

  console.log("Cart items in widget:", formattedItemDetails);

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
