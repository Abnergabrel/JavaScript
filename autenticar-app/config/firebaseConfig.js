// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyB2jNawT7uC4qvDf1_wmSh5I03nR1vReGY",
authDomain: "tds2-2025-autenticar. firebaseapp.com",
projectId: "tds2-2025-autenticar",
storageBucket: "tds2-2025-autenticar.firebasestorage.app",
messagingSenderId: "510050860669",
appId: "1:510050860669:web: 051224d9ebda2482e23b14",
measurementId: "G-OVTZLKOOP8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAuth(app);