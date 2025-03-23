// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBpkmIrqF8I58gMK54DRS1MJ6AjPYS5pIU",
    authDomain: "marcoachai.firebaseapp.com",
    projectId: "marcoachai",
    storageBucket: "marcoachai.firebasestorage.app",
    messagingSenderId: "699218028894",
    appId: "1:699218028894:web:46ab68c6d9b3326cfec7cf",
    measurementId: "G-HD9PVFCD87"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);