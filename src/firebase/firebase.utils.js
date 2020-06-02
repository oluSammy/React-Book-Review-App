import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyBX-x8hEX8E6G0KzkT8Y5cZ9ile_X4mYHc",
    authDomain: "book-review-app-6a6fd.firebaseapp.com",
    databaseURL: "https://book-review-app-6a6fd.firebaseio.com",
    projectId: "book-review-app-6a6fd",
    storageBucket: "book-review-app-6a6fd.appspot.com",
    messagingSenderId: "132238895961",
    appId: "1:132238895961:web:d9e16b139ca6c18310ba48",
    measurementId: "G-MR55ZSJXEX"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  export default firebase;