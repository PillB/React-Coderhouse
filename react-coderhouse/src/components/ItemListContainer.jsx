// src/components/ItemListContainer.jsx
import React, { useState, useEffect } from 'react';
import { db } from '../FirebaseConfig';
import { collection, query, where, getDocs } from "firebase/firestore";
import ItemList from './ItemList';

export const ItemListContainer = ({ greeting, categoryId }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            const itemsCollectionRef = collection(db, "items");
            const q = categoryId 
                ? query(itemsCollectionRef, where("category", "==", categoryId))
                : itemsCollectionRef;

            try {
                const querySnapshot = await getDocs(q);
                const itemList = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setItems(itemList);
            } catch (error) {
                console.error("Error fetching items: ", error);
            }
        };

        fetchItems();
    }, [categoryId]);

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList items={items} />
        </div>
    );
};

export default ItemListContainer;
