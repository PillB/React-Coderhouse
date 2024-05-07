//src/components/NavBar.jsx
import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import { db } from '../FirebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import CartWidget from './CartWidget';

const NavBar = () => {
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "categories"));
                const categoryList = querySnapshot.docs.map(doc => {
                    console.log(doc.data());  // Debug: Log each category data
                    return doc.data().name;
                });
                setCategories(categoryList);
                console.log(categoryList);  // Debug: Log fetched categories list
            } catch (error) {
                console.error("Error fetching categories: ", error);
            }
        };

        fetchCategories();
    }, []);

    const handleCategoryClick = (category) => {
        navigate(`/?category=${category}`);
    };

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand as={NavLink} to="/">Agilito</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {categories.length > 0 ? (
                            categories.map(category => (
                                <Nav.Link key={category} onClick={() => handleCategoryClick(category)}>
                                    {category}
                                </Nav.Link>
                            ))
                        ) : (
                            <p>No categories found</p>  // Debug: Display when no categories are fetched
                        )}
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
