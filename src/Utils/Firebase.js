import firebase from 'firebase'


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA0g2SdmUOLhCnFBXeTjqBfSEYT3_gGxvc",
    authDomain: "furniture-bingo-31569.firebaseapp.com",
    projectId: "furniture-bingo-31569",
    storageBucket: "furniture-bingo-31569.appspot.com",
    messagingSenderId: "691376358874",
    appId: "1:691376358874:web:d2bd18921897971c572ce3"
  };


  const app = firebase.apps.length ? firebase.app() : firebase.initializeApp(firebaseConfig);

  const auth = app.auth();
  
  export { auth }