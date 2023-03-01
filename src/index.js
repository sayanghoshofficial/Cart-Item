import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from "./serviceWorker";
import firebase from "firebase/app";
import "firebase/firestore";
//do import these and remove old firebase imports



const firebaseConfig = {
  apiKey: "AIzaSyDA4ZaBzYXCO5O_8883gUGq_YQw23WyShQ",
  authDomain: "cart-1a59d.firebaseapp.com",
  databaseURL: "https://cart-1a59d.firebaseio.com",
  projectId: "cart-1a59d",
  storageBucket: "cart-1a59d.appspot.com",
  messagingSenderId: "815455636799",
  appId: "1:815455636799:web:0f2f1fdff844269065578a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React>
    <App />
  // </React>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
