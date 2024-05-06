// src/components/ItemDetail.jsx
import React, { useState, useContext } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import { CartContext } from '../context/cartContext';

const ItemDetail = ({ item }) => {
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useContext(CartContext);

    const handleAddToCart = () => {
        addToCart({ ...item, quantity });
        alert(`Added ${quantity} ${item.title} to the cart.`);
    };

    return (
        <Card className="m-2" style={{ maxWidth: '500px' }}>
            <Card.Img variant="top" src={item.image} alt={item.title} />
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Card.Text>Price: ${item.price}</Card.Text>
                <Form>
                    <Form.Group controlId="formQuantity">
                        <Form.Label>Quantity</Form.Label>
                        <Form.Control
                            type="number"
                            value={quantity}
                            onChange={e => setQuantity(Math.max(1, parseInt(e.target.value)))}
                            min="1"
                            style={{ width: '100px' }}
                        />
                    </Form.Group>
                    <Button variant="primary" onClick={handleAddToCart}>Add to Cart</Button>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default ItemDetail;
