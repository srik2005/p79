import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyAqPE6djSzFKH5zokmMmTjBGwQU8cOzO7o",
  authDomain: "bartersys-530cc.firebaseapp.com",
  databaseURL: "https://bartersys-530cc.firebaseio.com",
  projectId: "bartersys-530cc",
  storageBucket: "bartersys-530cc.appspot.com",
  messagingSenderId: "1035617728588",
  appId: "1:1035617728588:web:a53233177968d0dfd99ce9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();