 import firebase from 'firebase';
 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyABBSZZPRytYM0GHr01oljUlM8EIVDrWw8",
    authDomain: "first-heckathone.firebaseapp.com",
    projectId: "first-heckathone",
    storageBucket: "first-heckathone.appspot.com",
    messagingSenderId: "1001497195622",
    appId: "1:1001497195622:web:2321e3fa63f9e2509c29a7",
    measurementId: "G-V4SZ8EBZNX"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();