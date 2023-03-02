import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDA4ZaBzYXCO5O_8883gUGq_YQw23WyShQ",
    authDomain: "cart-1a59d.firebaseapp.com",
    projectId: "cart-1a59d",
    storageBucket: "cart-1a59d.appspot.com",
    messagingSenderId: "815455636799",
    appId: "1:815455636799:web:0f2f1fdff844269065578a"
};

//latest version initiliaze and export db like this below
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();