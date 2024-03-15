// Navbar code
import React from 'react';
import { CartWidget } from './CartWidget'; // Make sure to create this component

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <h8>Agilito</h8>
      <ul>
        <li><a href="">Categoria 1</a></li>
        <li><a href="">Categoria 2</a></li>
        <li><a href="">Categoria 3</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
