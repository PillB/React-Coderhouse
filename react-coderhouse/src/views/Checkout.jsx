// src/views/Checkout.jsx
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../FirebaseConfig';
import { collection, addDoc } from "firebase/firestore";
import { Button, Form, Alert, ListGroup } from 'react-bootstrap';
import { CartContext } from '../context/cartContext';

export const Checkout = () => {
  const [order, setOrder] = useState({
      name: '', email: '', confirmEmail: '', phone: '', address: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { cartItems, total, clearCart } = useContext(CartContext);

  console.log("Cart items in checkout:", cartItems);

  const handleChange = (e) => {
      const { name, value } = e.target;
      setOrder(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      if (order.email !== order.confirmEmail) {
          setError('Emails do not match!');
          return;
      }
      const fullOrder = {
          buyer: order, items: cartItems, total, date: new Date().toISOString()
      };

      const orderCollection = collection(db, "orders");
      addDoc(orderCollection, fullOrder)
          .then(({ id }) => {
              clearCart();
              navigate(`/detail/${id}`);
          })
          .catch(error => {
              console.error("Error adding document: ", error);
              setError('Failed to submit order. Please try again.');
          });
  };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" value={order.name} onChange={handleChange} required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" value={order.email} onChange={handleChange} required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Confirm Email</Form.Label>
              <Form.Control type="email" name="confirmEmail" value={order.confirmEmail} onChange={handleChange} required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Phone</Form.Label>
              <Form.Control type="text" name="phone" value={order.phone} onChange={handleChange} required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" name="address" value={order.address} onChange={handleChange} required />
            </Form.Group>
            <ListGroup className="mb-3">
                {cartItems.map((item, index) => (
                    <ListGroup.Item key={index}>
                        {item.quantity} x {item.title} - ${item.price.toFixed(2)} each
                    </ListGroup.Item>
                ))}
                <ListGroup.Item>
                    Total: ${total.toFixed(2)}
                </ListGroup.Item>
            </ListGroup>
            {error && <Alert variant="danger">{error}</Alert>}
            <Button type="submit" disabled={!order.name || !order.email || !order.phone || !order.address || order.email !== order.confirmEmail || cartItems.length === 0}>Submit Order</Button>
        </Form>
    );
};

export default Checkout;
