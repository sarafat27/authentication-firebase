// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDX_5SLSdBoFXavZNhTF5fVa4Kk-w9xNmQ",
    authDomain: "authentication-firebase-b5ccc.firebaseapp.com",
    projectId: "authentication-firebase-b5ccc",
    storageBucket: "authentication-firebase-b5ccc.appspot.com",
    messagingSenderId: "371879448424",
    appId: "1:371879448424:web:1583943693d1e0119bd0dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;