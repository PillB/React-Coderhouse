// src/views/Detail.jsx
import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../FirebaseConfig';
import { doc, getDoc } from "firebase/firestore";
import { Container, ListGroup, ListGroupItem } from 'react-bootstrap';
import { CartContext } from '../context/cartContext';

export const Detail = () => {
    const { id: orderId } = useParams();  // Correct parameter extraction
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const { cartItems, total, clearCart } = useContext(CartContext);

    useEffect(() => {
        if (orderId) {
            const getOrder = async () => {
                try {
                    const orderDoc = doc(db, "orders", orderId);
                    const docSnap = await getDoc(orderDoc);
                    if (docSnap.exists()) {
                        setOrder(docSnap.data());
                        console.log("Last order",docSnap.data());
                    } else {
                        console.log("No such document!");
                        setError("No order found with the provided ID.");
                    }
                    setLoading(false);
                } catch (err) {
                    console.error("Firestore read error:", err);
                    setError("Failed to load order details.");
                    setLoading(false);
                }
            };

            getOrder();
        }
    }, [orderId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <Container><Alert variant="danger">{error}</Alert></Container>;
    }

    return (
        <Container>
            <h1>Order Summary</h1>
            <h2>Order ID: {orderId}</h2>
            <ListGroup>
                <ListGroupItem>Name: {order?.buyer.name}</ListGroupItem>
                <ListGroupItem>Email: {order?.buyer.email}</ListGroupItem>
                <ListGroupItem>Phone: {order?.buyer.phone}</ListGroupItem>
                <ListGroupItem>Address: {order?.buyer.address}</ListGroupItem>
                <ListGroupItem>Total: ${order?.total}</ListGroupItem>
                <ListGroupItem>Date: {order?.date}</ListGroupItem>
                <ListGroup className="mb-3">
                {order?.items.map((item, index) => (
                    <ListGroup.Item key={index}>
                       {item.title} - Quantity: {item.quantity} - Price: ${item.price.toFixed(2)} each - Total: ${(item.quantity * item.price).toFixed(2)}
                    </ListGroup.Item>
                ))}
                <ListGroup.Item>
                    Total: ${order?.total.toFixed(2)}
                </ListGroup.Item>
            </ListGroup>
            </ListGroup>
        </Container>
    );
};

export default Detail;
