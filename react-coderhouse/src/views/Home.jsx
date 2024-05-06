import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Container, Card, Button } from "react-bootstrap";
import { db } from '../FirebaseConfig';  // Ensure this import is correct
import { collection, getDocs, query, where } from "firebase/firestore";

export const Home = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let q = collection(db, "items");
        if (categoryId) {
          q = query(q, where("category", "==", categoryId));
        }
        const querySnapshot = await getDocs(q);
        const productList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setProducts(productList);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [categoryId]);

  return (
    <Container>
      <h1>HOME</h1>
      <Link to="/checkout">
        <button className="btn btn-primary">Ir a Carrito de Compras</button>
      </Link>
      <Container className="d-flex flex-wrap">
        {products.map((product) => (
          <Card key={product.id} style={{ width: '18rem', margin: '10px' }}>
            <Card.Img variant="top" src={product.image} height="200" />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Link to={`/products/${product.id}`}>
                <Button variant="primary">View Details</Button>
              </Link>
            </Card.Body>
          </Card>
        ))}
      </Container>
    </Container>
  );
};

export default Home;
