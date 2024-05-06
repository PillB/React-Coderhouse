// src/components/ItemDetailContainer.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../FirebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (id) {  // Check if `id` is not undefined
            const fetchItem = async () => {
                const docRef = doc(db, "items", id);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setItem(docSnap.data());
                    setLoading(false);
                } else {
                    console.log("No such document!");
                    setLoading(false);
                }
            };

            fetchItem();
        } else {
            console.log("Document ID is undefined.");
            setLoading(false);
        }
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!item) {
        return <div>No item found or invalid item ID.</div>;
    }

    return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
