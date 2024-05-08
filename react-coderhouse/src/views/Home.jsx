//src/views/Home.jsx
import React from 'react';
import { useSearchParams } from "react-router-dom";
import ItemListContainer from '../components/ItemListContainer';

const Home = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  // Create a conditional greeting based on whether a category is selected.
  const greeting = category ? `Welcome to Agilito's store! Showing ${category}` : "Welcome to Agilito's store!";

  return (
    <div>
      <ItemListContainer categoryId={category} greeting={greeting} />
    </div>
  );
};

export default Home;
