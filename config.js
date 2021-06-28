import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBLGGSb1IBdhYavuzdk5DERwi3fE-346-E",
    authDomain: "project-60-2c480.firebaseapp.com",
    databaseURL: "https://project-60-2c480-default-rtdb.firebaseio.com",
    projectId: "project-60-2c480",
    storageBucket: "project-60-2c480.appspot.com",
    messagingSenderId: "476478179710",
    appId: "1:476478179710:web:eac425ba862d8fbc8d8b2f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.database()