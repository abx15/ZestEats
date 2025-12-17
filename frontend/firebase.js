// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "import.meta.env.VITE_FIREBASE_APIKEY",
    authDomain: "zesteats.firebaseapp.com",
    projectId: "zesteats",
    storageBucket: "zesteats.firebasestorage.app",
    messagingSenderId: "441346544154",
    appId: "1:441346544154:web:a1d0a216f5f8ba883f77a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };