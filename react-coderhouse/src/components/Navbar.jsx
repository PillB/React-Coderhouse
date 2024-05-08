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
        const fetchItemsAndExtractCategories = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "items"));
                const extractedCategories = new Set();
                querySnapshot.forEach(doc => {
                    const itemData = doc.data();
                    if (itemData.category) {
                        extractedCategories.add(itemData.category);
                    }
                });
                setCategories([...extractedCategories]); // Convert Set to Array
                console.log([...extractedCategories]); // Debug: Log categories
            } catch (error) {
                console.error("Error fetching items and extracting categories: ", error);
            }
        };

        fetchItemsAndExtractCategories();
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
                        {categories.map(category => (
                            <Nav.Link key={category} onClick={() => handleCategoryClick(category)}>
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

