// src/views/Detail.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from './firebaseConfig';
import { doc, getDoc } from "firebase/firestore";
import { Container, ListGroup, ListGroupItem } from 'react-bootstrap';

export const Detail = () => {
    const { orderId } = useParams();
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getOrder = async () => {
            const orderDoc = doc(db, "orders", orderId);
            const docSnap = await getDoc(orderDoc);
            if (docSnap.exists()) {
                setOrder(docSnap.data());
                setLoading(false);
            } else {
                console.log("No such document!");
                setLoading(false);
            }
        };

        getOrder();
    }, [orderId]);

    if (loading) {
        return <div>Loading...</div>;
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
                {order?.items.map((item, index) => (
                    <ListGroupItem key={index}>
                        {item.title} - Quantity: {item.quantity} - Price: ${item.price}
                    </ListGroupItem>
                ))}
            </ListGroup>
        </Container>
    );
};

export default Detail;
