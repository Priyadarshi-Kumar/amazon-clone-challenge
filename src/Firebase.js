import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyC6MrJXl7pSCeikYGtiDMg776Md16QxfhU",
    authDomain: "clone-a08fe.firebaseapp.com",
    databaseURL: "https://clone-a08fe.firebaseio.com",
    projectId: "clone-a08fe",
    storageBucket: "clone-a08fe.appspot.com",
    messagingSenderId: "173571529919",
    appId: "1:173571529919:web:28332d795e82604f5aba0a"
  };

  const firebase1 = firebase.initializeApp(firebaseConfig);

const db = firebase1.firestore();
const auth = firebase1.auth();

export {db, auth};