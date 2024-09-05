// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyDAqEyNR1idS1fJ6f3p6SEJAKAlxvEzaoQ',
	authDomain: 'yanbal-con-stefany.firebaseapp.com',
	projectId: 'yanbal-con-stefany',
	storageBucket: 'yanbal-con-stefany.appspot.com',
	messagingSenderId: '556094272429',
	appId: '1:556094272429:web:d44a8e58aa4ca0e2a9a724',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db =  getFirestore(app);
