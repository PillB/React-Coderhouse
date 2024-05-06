// src/components/NavBar.jsx
import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { db } from '../FirebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import CartWidget from './CartWidget';  // Ensure CartWidget is imported

export const NavBar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const querySnapshot = await getDocs(collection(db, "categories"));
            const categoryList = querySnapshot.docs.map(doc => doc.data().name);
            setCategories([...new Set(categoryList)]);
        };

        fetchCategories();
    }, []);

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand as={NavLink} to="/">Navbar</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                        {categories.map(category => (
                            <Nav.Link key={category} as={NavLink} to={`/category/${category}`}>
                                {category}
                            </Nav.Link>
                        ))}
                        <Nav.Link as={NavLink} to="/checkout">
                            <CartWidget />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
