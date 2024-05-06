//src/views/Products.jsx
import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import { db } from '../FirebaseConfig';  // Ensure this path is correct
import { collection, getDocs, query, where } from 'firebase/firestore';

export const Products = () => {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                let productsQuery = collection(db, "items");
                if (categoryId) {
                    productsQuery = query(productsQuery, where("category", "==", categoryId));
                }
                const querySnapshot = await getDocs(productsQuery);
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
        <ul>
            {products.map(product => (
                <li key={product.id}>
                    {product.name}
                    <Link to={`/products/${product.id}`}>
                        <button>Ver más</button>
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default Products;
