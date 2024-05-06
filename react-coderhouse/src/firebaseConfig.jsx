// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDUV1iXNCU2aSaOPlot7jTMEarnNNPxhRc",
    authDomain: "coderhouse-react-8063a.firebaseapp.com",
    projectId: "coderhouse-react-8063a",
    storageBucket: "coderhouse-react-8063a.appspot.com",
    messagingSenderId: "673400249703",
    appId: "1:673400249703:web:e89b9bfd73f8db2b3763c2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
