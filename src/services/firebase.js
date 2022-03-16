// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfDkKa9Ix4ukKJHId8LV2POP_eKf05FQ0",
  authDomain: "retronome-8b877.firebaseapp.com",
  projectId: "retronome-8b877",
  storageBucket: "retronome-8b877.appspot.com",
  messagingSenderId: "544266486941",
  appId: "1:544266486941:web:fef32633229ad11af4c074"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;