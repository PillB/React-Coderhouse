// src/components/ItemListContainer.jsx
import React, { useState, useEffect } from 'react';
import { db } from './firebaseConfig.jsx';
import { collection, getDocs } from "firebase/firestore";
import ItemList from './ItemList';

export const ItemListContainer = ({ greeting }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const itemsCollection = collection(db, "items");
        getDocs(itemsCollection)
            .then(snapshot => {
                const itemList = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setItems(itemList);
            })
            .catch(error => {
                console.error("Error fetching items: ", error);
            });
    }, []);

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList items={items} />
        </div>
    );
};

export default ItemListContainer;
