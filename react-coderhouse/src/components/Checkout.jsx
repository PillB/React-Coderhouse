// src/components/Checkout.jsx
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

export const Checkout = () => {
  const [order, setOrder] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrder(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submit order', order);
    // Here you would typically handle the order submission to Firebase
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" value={order.name} onChange={handleChange} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name="email" value={order.email} onChange={handleChange} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Phone</Form.Label>
        <Form.Control type="text" name="phone" value={order.phone} onChange={handleChange} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" name="address" value={order.address} onChange={handleChange} />
      </Form.Group>
      <Button type="submit">Submit Order</Button>
    </Form>
  );
};

export default Checkout;
