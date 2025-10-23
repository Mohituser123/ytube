// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "ytube-clone-f74bc.firebaseapp.com",
  projectId: "ytube-clone-f74bc",
  storageBucket: "ytube-clone-f74bc.firebasestorage.app",
  messagingSenderId: "978088294555",
  appId: "1:978088294555:web:25a1819ee6199b265cae3e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export {auth,provider}
