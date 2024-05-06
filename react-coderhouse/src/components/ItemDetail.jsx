// src/components/ItemDetail.jsx
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

export const ItemDetail = ({ item }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div>
      <h2>{item.title}</h2>
      <img src={item.image} alt={item.title} style={{ width: '100%' }} />
      <p>{item.description}</p>
      <div>
        <button onClick={() => setQuantity(q => q + 1)}>+</button>
        <span>{quantity}</span>
        <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
      </div>
      <Button onClick={() => console.log('Add to cart logic here')}>Add to Cart</Button>
    </div>
  );
};

export default ItemDetail;
