import React from 'react';
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './views/Home';  
import Checkout from './views/Checkout'; 
import ProductDetail from './views/ProductDetail'; 
import Error404 from './views/Error404'; 

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <ItemListContainer greeting="Bienvenido a la tienda de Agilito!" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/category/:categoryId" element={<Home />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
