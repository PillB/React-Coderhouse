//src/views/Home.jsx
import React, { useContext } from 'react';
import { CategoryContext } from '../context/categoryContext';
import ItemListContainer from '../components/ItemListContainer';

const Home = () => {
  const { category } = useContext(CategoryContext);

  return (
    <div>
      <ItemListContainer categoryId={category} greeting={`Welcome to Agilito's store! Showing ${category || "all items"}`} />
    </div>
  );
};

export default Home;

