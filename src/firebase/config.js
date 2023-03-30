import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtEYic7NAV_vVJo2JZx2c7YghQa07M8WQ",
  authDomain: "miniblog-f8862.firebaseapp.com",
  projectId: "miniblog-f8862",
  storageBucket: "miniblog-f8862.appspot.com",
  messagingSenderId: "560414544283",
  appId: "1:560414544283:web:516313197ba16124f1113e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };