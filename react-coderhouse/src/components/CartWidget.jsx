// src/components/CartWidget.jsx
import React from 'react';

export const CartWidget = () => {
  return (
    <div>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Ic_shopping_cart_48px.svg/96px-Ic_shopping_cart_48px.svg.png"/>{/* CartWidget icon */}
      <span>3</span> {/* Hardcoded item count */}
    </div>
  );
};

export default CartWidget;
