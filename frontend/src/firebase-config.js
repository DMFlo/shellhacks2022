// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.gaoogle.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxVki5PHLysRsNTLAQmWojRgQ7TM-9OKE",
  authDomain: "ucf-shellhacks.firebaseapp.com",
  projectId: "ucf-shellhacks",
  storageBucket: "ucf-shellhacks.appspot.com",
  messagingSenderId: "211270563836",
  appId: "1:211270563836:web:bc8224e4682078c28ee479",
  measurementId: "G-FXR8S160ZV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);