// src/components/ItemList.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

const ItemList = ({ items }) => {
  return (
    <div className="d-flex flex-wrap">
      {items.map(item => (
        <Card key={item.id} className="m-2" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={item.image} height="200"  className="responsive-img"/>
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
            <Link to={`/products/${item.id}`}>
              <Button variant="primary">View Details</Button>
            </Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default ItemList;

