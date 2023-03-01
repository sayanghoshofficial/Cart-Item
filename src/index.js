import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//do import these and remove old firebase imports

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDA4ZaBzYXCO5O_8883gUGq_YQw23WyShQ",
  authDomain: "cart-1a59d.firebaseapp.com",
  projectId: "cart-1a59d",
  storageBucket: "cart-1a59d.appspot.com",
  messagingSenderId: "815455636799",
  appId: "1:815455636799:web:0f2f1fdff844269065578a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); //create instance of firebase access and export it 



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React>
    <App />
  // </React>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);


