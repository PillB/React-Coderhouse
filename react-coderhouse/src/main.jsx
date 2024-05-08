//src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUV1iXNCU2aSaOPlot7jTMEarnNNPxhRc",
  authDomain: "coderhouse-react-8063a.firebaseapp.com",
  projectId: "coderhouse-react-8063a",
  storageBucket: "coderhouse-react-8063a.appspot.com",
  messagingSenderId: "673400249703",
  appId: "1:673400249703:web:e89b9bfd73f8db2b3763c2"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
