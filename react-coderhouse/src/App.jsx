// src/App.js
import React from 'react';
import NavBar from './components/Navbar';
import ItemListContainer from './ItemListContainer';

const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Bienvenido a la tienda de Agilito!" />
    </div>
  );
};

export default App;
