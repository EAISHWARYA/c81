import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCRrIeQgVE4aXtZFTxJjZMtLyDERBJQID4",
  authDomain: "booksanta-5827f.firebaseapp.com",
  databaseURL: "https://booksanta-5827f.firebaseio.com",
  projectId: "booksanta-5827f",
  storageBucket: "booksanta-5827f.appspot.com",
  messagingSenderId: "109480977570",
  appId: "1:109480977570:web:bdc281f98d776535c5e3fb",
  measurementId: "G-HM94ZC8LN3"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
