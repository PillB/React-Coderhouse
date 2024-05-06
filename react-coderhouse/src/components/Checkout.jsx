// src/components/Checkout.jsx
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from './firebaseConfig';
import { collection, addDoc } from "firebase/firestore";
import { Button, Form, Alert } from 'react-bootstrap';
import { CartContext } from './context/CartContext.jsx';

export const Checkout = () => {
  const [order, setOrder] = useState({
    name: '',
    email: '',
    confirmEmail: '',
    phone: '',
    address: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { cartItems, total, clearCart } = useContext(CartContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrder(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (order.email !== order.confirmEmail) {
      setError('Emails do not match!');
      return;
    }
    const fullOrder = {
      buyer: {
        name: order.name,
        email: order.email,
        phone: order.phone,
        address: order.address
      },
      items: cartItems,
      total: total,
      date: new Date().toISOString()
    };

    const orderCollection = collection(db, "orders");
    addDoc(orderCollection, fullOrder)
      .then(({ id }) => {
        clearCart();
        navigate(`/detail/${id}`); // Corrected path for detail view
      })
      .catch(error => {
        console.error("Error adding document: ", error);
        setError('Failed to submit order. Please try again.');
      });
  };

  const canSubmit = () => {
    return order.name && order.email && order.phone && order.address && order.email === order.confirmEmail && cartItems.length > 0;
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
      {error && <Alert variant="danger">{error}</Alert>}
      <Button type="submit" disabled={!canSubmit()}>Submit Order</Button>
    </Form>
  );
};

export default Checkout;
