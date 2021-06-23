import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBkDqkkYJxmYX3zCEcmtjKamdCtYOea2JA",
  authDomain: "react-firebase-auhenticate.firebaseapp.com",
  projectId: "react-firebase-auhenticate",
  storageBucket: "react-firebase-auhenticate.appspot.com",
  messagingSenderId: "889692852619",
  appId: "1:889692852619:web:d95f59aee35f9c04595f8e",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
