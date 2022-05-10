import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDtvFYdzdz9X1qkK6YG_BF9enqu5LeDhCU",
    authDomain: "cryptovate-9f205.firebaseapp.com",
    projectId: "cryptovate-9f205",
    storageBucket: "cryptovate-9f205.appspot.com",
    messagingSenderId: "128210487654",
    appId: "1:128210487654:web:6890bb97fdcc735a9220a7",
    measurementId: "G-VLN8KL7Q18"
};

const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app)
