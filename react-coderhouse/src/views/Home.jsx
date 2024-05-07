//src/views/Home.jsx
import React from 'react';
import { useSearchParams } from "react-router-dom";
import ItemListContainer from '../components/ItemListContainer';

const Home = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  return (
    <div>
      <ItemListContainer categoryId={category} greeting={`Welcome to Agilito's store! Showing ${category || "all items"}`} />
    </div>
  );
};

export default Home;