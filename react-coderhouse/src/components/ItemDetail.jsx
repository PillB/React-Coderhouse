// src/components/ItemDetail.jsx
import React, { useState, useContext } from 'react';
import { Button } from 'react-bootstrap';
import { CartContext } from './context/CartContext.jsx'; // Assuming you have addToCart function

export const ItemDetail = ({ item }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart({ ...item, quantity });
  };

  return (
    <div>
      <h2>{item.title}</h2>
      <img src={item.image} alt={item.title} style={{ width: '100%' }} />
      <p>{item.description}</p>
      <div>
        <Button onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</Button>
        <span> {quantity} </span>
        <Button onClick={() => setQuantity(q => q + 1)}>+</Button>
      </div>
      <Button onClick={handleAddToCart}>Add to Cart</Button>
    </div>
  );
};

export default ItemDetail;
