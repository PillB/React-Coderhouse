// Navbar code
import React from 'react';
import { CartWidget } from './CartWidget';

export const NavBar = () => {
  return (
    <>
      <h8>Agilito</h8>
      <ul>
        <li><a href="">Categoria 1</a></li>
        <li><a href="">Categoria 2</a></li>
        <li><a href="">Categoria 3</a></li>
      </ul>
      <CartWidget />
    </>
  );
};

export default NavBar;
