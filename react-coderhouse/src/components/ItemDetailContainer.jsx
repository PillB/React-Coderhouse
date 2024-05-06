// src/components/ItemDetailContainer.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';  // Ensure this is imported correctly

export const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      const response = await fetch(`/path-to-items/${itemId}.json`); // Adjust according to actual data source
      const data = await response.json();
      setItem(data);
    };

    fetchItem();
  }, [itemId]);

  if (!item) return <div>Loading...</div>;
  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
