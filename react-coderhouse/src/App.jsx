//src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './views/Home';  
import Checkout from './views/Checkout'; 
import ProductDetail from './views/ProductDetail';
import Detail from './views/Detail';
import Error404 from './views/Error404'; 
import { CartProvider } from './context/cartContext';
import { CategoryProvider } from './context/categoryContext';

const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <CategoryProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/category/:categoryId" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </CategoryProvider>
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;
