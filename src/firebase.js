import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'; // Import Firebase Authentication if you're using it
import { getFirestore } from 'firebase/firestore'; // Import Firebase Firestore if you're using it

const firebaseConfig = {
    apiKey: "AIzaSyBOt3WpXpjJbWXLJATdsWfF6xIopCHBDfY",
    authDomain: "my-authentication-app-54ef1.firebaseapp.com",
    projectId: "my-authentication-app-54ef1",
    storageBucket: "my-authentication-app-54ef1.appspot.com",
    messagingSenderId: "725994124559",
    appId: "1:725994124559:web:a1f2b5f961a5f964eeba7a"
};

// Initialize Firebase with the configuration
const app = initializeApp(firebaseConfig);

const auth = getAuth(app); // Get Firebase Authentication instance
const firestore = getFirestore(app); // Get Firebase Firestore instance

export { auth, firestore };
