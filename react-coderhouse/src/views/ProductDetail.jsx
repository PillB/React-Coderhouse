//src/views/ProductDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../FirebaseConfig';  // Ensure this path is correct
import { doc, getDoc } from 'firebase/firestore';

export const ProductDetail = () => {
    const [product, setProduct] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchProduct = async () => {
            const docRef = doc(db, "items", id);  // Assume 'items' is your collection name
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setProduct(docSnap.data());
            } else {
                console.log("No such document!");
                setProduct(null);
            }
        };

        fetchProduct();
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;  // Consider enhancing this with better UI/UX
    }

    return (
        <main>
            <h1>Detalle del producto:</h1>
            <h2>{product.title}</h2>
            <img width={300} src={product.image} alt={product.title} />
            <p>Description: {product.description}</p>
            <p>Price: {product.stock}</p>
            <p>Stock: {product.price}</p>
        </main>
    );
};

export default ProductDetail;
